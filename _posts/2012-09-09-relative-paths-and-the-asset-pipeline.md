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

```bash
|-project
  |-app
  |-lib
  |-vendor
    |-assets
      |-javascripts
        |-plugin
      |-stylesheets
```

Sometimes the plugins contain other assets such as stylesheets,
but requiring stylesheets from within the javascript directory
can be a pain in the ass unless you know what you're doing.

The pipeline assumes a context of one of the following directories when attempting to locate a stylesheet.

* **app/assets/stylesheets**
* **lib/assets/stylesheets**
* **vendor/assets/stylesheets**

My problem was that the stylesheet in question lived in **app/vendor/assets/javascripts/plugin**

The pipeline can deal with this scenario, but you must provide a path that starts at the root of the project.

Here's how to do it. Add a require statement to the stylesheet manifest that looks like this.

`*= require ../../../vendor/assets/plugin/plugin.css`

*Note: You must back up to the root of the project.
Its not enough to back up to the assets directory even though it seems a bit more intuitive.*

---

## Alternate Solution

A better solution might simply be to move the plugin's folder directly under assets.

```bash
|-project
  |-app
  |-lib
  |-vendor
    |-assets
      |-javascripts
      |-plugin
      |-stylesheets
```

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
