---
title: MonitorMixin is your friend
authors: Nathan Hopkins
date: 2012-12-05
published: true
categories:
  - ruby
  - threading
  - software
  - programming
layout: bootstrap
---

{% include breadcrumb.html %}

There are some good reasons to use MonitorMixin instead of the plain old
Mutex when writing multi-threaded code in Ruby. Namely to avoid deadlocks.

Consider this example.

{% highlight ruby %}
# example.rb
require "thread"

class Example
  def initialize
    @mutex = Mutex.new
  end

  def work
    @mutex.synchronize do
      puts "sync in work"
      yield
    end
  end

  def start_work
    work do
      @mutex.synchronize do
        puts "sync in start_work block"
      end
    end
  end
end

Example.new.start_work
{% endhighlight %}

Af first glance you might not see it, but this will cause a deadlock
because the block passed to work from start_work attempts to obtain a 
lock that it can never get. This is because work already has a lock in
place.

Lets run it just to be sure.

{% highlight bash %}
$ ruby ./example.rb
sync in work
<internal:prelude>:8:in `lock': deadlock; recursive locking (ThreadError)
	from <internal:prelude>:8:in `synchronize'
	from ./example.rb:18:in `block in start_work'
	from ./example.rb:12:in `block in work'
	from <internal:prelude>:10:in `synchronize'
	from ./example.rb:10:in `work'
	from ./example.rb:17:in `start_work'
	from ./example.rb:25:in `<main>'
{% endhighlight %}

Sure enough, we have a deadlock on our hands. These types of bugs can be dificult to track down. 

A solution for this problem is to use MonitorMixin because MonitorMixin is
intelligent enough to know that a lock has already been obtained.

Lets refactor our example to use MonitorMixin.

{% highlight ruby %}
# example.rb
require "monitor"

class Example
  include MonitorMixin

  def work
    synchronize do
      puts "sync in work"
      yield
    end
  end

  def start_work
    work do
      synchronize do
        puts "sync in start_work block"
      end
    end
  end
end

Example.new.start_work
{% endhighlight %}

Now lets run it.

{% highlight bash %}
$ ruby ./example.rb
sync in work
sync in start_work block
{% endhighlight %}

No deadlocks this time. The moral here is to use MonitorMixin for all
but the simplest of use cases... and even then, you should consider
using it.

<div class="row">
  <div class="span12">
    <br />
    <p>
      {% include disqus.html %}
    </p>
  </div>
</div>
