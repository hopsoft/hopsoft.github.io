---
layout: base
title: Ruby Metaprogramming Idioms
published: true
categories: 
  - ruby
  - metaprogramming
---

I recently finished the book [Metaprogramming Ruby](http://pragprog.com/titles/ppmetr/metaprogramming-ruby) by [Paolo Perrotta](http://forums.pragprog.com/users/21653) and found it very informative.  Paolo introduces several metaprogramming techniques which he referes to as &quot;spells&quot; in the book.  I've used most of the techniques he describes, but have never been fully aware of their formal names.

The idioms defined in the book are so helpful as a reference, I wanted to create a lexicon based on them for my own personal use.

Perhaps you will find it useful too.

{% include section_divider.html %}
<a name="open_classes"></a>
## Open Classes
In Ruby all classes are open, meaning that you can define new functionality for the class after the class has already been defined.
{% highlight ruby linenos %}
# define original class
class Example
  def say_hello
    puts "hello"
  end
end

# re-open the class
class Example
  # add new functionality
  def do_stuff
    puts "doing stuff"
  end
end

# usage
Example.new.say_hello # => hello
Example.new.do_stuff # => doing stuff

# other ways to reopen the class

# open the instance of the class definition
Example.instance_eval do
end

# open the eigenclass
# you need to understand Ruby's object model
# to fully understand what the eigenclass is
class << Example
end

# syntactic sugar for class << Example
Example.class_eval do
end
{% endhighlight %}
[Discuss this code](https://gist.github.com/774061)

{% include section_divider.html %}
<a name="monkeypatch"></a>
## Monkeypatch
Monkeypatching is a somewhat negative term that refers to the ability to re-open a class and re-define its existing functionality.  While some frown on this practice, it can be a powerful tool in your metaprogramming toolbelt.  Be sure to use caution when monkeypatching.
{% highlight ruby linenos %}
# define original class
class Example
  def say_hello
    puts "hello"
  end
end

# re-open the class and monkeypatch some of its existing functionality
class Example
  # re-define existing funnctionality
  def say_hello
    puts "hello from monkeypatch"
  end
end

# usage
Example.new.say_hello # => hello from monkeypatch
{% endhighlight %}


## Namespace
Use Ruby modules to create namespaces to avoid naming collisions.
{% highlight ruby linenos %}
# create a namespace to avoid naming collisions
module Example
  class String
    def length
      100
    end
  end
end

# usage
String.new.length # => 0
Example::String.new.length # => 100 
{% endhighlight %}


{% include section_divider.html %}
<a name="kernel_method"></a>
## Kernel Method
Defining methods in the Kernel module will make those methods available to all objects.
{% highlight ruby linenos %}
# add a kernel method to make it available to all objects
# this example also serves to illustrate that everything in Ruby is an object
module Kernel
  def say_hello
    puts "hello from #{self.class.name}"
  end
end

# usage
Class.say_hello # => hello from Class
Object.say_hello # => hello from Class
Object.new.say_hello # => hello from Object
1.say_hello # => hello from Fixnum
"".say_hello # => hello from String
{% endhighlight %}

## Dynamic Dispatch
Ruby supports calling methods at runtime even if you don't know what those methods are at design time.
{% highlight ruby linenos %}
# add methods that provide the ability
# to dynamically call unknown methods on objects
def invoke(object, method_name)
  object.send(method_name)
end

def invoke_with_args(object, method_name, *args)
  object.send(method_name, *args)
end

# usage
invoke("get my length", :length) # => 13
invoke("reverse me", :reverse) # => em esrever
invoke_with_args("remove all letter e's", :delete, "e") # => rmov all lttr 's
{% endhighlight %}

{% include section_divider.html %}
<a name="pattern_dispatch"></a>
## Pattern Dispatch
Similar to Dynamic Dispatch, but uses a convention or pattern to identify which methods to call.
{% highlight ruby linenos %} 
# setup a contrived class to demonstrate pattern dispatch
class Person
  attr_accessor :first_name
  attr_accessor :last_name
  attr_accessor :pets_name
  attr_accessor :mothers_maiden_name

  def drag_queen_name
    "#{pets_name} #{mothers_maiden_name}"
  end
end

# construct an instance of the class
person = Person.new
person.first_name = "john"
person.last_name = "doe"
person.pets_name = "muffin"
person.mothers_maiden_name = "brown"

# use pattern dispatch to invoke all 'name' methods
person.public_methods.each do |method_name|
  puts "#{method_name} = #{person.send(method_name)}" if method_name =~ /_name$/
end

# -- output --
# first_name = john
# last_name = doe
# pets_name = muffin
# mothers_maiden_name = brown
# drag_queen_name = muffin brown
{% endhighlight %}


## Dynamic Method
{% highlight ruby linenos %} 
{% endhighlight %}	


## Ghost Method
{% highlight ruby linenos %} 
{% endhighlight %}

## Dynamic Proxy
{% highlight ruby linenos %} 
{% endhighlight %}

## Blank Slate
{% highlight ruby linenos %} 
{% endhighlight %}

## Scope Gate
{% highlight ruby linenos %} 
{% endhighlight %}

## Flat Scope
{% highlight ruby linenos %} 
{% endhighlight %}

## Shared Scope
{% highlight ruby linenos %} 
{% endhighlight %}

## Context Probe
{% highlight ruby linenos %} 
{% endhighlight %}

## Clean Room
{% highlight ruby linenos %} 
{% endhighlight %}

## Deferred Evaluation
{% highlight ruby linenos %} 
{% endhighlight %}

## Class Instance Variable
{% highlight ruby linenos %} 
{% endhighlight %}

## Singleton Method
{% highlight ruby linenos %} 
{% endhighlight %}

## Class Macro
{% highlight ruby linenos %} 
{% endhighlight %}

## Class Extension
{% highlight ruby linenos %} 
{% endhighlight %}

## Object Extension
{% highlight ruby linenos %} 
{% endhighlight %}

## Around Alias
{% highlight ruby linenos %} 
{% endhighlight %}

## String of Code
{% highlight ruby linenos %} 
{% endhighlight %}

## Code Processor
{% highlight ruby linenos %} 
{% endhighlight %}

## Sandbox
{% highlight ruby linenos %} 
{% endhighlight %}

## Hook Method
{% highlight ruby linenos %} 
{% endhighlight %}

## Class Extension Mixin
{% highlight ruby linenos %} 
{% endhighlight %}

## Mimic Method
{% highlight ruby linenos %} 
{% endhighlight %}

## Lazy Instance Variable
{% highlight ruby linenos %} 
{% endhighlight %}

## Named Arguments
{% highlight ruby linenos %} 
{% endhighlight %}

## Argument Array
{% highlight ruby linenos %} 
{% endhighlight %}

## Self Yield
{% highlight ruby linenos %} 
{% endhighlight %}

## Symbol to Proc
{% highlight ruby linenos %} 
{% endhighlight %}

force change