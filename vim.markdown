---
title: VIM Reference / Cheat Sheet
layout: bootstrap 
---

{% include breadcrumb.html %}

<div class="row">
  <div class="span12">
    <h3>
      VIM is hard. <small>Don't sweat it... we've got your back</small>
    </h3>
    <hr />
  </div>

  <div class="span5">

    <table class="table table-bordered table-awesome">
      <thead>
        <tr>
          <th> <i class="icon-cog">&nbsp;</i> Command </th>
          <th> <i class="icon-music">&nbsp;</i> Mnemonic </th>
          <th> <i class="icon-comments">&nbsp;</i> Description </th>
        </tr>
      </thead>
      <tbody>

        <tr>
          <td><pre class="command">.</pre></td>
          <td></td>
          <td><span class="label">Repeat</span> the <span class="label">last command</span></td>
        </tr>

        <tr>
          <td><pre class="command">h</pre></td>
          <td></td>
          <td>Move <span class="label">left 1 char</span></td>
        </tr>

        <tr>
          <td><pre class="command">j</pre></td>
          <td></td>
          <td>Move <span class="label">down 1 line</span></td>
        </tr>

        <tr>
          <td><pre class="command">k</pre></td>
          <td></td>
          <td>Move <span class="label">up 1 line</span></td>
        </tr>

        <tr>
          <td><pre class="command">l</pre></td>
          <td></td>
          <td>Move <span class="label">right 1 char</span></td>
        </tr>

        <tr>
          <td><pre class="command">w</pre></td>
          <td><span class="u">w</span>ord</td>
          <td>Move to the <span class="label">start of</span> the <span class="label">next word</span></td>
        </tr>

        <tr>
          <td><pre class="command">e</pre></td>
          <td><span class="u">e</span>nd</td>
          <td>Move to the <span class="label">end of</span> the <span class="label">current word</span></td>
        </tr>

        <tr>
          <td><pre class="command">^</pre></td>
          <td></td>
          <td>Move to the <span class="label">start of</span> the <span class="label">line</span></td>
        </tr>

        <tr>
          <td><pre class="command">$</pre></td>
          <td></td>
          <td>Move to the <span class="label">end of</span> the <span class="label">line</span></td>
        </tr>

        <tr>
          <td><pre class="command">gg</pre></td>
          <td><span class="u">g</span>oto</td>
          <td>Move to the <span class="label">top of</span> the <span class="label">file</span></td>
        </tr>

        <tr>
          <td><pre class="command">G</pre></td>
          <td><span class="u">g</span>oto</td>
          <td>Move to the <span class="label">bottom of</span> the <span class="label">file</span></td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">[</span>number<span class="subdued">]</span>G</pre></td>
          <td><span class="u">g</span>oto</td>
          <td>Move to the specified <span class="label">line number</span></td>
        </tr>

        <tr>
          <td><pre class="command">%</pre></td>
          <td></td>
          <td>Move to the <span class="label">matching bracket</span></td>
        </tr>

        <tr>
          <td><pre class="command">%</pre></td>
          <td></td>
          <td>Move to the <span class="label">matching bracket</span></td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">&lt;</span>CTRL-w<span class="subdued">&gt;</span>s</pre></td>
          <td><span class="u">s</span>plit</td>
          <td><span class="label">Split</span> the <span class="label">window horizontally</span></td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">&lt;</span>CTRL-w<span class="subdued">&gt;</span>v</pre></td>
          <td></td>
          <td><span class="label">Split</span> the <span class="label">window vertically</span></td>
        </tr>

        <tr>
          <td><pre class="command">:ls</pre></td>
          <td><span class="u">l</span>i<span class="u">s</span>t</td>
          <td><span class="label">List buffers</span></td>
        </tr>

        <tr>
          <td><pre class="command">:w</pre></td>
          <td><span class="u">w</span>rite</td>
          <td><span class="label">Write</span> (or save) the <span class="label">current file</span></td>
        </tr>

        <tr>
          <td><pre class="command">:q</pre></td>
          <td><span class="u">q</span>uit</td>
          <td><span class="label">Exit</span> the <span class="label">editor</span></td>
        </tr>

        <tr>
          <td><pre class="command">:q!</pre></td>
          <td><span class="u">q</span>uit</td>
          <td><span class="label">Exit</span> the <span class="label">editor</span> and <span class="label">discard changes</span></td>
        </tr>

      </tbody>
    </table>

  </div>

  <div class="span8">
    <p>
      Keep your eye on this page for updates.
    </p>
    <p>
      {% include discus.html %}
    </p>
  </div>

</div>

