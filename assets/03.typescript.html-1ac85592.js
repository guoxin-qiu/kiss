import{_ as n,o as s,c as a,e as t}from"./app-4cb4de65.js";const e={},o=t(`<h1 id="typescript" tabindex="-1"><a class="header-anchor" href="#typescript" aria-hidden="true">#</a> TypeScript</h1><ul><li>tsconfig 的详细配置：https://www.typescriptlang.org/tsconfig</li><li>tsconfig 的协议描述网址：http://json.schemastore.org/tsconfig</li></ul><h2 id="tsconfig-json" tabindex="-1"><a class="header-anchor" href="#tsconfig-json" aria-hidden="true">#</a> tsconfig.json</h2><h3 id="文件选项配置" tabindex="-1"><a class="header-anchor" href="#文件选项配置" aria-hidden="true">#</a> 文件选项配置</h3><ul><li><strong>files</strong>: 表示编译需要编译的单个文件列表</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;files&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// 指定编译文件是src目录下的a.ts文件</span>
  <span class="token string">&quot;scr/a.ts&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>include</strong>: 表示编译需要编译的文件或目录</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// &quot;scr&quot; // 会编译src目录下的所有文件，包括子目录</span>
  <span class="token comment">// &quot;scr/*&quot; // 只会编译scr一级目录下的文件</span>
  <span class="token string">&quot;scr/*/*&quot;</span> <span class="token comment">// 只会编译scr二级目录下的文件</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>exclude</strong>：表示编译器需要排除的文件或文件夹（默认排除 node_modules 文件夹下文件）</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;exclude&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
  <span class="token comment">// 排除src目录下的lib文件夹下的文件不会编译</span>
  <span class="token string">&quot;src/lib&quot;</span>
<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>extends</strong>: 引入其他配置文件，继承配置</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token comment">// 把基础配置抽离成tsconfig.base.json文件，然后引入</span>
<span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./tsconfig.base.json&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="编译选项配置" tabindex="-1"><a class="header-anchor" href="#编译选项配置" aria-hidden="true">#</a> 编译选项配置</h3><ul><li><strong>compilerOptions</strong>: 配置编译选项,编译选项配置非常繁杂，有很多配置，这里只列出常用的配置。</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token property">&quot;incremental&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// TS编译器在第一次编译之后会生成一个存储编译信息的文件，第二次编译会在第一次的基础上进行增量编译，可以提高编译的速度</span>
  <span class="token property">&quot;tsBuildInfoFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./buildFile&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 增量编译文件的存储位置</span>
  <span class="token property">&quot;diagnostics&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 打印诊断信息</span>
  <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ES5&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 目标语言的版本</span>
  <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;CommonJS&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 生成代码的模板标准</span>
  <span class="token property">&quot;outFile&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./app.js&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 将多个相互依赖的文件生成一个文件，可以用在AMD模块中，即开启时应设置&quot;module&quot;: &quot;AMD&quot;,</span>
  <span class="token property">&quot;lib&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;DOM&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES2015&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ScriptHost&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;ES2019.Array&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// TS需要引用的库，即声明文件，es5 默认引用dom、es5、scripthost,如需要使用es的高级版本特性，通常都需要配置，如es8的数组新特性需要引入&quot;ES2019.Array&quot;,</span>
  <span class="token property">&quot;allowJS&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许编译器编译JS，JSX文件</span>
  <span class="token property">&quot;checkJs&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许在JS文件中报错，通常与allowJS一起使用</span>
  <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./dist&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定输出目录</span>
  <span class="token property">&quot;rootDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定输出文件目录(用于输出)，用于控制输出目录结构</span>
  <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 生成声明文件，开启后会自动生成声明文件</span>
  <span class="token property">&quot;declarationDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./file&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定生成声明文件存放目录</span>
  <span class="token property">&quot;emitDeclarationOnly&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 只生成声明文件，而不会生成js文件</span>
  <span class="token property">&quot;sourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 生成目标文件的sourceMap文件</span>
  <span class="token property">&quot;inlineSourceMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 生成目标文件的inline SourceMap，inline SourceMap会包含在生成的js文件中</span>
  <span class="token property">&quot;declarationMap&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 为声明文件生成sourceMap</span>
  <span class="token property">&quot;typeRoots&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 声明文件目录，默认时node_modules/@types</span>
  <span class="token property">&quot;types&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 加载的声明文件包</span>
  <span class="token property">&quot;removeComments&quot;</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 删除注释</span>
  <span class="token property">&quot;noEmit&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不输出文件,即编译后不会生成任何js文件</span>
  <span class="token property">&quot;noEmitOnError&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 发送错误时不输出任何文件</span>
  <span class="token property">&quot;noEmitHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不生成helper函数，减小体积，需要额外安装，常配合importHelpers一起使用</span>
  <span class="token property">&quot;importHelpers&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 通过tslib引入helper函数，文件必须是模块</span>
  <span class="token property">&quot;downlevelIteration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 降级遍历器实现，如果目标源是es3/5，那么遍历器会有降级的实现</span>
  <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 开启所有严格的类型检查</span>
  <span class="token property">&quot;alwaysStrict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 在代码中注入&#39;use strict&#39;</span>
  <span class="token property">&quot;noImplicitAny&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不允许隐式的any类型</span>
  <span class="token property">&quot;strictNullChecks&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不允许把null、undefined赋值给其他类型的变量</span>
  <span class="token property">&quot;strictFunctionTypes&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不允许函数参数双向协变</span>
  <span class="token property">&quot;strictPropertyInitialization&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 类的实例属性必须初始化</span>
  <span class="token property">&quot;strictBindCallApply&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 严格的bind/call/apply检查</span>
  <span class="token property">&quot;noImplicitThis&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 不允许this有隐式的any类型</span>
  <span class="token property">&quot;noUnusedLocals&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 检查只声明、未使用的局部变量(只提示不报错)</span>
  <span class="token property">&quot;noUnusedParameters&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 检查未使用的函数参数(只提示不报错)</span>
  <span class="token property">&quot;noFallthroughCasesInSwitch&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 防止switch语句贯穿(即如果没有break语句后面不会执行)</span>
  <span class="token property">&quot;noImplicitReturns&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//每个分支都会有返回值</span>
  <span class="token property">&quot;esModuleInterop&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许export=导出，由import from 导入</span>
  <span class="token property">&quot;allowUmdGlobalAccess&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 允许在模块中全局变量的方式访问umd模块</span>
  <span class="token property">&quot;moduleResolution&quot;</span><span class="token operator">:</span> <span class="token string">&quot;node&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 模块解析策略，ts默认用node的解析策略，即相对的方式导入</span>
  <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 解析非相对模块的基地址，默认是当前目录</span>
  <span class="token property">&quot;paths&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 路径映射，相对于baseUrl</span>
    <span class="token comment">// 如使用jq时不想使用默认版本，而需要手动指定版本，可进行如下配置</span>
    <span class="token property">&quot;jquery&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;node_modules/jquery/dist/jquery.min.js&quot;</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;rootDirs&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;out&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 将多个目录放在一个虚拟目录下，用于运行时，即编译后引入文件的位置可能发生变化，这也设置可以虚拟src和out在同一个目录下，不用再去改变路径也不会报错</span>
  <span class="token property">&quot;listEmittedFiles&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 打印输出文件</span>
  <span class="token property">&quot;listFiles&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token comment">// 打印编译的文件(包括引用的声明文件)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="工程引用配置" tabindex="-1"><a class="header-anchor" href="#工程引用配置" aria-hidden="true">#</a> 工程引用配置</h3><ul><li><strong>references</strong>: 指定工程引用依赖 在项目开发中，有时候我们为了方便将前端项目和后端 node 项目放在同一个目录下开发，两个项目依赖同一个配置文件和通用文件，但我们希望前后端项目进行灵活的分别打包，那么我们可以进行如下配置：</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code>Project
  - src
    - client <span class="token comment">//客户端项目</span>
      - index.ts <span class="token comment">// 客户端项目文件</span>
      - tsconfig.json <span class="token comment">// 客户端配置文件</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../tsconfig.json&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 继承基础配置</span>
          <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../dist/client&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定输出目录</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 指定依赖的工程</span>
            <span class="token punctuation">{</span><span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./common&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
    - common <span class="token comment">// 前后端通用依赖工程</span>
      - index.ts  <span class="token comment">// 前后端通用文件</span>
      - tsconfig.json <span class="token comment">// 前后端通用代码配置文件</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../tsconfig.json&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 继承基础配置</span>
          <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../dist/client&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定输出目录</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    - server <span class="token comment">// 服务端项目</span>
      - index.ts <span class="token comment">// 服务端项目文件</span>
      - tsconfig.json <span class="token comment">// 服务端项目配置文件</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;extends&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../tsconfig.json&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 继承基础配置</span>
          <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;outDir&quot;</span><span class="token operator">:</span> <span class="token string">&quot;../../dist/server&quot;</span><span class="token punctuation">,</span> <span class="token comment">// 指定输出目录</span>
          <span class="token punctuation">}</span><span class="token punctuation">,</span>
          <span class="token property">&quot;references&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token comment">// 指定依赖的工程</span>
            <span class="token punctuation">{</span><span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;./common&quot;</span><span class="token punctuation">}</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
  - tsconfig.json <span class="token comment">// 前后端项目通用基础配置</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;compilerOptions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;target&quot;</span><span class="token operator">:</span> <span class="token string">&quot;es5&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;module&quot;</span><span class="token operator">:</span> <span class="token string">&quot;commonjs&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;strict&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
        <span class="token property">&quot;composite&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 增量编译</span>
        <span class="token property">&quot;declaration&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样配置以后，就可以单独的构建前后端项目。</p><ul><li>前端项目构建</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">-v</span> src/client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>后端项目构建</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>tsc <span class="token parameter variable">-b</span> src/server
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>输出目录</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Project
 - dist
  - client
    - index.js
    - index.d.ts
  - common
    - index.js
    - index.d.ts
  - server
    - index.js
    - index.d.ts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="常见问题" tabindex="-1"><a class="header-anchor" href="#常见问题" aria-hidden="true">#</a> 常见问题</h2><h3 id="tsconfig-json-1" tabindex="-1"><a class="header-anchor" href="#tsconfig-json-1" aria-hidden="true">#</a> tsconfig.json</h3><ol><li>无法写入文件 因为它会覆盖输入文件: 在<strong>exclude</strong>中加入<strong>outDir</strong>和<strong>node_modules</strong></li></ol><h2 id="一些技巧" tabindex="-1"><a class="header-anchor" href="#一些技巧" aria-hidden="true">#</a> 一些技巧</h2><ul><li>通过 /** */ 形式的注释可以给 TS 类型做标记提示，编辑器会有更好的提示</li><li>接口继承：和类一样，接口也可以相互继承。可以从一个接口里复制成员到另一个接口里，可以更灵活地将接口分割到可重用的模块里。一个接口可以继承多个接口，创建出多个接口的合成接口</li><li>Interface &amp; Type：能用 interface 实现，就用 interface , 如果不能就用 type。</li></ul>`,30),p=[o];function l(c,i){return s(),a("div",null,p)}const u=n(e,[["render",l],["__file","03.typescript.html.vue"]]);export{u as default};
