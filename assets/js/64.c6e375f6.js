(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{270:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("当项目开发完毕，只需要运行一行命令就可以打包你的应用：")]),t._v(" "),t._m(2),t._m(3),t._v(" "),s("p",[t._v("如果需要自定义构建，比如指定 "),s("code",[t._v("dist")]),t._v(" 目录等，则需要通过 "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/blob/master/config/index.js",target:"_blank",rel:"noopener noreferrer"}},[t._v("config"),s("OutboundLink")],1),t._v(" 进行配置。")]),t._v(" "),s("br"),t._v(" "),t._m(4),t._v(" "),s("p",[t._v("所有测试环境或者正式环境变量的配置都在 "),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/tree/master/config",target:"_blank",rel:"noopener noreferrer"}},[t._v("@/build/config"),s("OutboundLink")],1),t._v(" 目录之下")]),t._v(" "),t._m(5),t._v(" "),t._m(6),s("p",[t._v("你可以在你的代码中直接使用即可访问你配置的环境变量，如：")]),t._v(" "),t._m(7),s("br"),t._v(" "),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10),s("p",[t._v("运行之后你就可以在 http://127.0.0.1:8888 页面看到具体的体积分布")]),t._v(" "),t._m(11),t._v(" "),s("p",[t._v("具体的优化可以参考 "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/26710831",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack 大法之 Code Splitting"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("强烈建议开启 gzip ，使用之后普遍体积只有原先 1/3 左右。打出来的 app.js 过大，查看一下是不是 Uglify 配置不正确或者 sourceMap 没弄对。 优化相关请看该 "),s("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/27710902",target:"_blank",rel:"noopener noreferrer"}},[t._v("Webpack Freestyle 之 Long Term Cache"),s("OutboundLink")],1)])]),t._v(" "),s("br"),t._v(" "),t._m(12),t._v(" "),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),t._m(17),t._v(" "),s("p",[t._v("两者的区别简单来说是对路由方式的处理不一样，"),s("code",[t._v("hashHistory")]),t._v(" 是以 "),s("code",[t._v("#")]),t._v(" 后面的路径进行处理，通过 "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/History_API",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTML 5 History"),s("OutboundLink")],1),t._v(" 进行前端路由管理，而 "),s("code",[t._v("browserHistory")]),t._v(" 则是类似我们通常的页面访问路径，并没有 "),s("code",[t._v("#")]),t._v("，但要通过服务端的配置，能够访问指定的 url 都定向到当前页面，从而能够进行前端的路由管理。")]),t._v(" "),t._m(18),t._v(" "),t._m(19),t._m(20),t._v(" "),t._m(21),t._v(" "),s("p",[t._v("Apache")]),t._v(" "),t._m(22),s("p",[t._v("nginx")]),t._v(" "),t._m(23),s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("更多配置请查看 "),s("a",{attrs:{href:"https://router.vuejs.org/zh-cn/essentials/history-mode.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("vue-router 文档"),s("OutboundLink")],1)])]),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),t._m(27),t._v(" "),s("p",[t._v(".htaccess 文件内容")]),t._v(" "),t._m(28),s("p",[t._v("相关"),s("a",{attrs:{href:"https://github.com/PanJiaChen/vue-element-admin/issues/370",target:"_blank",rel:"noopener noreferrer"}},[t._v("issue"),s("OutboundLink")],1)])])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"构建和发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建和发布","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建和发布")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"构建"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#构建","aria-hidden":"true"}},[this._v("#")]),this._v(" 构建")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包正式环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:prod\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打包测试环境")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build:sit\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("构建打包成功之后，会在根目录生成 "),s("code",[t._v("dist")]),t._v(" 文件夹，里面就是构建打包好的文件，通常是 "),s("code",[t._v("***.js")]),t._v(" 、"),s("code",[t._v("***.css")]),t._v("、"),s("code",[t._v("index.html")]),t._v(" 等静态文件。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"环境变量"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#环境变量","aria-hidden":"true"}},[this._v("#")]),this._v(" 环境变量")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("它们都会通过 "),e("code",[this._v("webpack.DefinePlugin")]),this._v(" 插件注入到全局")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("webpack"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("DefinePlugin")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'process.env'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'../config/xxx.env'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 这样即可获取配置在 @/build/config api 的 base_url 了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" baseURL "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" process"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("env"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("BASE_API")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"分析构建文件体积"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#分析构建文件体积","aria-hidden":"true"}},[this._v("#")]),this._v(" 分析构建文件体积")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("如果你的构建文件很大，你可以通过 "),e("code",[this._v("webpack-bundle-analyzer")]),this._v(" 命令构建并分析依赖模块的体积分布，从而优化你的代码。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[this._v("npm")]),this._v(" run build:prod --report\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[e("img",{attrs:{src:"https://wpimg.wallstcn.com/3fddf034-2b38-4299-b0d2-b748fb2abef0.jpg",alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"发布"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#发布","aria-hidden":"true"}},[this._v("#")]),this._v(" 发布")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("对于发布来讲，只需要将最终生成的静态文件，也就是通常情况下 "),e("code",[this._v("dist")]),this._v(" 文件夹的静态文件发布到你的 cdn 或者静态服务器即可，需要注意的是其中的 "),e("code",[this._v("index.html")]),this._v(" 通常会是你后台服务的入口页面，在确定了 js 和 css 的静态之后可能需要改变页面的引入路径。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"tip custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),e("p",[this._v("部署时可能会发现资源路径不对 ,只需修改 "),e("code",[this._v("config/index.js")]),this._v(" 文件资源路径即可。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[this._v("assetsPublicPath"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[this._v(":")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[this._v("'./'")]),this._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[this._v("//请根据自己路径来配置更改")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"前端路由与服务端的结合"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#前端路由与服务端的结合","aria-hidden":"true"}},[this._v("#")]),this._v(" 前端路由与服务端的结合")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("vue-element-admin 中，前端路由使用的是 "),e("code",[this._v("vue-router")]),this._v("，所以你可以选择两种方式："),e("code",[this._v("browserHistory")]),this._v(" 和 "),e("code",[this._v("hashHistory")]),this._v("。")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("本项目默认使用的是 "),s("code",[t._v("hashHistory")]),t._v(" ，所以如果你的 url 里有 "),s("code",[t._v("#")]),t._v("，想去掉的话，需要切换为 "),s("code",[t._v("browserHistory")]),t._v("。\n修改 "),s("code",[t._v("src/router/index.js")]),t._v(" 中的 mode 即可")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Router")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// mode: 'history', //后端支持可开")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v("如果你使用的是静态站点，那么使用 "),s("code",[t._v("browserHistory")]),t._v(" 可能会无法访问你的应用，因为假设你访问 "),s("code",[t._v("http://localhost:9527/dashboard")]),t._v("，那么其实你的静态服务器并没有能够映射的文件，而使用 "),s("code",[t._v("hashHistory")]),t._v(" 则不会有这个问题，因为它的页面路径是以 "),s("code",[t._v("#")]),t._v(" 开始的，所有访问都在前端完成，如："),s("code",[t._v("http://localhost:9527/#/dashboard/")]),t._v("。")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("不过如果你有对应的后台服务器，那么我们推荐采用 "),e("code",[this._v("browserHistory")]),this._v("，只需要在服务端做一个映射，比如：")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("IfModule mod_rewrite.c"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n  RewriteEngine On\n  RewriteBase /\n  RewriteRule ^index\\.html$ - "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  RewriteCond %"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REQUEST_FILENAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-f\n  RewriteCond %"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("REQUEST_FILENAME"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("-d\n  RewriteRule "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v(".")]),t._v(" /index.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("L"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("/IfModule"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  try_files "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$uri")]),t._v("/ /index.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"apache"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#apache","aria-hidden":"true"}},[this._v("#")]),this._v(" Apache")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",[s("li",[t._v("需要修改"),s("code",[t._v("router/index.js")]),t._v("中"),s("code",[t._v("new Router")]),t._v(" 配置，加一个"),s("code",[t._v("base: '/vue/'")]),t._v(", 它指定应用的基路径，该应用是服务于"),s("code",[t._v("localhost/vue")]),t._v("路径下，所以必须加"),s("code",[t._v("base")]),t._v("配置，否则应用会展示 404 页面")]),t._v(" "),s("li",[t._v("需要修改"),s("code",[t._v("config/index.js")]),t._v("中 build 下的"),s("code",[t._v("assetsPublicPath: '/vue/'")]),t._v("，如果用相对路径，chunk 文件会报错找不到。")]),t._v(" "),s("li",[t._v("修改"),s("code",[t._v("httpd.conf")]),t._v("文件，开启 rewrite_module 功能。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("code",[t._v("LoadModule rewrite_module libexec/apache2/mod_rewrite.so")]),t._v("，去掉前面的#。")]),t._v(" "),s("li",[t._v("然后找到"),s("code",[t._v("AllowOverride None")]),t._v("的那行，把它改成"),s("code",[t._v("AllowOverride All")]),t._v("，来使"),s("code",[t._v(".htaccess")]),t._v("文件生效。")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ol",{attrs:{start:"4"}},[s("li",[t._v("在 apache 的"),s("code",[t._v("www/vue")]),t._v(" 目录下新建"),s("code",[t._v(".htaccess")]),t._v("文件, 需要修改"),s("code",[t._v("RewriteRule")]),t._v(" 为"),s("code",[t._v("/vue/index.html")]),t._v(", 否则刷新页面服务端会直接报 404 错误。")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("<IfModule mod_rewrite.c>\n  RewriteEngine On\n  RewriteBase /\n  RewriteRule ^index\\.html$ - [L]\n  RewriteCond %{REQUEST_FILENAME} !-f\n  RewriteCond %{REQUEST_FILENAME} !-d\n  RewriteRule . /vue/index.html [L]\n</IfModule>\n")])])])}],!1,null,null,null);e.default=r.exports}}]);