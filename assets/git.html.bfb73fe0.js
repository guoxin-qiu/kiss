import{_ as s,c as n}from"./app.811c4100.js";const a={},e=n(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h1><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global --list
<span class="token function">git</span> config --local --list

<span class="token function">git</span> config --global http.sslVerify <span class="token boolean">false</span>
<span class="token function">git</span> config --local username <span class="token string">&#39;username&#39;</span>
<span class="token function">git</span> config --local email <span class="token string">&#39;email&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h2 id="\u547D\u4EE4" tabindex="-1"><a class="header-anchor" href="#\u547D\u4EE4" aria-hidden="true">#</a> \u547D\u4EE4</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> clone https://username:password@remoteUrl

<span class="token function">git</span> clone -b <span class="token operator">&lt;</span>\u8FDC\u7A0B\u5206\u652F\u540D<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>remote url<span class="token operator">&gt;</span>

<span class="token builtin class-name">cd</span> existing_folder
<span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin git@xxxx.git
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit -m <span class="token string">&quot;Initial commit&quot;</span>
<span class="token function">git</span> push -u origin master

// \u5207\u6362\u5206\u652F<span class="token punctuation">(</span>\u672C\u5730\u5206\u652F<span class="token punctuation">)</span>
<span class="token function">git</span> checkout

// \u62C9\u53D6\u8FDC\u7A0B\u5206\u652F\uFF0C\u5E76\u521B\u5EFA\u672C\u5730\u5206\u652F
<span class="token function">git</span> checkout -b dev origin/dev

// \u521B\u5EFA\u672C\u5730\u5206\u652F
<span class="token function">git</span> checkout -b <span class="token operator">&lt;</span>\u5206\u652F\u540D\u79F0<span class="token operator">&gt;</span>

// \u67E5\u770B\u9879\u76EE\u7684\u5206\u652F\uFF08\u5305\u62EC\u672C\u5730\u548C\u8FDC\u7A0B\uFF09
<span class="token function">git</span> branch -a

// \u5220\u9664\u5206\u652F
<span class="token function">git</span> branch -D <span class="token operator">&lt;</span>Branch-Name<span class="token operator">&gt;</span>

// \u64A4\u9500 commit\uFF0Csoft\u4E0D\u64A4\u9500add
<span class="token function">git</span> reset --soft HEAD^

// \u5408\u5E76 commit
<span class="token function">git</span> rebase -i HEAD~3
<span class="token function">git</span> push origin <span class="token operator">&lt;</span>Branch-Name<span class="token operator">&gt;</span> -f

// \u5220\u9664\u6587\u4EF6\u7684\u6258\u7BA1
<span class="token function">git</span> <span class="token function">rm</span> -r --cached <span class="token string">&quot;folder or file path&quot;</span>

<span class="token comment"># \u67E5\u770B\u672C\u5730\u5206\u652F\u548C\u8FFD\u8E2A\u60C5\u51B5</span>
<span class="token function">git</span> remote show origin
<span class="token comment">#\u540C\u6B65\u5206\u652F\u4FE1\u606F</span>
<span class="token function">git</span> remote prune origin

// \u751F\u6210\u7A7A\u6587\u4EF6\u5939
<span class="token builtin class-name">type</span> null<span class="token operator">&gt;</span>.gitkeep

//
<span class="token function">git</span> config --global core.autocrlf <span class="token boolean">false</span>

// \u67E5\u770B\u5DE5\u7A0B\u4EE3\u7801 total \u60C5\u51B5
<span class="token function">git</span> log --pretty<span class="token operator">=</span>tformat: --numstat <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39;</span>

// \u67E5\u770B\u6210\u5458\u63D0\u4EA4\u4EE3\u7801\u60C5\u51B5
<span class="token function">git</span> log --format<span class="token operator">=</span><span class="token string">&#39;%aN&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> -u <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> name<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> -en <span class="token string">&quot;<span class="token variable">$name</span><span class="token entity" title="\\t">\\t</span>&quot;</span><span class="token punctuation">;</span> <span class="token function">git</span> log --author<span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$name</span>&quot;</span> --pretty<span class="token operator">=</span>tformat: --numstat <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39;</span> -<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token comment"># \u4FDD\u5B58\u5F53\u524D\u672Acommit\u7684\u4EE3\u7801</span>
<span class="token function">git</span> stash

<span class="token comment"># \u4FDD\u5B58\u5F53\u524D\u672Acommit\u7684\u4EE3\u7801\u5E76\u6DFB\u52A0\u5907\u6CE8</span>
<span class="token function">git</span> stash save <span class="token string">&quot;\u5907\u6CE8\u7684\u5185\u5BB9&quot;</span>

<span class="token comment"># \u5217\u51FAstash\u7684\u6240\u6709\u8BB0\u5F55</span>
<span class="token function">git</span> stash list

<span class="token comment"># \u5220\u9664stash\u7684\u6240\u6709\u8BB0\u5F55</span>
<span class="token function">git</span> stash <span class="token function">clear</span>

<span class="token comment"># \u5E94\u7528\u6700\u8FD1\u4E00\u6B21\u7684stash</span>
<span class="token function">git</span> stash apply

<span class="token comment"># \u5E94\u7528\u6700\u8FD1\u4E00\u6B21\u7684stash\uFF0C\u968F\u540E\u5220\u9664\u8BE5\u8BB0\u5F55</span>
<span class="token function">git</span> stash pop

<span class="token comment"># \u5220\u9664\u6700\u8FD1\u7684\u4E00\u6B21stash</span>
<span class="token function">git</span> stash drop
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><h2 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h2><p>\u8BBE\u7F6E Git user \u7684 name \u548C email</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> config --global user.name <span class="token string">&quot;name&quot;</span>
<span class="token function">git</span> config --global user.email <span class="token string">&quot;name@costo.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>\u68C0\u67E5\u662F\u5426\u5B58\u5728 SSH key</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code> <span class="token builtin class-name">cd</span> ~/.ssh
 <span class="token function">ls</span>
 // or
 ll
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>\u751F\u6210 SSH key</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -C <span class="token string">&quot;name@costo.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u83B7\u53D6 SSH key</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">cat</span> id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>GitHub \u6DFB\u52A0 SSH key</p><p>\u7528\u6237\u5934\u50CF -&gt; Setting -&gt; SSH and GPG keys -&gt; New SSH key -&gt; paste</p><p>\u9A8C\u8BC1</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token function">ssh</span> -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u63D0\u793A continue connecting\uFF1F\u8F93\u5165 yes</p><p>IOS</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-keygen -t rsa -b <span class="token number">4096</span> -C <span class="token string">&quot;name@costo.com&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>ssh-agent -s<span class="token variable">)</span></span>&quot;</span>
ssh-add -K ~/.ssh/id_rsa
pbcopy <span class="token operator">&lt;</span> ~/.ssh/id_rsa.pub
<span class="token function">ssh</span> -T git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  <span class="token function">git</span> remote -v
  <span class="token function">git</span> remote set-url origin ssh\u5730\u5740
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u914D\u7F6E\u591A\u4E2A-ssh" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u591A\u4E2A-ssh" aria-hidden="true">#</a> \u914D\u7F6E\u591A\u4E2A SSH</h3><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  ssh-keygen -t rsa -C <span class="token string">&quot;name@costo1.com&quot;</span> //\u5728\u547D\u4EE4\u884C\u63D0\u793A\u4E2D\u6307\u5B9A\u6587\u4EF6\u540D\u4F8B\u5982\u4E3Aid_1
  ssh-keygen -t rsa -C <span class="token string">&quot;name@costo2.com&quot;</span> //\u5728\u547D\u4EE4\u884C\u63D0\u793A\u4E2D\u6307\u5B9A\u6587\u4EF6\u540D\u4F8B\u5982\u4E3Aid_2

