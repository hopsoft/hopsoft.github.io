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

I often use jQuery plugins (among others) in my applications and prefer to store them in a single directory. Typically saving them in **app/vendor/javascripts/plugin_name**

Sometimes the plugins contain other assets such as stylesheets,
but requiring stylesheets from within the javascript directory
can be a pain in the ass unless you know what you're doing.

The pipeline assumes a context of one of the following directories when attempting to locate a stylesheet.

* **app/assets/stylesheets**
* **lib/assets/stylesheets**
* **vendor/assets/stylesheets**

My problem was that the stylesheet in question lived in **app/vendor/assets/javascripts/plugin_name**

The pipeline can deal with this scenario; however,
you need to provide a path that starts at the root of the project.

Here's how to do it. Add a require statement to the stylesheet manifest that looks something like this.

`*= require ../../../vendor/assets/plugin_name/plugin.css`

*Note: You must back up to the root of the project.
Its not enough to back up to the assets directory even though it seems a bit more intuitive.*






<div class="row">
  <div class="span12">
    <br />
    <p>
      {% include disqus.html %}
    </p>
  </div>
</div>
