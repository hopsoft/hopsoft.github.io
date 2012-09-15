---
title: Relative Paths and the Asset Pipeline
authors: Nathan Hopkins
date: 2012-09-09
published: true
categories:
  - rails
  - software
  - programming
layout: bootstrap
---

{% include breadcrumb.html %}

I often use jQuery plugins (among others) in my applications and prefer to store them in a single directory. Typically saving them in **app/vendor/javascripts/plugin**

<pre>
|-project
  |-app
  |-lib
  |-vendor
    |-assets
      |-javascripts
        |-plugin
      |-stylesheets
</pre>

Sometimes the plugins contain other assets such as stylesheets,
but requiring stylesheets from within the javascript directory
can be a pain in the ass unless you know what you're doing.

Simply add a require statement to the stylesheet manifest that looks like this.

`*= require ../../../vendor/assets/plugin/plugin.css`

*Note: You must back out to the root of the project.
Its not enough to back out to the assets directory... even though it seems a bit more intuitive.*

## Alternate Solution

A better solution might simply be to move the plugin's folder directly under assets.

<pre>
|-project
  |-app
  |-lib
  |-vendor
    |-assets
      |-javascripts
      |-plugin
      |-stylesheets
</pre>

Then you can require the plugin's files just as you would anything else.
Just be sure to watch out for naming collisions as your project grows.

<div class="row">
  <div class="span12">
    <br />
    <p>
      {% include disqus.html %}
    </p>
  </div>
</div>