.ssh\u6587\u4EF6\u4E0B\u65B0\u589Econfg\u6587\u4EF6\uFF08\u65E0\u540E\u7F00\u7684\u6587\u4EF6\uFF09

  Host xx.github.com
  HostName github.xx.com
  User test1
  IdentityFile  ~/.ssh/id_1

  Host github.com
  HostName github.com
  User test2
  IdentityFile  ~/.ssh/id_2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><p>\u5C06\u65B0\u4EA7\u751F\u7684\u5BC6\u94A5\u52A0\u5165\u7BA1\u7406\uFF08\u5728\u4F60\u771F\u6B63\u7684\u9879\u76EE\u7684\u6587\u4EF6\u5939\u91CC\u9762\u6267\u884C\uFF09</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-add ~/.ssh/id_2
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5982\u679C\u63D0\u793A Could not open a connection to your authentication agent\uFF0C\u5173\u6389\u6240\u6709\u7684 bash \u7A97\u53E3\uFF0C\u65B0\u5F00\u4E00\u4E2A\uFF0C\u7136\u540E\u8F93\u5165\u4EE5\u4E0B</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>ssh-agent <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u547D\u4EE4\u884C\u67E5\u770B\u662F\u5426\u6388\u6743\u6210\u529F</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">ssh</span> -T github.xx.com
<span class="token function">ssh</span> -T -v github.xx.com //\u8BE6\u7EC6log
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5C06-github-\u4EE3\u7801\u540C\u6B65\u5230-gitlab-\u4E0A" tabindex="-1"><a class="header-anchor" href="#\u5C06-github-\u4EE3\u7801\u540C\u6B65\u5230-gitlab-\u4E0A" aria-hidden="true">#</a> \u5C06 Github \u4EE3\u7801\u540C\u6B65\u5230 Gitlab \u4E0A</h2><p>\u5728\u5DF2\u6709 git \u7684\u9879\u76EE\u4EE3\u7801\u4E0B\uFF0C\u6267\u884C</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> gitlab ssh://git@xxxx/xx.git
<span class="token function">git</span> push gitlab master


