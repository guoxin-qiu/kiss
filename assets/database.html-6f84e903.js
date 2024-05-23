import{_ as e,o as s,c as a,e as n}from"./app-4924a84b.js";const r={},i=n(`<h1 id="数据库相关" tabindex="-1"><a class="header-anchor" href="#数据库相关" aria-hidden="true">#</a> 数据库相关</h1><h2 id="sql-server" tabindex="-1"><a class="header-anchor" href="#sql-server" aria-hidden="true">#</a> SQL Server</h2><ul><li>命令行重启数据库服务，可解决数据库启动加载错误</li></ul><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>net stop sqlserveragent

net stop mssqlserver

net start mssqlserver

net start sqlserveragent
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),d=[i];function l(t,c){return s(),a("div",null,d)}const o=e(r,[["render",l],["__file","database.html.vue"]]);export{o as default};
