## 深阅读

### [Building the Web of Things](https://hacks.mozilla.org/2017/06/building-the-web-of-things/)

Mozilla 要发力构造物联网框架，以期封装底层交互细节，最终通过 URL 或数据模型及接口的方式向外提供硬件能力，带我们走进安全，开放，强交互的去中心化物联网世界。
另附：[Mozila - Introducing HumbleNet: a cross-platform networking library that works in the browser](https://hacks.mozilla.org/2017/06/introducing-humblenet-a-cross-platform-networking-library-that-works-in-the-browser/).

### [Security updates for all active release lines](https://nodejs.org/en/blog/vulnerability/july-2017-security-releases/)

 Nodejs 对所有线上产品安全性统一升级，这次升级覆盖了 v4.x 到 v8.x 的各个版本，打了个补丁。这次升级所针对的漏洞等级为 high，影响到的版本管理员应作响应升级。

### [Turbocharge React With GraphQL](https://www.infoq.com/articles/turbocharge-react-graphql)

Is GraphQL production ready? It was a fair question, since he never worked with GraphQL. Let’s be honest, GraphQL was only open sourced in 2015 and really just created as a standard in 2016. Is anyone besides Facebook really using GraphQL? Greg and his team were intimately familiar with REST and had built several apps in the last few years with REST. They leveraged Swagger for validation and documentation and it worked well for them. Hence the skepticism if GraphQL could really best REST as the communication conduit for apps.

附：[VulcanJS: An Open-Source Project to “Meteorize” GraphQL](https://blog.meteor.com/vulcanjs-an-open-source-project-to-meteorize-graphql-ba48925bc41f).

### [Choosing a frontend framework in 2017](https://medium.com/this-dot-labs/building-modern-web-applications-in-2017-791d2ef2e341)

 这种对比文章俯拾皆是，不知这篇能否讲出些新意，React崇尚分而治之的构造方式，向开发者提供了一层薄薄的视图层，剩下的由开发者自己选择框架实现。Ember.js 是小团队的最爱，从最佳实践演练出来的产品。Angular是平台产品，而且越来越适合后端转前端的小伙伴来编写。Polymer 只能称作解决方案了，从设计到多端实现，他给出了各种方案。

### [Any web site can become a PWA – but we need to do better](https://christianheilmann.com/2017/06/27/any-web-site-can-become-a-pwa-but-we-need-to-do-better/)

坦白讲，不是不让你用时髦的技术，技术用的对，才能提高产品质量，否则就是垃圾。

### [Building m.uber_ Engineering a High-Performance Web App for the Global Market](https://eng.uber.com/m-uber/)

本篇介绍了 m.uber 的构建过程及多端响应的实践

### [大前端开发者需要了解的基础编译原理和语言知识](http://fullstack.blog/2017/06/24/大前端开发者需要了解的基础编译原理和语言知识/)

当程序员讨论一门语言的时候，默认的上下文经常是:“用 xxx 语言来完成 xxx 任务”。所以一直困扰着的我的一个问题就是，为什么完成某个任务，一定要选择特定的语言，比如安卓开发是 Java，前端要用 JavaScript，iOS 开发使用 Objective-C 或者 Swift。这些问题的答案非常复杂，有的是技术原因，有的是历史原因，有的会考虑成本，很难得出统一的结论，只能 case-by-case 的分析。这篇文章并非专门解答上述问题，而是希望通过介绍一些通用的概念，帮助读者掌握分析问题的能力

### [文本数据可视化 - 一图胜千言](http://geekplux.com/2017/06/26/text-data-visualization.html)

「一图胜千言」我们从小就有体会，教材里的解释图、自己笔记里总结的知识结构图，一直到现在经常用的思维导图等，其实都是简单、实用的文本可视化。本文将简单介绍文本可视化的基础概念，然后重点通过各类文本可视化的案例来阐述可视化之美

### [Redux 使用可变数据结构](https://zhuanlan.zhihu.com/p/27658983)

redux 核心能力是不可变数据带来的，mobx 的核心能力是可变数据带来的，如果使用动态修改数据的方式，使用 immutablejs 将其低成本转化为不可变数据，就可以接入 redux 并享受其生态了。

### [孵化业务快速落地与优化](http://tech.meituan.com/fuhua-haiwai.html)

海外酒店是酒旅事业群第一个孵化的业务，从2016年9月份开始到现在已经半年多的时间。在业务后台搭建、成长、优化过程中，经历了很多的思考与选择。主要分为下面几个阶段：初建：调研、落地，合理复用，高效自建；优化：量化、决策，寻找瓶颈，优化性能；展望：梳理、规划，业务展望，未雨绸缪。本文将分别介绍这几个阶段后台系统相关的思考，此外还会在最后总结团队建设方面的经验。

### [Node.js Performance Monitoring with Prometheus](https://blog.risingstack.com/node-js-performance-monitoring-with-prometheus/)

This article helps you to understand what to monitor if you have a Node.js application in production, and how to use Prometheus - an open-source solution, which provides powerful data compressions and fast data querying for time series data - for Node.js monitoring.

### [Is it possible to host Facebook on AWS?](http://blog.sqlizer.io/posts/facebook-on-aws/)

To answer this question we need to break it down into four separate parts: Server capacity, Server hardware, performance, Software Cost.Now remember, we’re not asking if Facebook should host on AWS - we’re just asking if it’s possible.

### [Versioning APIs at Google](https://cloudplatform.googleblog.com/2017/06/versioning-APIs-at-Google.html)

Versioning APIs is difficult, and everyone in the API space has opinions about how to do it properly. It’s also almost impossible to avoid. As teams build new software, occasionally they need to get rid of a feature (or provide that feature in a different way). Versioning gives your API users a reliable way to understand semantic changes in the API.

### [Delivering Billions of Messages Exactly Once](https://segment.com/blog/exactly-once-delivery/)

In the past three months we’ve built an entirely new de-duplication system to get as close as possible to exactly-once delivery, in the face of a wide variety of failure modes. The new system is able to track 100x the number of messages of the old system, with increased reliability, at a fraction of the cost. Here’s how.

### [Serving 39 Million Requests for $370/Month, or: How We Reduced Our Hosting Costs by Two Orders of Magnitude](https://trackchanges.postlight.com/serving-39-million-requests-for-370-month-or-how-we-reduced-our-hosting-costs-by-two-orders-of-edc30a9a88cd)

使用 Serverless 来节省成本

### [Why I’m Switching from React to Cycle.js](https://www.sitepoint.com/switching-from-react-to-cycle-js/)

Most people start to use React without thinking that there might be a better way to build a web app. That reflection made me try Cycle.js, a new reactive framework that is becoming more popular every day. In this article, I want to explain what reactive programming is, how Cycle.js works, and why I think it’s better than React. So let’s start!

### [Why Serverless?](http://developer.telerik.com/topics/cloud/why-serverless/)

In this article, I want to explain what serverless is, why I think it is an important new development, and where I think it will be the most impactful. This article will not focus on any one platform (my own experience is with Apache OpenWhisk), but rather keep things at a mostly generic level.

### [Why We Chose Typescript](https://redditblog.com/2017/06/30/why-we-chose-typescript/)

Using a typed language in our frontend has already paid dividends: our code has fewer type-related bugs, we are more confident making large refactors, and our inline documentation is focused around concepts instead of object shapes and function parameters.

### [Thoughts on Self-Documenting CSS](http://keithjgrant.com/posts/2017/06/self-documenting-css/)

Every comment represents a failure to make the code self explanatory - Robert C. Martin. However, this thinking raises interesting questions when it comes to a declarative language like CSS. Well… maybe. We use comments different ways for a variety of reason. Let’s look at some comments, and consider what they add (or not) to the code. I’ll start with some low-hanging fruit, then move on to the less obvious stuff.

### [I decided to disable AMP on my site](https://www.alexkras.com/i-decided-to-disable-amp-on-my-site/)

关掉 AMP 蓄谋已久，好在在 WordPress 中打开和关闭 AMP 都比较简单，只需停掉该插件即可。24小时以后，Google 的搜索结果中就看不到我站点的 AMP了。

### [Everything I Wish I’d Known Before I Started Demoing SaaS](https://thebetterstory.co/everything-i-wish-id-known-before-i-started-demoing-saas-f83c1c4fad99)

I had spent 25 minutes showing a content team the many ways Airstory would improve their lives when their manager looked at me and said: But you guys aren’t funded. It was then — in that moment — that I realized this: I suck at demos. Poor demoing leaves the viewer with BS objections like “you’re not funded.”


### [Exactly-once Semantics are Possible: Here’s How Kafka Does it](https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/)

I’m thrilled that we have hit an exciting milestone the Kafka community has long been waiting for: we have  introduced exactly-once semantics in Apache Kafka in the 0.11 release. In this post, I’d like to tell you what exactly-once semantics mean in Apache Kafka, why it is a hard problem, and how the new idempotence and transactions features in Kafka enable correct exactly-once stream processing using Kafka’s Streams API.

### [How to Interview Engineers](http://blog.triplebyte.com/how-to-interview-engineers)

In this blog post, I’m going to present what we’ve learned so far from this data. Technical interviewing is broken in a lot of ways. It’s easy to say this. (And many blog posts do!) The hard part is coming up with what to do about it. My goal for this post is to take on that challenge, and lay out specific advice for hiring managers and CTOs. Interviewing is hard. But I think that many of the problems can be fixed by running a careful process.

另附：The Best Frontend JavaScript Interview Questions

### [Possible future directions for data on the Web](https://www.w3.org/blog/2017/06/possible-future-directions-for-data-on-the-web/)

As I enter my final days as a member of the W3C Team*, I’d like to record some brief notes for what I see as possible future directions in the areas in which I’ve been most closely involved, particularly since taking on the ‘data brief’ 4 years ago.

## 新鲜货

### [ECMAScript 2017 Language Spec Published](https://www.ecma-international.org/publications/standards/Ecma-262.htm)

ECMA2017 语言标准发布，ES2015火起来以后，后续梦想中的功能逐渐被社区兼容实现了，所以标准又落后了，所以标准出台都没有引起什么大新闻。

另附：[TC39, ECMAScript, and the Future of JavaScript](https://ponyfoo.com/articles/tc39-ecmascript-proposals-future-of-javascript).

### [Announcing TypeScript 2.4](https://blogs.msdn.microsoft.com/typescript/2017/06/27/announcing-typescript-2-4/)

2.4新版本推出 `动态 import() 表达式` `字符串枚举值` `严格检查 Generator` `返回值作为参考对象` `弱类型检查`

### [Google Web Starter Kit](https://developers.google.com/web/tools/starter-kit/)

Web Starter Kit is an opinionated boilerplate for web development. Tools for building a great experience across many devices and performance oriented. Helping you to stay productive following the best practices outlined in Google’s Web Fundamentals. A solid starting point for both professionals and newcomers to the industry.

### [Announcing Docker 17.06 Community Edition (CE)](https://blog.docker.com/2017/06/announcing-docker-17-06-community-edition-ce/)

We released Docker CE 17.06 with new features, improvements, and bug fixes. Docker CE 17.06 is the first Docker version built entirely on the Moby Project, which we announced in April at DockerCon. You can see the complete list of changes in the changelog, but let’s take a look at some of the new features.

### [sonar – JS Foundation Welcomes Newest Project](https://js.foundation/announcements/2017/06/22/sonar-js-foundation-welcomes-newest-project)
We are excited to announce the latest project to join the JS Foundation is sonar, a linting tool for the web. The concept for sonar was originally created by the Microsoft Edge team. As they started working on the project, it quickly became apparent that a tool meant to serve the entire web should be built in an openly governed and neutral home, which is why they have come to the JS Foundation.

### [Server Rendering React on Rails](https://www.webcodegeeks.com/ruby/server-rendering-react-rails/)

In this article, we are going to talk about doing server rendering with our React components inside of Rails. An article by Tom Dale talks about misconceptions about server rendering. With so many misconceptions, what is it and why would you want it?

### [GitHub for Unity is now open source](https://github.com/blog/2385-github-for-unity-is-now-open-source)

The GitHub for Unity extension we announced at the Game Developers Conference last March is now open source!

### [ECharts v3.6 发布：自定义系列、极坐标柱状图](http://efe.baidu.com/blog/echarts-3-6-0/)

在 ECharts 新发布的 3.6 版本中，新增了 自定义系列（custom series），能让用户定制渲染逻辑，从而在已有坐标系中创造新的图表。此外还有极坐标柱状图、自定义维度映射、dataZoom 等其他一些增强。

### [Rax](https://github.com/alibaba/rax)

Rax is a universal JavaScript library with a largely React-compatible API. If you use React, you already know how to use Rax. Fast: blazing fast virtual DOM. Tiny: 8.0 KB minified + gzipped. Universal: works in browsers, Weex, Node.js and could works more container that implement driver specification.

### [Automated testing with Headless Chrome](https://developers.google.com/web/updates/2017/06/headless-karma-mocha-chai)

If you want to run automated tests using Headless Chrome, look no further! This article will get you all set up using Karma as a runner and Mocha+Chai for authoring tests.

### [An Image-Diff Is Worth 1,000 Words](https://blog.usebutton.com/an-image-diff-is-worth-1-000-words-e03a4b682cea)

使用 image-diff 来做测试

### [Node.js Will Overtake Java Within a Year: Analysis](http://blog.builtinnode.com/post/node-js-will-overtake-java-within-a-year-analysis)

Node.js went from 8% in 2013 to 26% in 2017 and Java went from 42% to 39% in the same period (% of respondents that use the language). Considering the trend(s), even with just a slight drop for Java, Mikeal’s prediction might be true if the Node.js 100% growth rate carries on. That means that Node.js in on the right track to take over Java in terms of users.

### [Gathering weak npm credentials](https://github.com/ChALkeR/notes/blob/master/Gathering-weak-npm-credentials.md)

Or how I obtained direct publish access to 13% of npm packages (including popular ones). The estimated number of packages potentially reachable through dependency chains is 52%.

### [The Ultimate List of 38 JavaScript Tools](https://hackernoon.com/the-ultimate-list-of-javascript-tools-e0a5351b98e3)

Below you’ll find the ultimate list of JavaScript tools for web developers to help you with various coding tasks. You’ll discover helpful instruments to boost the development flow, reduce risks, optimize code, enhance security, and even more. It is a useful guide for business owners to understand their dev teams better.

### [Five Huge CSS Milestones](http://mediatemple.net/blog/tips/five-huge-css-milestones/)

I figured I could weigh in as well, focusing on around the last decade, which, coincidentally, is how old CSS-Tricks is. That just about matches up with my experience in the industry. Firebug, Chrome, CSS3, Preprocessing, Flexbox & Grid.

### [pnpm version 1 is out!](https://medium.com/pnpm/pnpm-version-1-is-out-935a07af914)

使用硬链的方式来节省空间

### [RE:DOM](https://redom.js.org/)

RE:DOM is a tiny DOM library by Juha Lindstedt and contributors, which adds some useful helpers to create DOM elements and keeping them in sync with the data. Because RE:DOM is so close to the metal and doesn’t use virtual dom, it’s actually faster and uses less memory than almost all virtual dom based libraries, including React. It’s also easy to create reusable components with RE:DOM. Another great benefit is, that you can use just pure JavaScript, so no complicated templating languages to learn and hassle with.

### [Infinite Scroll V3.0](https://github.com/metafizzy/infinite-scroll/releases/tag/v3.0.0)

nfinite Scroll is a JavaScript plugin that automatically adds the next page, saving users from a full page load. You’ve likely seen it in use all over the web.

### [Kitten Trick](https://github.com/akveo/kittenTricks)

A react native mobile starter kit with over 40 screens and theme hot reload support.

### [Go Language – Web Application Secure Coding Practices](https://checkmarx.gitbooks.io/go-scp/)

Go 语言网络编程安全，Go 中级应知应会。可以参与翻译了。

另附： [AWS Security Primer](https://cloudonaut.io/aws-security-primer/).

### [DIDI-VirtualAPK](https://github.com/didi/VirtualAPK)

热插拔 APK 中心，滴滴制造, Android 的，有心力可以玩耍一下。

### [base64-async](https://github.com/lukechilds/base64-async)

Nodejs 现有 Base64 已然飞快，将任务分块并发异步执行便能锦上添花。在处理非大型文件时，分治+同步执行会更快

### [Over 150 of the Best Machine Learning, NLP, and Python Tutorials I’ve Found](https://unsupervisedmethods.com/over-150-of-the-best-machine-learning-nlp-and-python-tutorials-ive-found-ffce2939bd78)

外文机器学习经典文章，有兴趣就翻着读一读。

## 产品及其它

### [Why Quip doesn’t have platform-specific engineering teams](https://quip.com/blog/quip-engineering-team-structure)

通过搭建好底层，让所有人都能参与所有部分的开发。另外，每个层级上的全栈工程师是工程团队的最终贡献者。

### [Four Ways to Deflate the Discord that’s Killing Your Team](https://alistapart.com/article/team-conflict-four-ways-to-deflate-the-discord-thats-killing-your-team)

及时沟通，目标清晰，规划沟通，职责到人

### [为什么Netflix的企业文化会备受整个硅谷的推崇](https://mp.weixin.qq.com/s?__biz=MjM5MDE0Mjc4MA==&mid=2650996669&idx=1&sn=bb3aeb93df929d7f2ad6a9ce3543731b)

Netflix 在 2009 年释出了一份 100 多页的 PPT，讲述的企业文化精髓。这份 PPT 被 Facebook 公司的 COO 桑德伯格称为“硅谷最重要的文件”。Netflix 的工程文化，被很多国内一线互联网公司研究借鉴，这个外国的月亮，究竟圆在哪里？

    判断力
        明智决策，摒弃模棱两可
        明辨事物根由，不为表象所惑
        战略性思考，具备自知之明且努力实现
        擅长利用数据支持自己的直觉判断
        根据长远状况作出决策，而非短视
    沟通
        简明扼要地进行演讲和写作
        善于倾听，在给出回应前先寻求充分地理解
        在紧张的情况下保持镇定，进而找到最清晰的解决思路
        让交流风格适用于世界各地与你母语背景不同的人
        向同事提供坦诚且及时的反馈意见
    好奇心
        渴望学习且能快速学习
        在自身专业之外也能作出贡献
        能建立他人忽略的联系
        希望了解来自世界各地的用户以及我们如何满足他们
        探索新视角
    创新
        提出有用的新观点
        重构概念来寻找难题的解决之道
        乐于挑战既定的主流假设，提出更好的方法
        通过降低复杂度与寻找可节约的时间来保持公司的敏捷性
        善于应对变化
    勇气
        即使可能令某些人感到不快，仍愿意表达可能对 Netflix 公司有所助益的观点
        乐于对现状持批评态度
        做出艰难决定时不会被痛苦所困扰
        明智地对待冒险，同时对可能的失败抱开放心态
        质疑一切与我们价值观不一致的行为
        能够承受寻求真理道路上所出现的打击
    激情
        渴望卓越，并激励他人
        将用户和 Netflix 的成功深系于心
        坚强且乐观
        外表谦逊，内心强大
    无私
        为 Netflix 追求最大利益，胜于自身或者所在团队
        以开放心态寻求最佳观点
        愿意抽出时间帮助同事
        乐于公开且主动地分享信息
    包容
        能够与具备不同经历及文化背景的人士进行高效合作
        乐于培养并接纳不同观点，以便做出更好的决策
        关注才能与价值观，而非对方是否与您拥有相似之处
        希望了解不同背景对于工作的影响，而非假装背景毫无影响
        承认人皆抱有一定偏见，并努力加以克服
        当有人遭到排挤，主动介入以解决问题
    诚信
        拥有坦诚、真实、透明以及非政治性等特质
        直言不讳
        能够自由而公开地承认错误
        尊重他人，且不受其具体地位或者所持观点的影响
    影响力
        能够完成惊人数量的重要工作
        拥有一贯出色的表现，值得同事们信赖
        让同事们更为出色
        注重结果而非过程

> 一个企业敢于指定这么多企业文化，我也是醉了，估计招聘的小哥和入职培训老师会很辛苦吧。


### [马云谈人工智能](https://mp.weixin.qq.com/s?__biz=MzA3Mjc3NTQxMQ==&mid=2650408990&idx=1&sn=c48a5b26b6055992469a14edb1d41d7b)

机器不应该成为人的对手，机器和人只有合作在一起，才能解决未来，就像竞争对手一样，我们不应该联合对抗，我们应该联合起来对抗人类未来共同的问题，共同的麻烦，只有这样，竞争只是乐趣。

### [稻盛和夫 - 让我成功做出2大世界级企业的思维方式](http://www.iheima.com/zixun/2017/0630/163880.shtml)

成功和失败都是一种磨难。有人成功了，觉得自己了不得，态度变得令人讨厌，表示其人格堕落了；有人成功了，领悟到只凭自己无法有此成就，因而更加努力，也就进一步提升了自己的人性。而真正的胜利者，无论是成功或者失败，都会利用机会，磨炼出纯净美丽的心灵。