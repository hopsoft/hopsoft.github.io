---
title: Ruby Metaprogramming Idioms
authors: Nathan Hopkins
date: 2011-01-13
published: true
categories:
  - ruby
  - metaprogramming
layout: post
---


<img src="http://shared2.pragprog.com/images/covers/190x228/ppmetr.jpg" class="thumbnail pull-left" style="margin: 20px 20px 20px 0">
<p>
  I recently finished the book <a href="http://pragprog.com/titles/ppmetr/metaprogramming-ruby">Metaprogramming Ruby</a> by <a href="http://forums.pragprog.com/users/21653">Paolo Perrotta</a> and found it very informative.  Paolo introduces several metaprogramming techniques which he referes to as &quot;spells&quot;.  I've used many of the techniques before, but was never really aware of their "formal" names.
</p>
<p>
  The idioms defined in the book are so helpful that I created a reference based on them for my own use.
  Hopefully it helps others out too.
</p>

<hr style="clear:both" />

## Open Classes
In Ruby all classes are open, meaning that you can define new functionality for the class after the class has already been defined.
{% highlight ruby %}

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


## Monkeypatch
Monkeypatching is a somewhat negative term that refers to the ability to re-open a class and re-define its existing functionality.  While some frown on this practice, it can be a powerful tool in your metaprogramming toolbelt.  Be sure to use caution when monkeypatching.
{% highlight ruby %}

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
{% highlight ruby %}

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


## Kernel Method
Defining methods in the Kernel module will make those methods available to all objects.
{% highlight ruby %}

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
{% highlight ruby %}

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


