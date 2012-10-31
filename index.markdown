---
title: Hopsoft
layout: bootstrap
---

<div class="row">
  <div id="intro" class="span3 well affix">
    <img class="thumbnail left" src="http://www.gravatar.com/avatar/254ec240c9143768df8ec27182764cad.jpg?s=90" />
    <p><b>Nathan Hopkins</b></p>
    <ul class="unstyled">
      <li><i class="icon-github">&nbsp;</i> <a href="https://github.com/hopsoft">Github</a></li>
      <li><i class="icon-twitter">&nbsp;</i> <a href="https://twitter.com/natehop">Twitter</a></li>
      <li><i class="icon-google-plus">&nbsp;</i> <a href="https://plus.google.com/u/1/116314478889360641913/posts/p/pub">Google+</a></li>
      <li><i class="icon-linkedin">&nbsp;</i> <a href="https://www.linkedin.com/profile/view?id=2951631">LinkedIn</a></li>
      <!-- <li><i class="icon-sign-blank">&nbsp;</i> <a href="http://coderwall.com/p/u/hopsoft">Coderwall</a></li> -->
    </ul>
    <hr />
    <p>
      I enjoy making stuff and am happily employed at <a href="http://www.1on1.com/">One on One</a>.
    </p>
  </div>

  <div class="span8 offset4">

    <h2 class="page-header">Blog</h2><br />
    <ul>
      {% for post in site.posts limit:5 %}
      <li><a href="{{post.url}}">{{post.title}}</a></li>
      {% endfor %}
    </ul>
    <br />
    <br />

    <h2 class="page-header">Open Source</h2><br />
    <ul>
      <li>
        <a href="http://hopsoft.github.com/hero/">Hero</a>
        - simplify complex apps with process modeling
      </li>
      <li>
        <a href="http://hopsoft.github.com/coast/">Coast</a>
        - rest for rails controllers
      </li>
      <li>
        <a href="http://hopsoft.github.com/goldmine/">Goldmine</a>
        - pivot tables for the rubyist
      </li>
      <li>
        <a href="http://hopsoft.github.com/micro_test">MicroTest</a>
        - a tiny testing framework
      </li>
      <li>
        <a href="http://hopsoft.github.com/micro_mock">MicroMock</a>
        - a tiny mocking framework
      </li>
      <li>
        <a href="http://hopsoft.github.com/grumpy_old_man">Grumpy Old Man</a>
        - asserts for rspec
      </li>
      <li>
        <a href="http://hopsoft.github.com/model_probe/">ModelProbe</a>
        - introspect the schema behind your models at runtime
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
    <br />
    <br />

    <h2 class="page-header">Sites</h2><br />
    <ul>
      <li>
        <a href="http://www.citydiff.com">CityDiff</a>
        - compare your favorite cities
      </li>
    </ul>
    <br />
    <br />

    <h2 class="page-header">Tools</h2><br />
    <ul>
      <li>
        <a href="http://hopsoft.github.com/vim.html">VIM</a>
        - vim reference &amp; cheat sheet
      </li>
    </ul>
    <br />
    <br />

  </div>

</div>
