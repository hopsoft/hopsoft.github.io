---
title: Why Software is Hard
authors: Nathan Hopkins
date: 2012-08-17
published: true
categories: 
  - software
  - programming
layout: bootstrap  
---

{% include breadcrumb.html %}

<div class="row">
  <div class="span12">
    <div class="subdued">{% include post_info.html %}</div>
    <h2>An over simplified narrative</h2>

    <div class="bubble">
      <img src="/public/images/avatar_female.png" class="thumbnail left" />
      <div class="left">
        I want an app that outputs 2 characters.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        What kind of characters do you want?
      </div>
      <br class="clear" />
    </div>

    <div class="bubble">
      <img src="/public/images/avatar_female.png" class="thumbnail left" />
      <div class="left">
        I was thinking something with mostly straight lines for the first character<br />
        and more curvy lines for the second character.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        Something like A, E, F, H, I, K, L, M, N, T, V, W, X, Y, Z for the first character<br />
        and B, C, D, G, J, O, P, Q, R, S, U for the second character?
      </div>
      <br class="clear" />
    </div>

    <div class="bubble">
      <img src="/public/images/avatar_female.png" class="thumbnail left" />
      <div class="left">
        No those wont work.<br />
        We need to perform mathmatical calculations on the output.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        So you really need something that outputs numbers not characters?
      </div>
      <br class="clear" />
    </div>

    <div class="bubble">
      <img src="/public/images/avatar_female.png" class="thumbnail left" />
      <div class="left">
        Thats right. Sorry for the confusion.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        No problem. How about this solution?<br />
        1, 4, 7 for the first number.<br />
        and 0, 2, 3, 5, 6, 8, 9 for the second number?
      </div>
      <br class="clear" />
    </div>

    <div class="bubble">
      <img src="/public/images/avatar_female.png" class="thumbnail left" />
      <div class="left">
        Thats close, but 2 needs to be in the first list.<br />
        Actually...<br />
        Lets remove all numbers but 8 in the second list.<br />
        Lets also remove everything but the 1, 2, and 4 in the first list.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        So we have 1, 2, 4 for the first number and 8 for the second number?
      </div>
      <br class="clear" />
    </div>

    <div class="bubble">
      <img src="/public/images/avatar_female.png" class="thumbnail left" />
      <div class="left">
        Thats perfect!
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        I'll get started.<br />
        <span class="subdued">After some time, the app is delivered.</span>
      </div>
      <br class="clear" />
    </div>

    <div class="bubble">
      <img src="/public/images/avatar_female.png" class="thumbnail left" />
      <div class="left">
        This is great, but its not quite what I need.<br />
        It would be best if the app did the calculations for me.<br />
        I could move twice as fast if the app handled the calculations too.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        What type of calculations do you need it to perform?<br />
      </div>
      <br class="clear" />
    </div>

    <div class="bubble">
      <img src="/public/images/avatar_female.png" class="thumbnail left" />
      <div class="left">
        I need it to use the numbers 1, 2, 4, and 8 to generate the number 16.<br />
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        OK. Thats very clear but it adds some complexity.<br />
        Let me spend some time designing a solution.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        Hey fellow developers, what do you think about my solution for this problem?<br />
        1 + 1 + 1 + 1 + 1 + 1 + 1 + 1 + 8 = 16<br />
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt-2">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        That works, but wouldn't it be better if you did it this way?<br />
        1 + 1 + 1 + 1 + 4 + 8 = 16<br />
        Or maybe this way?<br />
        2 + 2 + 4 + 8 = 16
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        Thanks for the feedback. You've really got me thinking.<br />
        This is what I'm using now.<br />
        4 + 4 + 8 = 16
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt-3">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        Hey everyone, I just discovered a brand new math operator which might help out.<br />
        It allows you to solve your problem like this.<br />
        2 <b>*</b> 8 = 16
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        Wow thats great! I think I'll use it.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt-2">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        Whoa... hold on. That operator is too new and risky for us to put into our production environment.<br />
        It is neat but, we should wait until its been proven stable.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        You're right, but seeing that new operator gave me more insight into the problem.<br />
        I can solve it in a similar way without taking the risk.<br />
        8 + 8 = 16
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt-2">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        Perfect... I love it.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt-3">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        Me too!
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        <span class="subdued">Implements and delivers the app.</span>
      </div>
      <br class="clear" />
    </div>

    <div class="bubble">
      <img src="/public/images/avatar_female.png" class="thumbnail left" />
      <div class="left">
        This is great, but I need it to use <b>all</b> the numbers to produce the output.
      </div>
      <br class="clear" />
    </div>

    <div class="bubble bubble-alt">
      <img src="/public/images/avatar_male.png" class="thumbnail left" />
      <div class="left">
        Oh... OK, let me spend some time designing a solution.
      </div>
      <br class="clear" />
    </div>

  </div>
</div>

<div class="row">
  <div class="span12">
    <br />
    <p>
      {% include disqus.html %}
    </p>
  </div>
</div>