## Pattern Dispatch
Similar to [Dynamic Dispatch](#dynamic_dispatch), but uses a convention or pattern to identify which methods to call.
{% highlight ruby %}

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
Ruby supports defining methods at runtime even if you don't know what those methods are at design time.
{% highlight ruby %}

# setup some data that will drive what methods get defined
$method_names = [:hello, :goodbye]

# define our example class
class Example
  # define some dynamic methods
  $method_names.each do |method_name|
    define_method(method_name) do |name|
      puts "#{method_name} #{name}!"
    end
  end
end

# test out our dynamic methods
Example.new.respond_to? :hello # => true
Example.new.respond_to? :goodbye # => true
Example.new.hello("nathan") # => hello nathan!
Example.new.goodbye("nathan") # => hello nathan!

{% endhighlight %}


## Ghost Method
Ruby provides a mechanism that allows you to catch calls to methods that don't even exist.  Its possible to leverage this feature to support functionality that hasn't been defined.
{% highlight ruby %}

# define our example class
class Example
  # catch all calls to methods that don't exist
  def method_missing(method_name, *args)
    puts "You called '#{method_name}' with these arguments: #{args.inspect}"
  end
end

# invoke methods that haven't been defined
Example.new.some_method # => You called 'some_method' with these arguments: []
Example.new.another_method(1, 2, 3) # => You called 'another_method' with these arguments: [1, 2, 3]
Example.new.this_is_cool(true) # => You called 'this_is_cool' with these arguments: [true]
Example.new.and_powerful # => You called 'and_powerful' with these arguments: []

{% endhighlight %}


## Dynamic Proxy
Wrapping an object or service and then forwarding method calls to the wrapped item is known as dynamic proxying.
{% highlight ruby %}

# define our proxy class
class Proxy
  def initialize(object)
    @object = object
  end

  # forward all calls to the wrapped object
  def method_missing(method_name, *args)
    @object.send(method_name, *args)
  rescue
    puts "#{method_name} is not supported by the wrapped object!"
  end
end

# usage
Proxy.new("this is a string").length # => 16
Proxy.new([1, 2, 3]).length # => 3
Proxy.new({:a => 1, :b => 2}).length # => 2
Proxy.new(true).length # => length is not supported by the wrapped object!

{% endhighlight %}


## Blank Slate
Ruby allows you to remove functionality from a class.  This technique can be useful to ensure that your class doesn't expose unwanted or unexpected features.
{% highlight ruby %}

# demonstrate how to remove functionality
String.class_eval do
  undef_method :length
end
"test".length # => NoMethodError: undefined method `length' for "test":String

# create a blank slate class
class BlankSlate
  public_instance_methods.each do |method_name|
    undef_method(method_name) unless method_name =~ /^__|^(public_methods|method_missing|respond_to\?)$/
  end
end

# see what methods are now available
BlankSlate.new.public_methods # => ["public_methods", "__send__", "respond_to?", "__id__"]

{% endhighlight %}


## Scope Gate
There are three ways to define a new scope in Ruby.  A new scope is created whenever you define a class, module, or method.

Be aware that scoping in Ruby is different than some other languages.  Ruby does not chain scopes when performing lookups, so don't expect it to find variables defined in an outer scope.
{% highlight ruby %}

# demonstrate scoping in ruby
scope = "main scope"
puts(scope) # => main scope

class ExampleClass
  # the main scoped variable isn't defined in the classes' scope
  defined?(scope) # => nil
  scope = "class scope"
  puts(scope) # => class scope
end

# the main scoped variable is unchanged by the classes' scoped variable
puts(scope) # => global scope

module ExampleModule
  # the main scoped variable isn't defined in the module's scope
  defined?(scope) # => nil
  scope = "module scope"
  puts(scope) # => module scope
end

# the main scoped variable is unchanged by the module's scoped variable
puts(scope) # => main scope

def example_method
  # the main scoped variable isn't defined in the method's scope
  defined?(scope) # => nil
  scope = "method scope"
  puts(scope)
end

example_method # => method scope

# the main scoped variable is unchanged by the method's scoped variable
puts(scope) # => global scope

{% endhighlight %}


## Flat Scope
Flatten the scope to gain access to variables that are otherwise unaccessible.
{% highlight ruby %}

# define a variable in the main scope
value = "sort of"

class Example
  attr_reader :read_only

  def initialize
    @read_only = true
    # the main scoped variable is not defined in this scope gate
    defined?(value) # => nil
  end
end

Example.new.read_only # => true

# flatten the scope with a closure (block) to share variables between scopes
# note that we are also violating encapsulation here
example.instance_eval do
  @read_only = value
end

example.read_only # => sort of

{% endhighlight %}


## Shared Scope
Create a [Scope Gate](#scope_gate) to share variables across several contexts.
{% highlight ruby %}

# create a shared scope
shared_scope = Proc.new do
  # define a variable to share
  shared = "a shared variable"

  # use closures (blocks) to ensure access to the variable
  Example = Class.new do
    puts shared # => a shared variable

    # set a reference to the eigenclass so we can later define a class method
    # while retaining access to the shared variable
    eigenclass = class << self
      # this is a scope gate without access to the shared variable
      self
    end

    # use the eigenclass to define a class method
    # with access to the shared variable
    eigenclass.class_eval do
      define_method :class_method do
        shared
      end
    end

    # define an instance method with access to the shared variable
    define_method :instance_method do
      shared
    end
  end
end

# call the shared scope proc to execute its code
shared_scope.call

# the scoped variable 'shared' is not available to the main scope
defined?(shared) # => nil

# demonstrate the methods
Example.class_method # => a shared variable
Example.new.instance_method # => a shared variable

{% endhighlight %}


## Context Probe
Ruby allows you to break the rules of encapsulation and reach into the internals of an object.
{% highlight ruby %}

# define a sample class that we can probe
class Example
  def initialize
    @private = "this is a private instance variable"
  end
end

# send a context probe into an instance of the Example class
Example.new.instance_eval { puts @private } # => "this is a private instance variable"

{% endhighlight %}


## Clean Room
A class or object used for the express purpose of evaluating Ruby inside of its context is called a clean room.
Clean rooms are used to change the current context to something expected or clean which can help to avoid surprises.
{% highlight ruby %}

def do_stuff
  @scope
end

@scope = "outer scope"
puts do_stuff # => outer scope

# illustrate how to use a simple clean room
Object.new.instance_eval do
  @scope = "clean room scope"
  puts do_stuff # => clean room scope
end

{% endhighlight %}


## Deferred Evaluation
{% highlight ruby %}
{% endhighlight %}


## Class Instance Variable
{% highlight ruby %}
{% endhighlight %}


## Singleton Method
{% highlight ruby %}
{% endhighlight %}


## Class Macro
{% highlight ruby %}
{% endhighlight %}


## Class Extension
{% highlight ruby %}
{% endhighlight %}


## Object Extension
{% highlight ruby %}
{% endhighlight %}


## Around Alias
{% highlight ruby %}
{% endhighlight %}


## String of Code
{% highlight ruby %}
{% endhighlight %}


## Code Processor
{% highlight ruby %}
{% endhighlight %}


## Sandbox
{% highlight ruby %}
{% endhighlight %}


## Hook Method
{% highlight ruby %}
{% endhighlight %}


## Class Extension Mixin
{% highlight ruby %}
{% endhighlight %}


## Mimic Method
{% highlight ruby %}
{% endhighlight %}


## Lazy Instance Variable
{% highlight ruby %}
{% endhighlight %}


## Named Arguments
{% highlight ruby %}
{% endhighlight %}


## Argument Array
{% highlight ruby %}
{% endhighlight %}


## Self Yield
{% highlight ruby %}
{% endhighlight %}


## Symbol to Proc
{% highlight ruby %}
{% endhighlight %}

{% include disqus.html %}
