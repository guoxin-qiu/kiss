import{_ as n,o as s,c as a,e as t}from"./app-4cb4de65.js";const p={},e=t(`<h1 id="taro" tabindex="-1"><a class="header-anchor" href="#taro" aria-hidden="true">#</a> Taro</h1><h2 id="创建项目" tabindex="-1"><a class="header-anchor" href="#创建项目" aria-hidden="true">#</a> 创建项目</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> init
<span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> @tarojs/cli
<span class="token function">yarn</span> taro init app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置项目" tabindex="-1"><a class="header-anchor" href="#配置项目" aria-hidden="true">#</a> 配置项目</h2><ul><li>配置导出文件路径</li></ul><p>修改 config/index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token punctuation">{</span>
  <span class="token literal-property property">outputRoot</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">dist/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">TARO_ENV</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>配置路径别名</li></ul><p>修改 config/index.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token comment">// ...</span>
  <span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token string-property property">&#39;@&#39;</span><span class="token operator">:</span> path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>修改 tsconfig.json</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;@/*&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src/*&quot;</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="taro-ui" tabindex="-1"><a class="header-anchor" href="#taro-ui" aria-hidden="true">#</a> Taro-UI</h2><h3 id="初始化" tabindex="-1"><a class="header-anchor" href="#初始化" aria-hidden="true">#</a> 初始化</h3><p>添加引用</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> taro-ui@3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 config/index.js 中添加</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">h5</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">esnextModules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;taro-ui&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="按需加载" tabindex="-1"><a class="header-anchor" href="#按需加载" aria-hidden="true">#</a> 按需加载</h3><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> babel-plugin-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 babel.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;taro-ui&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">customName</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token keyword">const</span> nameSection <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">if</span> <span class="token punctuation">(</span>nameSection<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">4</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token comment">// 子组件的路径跟主组件一样</span>
            nameSection<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token punctuation">}</span>

          <span class="token comment">// 指定组件做路径映射</span>
          <span class="token keyword">const</span> pathMap <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;tabs/pan&#39;</span><span class="token operator">:</span> <span class="token string">&#39;tabs-pan&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;modal-action&#39;</span><span class="token operator">:</span> <span class="token string">&#39;modal/action&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;modal-content&#39;</span><span class="token operator">:</span> <span class="token string">&#39;modal/content&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;modal-header&#39;</span><span class="token operator">:</span> <span class="token string">&#39;modal/header&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">;</span>

          <span class="token comment">// 过滤掉前面的 at 字符</span>
          <span class="token keyword">const</span> path <span class="token operator">=</span> nameSection<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">taro-ui/lib/components/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>pathMap<span class="token punctuation">[</span>path<span class="token punctuation">]</span> <span class="token operator">||</span> path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
          <span class="token comment">// 这里的name是customName方法返回的，即经过上一步处理后的</span>
          <span class="token keyword">const</span> wholePath <span class="token operator">=</span> name<span class="token punctuation">.</span><span class="token function">split</span><span class="token punctuation">(</span><span class="token string">&#39;/&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> compName <span class="token operator">=</span> wholePath<span class="token punctuation">[</span>wholePath<span class="token punctuation">.</span>length <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">const</span> fix <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string-property property">&#39;tabs-pane&#39;</span><span class="token operator">:</span> <span class="token string">&#39;tabs&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;modal/action&#39;</span><span class="token operator">:</span> <span class="token string">&#39;modal&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;modal/header&#39;</span><span class="token operator">:</span> <span class="token string">&#39;modal&#39;</span><span class="token punctuation">,</span>
            <span class="token string-property property">&#39;modal/content&#39;</span><span class="token operator">:</span> <span class="token string">&#39;modal&#39;</span><span class="token punctuation">,</span>
          <span class="token punctuation">}</span><span class="token punctuation">[</span>compName<span class="token punctuation">]</span><span class="token punctuation">;</span>
          <span class="token keyword">return</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">taro-ui/dist/style/components/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>fix <span class="token operator">||</span> compName<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.scss</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用</p><div class="language-tsx line-numbers-mode" data-ext="tsx"><pre class="language-tsx"><code><span class="token keyword">import</span> <span class="token punctuation">{</span> AtButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;taro-ui&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token string">&#39;taro-ui/dist/style/components/button.scss&#39;</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="antmjs-vantui" tabindex="-1"><a class="header-anchor" href="#antmjs-vantui" aria-hidden="true">#</a> @Antmjs/vantui</h2><p>安装组件</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @antmjs/vantui
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 config/index.js 中添加</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token literal-property property">h5</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">esnextModules</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">@antmjs[\\\\/]vantui</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> babel-plugin-import
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>配置 babel.config.js</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">[</span>
      <span class="token string">&#39;import&#39;</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token literal-property property">libraryName</span><span class="token operator">:</span> <span class="token string">&#39;@antmjs/vantui&#39;</span><span class="token punctuation">,</span>
        <span class="token literal-property property">libraryDirectory</span><span class="token operator">:</span> <span class="token string">&#39;es&#39;</span><span class="token punctuation">,</span>
        <span class="token function-variable function">style</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/style/less</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token string">&#39;@antmjs/vantui&#39;</span><span class="token punctuation">,</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="global-styles" tabindex="-1"><a class="header-anchor" href="#global-styles" aria-hidden="true">#</a> Global Styles</h2><h3 id="scss" tabindex="-1"><a class="header-anchor" href="#scss" aria-hidden="true">#</a> SCSS</h3><p>在 config/index.js 中添加</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">sass</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resource</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/styles/global.scss&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">// data: &#39;$nav-height: 48px;&#39;,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="less" tabindex="-1"><a class="header-anchor" href="#less" aria-hidden="true">#</a> LESS</h3><p>安装依赖</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> <span class="token parameter variable">-D</span> taro-plugin-style-resource
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>在 config/index.js 中添加</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">const</span> path <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&#39;path&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pluginOptions <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">less</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">patterns</span><span class="token operator">:</span> <span class="token punctuation">[</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">&#39;..&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;src/styles/global.less&#39;</span><span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> config <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token string">&#39;taro-plugin-style-resource&#39;</span><span class="token punctuation">,</span> pluginOptions<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,42),o=[e];function i(c,l){return s(),a("div",null,o)}const u=n(p,[["render",i],["__file","74.taro.html.vue"]]);export{u as default};
