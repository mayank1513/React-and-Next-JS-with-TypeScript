---
url:
---

# What is TypeScript and why should you use it?

![img](https://cdn-images-1.medium.com/max/800/0*yGU4y4owhwLstj_N)

> [TypeScript](http://www.typescriptlang.org/) is a superset of JavaScript which primarily provides optional static typing, classes and interfaces. One of the big benefits is to enable IDEs to provide a richer environment for spotting common errors *as you type the code*.

Any tool could be good depending on your team, the current project, the client’s team, etc. Ok, but why TypeScript? Because it can help your project or your team. Let us go through the core features and learn how can it help you.

### TL;DR — Gist

TypeScript — A superset of JavaScript that confirms to the latest ECMAScript standards and compiles down to JavaScript confirming to one of the ES standards.

It offers:

1. **Support for modern JavaScript features**
2. **Advanced type system**
3. **Enhanced Developer tooling support**
4. **Strict Null Checks**
5. **Interoperability with JavaScript**

Some facts about adoption and popularity:

- In the [2017 StackOverflow developer survey](https://insights.stackoverflow.com/survey/2017#technology) TypeScript was the most popular JavaScript transpiler (9th place overall) and won third place in the most loved programming language category.
- In the [2018 state of js survey](https://2018.stateofjs.com/javascript-flavors/conclusion/) TypeScript was declared as one of the two big winners in the JavaScript flavors category (with ES6 being the other).
- In the [2019 StackOverlow developer survey](https://insights.stackoverflow.com/survey/2019) TypeScript rose to the 9th place of most popular languages amongst professional developers, overtaking both C and C++. It again took third place amongst most the most loved languages.
- In the [2020 StackOverflow developer survey](https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted) TypeScript was the second most loved technology.
- In the [2020 state of js survey](https://2020.stateofjs.com/en-US/technologies/javascript-flavors/) TypeScript was declared the winner in JavaScript flavors category

Meanwhile it is good to know that it is a language developed and maintained by Microsoft. You can learn more about it the Microsoft website as well.

[**What is TypeScript?**
*TypeScript is a superset of JavaScript, and is designed to help make writing JavaScript easier. But what is it really…*docs.microsoft.com](https://docs.microsoft.com/en-us/shows/web-wednesday/what-is-typescript)

The following chart probably, clearly depicts the relation of TypeScript and JavaScript. If you don’t know what is ES, it is a standard which JavaScript confirms to. 

![img](https://cdn-images-1.medium.com/max/600/0*dc-AukkZQ3A4_GCm.png)

JavaScript is a programming language that is developed by [ECMA’s Technical Committee 39](https://tc39.es/), which is a group of people composed of many different stakeholders. TC39 is a committee hosted by [ECMA](https://www.ecma-international.org/): an internal standards organization. JavaScript has many different implementations by many different vendors (e.g. Google, Microsoft, Oracle, etc.). The goal of JavaScript is to be the lingua franca of the web.

TypeScript is a superset of the JavaScript language that has a single open-source compiler and is developed mainly by a single vendor: Microsoft. **The goal of TypeScript is to help catch mistakes early through a type system and to make JavaScript development more efficient**.

### TL;DR

JavaScript has been stagnant for a long period of time until new standard, commonly known as ES6 was released in 2015. Ever since then, the new standards are released every year and are shortly followed up by the browsers. However, you don’t have to worry about the TypeScript support. Your browser, though some modern browser include support for typescript debugging, does not see TypeScript. TypeScript is compiled down to common JavaScript or ES modules before it is shipped.

Following is a collection of quotes and opinions someone has compiled

[**Quotes about TypeScript**
*I've been in the industry for a while now and have had the fortune to talk with many people at different companies, in…*dev.to](https://dev.to/thejaredwilcurt/quotes-about-typescript-2ohf)

To most senior front-end developers, TypeScript seems to be something that limits the true potential of a loosely types language like JavaScript or a unnecessary complication which can be avoided with good testing practices. Whereas most backend developers or developers coming from other languages find TypeScript their savior — finally they can use JavaScript without worrying too much. 

Well, TypeScript clearly has it’s advantages too. And these are obvious as the apps grow. Some of these include

- **Strict null checks** — nulls has been most notorious source of errors ever since
- Static Types — this is something that in a sense makes JavaScript bereft of it’s loose type requirement. For example, you can store variables of multiple types in a JavaScript array but TypeScript will complain about it. But that also prevents you from unintentional errors and makes your code much more readable.
- Static Type declarations go a long way — They are a natural documentation for someone else using your code. They can very easily see what arguments do your functions expect. So, you don’t have to go out and document that variable `a` should be a number and `b` should be a string etc.
- Static Types make your IDEs more smarter. With the help of types information, IDEs can do better intellisense, spot bugs, etc.
- TypeScript also supports annotations
- TypeScript is interoperable with JavaScript, though for some JS libraries, you might need proper type definitions before they can be used with TypeScript.
- But for most part, you can safely use TypeScript and JavaScript together and migrate gradually

It does take some pain to initially familiarize yourself with TypeScript if you are used to JavaScript without types. But it is worth it. 

### How does TypeScript achieve its goals?

Essentially TypeScript achieves its goals in three ways:

1. **Support for modern JavaScript features** — The JavaScript language (not the runtime) is standardized through the [ECMAScript](https://en.wikipedia.org/wiki/ECMAScript) standards. Not all browsers and JavaScript runtimes support all features of all ECMAScript standards. TypeScript allows for the use of many of the latest ECMAScript features and translates them to older ECMAScript targets of your choosing (see the list of [compile targets](https://www.typescriptlang.org/docs/handbook/compiler-options.html) under the `--target` compiler option). This means that you can safely use new features, like modules, lambda functions, classes, the spread operator and destructuring, while remaining backwards compatible with older browsers and JavaScript runtimes. 
2. **Advanced type system** — The type support is not part of the ECMAScript standard and will likely never be due to the interpreted nature instead of compiled nature of JavaScript. The type system of TypeScript is incredibly rich and includes: interfaces, enums, hybrid types, generics, union/intersection types, access modifiers and much more. The [official website](https://www.typescriptlang.org/) of TypeScript gives an overview of these features. Typescript’s type system is on-par with most other typed languages and in some cases arguably more powerful.
3. **Developer tooling support** — TypeScript’s compiler can run as a background process to support both incremental compilation and IDE integration such that you can more easily navigate, identify problems, inspect possibilities and refactor your codebase.

### TypeScript is a Safe Choice: TypeScript’s relation to other JavaScript targeting languages

![img](https://cdn-images-1.medium.com/max/800/0*z9-CCBjI-p6yrUAQ.jpg)

TypeScript has a unique philosophy compared to other languages that compile to JavaScript. JavaScript code is valid TypeScript code; TypeScript is a superset of JavaScript. You can almost rename your `.js` files to `.ts` files and start using TypeScript (see "JavaScript interoperability" below). TypeScript files are compiled to readable JavaScript, so that migration back is possible and understanding the compiled TypeScript is not hard at all. TypeScript builds on the successes of JavaScript while improving on its weaknesses.

On the one hand, you have future proof tools that take modern ECMAScript standards and compile it down to older JavaScript versions with Babel being the most popular one. On the other hand, you have languages that may totally differ from JavaScript which target JavaScript, like CoffeeScript, Clojure, Dart, Elm, Haxe, Scala.js, and a whole host more (see this [list](https://github.com/jashkenas/coffeescript/wiki/List-of-languages-that-compile-to-JS)). These languages, though they might be better than where JavaScript’s future might ever lead, run a greater risk of not finding enough adoption for their futures to be guaranteed. You might also have more trouble finding experienced developers for some of these languages, though the ones you will find can often be more enthusiastic. Interoperability with JavaScript can also be a bit more involved, since they are farther removed from what JavaScript actually is.

TypeScript sits in between these two extremes, thus balancing the risk. TypeScript is not a risky choice by any standard. It takes very little effort to get used to if you are familiar with JavaScript, since it is not a completely different language, has excellent JavaScript interoperability support and it has seen a lot of adoption for several years now.

### Catching Bugs Early: Optionally static typing and type inference

![img](https://cdn-images-1.medium.com/max/800/0*2nmmxWzeeSxdItPh.gif)JavaScript Bugs can be hard to catch

JavaScript is dynamically typed. This means JavaScript does not know what type a variable is until it is actually instantiated at run-time. This also means that it may be too late. TypeScript adds type support to JavaScript and catches type errors during compilation to JavaScript. Bugs that are caused by false assumptions of some variable being of a certain type can be completely eradicated if you play your cards right (how strict you type your code or if you type your code at all is up to you).

TypeScript makes typing a bit easier and a lot less explicit by the usage of type inference. For example: `var x = "hello"` in TypeScript is the same as `var x : string = "hello"`. The type is simply inferred from its use. Even it you don't explicitly type the types, they are still there to save you from doing something which otherwise would result in a run-time error.

TypeScript is optionally typed by default. For example `function divideByTwo(x) { return  x / 2 }` is a valid function in TypeScript which can be called with *any* kind of parameter, even though calling it with a string will obviously result in a *runtime* error. Just like you are used to in JavaScript. This works, because when no type was explicitly assigned and the type could not be inferred, like in the divideByTwo example, TypeScript will implicitly assign the type `any`. This means the divideByTwo function's type signature automatically becomes `function divideByTwo(x : any) : any`. There is a compiler flag to disallow this behavior: `--noImplicitAny`. Enabling this flag gives you a greater degree of safety, but also means you will have to do more typing.

### It is worth the extra effort 

Types have a cost associated with them. First of all, there is a learning curve, and second of all, of course, it will cost you a bit more time to set up a codebase using proper strict typing too. These costs are totally worth it on any serious codebase you are sharing with others. [A Large Scale Study of Programming Languages and Code Quality in Github](https://cs.uwaterloo.ca/~m2nagapp/courses/CS846/1171/papers/ray_fse14.pdf) suggests that *“statically typed languages, in general, are less defect prone than the dynamic types, and that strong typing is better than weak typing in the same regard”.*

It is interesting to note that this very same paper finds that TypeScript is less error-prone than JavaScript:

> *For those with positive coefficients we can expect that the language is associated with, ceteris paribus, a greater number of defect fixes. These languages include C, C++,* JavaScript*, Objective-C, Php, and Python. The languages Clojure, Haskell, Ruby, Scala, and* TypeScript*, all have negative coefficients implying that these languages are less likely than the average to result in defect fixing commits.*

### Enhanced IDE support

The development experience with TypeScript is a great improvement over JavaScript. The IDE is informed in real-time by the TypeScript compiler on its rich type information. This gives a couple of major advantages. For example, with TypeScript, you can safely do refactorings like renames across your entire codebase. Through code completion, you can get inline help on whatever functions a library might offer. No more need to remember them or look them up in online references. Compilation errors are reported directly in the IDE with a red squiggly line while you are busy coding. All in all, this allows for a significant gain in productivity compared to working with JavaScript. One can spend more time coding and less time debugging.

![img](https://cdn-images-1.medium.com/max/800/0*fqfglvL3Kp_QtcBB.gif)

There is a wide range of IDEs that have excellent support for TypeScript, like Visual Studio Code, WebStorm, Atom and Sublime.

### Strict null checks

Runtime errors of the form `cannot read property 'x' of undefined` or `undefined is not a function` are very commonly caused by bugs in JavaScript code.

![img](https://cdn-images-1.medium.com/max/600/0*EcWoBNVKShXzetZH.gif)

Out of the box TypeScript already reduces the probability of these kinds of errors occurring, since one cannot use a variable that is not known to the TypeScript compiler (with the exception of properties of `any` typed variables). It is still possible though to mistakenly utilize a variable that is set to `undefined`. However, with the 2.0 version of TypeScript you can eliminate these kinds of errors all together through the usage of non-nullable types. This works as follows:

With strict null checks enabled (`--strictNullChecks` compiler flag) the TypeScript compiler will not allow `undefined` to be assigned to a variable unless you explicitly declare it to be of nullable type. For example, `let x : number = undefined` will result in a compile error. This fits perfectly with type theory since `undefined` is not a number. One can define `x` to be a sum type of `number` and `undefined` to correct this: `let x : number | undefined = undefined`.

Once a type is known to be nullable, meaning it is of a type that can also be of the value `null` or `undefined`, the TypeScript compiler can determine through control flow based type analysis whether or not your code can safely use a variable or not. In other words when you check a variable is `undefined` through for example an `if` statement the TypeScript compiler will infer that the type in that branch of your code's control flow is not anymore nullable and therefore can safely be used. Here is a simple example:

```
let x: number | undefined;
if (x !== undefined) x += 1; // this line will compile, because x is checked.
x += 1; // this line will fail compilation, because x might be undefined.
```

During the build, 2016 conference co-designer of TypeScript Anders Hejlsberg gave a detailed explanation and demonstration of this feature: [video](https://channel9.msdn.com/Events/Build/2016/B881) (from 44:30 to 56:30).

### Compilation

To use TypeScript you need a build process to compile to JavaScript code. The build process generally takes only a couple of seconds depending of course on the size of your project. The TypeScript compiler supports incremental compilation (`--watch` compiler flag) so that all subsequent changes can be compiled at greater speed.

The TypeScript compiler can inline source map information in the generated .js files or create separate .map files. Source map information can be used by debugging utilities like the Chrome DevTools and other IDE’s to relate the lines in the JavaScript to the ones that generated them in the TypeScript. This makes it possible for you to set breakpoints and inspect variables during runtime directly on your TypeScript code. Source map information works pretty well, it was around long before TypeScript, but debugging TypeScript is generally not as great as when using JavaScript directly. Take the `this` keyword for example. Due to the changed semantics of the `this` keyword around closures since ES2015, `this` may actually exists during runtime as a variable called `_this` (see [this answer](https://stackoverflow.com/questions/30056593/visual-studio-shows-wrong-value-for-this-in-typescript/30070859#30070859)). This may confuse you during debugging but generally is not a problem if you know about it or inspect the JavaScript code. It should be noted that Babel suffers the exact same kind of issue.

There are a few other tricks the TypeScript compiler can do, like generating intercepting code based on [decorators](https://stackoverflow.com/q/29775830/1860591), generating module loading code for different module systems and parsing [JSX](https://github.com/Microsoft/TypeScript/wiki/JSX). However, you will likely require a build tool besides the Typescript compiler. For example, if you want to compress your code you will have to add other tools to your build process to do so.

There are TypeScript compilation plugins available for [Webpack](https://github.com/TypeStrong/ts-loader), [Gulp](https://www.npmjs.com/package/gulp-typescript), [Grunt](https://www.npmjs.com/package/grunt-typescript) and pretty much any other JavaScript build tool out there. The TypeScript documentation has a section on [integrating with build tools](https://www.typescriptlang.org/docs/handbook/integrating-with-build-tools.html) covering them all. A [linter](https://www.npmjs.com/package/tslint) is also available in case you would like even more build time checking. There are also a great number of seed projects out there that will get you started with TypeScript in combination with a bunch of other technologies like Angular 2, React, Ember, SystemJS, Webpack, Gulp, etc.

### JavaScript interoperability

Since TypeScript is so closely related to JavaScript it has great interoperability capabilities, but some extra work is required to work with JavaScript libraries in TypeScript. [TypeScript definitions](https://www.typescriptlang.org/docs/handbook/namespaces.html) are needed so that the TypeScript compiler understands that function calls like `_.groupBy` or `angular.copy` or `$.fadeOut` are not in fact illegal statements. The definitions for these functions are placed in `.d.ts` files.

![img](https://cdn-images-1.medium.com/max/800/0*HsA9X4MQp3N1bwGq.gif)

The simplest form a definition can take is to allow an identifier to be used in any way. For example, when using [Lodash](https://lodash.com/), a single line definition file `declare var _ : any` will allow you to call any function you want on `_`, but then, of course, you are also still able to make mistakes: `_.foobar()` would be a legal TypeScript call, but is, of course, an illegal call at run-time. If you want proper type support and code completion your definition file needs to to be more exact (see [lodash definitions](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/lodash) for an example).

[Npm modules](https://www.npmjs.com/) that come pre-packaged with their own type definitions are automatically understood by the TypeScript compiler (see [documentation](https://www.typescriptlang.org/docs/handbook/typings-for-npm-packages.html)). For pretty much any other semi-popular JavaScript library that does not include its own definitions somebody out there has already made type definitions available through another npm module. These modules are prefixed with “@types/” and come from a Github repository called [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped#how-do-i-get-them).

There is one caveat: the type definitions must match the version of the library you are using at run-time. If they do not, TypeScript might disallow you from calling a function or dereferencing a variable that exists or allow you to call a function or dereference a variable that does not exist, simply because the types do not match the run-time at compile-time. So make sure you load the right version of the type definitions for the right version of the library you are using.

To be honest, there is a slight hassle to this and it may be one of the reasons you do not choose TypeScript, but instead go for something like Babel that does not suffer from having to get type definitions at all. On the other hand, if you know what you are doing you can easily overcome any kind of issues caused by incorrect or missing definition files.

### Converting from JavaScript to TypeScript

Any `.js` file can be renamed to a `.ts` file and ran through the TypeScript compiler to get syntactically the same JavaScript code as an output (if it was syntactically correct in the first place). Even when the TypeScript compiler gets compilation errors it will still produce a `.js` file. It can even accept `.js` files as input with the `--allowJs` flag. This allows you to start with TypeScript right away. Unfortunately, compilation errors are likely to occur in the beginning. One does need to remember that these are not show-stopping errors like you may be used to with other compilers.

The compilation errors one gets in the beginning when converting a JavaScript project to a TypeScript project are unavoidable by TypeScript’s nature. TypeScript checks *all* code for validity and thus it needs to know about all functions and variables that are used. Thus type definitions need to be in place for all of them otherwise compilation errors are bound to occur. As mentioned in the chapter above, for pretty much any JavaScript framework there are `.d.ts` files that can easily be acquired with the installation of [DefinitelyTyped packages](https://github.com/DefinitelyTyped/DefinitelyTyped#how-do-i-get-them). It might, however, be that you've used some obscure library for which no TypeScript definitions are available or that you've polyfilled some JavaScript primitives. In that case, you must supply type definitions for these bits for the compilation errors to disappear. Just create a `.d.ts` file and include it in the tsconfig.json's `files` array, so that it is always considered by the TypeScript compiler. In it declare those bits that TypeScript does not know about as type `any`. Once you've eliminated all errors you can gradually introduce typing to those parts according to your needs.

Some work on (re)configuring your build pipeline will also be needed to get TypeScript into the build pipeline. As mentioned in the chapter on compilation there are plenty of good resources out there and I encourage you to look for seed projects that use the combination of tools you want to be working with.

The biggest hurdle is the learning curve. I encourage you to play around with a small project at first. Look how it works, how it builds, which files it uses, how it is configured, how it functions in your IDE, how it is structured, which tools it uses, etc. Converting a large JavaScript codebase to TypeScript is doable when you know what you are doing. Read this blog for example on [converting 600k lines to typescript in 72 hours](https://www.lucidchart.com/techblog/2017/11/16/converting-600k-lines-to-typescript-in-72-hours/)). Just make sure you have a good grasp of the language before you make the jump.

### Adoption

TypeScript is open-source (Apache 2 licensed, see [GitHub](https://github.com/Microsoft/TypeScript)) and backed by Microsoft. [Anders Hejlsberg](https://en.wikipedia.org/wiki/Anders_Hejlsberg), the lead architect of C# is spearheading the project. It’s a very active project; the TypeScript team has been releasing a lot of new features in the last few years and a lot of great ones are still planned to come (see the [roadmap](https://github.com/Microsoft/TypeScript/wiki/Roadmap)).

Some facts about adoption and popularity:

- In the [2017 StackOverflow developer survey](https://insights.stackoverflow.com/survey/2017#technology) TypeScript was the most popular JavaScript transpiler (9th place overall) and won third place in the most loved programming language category.
- In the [2018 state of js survey](https://2018.stateofjs.com/javascript-flavors/conclusion/) TypeScript was declared as one of the two big winners in the JavaScript flavors category (with ES6 being the other).
- In the [2019 StackOverlow developer survey](https://insights.stackoverflow.com/survey/2019) TypeScript rose to the 9th place of most popular languages amongst professional developers, overtaking both C and C++. It again took third place amongst most the most loved languages.
- In the [2020 StackOverflow developer survey](https://insights.stackoverflow.com/survey/2020#most-loved-dreaded-and-wanted) TypeScript was the second most loved technology.