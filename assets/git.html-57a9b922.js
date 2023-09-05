import{_ as s,o as a,c as n,a as e}from"./app-3e22403e.js";const i={},l=e(`<h1 id="git" tabindex="-1"><a class="header-anchor" href="#git" aria-hidden="true">#</a> GIT</h1><h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> <span class="token parameter variable">--list</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> <span class="token parameter variable">--list</span>

<span class="token function">git</span> config <span class="token parameter variable">--global</span> http.sslVerify <span class="token boolean">false</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.name <span class="token string">&#39;username&#39;</span>
<span class="token function">git</span> config <span class="token parameter variable">--local</span> user.email <span class="token string">&#39;email&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="一般命令" tabindex="-1"><a class="header-anchor" href="#一般命令" aria-hidden="true">#</a> 一般命令</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone https://username:password@remoteUrl

<span class="token function">git</span> clone <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>远程分支名<span class="token operator">&gt;</span> <span class="token operator">&lt;</span>remote url<span class="token operator">&gt;</span>

<span class="token builtin class-name">cd</span> existing_folder
<span class="token function">git</span> init
<span class="token function">git</span> remote <span class="token function">add</span> origin git@xxxx.git
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;Initial commit&quot;</span>
<span class="token function">git</span> push <span class="token parameter variable">-u</span> origin master

// 切换分支<span class="token punctuation">(</span>本地分支<span class="token punctuation">)</span>
<span class="token function">git</span> checkout

// 拉取远程分支，并创建本地分支
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> dev origin/dev

// 创建本地分支
<span class="token function">git</span> checkout <span class="token parameter variable">-b</span> <span class="token operator">&lt;</span>分支名称<span class="token operator">&gt;</span>

// 查看项目的分支（包括本地和远程）
<span class="token function">git</span> branch <span class="token parameter variable">-a</span>

// 删除分支
<span class="token function">git</span> branch <span class="token parameter variable">-D</span> <span class="token operator">&lt;</span>Branch-Name<span class="token operator">&gt;</span>

// 撤销 commit，soft不撤销add
<span class="token function">git</span> reset <span class="token parameter variable">--soft</span> HEAD^

<span class="token comment"># 查看本地分支和追踪情况</span>
<span class="token function">git</span> remote show origin
<span class="token comment">#同步分支信息</span>
<span class="token function">git</span> remote prune origin

// 生成空文件夹
<span class="token builtin class-name">type</span> null<span class="token operator">&gt;</span>.gitkeep

//
<span class="token function">git</span> config <span class="token parameter variable">--global</span> core.autocrlf <span class="token boolean">false</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="缓存代码" tabindex="-1"><a class="header-anchor" href="#缓存代码" aria-hidden="true">#</a> 缓存代码</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 保存当前未commit的代码</span>
<span class="token function">git</span> stash

<span class="token comment"># 保存当前未commit的代码并添加备注</span>
<span class="token function">git</span> stash save <span class="token string">&quot;备注的内容&quot;</span>

<span class="token comment"># 列出stash的所有记录</span>
<span class="token function">git</span> stash list

<span class="token comment"># 删除stash的所有记录</span>
<span class="token function">git</span> stash <span class="token function">clear</span>

<span class="token comment"># 应用最近一次的stash</span>
<span class="token function">git</span> stash apply

<span class="token comment"># 应用最近一次的stash，随后删除该记录</span>
<span class="token function">git</span> stash pop

<span class="token comment"># 删除最近的一次stash</span>
<span class="token function">git</span> stash drop
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="合并-commits" tabindex="-1"><a class="header-anchor" href="#合并-commits" aria-hidden="true">#</a> 合并 Commits</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 查看要合并的commit.记住最早的commit号</span>
<span class="token function">git</span> log

<span class="token comment"># 回退到此commit号。因为没有使用--hard,所以内容都保存在工作区</span>
<span class="token function">git</span> reset commit_number

<span class="token comment"># 将回退的的内容再次添加到暂存区</span>
<span class="token function">git</span> <span class="token function">add</span> <span class="token builtin class-name">.</span>

<span class="token comment"># 再次提交</span>
<span class="token function">git</span> commit <span class="token parameter variable">-m</span> <span class="token string">&quot;comment&quot;</span>

<span class="token comment"># 如果已推送到远程仓库，push时要用到--force或--force-with-lease选项进行强制推送</span>
<span class="token function">git</span> push <span class="token parameter variable">--force</span> origin xxx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="ssh" tabindex="-1"><a class="header-anchor" href="#ssh" aria-hidden="true">#</a> SSH</h2><p>设置 Git user 的 name 和 email</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> config <span class="token parameter variable">--global</span> user.name <span class="token string">&quot;name&quot;</span>
<span class="token function">git</span> config <span class="token parameter variable">--global</span> user.email <span class="token string">&quot;name@costo.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>检查是否存在 SSH key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code> <span class="token builtin class-name">cd</span> ~/.ssh
 <span class="token function">ls</span>
 // or
 ll
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>生成 SSH key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;name@costo.com&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>获取 SSH key</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">cat</span> id_rsa.pub
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>GitHub 添加 SSH key</p><p>用户头像 -&gt; Setting -&gt; SSH and GPG keys -&gt; New SSH key -&gt; paste</p><p>验证</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提示 continue connecting？输入 yes</p><p>IOS</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-b</span> <span class="token number">4096</span> <span class="token parameter variable">-C</span> <span class="token string">&quot;name@costo.com&quot;</span>
<span class="token builtin class-name">eval</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span>ssh-agent <span class="token parameter variable">-s</span><span class="token variable">)</span></span>&quot;</span>
ssh-add <span class="token parameter variable">-K</span> ~/.ssh/id_rsa
pbcopy <span class="token operator">&lt;</span> ~/.ssh/id_rsa.pub
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> git@github.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  <span class="token function">git</span> remote <span class="token parameter variable">-v</span>
  <span class="token function">git</span> remote set-url origin ssh地址
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置多个-ssh" tabindex="-1"><a class="header-anchor" href="#配置多个-ssh" aria-hidden="true">#</a> 配置多个 SSH</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>  ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;name@costo1.com&quot;</span> //在命令行提示中指定文件名例如为id_1
  ssh-keygen <span class="token parameter variable">-t</span> rsa <span class="token parameter variable">-C</span> <span class="token string">&quot;name@costo2.com&quot;</span> //在命令行提示中指定文件名例如为id_2

.ssh文件下新增confg文件（无后缀的文件）

  Host xx.github.com
  HostName github.xx.com
  User test1
  IdentityFile  ~/.ssh/id_1

  Host github.com
  HostName github.com
  User test2
  IdentityFile  ~/.ssh/id_2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>将新产生的密钥加入管理（在你真正的项目的文件夹里面执行）</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-add ~/.ssh/id_2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果提示 Could not open a connection to your authentication agent，关掉所有的 bash 窗口，新开一个，然后输入以下</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>ssh-agent <span class="token function">bash</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用命令行查看是否授权成功</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">ssh</span> <span class="token parameter variable">-T</span> github.xx.com
<span class="token function">ssh</span> <span class="token parameter variable">-T</span> <span class="token parameter variable">-v</span> github.xx.com //详细log
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="将-github-代码同步到-gitlab-上" tabindex="-1"><a class="header-anchor" href="#将-github-代码同步到-gitlab-上" aria-hidden="true">#</a> 将 Github 代码同步到 Gitlab 上</h2><p>在已有 git 的项目代码下，执行</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> remote <span class="token function">add</span> gitlab ssh://git@xxxx/xx.git
<span class="token function">git</span> push gitlab master


<span class="token function">git</span> pull gitlab master
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="git-提交规范" tabindex="-1"><a class="header-anchor" href="#git-提交规范" aria-hidden="true">#</a> GIT 提交规范</h2><h3 id="git-commit-message" tabindex="-1"><a class="header-anchor" href="#git-commit-message" aria-hidden="true">#</a> git commit message</h3><ul><li>格式: type(scope): subject，其中 type 和 subject 是必须的</li><li>type 包括 <ul><li>feat: 新功能（feature）</li><li>fix: 修补 bug</li><li>docs: 文档（documentation）</li><li>style: 格式（不影响代码运行的变动）</li><li>refactor: 重构（即不是新增功能，也不是修改 bug 的代码变动）</li><li>chore: 构建过程或辅助工具的变动</li><li>revert: 撤销，版本回退</li><li>perf: 性能优化</li><li>test：测试</li><li>improvement: 改进</li><li>build: 打包</li><li>ci: 持续集成</li></ul></li><li>scope 说明此次提交的影响范围，英文</li><li>subject 简短描述，以动词开头，不使用大写字母，不使用中文</li></ul><p>例如： feat: add check in 或 chore(ios): add ios build target</p><h3 id="git-branch-name" tabindex="-1"><a class="header-anchor" href="#git-branch-name" aria-hidden="true">#</a> git branch name</h3><p>类似于 commit message 的要求，格式为 type/subject，多个词使用“-”相连，不使用下划线，不使用大写字母，不使用中文</p><p>例如： feat/check-in</p><h2 id="代码统计" tabindex="-1"><a class="header-anchor" href="#代码统计" aria-hidden="true">#</a> 代码统计</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// 查看工程代码 total 情况
<span class="token function">git</span> log <span class="token parameter variable">--pretty</span><span class="token operator">=</span>tformat: <span class="token parameter variable">--numstat</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39;</span>

// 查看成员提交代码情况
<span class="token function">git</span> log <span class="token parameter variable">--format</span><span class="token operator">=</span><span class="token string">&#39;%aN&#39;</span> <span class="token operator">|</span> <span class="token function">sort</span> <span class="token parameter variable">-u</span> <span class="token operator">|</span> <span class="token keyword">while</span> <span class="token builtin class-name">read</span> name<span class="token punctuation">;</span> <span class="token keyword">do</span> <span class="token builtin class-name">echo</span> <span class="token parameter variable">-en</span> <span class="token string">&quot;<span class="token variable">$name</span><span class="token entity" title="\\t">\\t</span>&quot;</span><span class="token punctuation">;</span> <span class="token function">git</span> log <span class="token parameter variable">--author</span><span class="token operator">=</span><span class="token string">&quot;<span class="token variable">$name</span>&quot;</span> <span class="token parameter variable">--pretty</span><span class="token operator">=</span>tformat: <span class="token parameter variable">--numstat</span> <span class="token operator">|</span> <span class="token function">awk</span> <span class="token string">&#39;{add += $1; subs += $2; loc += $1 - $2 } END { printf &quot;added lines: %s, removed lines: %s, total lines: %s\\n&quot;, add, subs, loc }&#39;</span> -<span class="token punctuation">;</span> <span class="token keyword">done</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,46),t=[l];function c(r,d){return a(),n("div",null,t)}const p=s(i,[["render",c],["__file","git.html.vue"]]);export{p as default};
