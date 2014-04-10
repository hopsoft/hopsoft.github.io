---
title: Arnold Params
authors: Nathan Hopkins
date: 2014-04-09
published: true
categories:
  - ruby
  - rails
  - programming
layout: post
---

We've been using [FieldMapper](https://github.com/hopsoft/field_mapper)
with [ActiveModel::Validations](http://edgeguides.rubyonrails.org/active_record_validations.html)
for robust param validation in our Rack/Rails apps with great results.
Sometimes you've gotta reach for the big guns.

![Arnold](/public/images/arnold.jpg)

## When Strong Params Aren't Strong Enough

Though the [FieldMapper](https://github.com/hopsoft/field_mapper) gem
is capable of doing a lot more, we've been getting mileage
out of it for param validation.

*__Warning__: This doesn't pass [DHH's bullshit meter](http://david.heinemeierhansson.com/2012/the-parley-letter.html) for the typical case.*
*Only reach for a solution like this when you need to [go to 11](http://youtu.be/4xgx4k83zzc).*
*Stick with [strong params](http://guides.rubyonrails.org/action_controller_overview.html#strong-parameters) for [lightweight](http://youtu.be/HHZhw94C5vQ) use cases.*

### Benefits

- Simplifies your controllers
- Isolates concerns
- Handles complex use cases

### Scenario

An API endpoint that accepts params for the following objects:

{% highlight sh %}
Star
- name   # String        2..30 chars *required
- movies # Array<Movie>
- lines  # Array<String> 4 or less (2..100 chars per line)

Movies
- name  # String 2..50 chars *required
- gross # Money
{% endhighlight %}

### Solution

__1\.__ Require dependencies

{% highlight ruby %}
require "field_mapper"
require "active_model"
{% endhighlight %}

__2\.__ Define a plat for MovieParams

Plat definitions are admittedly the ugliest bit.
In an actual project you'd have these tucked away in `lib` or `app/plats`...
so not too terrible in practice.

{% highlight ruby %}
class MovieParams < FieldMapper::Standard::Plat
  include ActiveModel::Validations

  # declare fields
  field :name,  type: String
  field :gross, type: Money, default: "$0.00 USD"

  # declare validators after fields
  validates :name,
    presence: true,
    length: { allow_blank: true, minimum: 2, maximum: 50 }
end
{% endhighlight %}

__3\.__ Define a plat for StarParams

{% highlight ruby %}
class StarParams < FieldMapper::Standard::Plat
  include ActiveModel::Validations

  # declare fields
  field :name,   type: String
  field :movies, type: FieldMapper::Types::List[MovieParams], default: []
  field :lines,  type: FieldMapper::Types::List[String],      default: []

  def line(minmax)
    lines.public_send(minmax) do |a, b|
      a.to_s.length <=> b.to_s.length
    end
  end

  # declare validators after fields
  validates :name,
    presence: true,
    length: { allow_blank: true, minimum: 2, maximum: 30 }

  validates :lines, length: { maximum: 4, message: "too many (maximum is 4)" }

  validate do |params|
    if params.line(:min).to_s.length < 2
      params.errors[:lines] << "are too short (min is 2 characters)"
    end
  end

  validate do |params|
    if params.line(:max).to_s.length > 100
      params.errors[:lines] << "are too long (max is 100 characters)"
    end
  end

  validate do |params|
    params.movies.each do |movie|
      if !movie.valid?
        params.errors[:movies].concat movie.errors.full_messages
      end
    end
  end
end
{% endhighlight %}

__4\.__ Define some query string params

This part isn't strictly necessary since your framework does all of this for you.
I just wanted to show something that will run in the console.

{% highlight ruby %}
require "rack"
require "active_support/all"

readable_params = {
  star: {
    name: "Arnold",
    movies: [{ name: "The Terminator", gross: "$38,371,200 USD" }],
    lines: ["I'll be back."]
  }
}

query = readable_params.to_query # => star[lines][]=I'll be back.&star[movies][][gross]=$38,371,200 USD&star[movies][][name]=The Terminator&star[name]=Arnold
params = Rack::Utils.parse_nested_query(query)
{% endhighlight %}

__5\.__ Validate params in your controller

Controllers clean up nicely because plats are doing all of the param wrangling.

{% highlight ruby %}
class SomeController < ApplicationController
  before_action :validate_params, only: [:some_action]

  def some_action
    # logic here...
  end

  protected

  def validate_params
    plat = StarParams.new(params["star"])
    render json: { errors: plat.errors.full_messages } unless plat.valid?
  end
end
{% endhighlight %}

__6\.__ How about more complex params

{% highlight ruby %}
readable_params = {
  star: {
    name: "Arnold",
    movies: [
      { name: "The Terminator", gross: "$38,371,200 USD" },
      { name: "Predator",       gross: "$59,735,548 USD" },
      { name: "Total Recall",   gross: "$119,412,921 USD" },
      { name: "True Lies",      gross: "$146,282,411 USD" },
      { name: "Terminator 2",   gross: "$204,843,345 USD" },
    ],
    lines: [
      "I'll be back.",
      "I Lied.",
      "Hasta la vista, baby.",
      "Get to the chopper!",
    ]
  }
}

query = readable_params.to_query # => star[lines][]=I'll be back.&star[lines][]=I Lied.&star[lines][]=Hasta la vista, baby.&star[lines][]=Get to the chopper!&star[movies][][gross]=$38,371,200 USD&star[movies][][name]=The Terminator&star[movies][][gross]=$59,735,548 USD&star[movies][][name]=Predator&star[movies][][gross]=$119,412,921 USD&star[movies][][name]=Total Recall&star[movies][][gross]=$146,282,411 USD&star[movies][][name]=True Lies&star[movies][][gross]=$204,843,345 USD&star[movies][][name]=Terminator 2&star[name]=Arnold
params = Rack::Utils.parse_nested_query(query)
plat = StarParams.new(params["star"])
plat.valid? # => true
{% endhighlight %}

__7\.__ Let's pump in lots of invalid data

{% highlight ruby %}
readable_params = {
  star: {
    name: "A",
    movies: [
      { name: "The Terminator", gross: "$38,371,200 USD" },
      { gross: "$59,735,548 USD" },
      { name: "Total Recall",   gross: "$119,412,921 USD" },
      { name: "True Lies",      gross: "$146,282,411 USD" },
      { name: "Terminator 2",   gross: "$204,843,345 USD" },
    ],
    lines: [
      "I",
      "I Lied.",
      "Hasta la vista, baby.",
      "Get to the chopper!",
      "First I'm gonna use you as a human shield, then I gonna take that chisel and kill the guard with it. Then I was thinking about breaking your neck."
    ]
  }
}

query = readable_params.to_query
params = Rack::Utils.parse_nested_query(query)
plat = StarParams.new(params["star"])
plat.valid? # => false
plat.errors.full_messages # => ["Name is too short (minimum is 2 characters)", "Lines too many (maximum is 4)", "Lines are too short (min is 2 characters)", "Lines are too long (max is 100 characters)", "Movies Name can't be blank"]
{% endhighlight %}

__FieldMapper__ is doing some heavy lifting for us.
We're also leveraging __ActiveRecord::Validations__ quite a bit.
Let's see strong parameters do that.

![Bro... Do you even lift?](/public/images/arnold2.jpg)

*__Note__: You could likely do something similar with [tabeless models](http://yehudakatz.com/2010/01/10/activemodel-make-any-ruby-object-feel-like-activerecord/).*
