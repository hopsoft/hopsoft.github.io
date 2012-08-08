---
title: VIM Reference
layout: bootstrap 
---

<div class="row">
  <div class="span12">
    <ul class="breadcrumb">
      <li>
        <a href="/">Home</a> <span class="divider">/</span>
      </li>
      <li class="active">VIM Reference</li>
    </ul>

    <h1 class="page-header">{{ page.title }}</h1>

    <ul class="nav nav-tabs">
      <li class="active">
        <a href="#navigating" data-toggle="tab">Navigating</a>
      </li>
      <li><a href="#editing" data-toggle="tab">Editing</a></li>
      <li><a href="#misc" data-toggle="tab">Misc</a></li>
    </ul>
  </div>


  <div class="tab-content">
    <div id="navigating" class="tab-pane active">
      <div class="span6">

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Command</th>
              <th>Mnemonic</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td><pre>h</pre></td>
              <td></td>
              <td>Move <span class="label">left 1 char</span></td>
            </tr>

            <tr>
              <td><pre>j</pre></td>
              <td></td>
              <td>Move <span class="label">down 1 line</span></td>
            </tr>

            <tr>
              <td><pre>k</pre></td>
              <td></td>
              <td>Move <span class="label">up 1 line</span></td>
            </tr>

            <tr>
              <td><pre>l</pre></td>
              <td></td>
              <td>Move <span class="label">right 1 char</span></td>
            </tr>

            <tr>
              <td><pre>w</pre></td>
              <td><span class="u">w</span>ord</td>
              <td>Move to the <span class="label">start of</span> the <span class="label">next word</span></td>
            </tr>

            <tr>
              <td><pre>e</pre></td>
              <td><span class="u">e</span>nd</td>
              <td>Move to the <span class="label">end of</span> the <span class="label">current word</span></td>
            </tr>

          </tbody>
        </table>

      </div>

      <div class="span6">

        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Command</th>
              <th>Mnemonic</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>

            <tr>
              <td><pre>^</pre></td>
              <td></td>
              <td>Move to the <span class="label">start of</span> the <span class="label">line</span></td>
            </tr>

            <tr>
              <td><pre>$</pre></td>
              <td></td>
              <td>Move to the <span class="label">end of</span> the <span class="label">line</span></td>
            </tr>

            <tr>
              <td><pre>gg</pre></td>
              <td><span class="u">g</span>oto</td>
              <td>Move to the <span class="label">top of</span> the <span class="label">file</span></td>
            </tr>

            <tr>
              <td><pre>G</pre></td>
              <td><span class="u">g</span>oto</td>
              <td>Move to the <span class="label">bottom of</span> the <span class="label">file</span></td>
            </tr>

            <tr>
              <td><pre>[number]G</pre></td>
              <td><span class="u">g</span>oto</td>
              <td>Move to the specified <span class="label">line number</span></td>
            </tr>

            <tr>
              <td><pre>%</pre></td>
              <td></td>
              <td>Move to the <span class="label">matching bracket</span></td>
            </tr>

          </tbody>
        </table>

      </div>
    </div>

    <div id="editing" class="tab-pane">
      Editing...
    </div>

    <div id="misc" class="tab-pane">
      Misc...
    </div>
  </div>
</div>
