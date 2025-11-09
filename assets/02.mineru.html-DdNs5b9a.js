import{_ as s,c as a,a as e,o as i}from"./app-Dmwo-0Oh.js";const l={};function p(c,n){return i(),a("div",null,n[0]||(n[0]=[e(`<h1 id="mineru" tabindex="-1"><a class="header-anchor" href="#mineru"><span>Mineru</span></a></h1><h2 id="安装" tabindex="-1"><a class="header-anchor" href="#安装"><span>安装</span></a></h2><div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh"><pre><code><span class="line">conda create <span class="token parameter variable">-n</span> mineru <span class="token assign-left variable">python</span><span class="token operator">=</span><span class="token number">3.10</span></span>
<span class="line">conda activate mineru</span>
<span class="line"></span>
<span class="line">pip <span class="token function">install</span> <span class="token parameter variable">-U</span> magic-pdf<span class="token punctuation">[</span>full<span class="token punctuation">]</span> --extra-index-url https://wheels.myhloli.com <span class="token parameter variable">-i</span> https://mirrors.aliyun.com/pypi/simple</span>
<span class="line">magic-pdf <span class="token parameter variable">--version</span></span>
<span class="line"></span>
<span class="line">pip <span class="token function">install</span> modelscope <span class="token comment"># 下载比较慢</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># git clone https://gitee.com/myhloli/MinerU.git</span></span>
<span class="line"><span class="token comment"># git clone https://github.com/opendatalab/MinerU.git</span></span>
<span class="line"><span class="token function">git</span> clone git@github.com:opendatalab/MinerU.git</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 在conda环境下，目录定位到minerU项目的脚本文件夹scripts下</span></span>
<span class="line"><span class="token comment"># 会下载模型到C:\\Users\\USER\\.cache\\modelscope，文件较大</span></span>
<span class="line">python download_models.py</span>
<span class="line"></span>
<span class="line"><span class="token comment"># 配置文件在C:\\Users\\USER\\magic-pdf.json</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># cd 到 MinerU 下的 demo文件夹</span></span>
<span class="line">magic-pdf <span class="token parameter variable">-p</span> pdfs/small_ocr.pdf <span class="token parameter variable">-o</span> ./output   <span class="token comment"># -m, --method [ocr|txt|auto]</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,3)]))}const o=s(l,[["render",p]]),r=JSON.parse('{"path":"/3.tech/82.AI-tools/02.mineru.html","title":"Mineru","lang":"zh-cn","frontmatter":{},"headers":[{"level":2,"title":"安装","slug":"安装","link":"#安装","children":[]}],"git":{"updatedTime":1747045973000,"contributors":[{"name":"guoxin-qiu","username":"guoxin-qiu","email":"guoxin.qiu@outlook.com","commits":1,"url":"https://github.com/guoxin-qiu"}],"changelog":[{"hash":"2d65f8ccfef47eb57f18df5040a78ba6adcfb9b4","time":1747045973000,"email":"guoxin.qiu@outlook.com","author":"guoxin-qiu","message":"update0512"}]},"filePathRelative":"3.tech/82.AI-tools/02.mineru.md"}');export{o as comp,r as data};
