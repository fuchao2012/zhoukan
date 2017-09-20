
## Javascript

### [Asm.js: The JavaScript Compile Target](http://ejohn.org/blog/asmjs-javascript-compile-target/)

    [ASM.js](http://asmjs.org/)是JavaScript的一个严格子集，可以用来作为一个底层的、高效编译器目标语言。它使用[Emscripten](http://emscripten.org/)将C/C++代码生成的[LLVM](http://llvm.org/)字节码转化为JavaScript代码。在Firefox的一个开发版中，已经[内置了对ASM.js的优化](https://blog.mozilla.org/luke/2013/03/21/asm-js-in-firefox-nightly/)。根据官方的基准测试数据，Firefox+ASM.js的运行速度仅次于C/C++编写的本地程序。ASM.js本身也是JavaScript，为什么它能运行的比手写的JavaScript快呢？[秘密在这里](http://kripken.github.io/mloc_emscripten_talk)。

### [Learning JavaScript Design Patterns](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

    由Google工程师Addy Osmani编写的一本的JavaScript设计模式的教程，里面完整介绍了近30种常见的设计模式。该书的纸质版已经由OReilly出版，但是在线版本是免费的，绝对不容错过。

### [Functions Explained](http://markdaggett.com/blog/2013/02/15/functions-explained/)

    深入理解JavaScript中的函数

### [A JavaScript refresh](http://typedarray.org/javascript-refresh/)

    JavaScript语言特性的全面介绍，入门级。

## CSS

### [About HTML semantics and front-end architecture](http://nicolasgallagher.com/about-html-semantics-front-end-architecture/)

    作者关于HTML语义化、class命名、前端组件的复用和组合等诸多方面的一些思考，值得我们关注。

### [好吧，CSS3 3D transform变换，不过如此！](http://www.zhangxinxu.com/wordpress/2012/09/css3-3d-transform-perspective-animate-transition/)

    很形象！

## 用户体验

### [URLs are for People, not Computers](http://www.not-implemented.com/urls-are-for-people-not-computers/)

    微软的一项研究显示，人们会花24%的时间来查看搜索结果的URL。URL从某种意义上讲也是UI，简洁、语义化、层次清晰的URL会提高点击率。

### [Transitional Interfaces](https://medium.com/design-ux/926eb80d64e3)

    更自然的用户界面切换动画

## 其它

### [浏览器市场再起波澜，多家厂商将换新内核](http://www.infoq.com/cn/news/2013/04/Google-Blink-Mozilla-Servo)

    就在[Opera放弃自己的浏览器引擎Presto](http://my.opera.com/ODIN/blog/300-million-users-and-move-to-webkit)拥抱WebKit后不久，Mozilla宣布和三星合作开发[下一代浏览器引擎Servo](https://github.com/mozilla/servo)。几个小时后，Google也宣布基于Webkit来开发自己的[新引擎Blink](http://www.chromium.org/blink)。我们最关心的问题是，新的引擎对前端工程师制作网站有什么影响？从目前获取到的消息来看，答案是没有影响。因为这两家公司都称不会再引入新的浏览器前缀，而之前页面中的-webkit-和-moz-将在新的引擎中继续支持。 关于Blink的更多问题，可以查看官方的[开发者FAQ页面](http://www.chromium.org/blink/developer-faq)。
