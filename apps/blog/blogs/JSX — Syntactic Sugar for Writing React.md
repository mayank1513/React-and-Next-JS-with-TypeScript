---
url:https://mayank-1513.medium.com/jsx-syntactic-sugar-for-writing-react-c6b93b9d51b5
---

# JSX — Syntactic Sugar for Writing React

[![Mayank Chaudhari](https://miro.medium.com/fit/c/35/35/1*Rh9fPNDy1ZBGVB4VnEGM5A.png)](https://mayank-1513.medium.com/?source=post_page-----c6b93b9d51b5-----------------------------------)

[Mayank Chaudhari](https://mayank-1513.medium.com/?source=post_page-----c6b93b9d51b5-----------------------------------)

[Sep 29, 2021·4 min read](https://mayank-1513.medium.com/jsx-syntactic-sugar-for-writing-react-c6b93b9d51b5?source=post_page-----c6b93b9d51b5-----------------------------------)

![img](https://miro.medium.com/max/875/0*znvBCJVQXa27ctdl.png)

I have been creating websites using Next.js and thus naturally using JSX. Even before getting exposed to React and Next.js, I have used JSX for Vue.js applications. But until I decided to create a course on Next.js, I didn’t really know what exactly is JSX and why was it even invented.

JSX stands of JavaScript XML, and as you already know, XML is Extensible Markup Language. JSX is basically a a syntax extension to JavaScript and it is used with React to describe what the UI should look like. It may remind you of a template language, but it comes with the full power of JavaScript as we will see further.

# Why JSX?

As per the official documentation of React JS:

> React embraces the fact that rendering logic is inherently coupled with other UI logic: how events are handled, how the state changes over time, and how the data is prepared for display.

If you have been a developer for a decade or so, you know that earlier separating concerns was understood to be separating technologies and thus HTML, CSS, and JavaScript we strictly maintained in separate files. But with more and more power landing into the browser with JavaScript, and the complex nature of the interaction of the different technologies, people gradually started accepting that separating concerns should not imply artificially separating technologies. Rather, modern frameworks like React and Vue, separate the concerns with loosely coupled units called components. Components are thus the building blocks of modern frameworks and each component may have its own HTML, CSS and JavaScript.

If you still don’t like to put your JavaScript code with markup, you might want to see following talk.

<iframe src="https://cdn.embedly.com/widgets/media.html?src=https%3A%2F%2Fwww.youtube.com%2Fembed%2Fx7cQ3mrcKaY%3Ffeature%3Doembed&amp;display_name=YouTube&amp;url=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Dx7cQ3mrcKaY&amp;image=https%3A%2F%2Fi.ytimg.com%2Fvi%2Fx7cQ3mrcKaY%2Fhqdefault.jpg&amp;key=a19fcc184b9711e1b4764040d3dc5c07&amp;type=text%2Fhtml&amp;schema=youtube" allowfullscreen="" frameborder="0" height="480" width="854" title="Pete Hunt: React: Rethinking best practices -- JSConf EU" class="ef es eo ex w" scrolling="auto" style="box-sizing: inherit; width: 680px; position: absolute; left: 0px; top: 0px; height: 382.2px;"></iframe>

It is important to note that React [doesn’t require](https://reactjs.org/docs/react-without-jsx.html) using JSX, but most people find it helpful as a visual aid when working with UI inside the JavaScript code. It also allows React to show more useful error and warning messages.

As the title said — JSX is but a syntactic sugar to creating React elements. When compiling Babel transpiles all your JSX into React functions.

# Requirements for using JSX

JSX is neither HTML, nor JavaScript. So, if you send JSX to your browser, it won’t understand JSX. JSX, when transpiled by Babel, is converted into React functions. Thus, React must be in scope while you work with JSX. Of course, Vue JS also supports JSX syntax and in that case that is transpiled into Vue functions by babel and not react.

Secondly, if you are rendering custom component, then that component must also be in scope.

For example:

```
<MyButton color="blue" shadowSize={2}>
  Click Me
</MyButton>
```

compiles into

```
React.createElement(
  MyButton,
  {color: 'blue', shadowSize: 2},
  'Click Me'
)
```

Thus, MyButton must be in scope also.

# **Characteristics of JSX:**

- JSX is not mandatory to use there are other ways to achieve the same thing but using JSX makes it easier to develop react application.
- JSX allows writing expression in { }. The expression can be any JS expression or React variable.
- JSX is an Expression Too, you can pass it as argument to functions, you can return it from functions, use it inside if and for loops as well as assign it to variables like any other JS expression.
- You can pass children in JSX similar to HTML
- To insert a large block of HTML we have to write it in a parenthesis i.e, ().
- It is safe to embed user input in JSX: JSX Prevents Injection Attacks. By default, React DOM escapes any values embedded in JSX before rendering them. Thus it ensures that you can never inject anything that’s not explicitly written in your application. Everything is converted to a string before being rendered. This helps prevent [XSS (cross-site-scripting)](https://en.wikipedia.org/wiki/Cross-site_scripting) attacks.
- JSX produces react elements. Babel compiles JSX down to `React.createElement()` calls.
- JSX follows XML rule.
- After compilation, JSX expressions become regular JavaScript function calls.
- JSX uses camelcase notation for naming HTML attributes. For example, tabindex in HTML is used as tabIndex in JSX.

# **Advantages of JSX:**

- JSX makes it easier to write or add HTML in React.
- JSX can easily convert HTML tags to react elements.
- It is faster than regular JavaScript.
- JSX allows us to put HTML elements in DOM without using [appendChild()](https://www.geeksforgeeks.org/html-dom-appendchild-method/) or [createElement()](https://www.geeksforgeeks.org/html-dom-createelement-method/) method.
- As JSX is an expression, we can use it inside of if statements and for loops, assign it to variables, accept it as arguments, or return it from functions.
- JSX prevents XSS (cross-site-scripting) attacks popularly known as injection attacks.
- It is type-safe, and most of the errors can be found at compilation time.

If you are interested in learning Next JS, keep an eye on my [Udemy profile](https://www.udemy.com/user/coding-simplified/) given below. I will soon be releasing a couple of courses on Next JS taking the learners journey from absolute beginner to a pro developer.

If you got any questions, feel free to post them on [StackOverflow](https://stackoverflow.com/story/m__) and ping me.
