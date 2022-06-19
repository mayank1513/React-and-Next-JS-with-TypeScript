# Why should you use TypeScript for Next.js?

![img](https://cdn-images-1.medium.com/max/800/0*Wd8dX6fY35LN5HjJ.png)

Next.js comes with enormous amount of out of the box optimizations that help you build great apps quickly. The apps built with Next.js are optimized for performance as well as SEO. It allows you to build static, server-side rendered apps as well as combination of static and server side rendered routes using React. It ships with handy functionalities such as:

- API routes
- File-system routing
- Static Rendering
- Server Side Rendering
- SEO Optimization
- Image optimization
- Middleware
- support ES Modules through external URL (experimental)
- HTTP streaming
- Next.js Live — code with remote team on a live editor

[Next.js](https://nextjs.org/) is built with [TypeScript](https://www.typescriptlang.org/) under the hood, so you get better IntelliSense and type definitions in your editor by default with just JavaScript. But when you couple that with TypeScript, you can get an even better developer experience — including instant feedback when your component expects props, but you didn’t pass any. Well this is something most IDEs understand even if you don’t use TypeScript. But as you work with Next.js, you will build many components with optional props, as well as many utility function which can be enhanced with TypeScript for better bug spotting, documentation, IntelliSense.

You’re also able to build with Next’s exported types and define your own to build with across your applications. These types help give your code better structure by dictating what your objects, arrays, etc., look like ahead of time. That way, you, your code editor, and any developer after you knows how to reference your code.

Next’s features make building full-stack React apps easier than ever, from [simplified routing](https://nextjs.org/docs/basic-features/pages) to performance-enhancing features like [image optimization](https://nextjs.org/docs/basic-features/image-optimization).

In case you are not familiar with Next.js and TypeScript, read on to get a brief introduction to these topics:

- What is Next.js?
- What is TypeScript?
- Creating  a Next.js app powered by TypeScript
- Adding TypeScript to existing Next.js project 

### What is Next.js?

Next.js is a production-ready framework built on top of React and Node.js. It ships with all the features listed above and [more](https://nextjs.org/docs/basic-features/pages).

You can use Next.js to build static and dynamic apps since it supports both client- and server-side rendering. The most recent version at the time of writing is Next.js 12, which has a new, much faster Rust compiler.

Next.js uses automatic code-splitting (lazy loading) to render only the JavaScript needed for your app. Next.js can also pre-render your pages at build time to serve on demand, which can make your app feel snappy because the browser does not have to spend time executing the JavaScript bundle to generate the HTML for your app, making it possible for more search engine crawlers to index your app, which in turn is great for SEO.

### What is TypeScript?

TypeScript is a popular language created and maintained by Microsoft. It’s a superset of JavaScript, which means all valid JavaScript is valid Typescript.

You can convert your existing JavaScript app to TypeScript and it should work as expected, as long as your code is valid JavaScript. TypeScript allows you to set types on your variables and functions so you can type-check your code and catch errors at compile time.

You can also use modern features that are not yet supported in JavaScript. And don’t worry about browser support — TypeScript compiles to plain JavaScript, which means your TypeScript code will never ship in the browser.

### Using TypeScript in a Next.js app

To create a new Next.js app powered by TypeScript, you can use `create-next-app` with `--ts` flag. Open your terminal and run the command below:

```
npx create-next-app --ts my-app
```

That’s it! Next.js app powered by TypeScript is scaffolded for you. You can now modify the Scaffold and use it the way you want for your awesome projects.

### Adding TypeScript to Existing Next.js Projects

Enabling TypeScript in Next.js project is easy. To do that in existing Next.js app, just create an empty file with name `tsconfig.json` file to the root of the project and run yarn next dev. Next.js will recognize the file and try using TypeScript for the project. It will automatically fill up default values for your `tsconfig.json` and prompt you to add dependences. Add the dependencies by running following command in your terminal

```
# If you’re using npm
npm install --save-dev typescript @types/react @types/node

# If you’re using Yarn
yarn add --dev typescript @types/react @types/node
```

With this in place, we can now create files with `.ts` or `.tsx` extensions. Next.js handles the compilation of the TypeScript code to JavaScript and then serves our app as usual in the browser.

TypeScript brings type safety to JavaScript. 