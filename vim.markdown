---
title: VIM Reference / Cheat Sheet
layout: bootstrap 
---

{% include breadcrumb.html %}

<div class="row">
  <div class="span12">
    <div class="hero-unit">
      <h2>VIM is hard. <small>Don't sweat it... I've got your back</small></h2><br />
      <p>Use the <b>search</b> below to find what you need.</p>
      <hr />
      <p>
        I just started my journey of truly learning VIM.
        Watch for changes as I update this doc with stuff I'm learning.
      </p>
      <p>
        I'm reading <a href="http://pragprog.com/book/dnvim/practical-vim">Practical VIM</a> from PragProg, so there's good stuff on the way.
      </p>
    </div>
  </div>

  <div class="span12">

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
          <td>Repeat the last command</td>
        </tr>

        <tr>
          <td><pre class="command">h</pre></td>
          <td></td>
          <td>Move left 1 char</td>
        </tr>

        <tr>
          <td><pre class="command">j</pre></td>
          <td></td>
          <td>Move down 1 line</td>
        </tr>

        <tr>
          <td><pre class="command">k</pre></td>
          <td></td>
          <td>Move up 1 line</td>
        </tr>

        <tr>
          <td><pre class="command">l</pre></td>
          <td></td>
          <td>Move right 1 char</td>
        </tr>

        <tr>
          <td><pre class="command">w</pre></td>
          <td><span class="u">w</span>ord</td>
          <td>Move to the start of the next word</td>
        </tr>

        <tr>
          <td><pre class="command">e</pre></td>
          <td><span class="u">e</span>nd</td>
          <td>Move to the end of the current word</td>
        </tr>

        <tr>
          <td><pre class="command">^</pre></td>
          <td></td>
          <td>Move to the start of the line</td>
        </tr>

        <tr>
          <td><pre class="command">$</pre></td>
          <td></td>
          <td>Move to the end of the line</td>
        </tr>

        <tr>
          <td><pre class="command">gg</pre></td>
          <td><span class="u">g</span>oto</td>
          <td>Move to the top of the file</td>
        </tr>

        <tr>
          <td><pre class="command">G</pre></td>
          <td><span class="u">g</span>oto</td>
          <td>Move to the bottom of the file</td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">[number]</span>G</pre></td>
          <td><span class="u">g</span>oto</td>
          <td>Move to the specified line number</td>
        </tr>

        <tr>
          <td><pre class="command">%</pre></td>
          <td></td>
          <td>Move to the matching bracket</td>
        </tr>

        <tr>
          <td><pre class="command">%</pre></td>
          <td></td>
          <td>Move to the matching bracket</td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">&lt;</span>CTRL-w<span class="subdued">&gt;</span></pre></td>
          <td><span class="u">w</span>indow</td>
          <td>Switch to another window</td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">&lt;</span>CTRL-w<span class="subdued">&gt;</span>s</pre></td>
          <td>
            <span class="u">w</span>indow<br />
            <span class="u">s</span>plit
          </td>
          <td>Split the window horizontally</td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">&lt;</span>CTRL-w<span class="subdued">&gt;</span>v</pre></td>
          <td>
            <span class="u">w</span>indow<br />
            <span class="u">v</span>ertical
          </td>
          <td>Split the window vertically</td>
        </tr>

        <tr>
          <td><pre class="command">:ls</pre></td>
          <td><span class="u">l</span>i<span class="u">s</span>t</td>
          <td>List buffers</td>
        </tr>

        <tr>
          <td><pre class="command">:w</pre></td>
          <td><span class="u">w</span>rite</td>
          <td>Write (or save) the current file</td>
        </tr>

        <tr>
          <td><pre class="command">:w <span class="subdued">[filename]</span></pre></td>
          <td><span class="u">w</span>rite</td>
          <td>Write (or save) the current file as the specified filename</td>
        </tr>

        <tr>
          <td><pre class="command">:wq</pre></td>
          <td><span class="u">w</span>rite</td>
          <td>Write (or save) the current file and quit</td>
        </tr>

        <tr>
          <td><pre class="command">:q</pre></td>
          <td><span class="u">q</span>uit</td>
          <td>Exit the editor</td>
        </tr>

        <tr>
          <td><pre class="command">:q!</pre></td>
          <td><span class="u">q</span>uit</td>
          <td>Exit the editor and discard changes</td>
        </tr>

        <tr>
          <td><pre class="command">x</pre></td>
          <td></td>
          <td>Delete the character under the cursor</td>
        </tr>

        <tr>
          <td><pre class="command">i</pre></td>
          <td><span class="u">i</span>nsert</td>
          <td>Insert text before the cursor</td>
        </tr>

        <tr>
          <td><pre class="command">a</pre></td>
          <td><span class="u">a</span>ppend</td>
          <td>Append text after the cursor</td>
        </tr>

        <tr>
          <td><pre class="command">A</pre></td>
          <td><span class="u">a</span>ppend</td>
          <td>Append text at the end of the current line</td>
        </tr>

        <tr>
          <td><pre class="command">d<span class="subdued">[number]</span>w</pre></td>
          <td><span class="u">d</span>elete</td>
          <td>Delete N number of words</td>
        </tr>

        <tr>
          <td><pre class="command">dw</pre></td>
          <td><span class="u">d</span>elete</td>
          <td>Delete up to the next word</td>
        </tr>

        <tr>
          <td><pre class="command">d$</pre></td>
          <td><span class="u">d</span>elete</td>
          <td>Delete to the end of the line</td>
        </tr>

        <tr>
          <td><pre class="command">de</pre></td>
          <td><span class="u">d</span>elete</td>
          <td>Delete to the end of the current word</td>
        </tr>

        <tr>
          <td><pre class="command">dd</pre></td>
          <td><span class="u">d</span>elete</td>
          <td>Delete the current line</td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">[number]</span>dd</pre></td>
          <td><span class="u">d</span>elete</td>
          <td>Delete N number of lines</td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">[number]</span>w</pre></td>
          <td><span class="u">w</span>ord</td>
          <td>Move the cursor N number of words forward</td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">[number]</span>e</pre></td>
          <td><span class="u">e</span>nd</td>
          <td>Move the cursor to the end of the Nth word</td>
        </tr>

        <tr>
          <td><pre class="command">0</pre></td>
          <td></td>
          <td>Move to the start of the line</td>
        </tr>

        <tr>
          <td><pre class="command">^</pre></td>
          <td></td>
          <td>Move to the start of the line</td>
        </tr>

        <tr>
          <td><pre class="command">$</pre></td>
          <td></td>
          <td>Move to the end of the line</td>
        </tr>

        <tr>
          <td><pre class="command">u</pre></td>
          <td><span class="u">u</span>ndo</td>
          <td>Undo the last command</td>
        </tr>

        <tr>
          <td><pre class="command">U</pre></td>
          <td><span class="u">u</span>ndo</td>
          <td>Undo all changes on the current line</td>
        </tr>

        <tr>
          <td><pre class="command">y</pre></td>
          <td><span class="u">y</span>ank</td>
          <td>Yank (or copy) text</td>
        </tr>

        <tr>
          <td><pre class="command">p</pre></td>
          <td><span class="u">p</span>ut</td>
          <td>Put (or paste) copied or deleted text after the cursor</td>
        </tr>

        <tr>
          <td><pre class="command">r</pre></td>
          <td><span class="u">r</span>eplace</td>
          <td>Replace the character under the cursor</td>
        </tr>

        <tr>
          <td><pre class="command">R</pre></td>
          <td><span class="u">r</span>eplace</td>
          <td>Enter replace mode</td>
        </tr>

        <tr>
          <td><pre class="command">cw</pre></td>
          <td><span class="u">c</span>hange</td>
          <td>Change (or replace) the current word</td>
        </tr>

        <tr>
          <td><pre class="command">c$</pre></td>
          <td><span class="u">c</span>hange</td>
          <td>Change (or replace) text to the end of the line</td>
        </tr>

        <tr>
          <td><pre class="command">/<span class="subdued">[text]</span></pre></td>
          <td></td>
          <td>Search forward for the text</td>
        </tr>

        <tr>
          <td><pre class="command">?<span class="subdued">[text]</span></pre></td>
          <td></td>
          <td>Search backward for the text</td>
        </tr>

        <tr>
          <td><pre class="command">%</pre></td>
          <td></td>
          <td>Find the matching brace (or bracket)</td>
        </tr>

        <tr>
          <td><pre class="command">:s/<span class="subdued">[old]</span>/<span class="subdued">[new]</span>/</pre></td>
          <td><span class="u">s</span>ubstitue</td>
          <td>Substitue (or replace) first occurence of 'old' with 'new' on line</td>
        </tr>

        <tr>
          <td><pre class="command">:s/<span class="subdued">[old]</span>/<span class="subdued">[new]</span>/g</pre></td>
          <td><span class="u">s</span>ubstitue</td>
          <td>Substitue (or replace) all occurences of 'old' with 'new' on line</td>
        </tr>

        <tr>
          <td><pre class="command">:%s/<span class="subdued">[old]</span>/<span class="subdued">[new]</span>/</pre></td>
          <td><span class="u">s</span>ubstitue</td>
          <td>Substitue (or replace) first occurence of 'old' with 'new' in file</td>
        </tr>

        <tr>
          <td><pre class="command">:%s/<span class="subdued">[old]</span>/<span class="subdued">[new]</span>/g</pre></td>
          <td><span class="u">s</span>ubstitue</td>
          <td>Substitue (or replace) all occurences of 'old' with 'new' in file</td>
        </tr>

        <tr>
          <td><pre class="command">:<span class="subdued">[number]</span>,<span class="subdued">[number]</span>s/<span class="subdued">[old]</span>/g<span class="subdued">[new]</span>/g</pre></td>
          <td><span class="u">s</span>ubstitue</td>
          <td>Substitue (or replace) all occurences of 'old' with 'new' in between lines</td>
        </tr>

        <tr>
          <td><pre class="command">n</pre></td>
          <td><span class="u">n</span>ext</td>
          <td>Find the next occurence of a search result</td>
        </tr>

        <tr>
          <td><pre class="command">N</pre></td>
          <td><span class="u">n</span>ext</td>
          <td>Find the previous occurence of a search result</td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">&lt;</span>CTRL-O<span class="subdued">&gt;</span></pre></td>
          <td></td>
          <td>Move to older result while navigating search results</td>
        </tr>

        <tr>
          <td><pre class="command"><span class="subdued">&lt;</span>CTRL-I<span class="subdued">&gt;</span></pre></td>
          <td></td>
          <td>Move to newer result while navigating search results</td>
        </tr>

        <tr>
          <td><pre class="command">:!<span class="subdued">[command]</span></pre></td>
          <td></td>
          <td>Execute an external command</td>
        </tr>

        <tr>
          <td><pre class="command">:r <span class="subdued">[filename]</span></pre></td>
          <td></td>
          <td>Read the specified file and put its contents below the cursor</td>
        </tr>

        <tr>
          <td><pre class="command">:r !dir</pre></td>
          <td></td>
          <td>Execute the dir command and put the results below the cursor</td>
        </tr>

        <tr>
          <td><pre class="command">:v <span class="subdued">[motion]</span> :w <span class="subdued">[filename]</span></pre></td>
          <td>
            <span class="u">v</span>isual<br />
            <span class="u">w</span>rite
          </td>
          <td>Save the visually selected lines to the specified filename</td>
        </tr>

        <tr>
          <td><pre class="command">o</pre></td>
          <td><span class="u">o</span>pen</td>
          <td>Open a line below the cursor and switch to insert mode.</td>
        </tr>

        <tr>
          <td><pre class="command">O</pre></td>
          <td><span class="u">o</span>pen</td>
          <td>Open a line above the cursor and switch to insert mode.</td>
        </tr>

        <tr>
          <td><pre class="command">:set <span class="subdued">[option]</span></pre></td>
          <td></td>
          <td>Set an option</td>
        </tr>

        <tr>
          <td><pre class="command">:set hls</pre></td>
          <td></td>
          <td>Turn on search highlighting</td>
        </tr>

        <tr>
          <td><pre class="command">:set nohls</pre></td>
          <td></td>
          <td>Turn off search highlighting</td>
        </tr>

        <tr>
          <td><pre class="command">:h</pre></td>
          <td><span class="u">h</span>elp</td>
          <td>Open VIM's built in help</td>
        </tr>

        <tr>
          <td><pre class="command">:h <span class="subdued">[text]</span></pre></td>
          <td><span class="u">h</span>elp</td>
          <td>Search VIM's built in help for specific answers (i.e. :h w)</td>
        </tr>

      </tbody>
    </table>

  </div>

  <div class="span12">
    <p>{% include discus.html %}</p>
  </div>

</div>

