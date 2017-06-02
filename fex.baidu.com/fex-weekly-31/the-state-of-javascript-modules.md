Recently, there was a lot of fuss [on Twitter](https://twitter.com/addyosmani/status/859296190323597313) regarding the current state of [ES modules,](http://2ality.com/2014/09/es6-modules-final.html) [especially in Node.js](https://twitter.com/bradleymeck/status/863061949021650944), which decided to introduce *.mjs
 as file extension. [The fear and uncertainty](https://twitter.com/tankredhase/status/861864123922907136) is understandable since the topic is complex and following the discussions takes a high degree of effort and dedication.
An ancient fear
Most frontend developers still remember [the dark days of JavaScript dependency management](https://medium.com/@trek/last-week-i-had-a-small-meltdown-on-twitter-about-npms-future-plans-around-front-end-packaging-b424dd8d367a). Back then, you would copy and paste a library into a vendor folder, rely on global variables, try to concat everything in the right order and still would had to deal with namespace issues.
Over the past years, we’ve learned to appreciate the value of a common module format and a centralized module registry.
Today, it is easier than ever to both publish and consume a JavaScript library. It‘s literally just an npm publish
 and npm install
 away. That’s why people get nervous when they hear about compatibility issues between different module systems: *They are afraid to lose this comfort*.
In the following post, I will explain and summarize the current state of implementations and why I think that the transition to ES modules (ESM) will not harm the Node.js ecosystem. In the end, I will outline what these changes will mean for webpack users and module authors.
Current implementations
There are currently three implementations of ESM in the wild:
In current browsers
With webpack or similar build tools
In Node.js (not finished yet, [but probably behind a flag at the end of this year](https://twitter.com/rauschma/status/866334160218095617))

In order to understand the current discussion, it is important to know that [ES2015](https://www.ecma-international.org/ecma-262/6.0/) introduced two different modes:
script
 for regular scripts with a global namespace
module
 for modular code with explicit imports and exports

If you try to use the import
 or export
 statement inside a script
, it will raise a SyntaxError
. These statements just make no sense in a global context. On the other hand, the module
 mode implies [strict mode](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Strict_mode), which forbids certain language features, such as the with
 statement. Hence, it is necessary to define the mode *before* the script is parsed and executed.
ESM in browsers
As of May 2017, all major browsers have shipped a working implementation of ESM. Most of them are still behind a flag, though. I won’t go much into detail because [Jake Archibald has already written a great article about it](https://jakearchibald.com/2017/es-modules-in-browsers/).
Besides minor difficulties, the implementation was pretty straightforward since there was previously no module system in the browser. In order to specify the module
 mode, you need to add the type="module"
 attribute to the script tag like this:
<script type="module" src="main.js"></script>
Inside a module, you can currently only use valid URLs as module specifiers. A module specifier is the string that you use to require or import other modules. In order to ensure future compatibility with CJS module specifiers, “bare” import specifiers, such as import "lodash"
, are not supported yet. A module specifier must either be an absolute URL or start with /
, ./
or ../
:
// Supported:import {foo} from 'https://jakearchibald.com/utils/bar.js';import {foo} from '/utils/bar.js';import {foo} from './bar.js';import {foo} from '../bar.js';// Not supported:import {foo} from 'bar.js';import {foo} from 'utils/bar.js';
// Example from [https://jakearchibald.com/2017/es-modules-in-browsers/](https://jakearchibald.com/2017/es-modules-in-browsers/)
It is also important to note that once you are inside a module, every import will also be parsed as module
. There is no way to import
 a script
.
ESM with webpack
Build tools like webpack usually try to parse the code with the module
mode. If anything goes wrong, they fall back to script
. The result of these tools is a script
 and usually a module runtime which simulates both the behavior of CJS and ESM to a certain degree.
Let’s take these two simple ESMs for example:

webpack uses function wrappers to encapsulate the module scope and object references to simulate [ESM live bindings](http://2ality.com/2015/07/es6-module-exports.html). Once per compilation it also includes a module runtime which is responsible for bootstrapping and caching the modules. Additionally, it translates module specifiers into numeric module ids. This reduces both the bundle size and the time to bootstrap.
What does that mean? Let’s take a look at the compiled output:

Simplified webpack output which simulates the behavior of ES modules

I’ve simplified and removed some code which is not relevant for this example. As you can see, webpack replaces all the export
 statements with Object.defineProperty
 on the exports
 object. It also replaces all references to imported values with property accessors. Also note the "use strict"
directive at the beginning of every ESM. This was added by webpack to account for the strict mode in ESMs.
This implementation is a simulation because it tries to *mimic the behavior* of ESM and CJS — it does not *replicate it*. For instance, it falls short of certain edge cases. Take this module:
console.log(this);
If you run that through Babel with babel-preset-es2015
, you will get:
“use strict”;
console.log(undefined);
Judging from the output, it looks like Babel assumes ESM by default, because the module
 mode implies strict mode and initializes this
 with undefined
.
With webpack, however, you will get:
(function(module, exports) {console.log(this);})
When bootstrapped, this
 will point to exports
 which matches the behavior of CJS in Node.js. This is because the grammar of script
 and module
 is ambiguous. Parsers cannot tell whether that module is an ESM or CJS. And when in doubt, webpack simulates CJS because that is still the most popular module style.
This simulation works in a lot of cases because module authors usually avoid this kind of code. However, “a lot of cases” is not sufficient for a platform like Node.js where all valid JavaScript code is supposed to run.
ESM in Node.js
Node.js is having troubles implementing ESM because it still needs to support CJS. The syntax looks similar, but the runtime behavior is entirely different. James M Snell, member of the [Node.js Core Technical Committee](https://github.com/nodejs/CTC)(CTC), has written [an excellent article that explains the differences between CJS and ESM](https://hackernoon.com/node-js-tc-39-and-modules-a1118aecf95e).
It boils down to the fact that CJS is a *dynamic* module system and ESM is a *static* one.
**CJS**
Allows dynamic synchronous require()

Exports are only known after evaluating the module
Exports can be added, replaced and removed even after the module has initialized

**ESM**
Only allows static synchronous import

Imports and exports are linked before evaluating the module
Imports and exports are immutable

Since CJS is older than ES2015, it has always been parsed in script
 mode. The encapsulation is achieved by using a function wrapper. If you load a CJS in Node.js, it actually executes code similar to this:

Simplified function wrapper around CommonJS modules in Node.js

The problem arises when you want to integrate both module systems into the same runtime. Cyclic dependencies between ESM and CJS, for instance, can quickly lead to a deadlock-like situation.
However, getting rid of CJS support was not an option either, due to the high number of existing CJS modules. In order to avoid a disruption of the Node.js ecosystem, it was clear that:
existing CJS code *must *continue to work the same way
both module systems *must *work simultaneously and as seamlessly as possible

The current trade-offs
In March 2017, after months of discussions, the CTC finally found a way to make that happen. Since seamless integration was not possible without changes to the ES specification and engines, [the CTC decided to start with an implementation that comes with some trade-offs](https://github.com/bmeck/node-eps/blob/a1eab9bf023bbe13a79ddb18f0622a5d57215f9b/002-es-modules.md):
**1. ESM must have the *****.mjs**
** file extension**
This is due to the ambiguous grammar issue as explained above. You can’t know for sure what kind of JavaScript code you’re looking at just by parsing it. With backwards compatibility being a primary goal for Node.js, the author needs to opt-in into the new mode. [There have been various discussions about alternatives](https://github.com/nodejs/node/wiki/ES6-Module-Detection-in-Node#detection-problem), but a different file extension is the solution with the best trade-off.
**2. CJS can only import ESM via asynchronous ****import()**

Node.js will load ESMs asynchronously in order to match the browser behavior as close as possible. Hence, a synchronous require()
 of an ESM will not be possible. As a consequence, every function that depends on an ESM needs to be asynchronous:

**3. CJS exposes a single, immutable default export to ESM**
Using Babel or webpack, we usually refactored CJS to ESM like this:
// CJSconst { a, b } = require("c");
// ESMimport { a, b } from "c";
Again, the syntax looks pretty similar, but it ignores the fact that there are no named exports in CJS. There is just a single export called default
 which equals an immutable snapshot of module.exports
 when the CJS module has finished evaluating. Technically, it would be possible to destructure module.exports
 into named imports, but that would require a bigger change in the specification. [That’s why the CTC has decided to go this route for now](https://github.com/bmeck/node-eps/blob/a1eab9bf023bbe13a79ddb18f0622a5d57215f9b/002-es-modules.md#461-default-imports).
**4. Module-scoped variables like ****module**
**, ****require**
** and ****__filename**
** do not exist in ESM**
Node.js and browsers will implement counterparts for some of them in ESM, [but the standardization process is still ongoing](https://github.com/whatwg/html/issues/1013).
Given the engineering challenges that come with the integration of CJS and ESM into a single runtime, the CTC has done an incredibly good job evaluating the edge cases and trade-offs. For instance, using a different file extension is a very simple solution to this problem.
In fact, a file extension *is* basically a hint on how a binary file should be interpreted. If a module
 is not a script
, we *should* use a different file extension. Other tools like linters or IDEs can pick up the same information.
Sure, the introduction of a new file extension comes with a cost, but once servers and other applications have acknowledged *.mjs
 as JavaScript, we will soon forget the dispute.
Will *.mjs be the Python 3 of Node.js?
With all these constraints in mind, one might ask what damage this transition will cause to the ecosystem. Although the CTC has worked hard to iron out the rough spots, there is still a lot of uncertainty regarding how the community will adopt it. This uncertainty is underscored by the claim [by well-known NPM module authors](https://twitter.com/sindresorhus/status/861987349529452545) that they will never use *.mjs
 in their modules.

[图片上传中。。。（1）]

[Python 3 is killing Python](http://blog.thezerobit.com/2014/05/25/python-3-is-killing-python.html)

It’s hard to predict how the community is going to react, but I don’t think that we will see a big disruption of the ecosystem. I even think that we will see a smooth transition from CJS to ESM. This is mainly because of two reasons:
1. Strict backwards compatibility with CJS
Module authors that are not comfortable with ESM can still stick to CJS without being excluded. Their own code will not be affected by the adoption of ESM which reduces the likelihood of them moving to another runtime. It also eases the transition which can take some time in an ecosystem of NPM’s size. Refactoring from CJS to ESM puts a burden on package maintainers and I don’t expect all of them to have time for this.
2. Seamless integration of CJS in ESM
Importing a CJS module from ESM is pretty straight-forward. All you need to remember is that CJS exports only a single default value. Once you’re inside an ESM, you probably won’t even notice what module style your dependencies are using. Compare that with await import()
 from CJS.
Because of this and other advantages of ESM, such as [tree shaking](https://webpack.js.org/guides/tree-shaking/) and browser compatibility out of the box, I expect to see a slow and steady transition to ESM over the next couple of years. CJS-only features, like dynamic require()
 and monkey-patchable exports, have always been controversial in the Node.js community and will not outweigh the benefits of ESM.
What does this all mean for me?
With all the recent events, it is easy to become confused by all the options and constraints. In the following section, I’ve compiled typical questions that developers will face and my answers for them:
Do I need to refactor my existing code now?
**No.** Node.js has just started to implement ESM and there is still a lot of work to be done. [James M Snell expects that it will still take a year at least](https://medium.com/the-node-js-collection/an-update-on-es6-modules-in-node-js-42c958b890c) and there’s still room for changes, so it is not safe to refactor now.
Should I use ESMs in my new code?
**If you already have a build step like a webpack build or if you’re comfortable with having one, yes**. It will ease the transition of your codebase and makes tree shaking possible. But beware: you will probably need to refactor some parts of it once Node.js has native ESM support.
**If you’re writing a library, yes. **Users of your module will benefit from tree shaking.
**If you do not want to have a build step or if you’re writing a Node.js app, stick to CJS**.

Should I use .mjs for ESMs now?
**No**. There’s currently no benefit of it and tooling support is still weak. I recommend to start the transition as soon as native ESM support lands in Node.js. Remember that [browsers do only care about MIME types, not file extension](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
Should I care about native browser compatibility?
**Yes, to some extent.** You should not omit the .js
 extension in your import statements anymore because browsers need full URLs. They will not be able to perform a path lookup like Node.js does. Similarly, you should avoid index.js
 files. However, I don’t expect that people will start to use NPM packages in the browser anytime soon because bare imports are still not possible.
What should I ship as a library author?
Write ESM and use [Rollup](https://rollupjs.org/) or webpack to transpile it down to a single CJS module. Point the main
 field inside your package.json
 to this CJS bundle. Additionally, use the [module](https://github.com/rollup/rollup/wiki/pkg.module)
 field to point to your original ESMs. If you’re using new language features besides ESM, you should compile it down to ES5 and provide both a CJS and an ESM bundle. This way, users of your library can still profit from tree shaking while not having to transpile your code.

[图片上传中。。。（2）]

Look at all these tree shaken modules!

Summary
There is a lot of uncertainty concerning ES modules. Because of the trade-offs made by the current Node.js implementation, developers are afraid that it might disrupt the Node.js ecosystem.
There are good chances that this is not going to happen because of two reasons: **Strict backwards compatibility for CJS** and **seamless integration of CJS in ESM.**
Until Node.js has shipped native ESM support, you should still use tools like Rollup and webpack. They *simulate* an ESM environment to a certain degree. Be aware that they are not fully spec compliant. Besides that, there are also [good reasons](https://peerigon.github.io/talks/2016-08-26-jsconf-is-future-frontend-tooling/#36) for still using bundlers once we *can* use NPM packages in browsers.
We, the webpack team, are working hard to make that transition for you as smooth as it can be. In order to make that possible, we are planning to simulate Node.js’ way of importing CJS once ESM support in Node.js is mature.