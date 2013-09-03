---
title: Understanding Pointers
authors: Nathan Hopkins
date: 2013-08-30
published: true
categories:
  - software
  - programming
layout: post
---

Pointers are perhaps the least approachable subject related to software development.
I posit that it's due to poor examples written by advanced engineers
who've forgotten what it's like for devs with less understanding.
Here's my stab at explaining them.

## Exotic Cars & Timeshares

![Lamborghini](/public/images/lamborghini.jpg)

Consider the following scenario.

Quinton is a member of Gotham Dream Cars' [Dream Share](http://www.gothamdreamcars.com/dreamshare-club) program.
He "owns" a [Lamborghini LP640 Roadster](http://www.gothamdreamcars.com/exotic-car-rental/san-francisco/lamborghini-lp640-roadster)...
_at least part of one._
Angelina is also a member and "owns" the same Lamborghini LP640 Roadster.
They both "own" several other exotic cars through Dream Share.

All of Quinton's & Angelina's vehicles are kept in individual garages
specifically tailored for storing exotic cars.

## Expressing it with Code... specifically [Golang](http://golang.org/)

First we'll make some statements about our exotic car scenario in English.
Then we'll then express the same statements using with Go.

> A blueprint exists for building exotic cars.

{% highlight go %}
type Car struct {
  name string
  driver string
  miles int
}
{% endhighlight %}

>  A brand new Lamborghini has been constructed.

{% highlight go %}
lamborghini := Car{name: "Lamborghini", miles: 0} // => {Lamborghini  0}
{% endhighlight %}

> We've discovered which garage the Lamborghini is stored in.

{% highlight go %}
address := &lamborghini // => 0x2101aa180
{% endhighlight %}

> The ability to drive & park exists.

{% highlight go %}
// accepts a pointer (or address) to a Car
func drive(car *Car, driver string, miles int) {
  car.driver = driver
  car.miles += miles
}

// accepts a pointer (or address) to a Car
func park(car *Car) {
  car.driver = ""
}
{% endhighlight %}

> Quinton can drive "his" Lamborghini 100 miles then park it.

{% highlight go %}
drive(&lamborghini, "Quinton", 100) // => {Lamborghini Quinton 100}
park(&lamborghini) // => {Lamborghini  100}
{% endhighlight %}

> Angelina can drive "her" Lamborghini 100 miles then park it.

{% highlight go %}
drive(&lamborghini, "Angelina", 100) // => {Lamborghini Angelina 200}
park(&lamborghini) // => {Lamborghini  200}
{% endhighlight %}

> Dream Share can replace the Lamborghini with a new one.

{% highlight go %}
*address = Car{name: "Lamborghini", miles: 0} // => {Lamborghini  0}
fmt.Println(lamborghini) // => {Lamborghini  0}
{% endhighlight %}

## Wait... What?

If you didn't quite grok the example above, perhaps a visualization will help.

![Pointers](/public/images/pointers.png)

When working with a variable we can directly manipulate the value.

Methods are different.
They receive a copy of the value unless they are defined to accept a pointer _(or address)_ to the original value.

The __drive__ & __park__ methods above both accept a pointer.
This allows them to manipulate the original __lamborghini__ value.

Also note that it's possible to simply replace the value _(change the memory used to hold the value)_
at a particular address as we did in the last example.

---

I'm not convinced my attempt to explain pointers improves
on the existing docs, but hopefully it helps.

