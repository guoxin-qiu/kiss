import{_ as s,r as i,o,c as t,a as n,b as r,d,e}from"./app-4924a84b.js";const l={},c=e(`<h1 id="nodejs" tabindex="-1"><a class="header-anchor" href="#nodejs" aria-hidden="true">#</a> Nodejs</h1><h2 id="统一前端-node-版本" tabindex="-1"><a class="header-anchor" href="#统一前端-node-版本" aria-hidden="true">#</a> 统一前端 Node 版本</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// package.json</span>
<span class="token property">&quot;engines&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;14.x || 16.x&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;npm&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&gt;=6.14.x&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置之后你会发现，该字段只对 yarn 生效。要对 npm 也生效，需在项目根目录下的 .npmrc 文件中增加如下配置</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>//.npmrc
engine-strict = true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>错误的 Node.js 将直接退出。</p><h2 id="锁定包管理器" tabindex="-1"><a class="header-anchor" href="#锁定包管理器" aria-hidden="true">#</a> 锁定包管理器</h2><ol><li><code>yarn add only-allow -D</code></li><li>在 package.json 中添加配置</li></ol><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
  <span class="token property">&quot;preinstall&quot;</span><span class="token operator">:</span><span class="token string">&quot;only-allow yarn&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="nvm" tabindex="-1"><a class="header-anchor" href="#nvm" aria-hidden="true">#</a> NVM</h2><h3 id="下载地址" tabindex="-1"><a class="header-anchor" href="#下载地址" aria-hidden="true">#</a> 下载地址</h3>`,11),p={href:"https://github.com/coreybutler/nvm-windows/releases",target:"_blank",rel:"noopener noreferrer"},u=e(`<p>推荐使用安装包</p><h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>nvm list
nvm <span class="token function">install</span> <span class="token number">10.12</span>.0
nvm use <span class="token number">10.12</span>.0
nvm uninstall <span class="token number">10.12</span>.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h3><ul><li>执行 nvm use 乱码 <ul><li>安装路径不能有中文或者空格(包括 nvm 和 nodejs 的路径)</li><li>运行时，cmd 要管理员权限运行</li></ul></li></ul>`,5);function h(v,m){const a=i("ExternalLinkIcon");return o(),t("div",null,[c,n("p",null,[n("a",p,[r("nvm-windows"),d(a)])]),u])}const k=s(l,[["render",h],["__file","node.html.vue"]]);export{k as default};