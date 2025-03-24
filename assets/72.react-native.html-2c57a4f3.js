import{_ as a,o as s,c as i,e}from"./app-4cb4de65.js";const n={},l=e(`<h1 id="react-native" tabindex="-1"><a class="header-anchor" href="#react-native" aria-hidden="true">#</a> React Native</h1><h2 id="android" tabindex="-1"><a class="header-anchor" href="#android" aria-hidden="true">#</a> Android</h2><h3 id="certificate" tabindex="-1"><a class="header-anchor" href="#certificate" aria-hidden="true">#</a> Certificate</h3><ul><li><p>生成 key： keytool -genkey -alias yourappname -keyalg RSA -validity 10000 -keystore yourappname.keystore</p></li><li><p>将 key 拷贝到 android\\app 下</p></li><li><p>app/build.gradle</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>    signingConfigs <span class="token punctuation">{</span>
    	<span class="token punctuation">..</span>.
        release <span class="token punctuation">{</span>
          storeFile file<span class="token punctuation">(</span><span class="token string">&#39;smart-sellng-qa.keystore&#39;</span><span class="token punctuation">)</span>
          storePassword <span class="token string">&#39;123456&#39;</span>
          keyAlias <span class="token string">&#39;smart-selling-qa&#39;</span>
          keyPassword <span class="token string">&#39;123456&#39;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    buildTypes <span class="token punctuation">{</span>
        release <span class="token punctuation">{</span>
            signingConfig signingConfigs.release
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>生成动作</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> android
gradlew assembleRelease
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="模拟器安装-apk" tabindex="-1"><a class="header-anchor" href="#模拟器安装-apk" aria-hidden="true">#</a> 模拟器安装 .apk</h3><ul><li>~\\AndroidSDK\\platform-tools</li><li>将待安装的 .apk 拷贝到此文件夹</li><li>打开模拟器</li><li>adb install xxxx.apk</li></ul><h3 id="联网问题" tabindex="-1"><a class="header-anchor" href="#联网问题" aria-hidden="true">#</a> 联网问题</h3><ul><li>adb reverse tcp:8081 tcp:8081</li></ul><h2 id="ios" tabindex="-1"><a class="header-anchor" href="#ios" aria-hidden="true">#</a> IOS</h2><h3 id="环境设置" tabindex="-1"><a class="header-anchor" href="#环境设置" aria-hidden="true">#</a> 环境设置</h3><ul><li><p>安装 Homebrew</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>/usr/bin/ruby <span class="token parameter variable">-e</span> <span class="token string">&quot;<span class="token variable"><span class="token variable">$(</span><span class="token function">curl</span> <span class="token parameter variable">-fsSL</span> https://raw.githubusercontent.com/Homebrew/install/master/install<span class="token variable">)</span></span>&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div></li><li><p>安装 ruby</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> ruby
gem sources <span class="token parameter variable">-l</span>
gem sources <span class="token parameter variable">--add</span> https://gems.ruby-china.com/ <span class="token parameter variable">--remove</span> https://rubygems.org/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>安装 CocoaPods</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> gem <span class="token function">install</span> <span class="token parameter variable">-n</span> /usr/local/bin cocoapods
pod setup
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> <span class="token function">node</span>
brew <span class="token function">install</span> watchman
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token builtin class-name">cd</span> ios
pod <span class="token function">install</span>
// glog异常
<span class="token function">sudo</span> xcode-select <span class="token parameter variable">--switch</span> /Applications/Xcode.app
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>// pod libwebp
<span class="token builtin class-name">cd</span> 到mac的/Users/用户名/.cocoapods/repos/master/Specs 下
 <span class="token function">find</span> /Users/xxxxx/.cocoapods/repos/master/Specs <span class="token parameter variable">-name</span> libwebp
 得到 libwebp的地址
/Users/xxx/.cocoapods/repos/master/Specs/1/9/2/libwebp
<span class="token builtin class-name">cd</span> /Users/xxx/.cocoapods/repos/master/Specs/1/9/2/libwebp
原本是
<span class="token string">&quot;source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
<span class="token string">&quot;git&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://chromium.googlesource.com/webm/libwebp&quot;</span>,
<span class="token string">&quot;tag&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;v0.6.0&quot;</span>
<span class="token punctuation">}</span>
替换为
<span class="token string">&quot;source&quot;</span><span class="token builtin class-name">:</span> <span class="token punctuation">{</span>
<span class="token string">&quot;git&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;https://github.com/webmproject/libwebp.git&quot;</span>,
<span class="token string">&quot;tag&quot;</span><span class="token builtin class-name">:</span> <span class="token string">&quot;v0.6.0&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h3 id="certificate-1" tabindex="-1"><a class="header-anchor" href="#certificate-1" aria-hidden="true">#</a> Certificate</h3><h4 id="生成-csr-文件" tabindex="-1"><a class="header-anchor" href="#生成-csr-文件" aria-hidden="true">#</a> 生成 CSR 文件</h4><ul><li>钥匙串访问 &gt; 从证书颁发机构请求证书</li><li>输入邮箱、常用名、存储到磁盘（CSR 文件尽量每个证书都制作一次，将常用名称区分开来，因为该常用名称是证书中的密钥的名字）</li></ul><h4 id="生成-certificate" tabindex="-1"><a class="header-anchor" href="#生成-certificate" aria-hidden="true">#</a> 生成 Certificate</h4><ul><li>IOS 开发者网站 https://developer.apple.com，点击 Certificates 菜单，点击添加，选择 CSR 文件</li><li>下载证书 ios_distribution.cer</li><li>.cer 是苹果的默认证书，跨平台开发工具打包要用到 p12 文件，获取 .p12 证书，双击 ios_distribution.cer 文件， 添加到 钥匙串中，然后在钥匙串中的【登陆】菜单找到该证书，右键 导出该证书，设置的密码，项目打包会用</li></ul><h4 id="创建-identifier" tabindex="-1"><a class="header-anchor" href="#创建-identifier" aria-hidden="true">#</a> 创建 Identifier</h4><ul><li>IOS 开发者网站 https://developer.apple.com，点击 Identifiers 菜单，点击添加，选择 APP IDs，添加说明和 Bundle ID</li></ul><h4 id="创建-profiles" tabindex="-1"><a class="header-anchor" href="#创建-profiles" aria-hidden="true">#</a> 创建 Profiles</h4><ul><li>IOS 开发者网站 https://developer.apple.com，点击Profiles 菜单，点击添加，选择 iOS App Development，选择自己的 App ID，选择自己的证书，</li></ul><h3 id="ios-打包" tabindex="-1"><a class="header-anchor" href="#ios-打包" aria-hidden="true">#</a> IOS 打包</h3><ul><li>新版本的 xCode 需要打开 xcworkspace 文件 （否则会提示错误）</li><li>更改包名</li><li>ios/ 文件夹下添加文件夹 bundle</li><li>package.json 加 &quot;bundle-ios&quot;:&quot;react-native bundle --entry-file index.js --bundle-output ./ios/bundle/index.ios.jsbundle --platform ios --assets-dest ./ios/bundle --dev false&quot;</li><li>yarn bundle-ios</li><li>将文件夹 bundle 拖拽到 xCode/{rnpro}/下，以 Create folder references 的方式</li><li>模拟器选择 ios device， 执行 product-archive</li><li>完成后，执行 Distribute App，选择 Enterprise</li><li>导出 .ipa</li><li>xCode &gt; Window &gt; Organizer 可查看历史打包记录</li></ul><h2 id="lanch-image" tabindex="-1"><a class="header-anchor" href="#lanch-image" aria-hidden="true">#</a> Lanch Image</h2><h3 id="android-1" tabindex="-1"><a class="header-anchor" href="#android-1" aria-hidden="true">#</a> Android</h3><ul><li>480 x 800 （mipmap-hdpi）</li><li>320 x 480 (mipmap-mdpi)</li><li>720 x 1280 (mipmap-xhdpi)</li><li>960 x 1600 (mipmap-xxhdpi)</li><li>1280 x 1920 (mipmap-xxxhdpi)</li></ul><h3 id="ios-1" tabindex="-1"><a class="header-anchor" href="#ios-1" aria-hidden="true">#</a> IOS</h3><ul><li>iphone 4.7‘’ 750x1334</li><li>iphone 5.5‘’ 1242x2208</li><li>iphone protrait 320x480</li><li>iphone protrait 640x960 2x</li><li>iphone protrait 640x1136</li><li>iphone xr 828x1792</li><li>iphone xs 1125x2436</li><li>iphone xs max 1242x2688</li></ul><h2 id="icon" tabindex="-1"><a class="header-anchor" href="#icon" aria-hidden="true">#</a> Icon</h2><h3 id="android-一个圆的-一个方的" tabindex="-1"><a class="header-anchor" href="#android-一个圆的-一个方的" aria-hidden="true">#</a> Android (一个圆的，一个方的)</h3><ul><li>72 x 72 (mipmap-hdpi)</li><li>48 x 48 (mipmap-mdpi)</li><li>96 x 96 (mipmap-xhdpi)</li><li>144 x 144 (mipmap-xxhdpi)</li><li>192 x 192 (mipmap-xxxhdpi)</li></ul><h3 id="ios-2" tabindex="-1"><a class="header-anchor" href="#ios-2" aria-hidden="true">#</a> IOS</h3><ul><li>ios-40x40 2x</li><li>ios-58x58 2x</li><li>ios-60x60 3x</li><li>ios-80x80 2x</li><li>ios-87x87 3x</li><li>ios-120x120 2x</li><li>ios-120x120 3x</li><li>ios-180x180 3x</li><li>ios-1024x1024 1x</li></ul>`,32),r=[l];function d(t,c){return s(),i("div",null,r)}const p=a(n,[["render",d],["__file","72.react-native.html.vue"]]);export{p as default};
