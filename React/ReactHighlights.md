React is a JavaScript library created by Facebook.

React is a User Interface (UI) library.

React is a tool for building UI components.

# **Starting with React Apps**

1- Make sure you have node installed. Run `node -v` to confirm.
2- Run `npx create-react-app .`. `npx` is similar to `npm` but instead of downloading like `npm` it will execute the code command that follows it. The `.` is to use the current directory.

## **Considerations**

In the newly created *public* folder you'll find a simple *index.html* that has just a `div` element that will hold all the html that React will automatically create for us when running the app.

`src/index.js` is where our application starts. By default it renders the component `App` in the `App.js` file.
```js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

//At means: render App in strict mode inside an html element named 'root'.
```

# **JSX** JavaScript XML

It is a XML syntax extension to JavaScript (XML/HTML like). We recommend using it with React to describe what the UI should look like.
```jsx
const element = <h1>Hello World!</h1>
// Not JS nor XML
```
You can put any valid JavaScript expression inside the curly braces in JSX. For example, `2 + 2`, `user.firstName`, or `formatName(user)` are all valid JavaScript expressions.

**JSX is an Expression Too**. After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

# **Babel**

A JavaScript compiler that is capable of translating markup or programming languages into JS. **React uses Babel to convert JSX to JavaScript.**

# **Create React Application**

Facebook has created a Create React Application with everything you need to build a React app. It is a development server that uses Webpack to compile React, JSX, and ES6, auto-prefix CSS files.

The Create React App uses *ESLint* to test and warn about mistakes in the code. To create a Create React App run the following code on your terminal:
```
npx create-react-app react-tutorial
```
<br>

# **`ReactDOM.render()`**

Method used to display HTML elements:
```html
<div id="id01">Hello World!</div>

<script type="text/babel">
  ReactDOM.render(
    <h1>Hello React!</h1>,
    document.getElementById('id01')
  );
</script>
```

# **Elements**
Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:
```js
const element = <h1>Hello, world</h1>;

// You could display it:
<div id="root"></div>
ReactDOM.render(element, document.getElementById('root'));
```

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time. So, the only way to change a React element is to render a new element every time.
```js
function tick() {
    const element = (<h1>{new Date().toLocaleTimeString()}</h1>);
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
```
<br>

# **Components**
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen. 

- *Function components*. Literally JavaScript function that accept “props” (which stands for properties) object's argument with data and returns a React element.
```js
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

- *Class components*. A component defined using ES6 classes sintaxis. 
```js
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

The above two components are equivalent from React’s point of view. Both types of components have each additional features though.

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

>***Note***: React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

We recommend naming props from the component’s own point of view rather than the context in which it is being used.

A component must never modify its own props.
```js
function sum(a, b) {
    return a + b;
}
// “pure” function because they do not attempt to change their inputs, and always return the same result for the same inputs.
```

```js
function withdraw(account, amount) {
    account.total -= amount;
}
//impure function. Changes its own output.
```

React is pretty flexible but it has a single strict rule: ***All React components must act like pure functions with respect to their props.***

## **Functional Components**

## **Class Components**

We mainly use class components when we need to access the specialized methods

# **State and Props**

`State` are properties intrinsic to the component. It will cause the component to re-render. `Props` are properties that are passed down to the component from the parent.

The states are considered private to each component.

If we want to obtain data from multiple children components or we want them to communicate then declare the shared state in the parent component and pass that state as a prop to the children.

## **Typechecking `PropTypes`**

You can set the types of your props and enforced them to be passed down when calling a component.

```js
import PropTypes from 'prop-types';

const Foo = ({name}) => {
  return (
    <h1>This is your {name}</h1>
  )
}

Foo.propTypes = {
  name: PropTypes.string.isRequired
}
```
Using `isRequired` we make providing a prop *name* to be mandatory. It's optional. 

# **Hooks**

Hooks are the way function components are able to access state and side-effects in react like we do with class components.

## **`setState`**

If setState if called several times

___
# **Content on Videos**

- How to add components to the ProofConcept. 
    - Meet - uoe-dufj-fqm - Google Chrome 2020-10-27 21-42-50_Bootstrap-109. 1:20

___
# MISC

- `import React from 'react';` used to be mandatory import line on React because even though you were not going to use react on that particular file, it was needed for the JSX portion of the file.

- To create a React app you need to be in a folder that doesn't have capital letters or spaces in its name.

## Lists key

We need to specify a key property for each list item to differentiate each list item from its siblings. React uses the key whenever a list is re-rendered and performs a search to match de key:
- If the key is not found a component is created.
- If the new list has a missing key the previous component is destroyed
- If matched the component is updated.

key cannot be referenced using this.props.key. React automatically uses key to decide which components to update. A component cannot inquire about its key.

# **Quick Concepts Overview**

## **React**

React is a declarative JS library used to build user interfaces. Through the use of composition it allows to build complex systems from small blocks of code called **components**.

## **`create-react-app` - CRA**

CRA is a command that downloads and readies for you a React development environment. It is the official way to access templates with the basic structure you need to start coding.

## **JSX**

Or Javascript XML is a syntax extension of JS created by Facebook. It specifically extends the standard ECMAScript.
 > In React, with its tree like structure when defining elements, serves as syntactic sugar so you don't have to use things like createElement() or appendChild() to manipulate elements