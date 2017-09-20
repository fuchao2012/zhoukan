
<section id="preface">![](//p1.ssl.qhimg.com/t01085bf1723b588474.gif)</section>

## 奇舞推荐

### [2016 年前端技术观察](http://geek.csdn.net/news/detail/128912)

    每到年末，圈内总有精彩。《程序员》杂志刊登的这篇文章，点燃了本周前端圈内的话题最热点。真的是本周最热，没有之一。知乎讨论也很精彩，建议多用点耐心，[点击本链接](https://www.zhihu.com/question/53625757)细看大大们都是怎么看的。那么有人也许会问，周刊君怎么看？对此我只能回复你们，无可奉告~

### [算法可视化：把难懂的代码画进梵高的星空](http://mp.weixin.qq.com/s/0qZIglwnF6iEG6KQi_Mbtw)

    “可视化不仅仅只是一种在数据中寻找模式的工具。可视化利用人类的视觉系统，以增加人类的智慧。这样，我们就可以用它来更好地了解这些重要的抽象过程以及其他事情。”

### [移动端新特性： Passive Event Listeners](http://mp.weixin.qq.com/s/cqgSargTbXRehWuBt-MufQ)

    “在监听 mousewheel 或者 touch 事件中，增加了 passive 为 true 的设置，它就不会调用 preventDefault 来阻止默认滑动行为 ”。话说周刊君最近也遇到这个问题了。Chrome 54 版本以上的 Device Mode 下，为 window、document 等绑定 touch 相关事件，控制台报错。根据[文档](https://www.chromestatus.com/features/5093566007214080)，默认情况如下：文档层次的对象如 window、document、body 等绑定可能导致阻塞滚动的事件时，默认会设置 passive 为 true。

## JavaScript

### [论如何在 Chrome 下劫持原生只读对象](https://zhuanlan.zhihu.com/p/24342684)

    浏览器中的一些对象是无法修改或覆盖的，如 location、navigator 等。但作者发现，在Chrome 50+ 版本中，通过一些技巧可以轻易地重写这些对象，从而让恶意代码可以控制网页编写者的跳转行为。

### [vue-cli 2.0 webpack 配置分析](https://zhuanlan.zhihu.com/p/24322005)

    这篇文章对 vue-cli 中的 webpack 配置分析进行了详细分析。可以看看人家的工具脚本是怎么写的，顺便看看有没有什么秘密插件。

### [一封写给 JavaScript 女神的信](http://www.zcfy.cc/article/a-email-to-miss-javascript-1995.html)

    “喷子行为需要制止。我们需要停止鼓励愤怒。不仅是为了维护者，我们也是为了自己。否则我们将自食苦果。我们需要辨识出那些实际解决问题的帖子，那些对社区有积极影响的帖子。我们需要参与能改善产出的讨论，反对那些只表达愤怒的喷子。我们不能持续喷问题而对谈话内容没有任何实际帮助。”

## HTTP

### [HTTPS 常见部署问题及解决方案](https://imququ.com/post/troubleshooting-https.html)

    这篇文章列出了 HTTPS 部署过程中经常会遇到的一些问题，并给出结论和引用链接。

### [跟着 Github 学习 Restful HTTP](http://cizixs.com/2016/12/12/restful-api-design-guide)

    这篇文章通过 Github API 总结了一些非常好的设计原则，可以作为编写 HTTP API 的参考。

## 其它

### [详解 flex-grow 与 flex-shrink](https://zhuanlan.zhihu.com/p/24372279)

    flexbox 已经被绝大多数浏览器所支持，然而不管是社区还是文档，甚至是 MDN，都鲜有把 flex-grow 与 flex-shrink 的计算方式说的比较清楚的，此文作者详细讲述了这两个属性的计算方式。

### [你必须收藏的 Github 技巧](http://www.alloyteam.com/2016/12/you-must-collect-the-github-tips/)

    Github 使用过程中一些很基础、很有用的小技巧。

### [Weex 在双十一会场的大规模应用](http://mp.weixin.qq.com/s/2ZdTFGHOT0MDgxsmpLustw)

    关于 Weex，关于性能优化和首屏时间。值得一读。

### [Angular 2 的“八大件”](https://zhuanlan.zhihu.com/p/24303070)

    Angular 2 中一些基本概念的介绍。

