---
title: Hopsoft LLC
layout: bootstrap
---

<div class="row">
  <div class="span3 affix">
    <p>
      <ul class="thumbnails">
        <li>
          <div class="thumbnail">
            <img src="http://www.gravatar.com/avatar/254ec240c9143768df8ec27182764cad.jpg?s=100" />
            <div class="caption">
            </div>
          </div>
        </li>
      </ul>
    </p>
  </div>
  
  <div class="span9 offset3">

    <h2>Blog Posts</h2><br />
    <ul>
      {% for post in site.posts limit:5 %}
      <li><a href="{{post.url}}">{{post.title}}</a></li>
      {% endfor %}
    </ul>

    <h2>Tools</h2><br />
    <ul>
      <li>
        <a href="http://hopsoft.github.com/vim.html">VIM</a>
        - vim reference &amp; cheat sheet
      </li>
    </ul>

    <h2>Open Source</h2><br />
    <ul>
      <li>
        <a href="http://hopsoft.github.com/hero/">Hero</a> 
        - simplify complex apps with process modeling
      </li>
      <li>
        <a href="http://hopsoft.github.com/coast/">Coast</a> 
        - resourceful behavior for rails controllers
      </li>
      <li>
        <a href="http://hopsoft.github.com/goldmine/">Goldmine</a>
        - pivot tables for the rubyist
      </li>
      <li>
        <a href="http://hopsoft.github.com/grumpy_old_man">Grumpy Old Man</a>
        - asserts for RSpec
      </li>
      <li>
        <a href="http://hopsoft.github.com/footing/">Footing</a>
        - utility lib with sane monkey patching
      </li>
      <li>
        <a href="https://github.com/hopsoft/grand">Grand</a>
        - mysql data archiver
      </li>
    </ul>

    <h2>Sites</h2><br />
    <ul>
      <li>
        <a href="http://www.citydiff.com">CityDiff</a>
        - compare your favorite cities
      </li>
    </ul>

    <h2>Social</h2><br />
    <ul>
      <li>
        <a href="https://twitter.com/natehop">Twitter</a>
      </li>
      <li>
        <a href="http://coderwall.com/p/u/hopsoft">Coderwall</a>
      </li>
    </ul>

  </div>

</div>
