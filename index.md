---
title: "'It's a trick. Get an axe.'"
layout: wisewords
---

<h2 class="page-header">Blog</h2>
<ul>
  {% for post in site.posts limit:5 %}
  <li>
    <a href="{{post.url}}">{{post.title}}</a>
    <p>{{ post.excerpt }}</p>
  </li>
  {% endfor %}
</ul>

<div style="clear:both"></div>
<br />

<h2 class="page-header">Open Source</h2>
<ul>
  <li>
    <a href="https://github.com/hopsoft/micro_test">MicroTest</a>
    - ruby's no-nonsense testing framework
  </li>
  <li>
    <a href="https://github.com/hopsoft/micro_mock">MicroMock</a>
    - a tiny mocking framework
  </li>
  <li>
    <a href="https://github.com/hopsoft/legion/">Legion</a>
    - concurrent processing made easy
  </li>
  <li>
    <a href="https://github.com/hopsoft/hero/">Hero</a>
    - simplify complex apps with process modeling
  </li>
  <li>
    <a href="https://github.com/hopsoft/coast/">Coast</a>
    - rest for rails controllers
  </li>
  <li>
    <a href="https://github.com/hopsoft/goldmine/">Goldmine</a>
    - pivot tables for the rubyist
  </li>
  <li>
    <a href="https://github.com/hopsoft/coin">Coin</a>
    - an absurdly simple in memory object caching system
  </li>
  <li>
    <a href="https://github.com/hopsoft/coin_rack">CoinRack</a>
    - a simple rack app that provides a rest interface to coin
  </li>
  <li>
    <a href="https://github.com/hopsoft/grumpy_old_man">Grumpy Old Man</a>
    - asserts for rspec
  </li>
  <li>
    <a href="https://github.com/hopsoft/model_probe/">ModelProbe</a>
    - introspect the schema behind your models at runtime
  </li>
  <li>
    <a href="https://github.com/hopsoft/footing/">Footing</a>
    - utility lib with sane monkey patching
  </li>
  <li>
    <a href="https://github.com/hopsoft/grand">Grand</a>
    - mysql data archiver
  </li>
</ul>

<h2 class="page-header">Sites</h2>
<ul>
  <li>
    <a href="http://www.citydiff.com">CityDiff</a>
    - compare your favorite cities
  </li>
</ul>

<h2 class="page-header">Tools &amp; Misc</h2>
<ul>
  <li>
    <a href="https://github.com/hopsoft/rails_standards">Rails Standards Guide</a>
    - standards guide for creating rails apps
  </li>
  <li>
    <a href="http://hopsoft.github.com/vim.html">VIM</a>
    - vim reference &amp; cheat sheet
  </li>
</ul>

