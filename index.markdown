---
title: Hopsoft LLC
layout: bootstrap
---

<div class="row">
  <div class="span7">
    <h1>Making stuff for profit &amp; fun</h1><br />
    <p>
      <ul class="thumbnails">
        <li>
          <div class="thumbnail">
            <img src="http://www.gravatar.com/avatar/254ec240c9143768df8ec27182764cad.jpg?s=100" />
            <div class="caption">
              <h5>Nathan<br />Hopkins</h5>
            </div>
          </div>
        </li>
      </ul>
    </p>

    <h2>Websites</h2><br />
    <ul>
      <li>
        <a href="http://www.citydiff.com">CityDiff</a>
        - compare your favorite cities
      </li>
    </ul>

    <h2>Open Source Projects</h2><br />
    <ul>
      <li>
        <a href="https://github.com/hopsoft/coast">Coast</a> 
        - resourceful behavior for rails controllers
      </li>
      <li>
        <a href="https://github.com/hopsoft/goldmine">Goldmine</a>
        - pivot tables for the rubyist
      </li>
      <li>
        <a href="https://github.com/hopsoft/footing">Footing</a>
        - utility lib with sane monkey patching
      </li>
      <li>
        <a href="https://github.com/hopsoft/grand">Grand</a>
        - mysql data archiver
      </li>
    </ul>
  </div>

  <div class="well span4">
    <h3>Blog Posts</h3><br />
    <ul>
      {% for post in site.posts limit:5 %}
      <li><a href="{{post.url}}">{{post.title}}</a></li>
      {% endfor %}
    </ul>
  </div>

  <div class="well span4">
    <h3>Cool Stuff</h3><br />
    <ul>
      <li>
        <a href="http://hopsoft.github.com/vim.html">VIM</a>
        - vim reference &amp; cheat sheet
      </li>
    </ul>
  </div>
</div>