<span class="token function">git</span> pull gitlab master
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="git-\u63D0\u4EA4\u89C4\u8303" tabindex="-1"><a class="header-anchor" href="#git-\u63D0\u4EA4\u89C4\u8303" aria-hidden="true">#</a> GIT \u63D0\u4EA4\u89C4\u8303</h2><h3 id="git-commit-message" tabindex="-1"><a class="header-anchor" href="#git-commit-message" aria-hidden="true">#</a> git commit message</h3><ul><li>\u683C\u5F0F: type(scope): subject\uFF0C\u5176\u4E2D type \u548C subject \u662F\u5FC5\u987B\u7684</li><li>type \u5305\u62EC <ul><li>feat: \u65B0\u529F\u80FD\uFF08feature\uFF09</li><li>fix: \u4FEE\u8865 bug</li><li>docs: \u6587\u6863\uFF08documentation\uFF09</li><li>style: \u683C\u5F0F\uFF08\u4E0D\u5F71\u54CD\u4EE3\u7801\u8FD0\u884C\u7684\u53D8\u52A8\uFF09</li><li>refactor: \u91CD\u6784\uFF08\u5373\u4E0D\u662F\u65B0\u589E\u529F\u80FD\uFF0C\u4E5F\u4E0D\u662F\u4FEE\u6539 bug \u7684\u4EE3\u7801\u53D8\u52A8\uFF09</li><li>chore: \u6784\u5EFA\u8FC7\u7A0B\u6216\u8F85\u52A9\u5DE5\u5177\u7684\u53D8\u52A8</li><li>revert: \u64A4\u9500\uFF0C\u7248\u672C\u56DE\u9000</li><li>perf: \u6027\u80FD\u4F18\u5316</li><li>test\uFF1A\u6D4B\u8BD5</li><li>improvement: \u6539\u8FDB</li><li>build: \u6253\u5305</li><li>ci: \u6301\u7EED\u96C6\u6210</li></ul></li><li>scope \u8BF4\u660E\u6B64\u6B21\u63D0\u4EA4\u7684\u5F71\u54CD\u8303\u56F4\uFF0C\u82F1\u6587</li><li>subject \u7B80\u77ED\u63CF\u8FF0\uFF0C\u4EE5\u52A8\u8BCD\u5F00\u5934\uFF0C\u4E0D\u4F7F\u7528\u5927\u5199\u5B57\u6BCD\uFF0C\u4E0D\u4F7F\u7528\u4E2D\u6587</li></ul><p>\u4F8B\u5982\uFF1A feat: add check in \u6216 chore(ios): add ios build target</p><h3 id="git-branch-name" tabindex="-1"><a class="header-anchor" href="#git-branch-name" aria-hidden="true">#</a> git branch name</h3><p>\u7C7B\u4F3C\u4E8E commit message \u7684\u8981\u6C42\uFF0C\u683C\u5F0F\u4E3A type/subject\uFF0C\u591A\u4E2A\u8BCD\u4F7F\u7528\u201C-\u201D\u76F8\u8FDE\uFF0C\u4E0D\u4F7F\u7528\u4E0B\u5212\u7EBF\uFF0C\u4E0D\u4F7F\u7528\u5927\u5199\u5B57\u6BCD\uFF0C\u4E0D\u4F7F\u7528\u4E2D\u6587</p><p>\u4F8B\u5982\uFF1A feat/check-in</p>`,41);function l(p,i){return e}var r=s(a,[["render",l],["__file","git.html.vue"]]);export{r as default};
