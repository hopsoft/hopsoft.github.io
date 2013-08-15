---
title: Don&#39;t Rely on Github to Build Jekyll
authors: Nathan Hopkins
date: 2013-08-15
published: true
categories:
  - ruby
  - software
  - programming
layout: post
---

Apparently my local Jekyll configuration has drifted from Github's.
Yesterday my Jekyll based Github Pages site would no longer build on Github...
even though things worked fine locally.

I decided to change the repo to support local compilation and publishing.
No more depending on Github to do it for me.

### Here's how I did it.

First, prepare the repo.

{% highlight bash %}
git checkout -b source master
git push -u origin source
git checkout master
rm -rf ./*
git add -A
git commit -m "Preparing for self build & publish."
git push origin master
git checkout source
{% endhighlight %}

Next, add this bash script to the root of the project.

{% highlight bash %}
#!/usr/bin/env bash

jekyll build

if [ $? -ne 0 ]; then
  echo "Jekyll build failed!"
  exit 1
fi

mkdir /tmp/jekyll
rm -rf /tmp/jekyll/*
cp -R ./_site/* /tmp/jekyll
git checkout master

if [ $? -ne 0 ]; then
  echo "Unable to checkout master! Do you have uncommited changes?"
  rm -rf /tmp/jekyll
  exit 1
fi

rm -rf ./*
cp -R /tmp/jekyll/* ./
git add -A .
git commit -m "Site published on $(date)"
git push origin master
git checkout source
git push origin source
git clean -f -d
rm -rf /tmp/jekyll
echo "Site published successfully."
{% endhighlight %}

Finally, start publishing.

{% highlight bash %}
git checkout source
./publish
{% endhighlight %}

This has the added benefit of providing freedom to use a customized Jekyll setup.

__Enjoy!__
