# Why Next.js?

![img](https://cdn-images-1.medium.com/max/800/1*x0UyqdkphqJwhVIvL2fu5Q.png)

In this story I will list down some of the most important features, stats and characteristics that make Next.js very interesting. I will try to persuade you to explore Next.js

If you are familiar with web development and have paid a little attention to details, you know that React is a JavaScript library — “A JavaScript library for building user interfaces”, as proclaimed on the official React website. And on the official Next.js website you see — “The React Framework for Production”. Let’s begin our discussion from this point itself. 

![img](https://cdn-images-1.medium.com/max/600/1*CU8oMgAXA7D7dHcfgWL_KQ.png)

So, first we try to understand the difference between a library and a framework. Then we will discuss briefly about React, what it is specifically good at, etc., also why it is not the complete solution and finally why Next.js

### Library vs Framework

In our current context — the web development ecosystem — libraries like React, jQuery, Vue, linaria, emotion, styled-components etc. are like small tool-sets that can fit in a larger context or a project. For example, React is very good at building User Interfaces declaratively, but to run a production grade website, you need much more than that. In other words, most libraries follow unix philosophy, “Do one thing, and do it well”.

A framework on the other hand defines how a developer will put together different tools, and it also provides out of the box configurations suitable for various use cases. 

For example, to create a complete website with React, you need to integrate with many other things like React Router, Express for managing APIs, Renderers for different targets, etc. whereas in Next.js routing, and APIs are all inbuilt. Not only that, it offers out of the box static and server side rendering.

While libraries focus on a single task and can integrate easily with many other libraries or frameworks, a framework on the other hand, manages a wide range of tasks and it can not be plugged into larger projects like libraries. 

### Next.js — The React Framework for Production

So, by now you have some idea of why Next.js can be called a React Framework. It is based on React and it integrates a plethora of tooling and optimizations around the React ecosystem to get us the best results.

#### Stats & Features

[**GitHub - vercel/next.js: The React Framework**
*Visit https://nextjs.org/learn to get started with Next.js. Visit https://nextjs.org/docs to view the full…*github.com](https://github.com/vercel/next.js)

Next.js boasts 78.7k+ stars on GitHub with more than 15.9k forks. Here is a list of features  that make a React web developer’s life super easy.

- API routes
- File-system routing
- Static Rendering
- Server Side Rendering
- SEO Optimization
- Image Optimization
- Automatic Code Splitting and Prefetching 
- Middleware
- support ES Modules through external URL (experimental)
- HTTP streaming
- Next.js Live — code with remote team on a live editor

### Conclusion

Next’s features make building full-stack React apps easier than ever, from [simplified routing](https://nextjs.org/docs/basic-features/pages) to performance-enhancing features like [image optimization](https://nextjs.org/docs/basic-features/image-optimization). You can use Next.js to build static and dynamic apps since it supports both client- and server-side rendering. The most recent version at the time of writing is Next.js 12, which has a new, much faster Rust compiler.

Next.js uses automatic code-splitting (lazy loading) to render only the JavaScript needed for the current route and the rest of it will be prefetched in background to ensure sooth navigation across the site. Next.js can also pre-render your pages at build time to serve on demand, which can make your app feel snappy because the browser does not have to spend time executing the JavaScript bundle to generate the HTML for your app, making it possible for more search engine crawlers to index your app, which in turn is great for SEO.