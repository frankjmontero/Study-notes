## **JSX**
It is called JSX, and it is a syntax extension to JavaScript. We recommend using it with React to describe what the UI should look like.
You can put any valid JavaScript expression inside the curly braces in JSX. For example, `2 + 2`, `user.firstName`, or `formatName(user)` are all valid JavaScript expressions.

**JSX is an Expression Too**. After compilation, JSX expressions become regular JavaScript function calls and evaluate to JavaScript objects.

Since JSX is closer to JavaScript than to HTML, React DOM uses camelCase property naming convention instead of HTML attribute names.

## **Elements**
Elements are the smallest building blocks of React apps.

An element describes what you want to see on the screen:
```js
const element = <h1>Hello, world</h1>;
```

React elements are immutable. Once you create an element, you can’t change its children or attributes. An element is like a single frame in a movie: it represents the UI at a certain point in time.

## **Components**
Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

- *Function components*. Literally JavaScript function that accept “props” (which stands for properties) object argument with data and returns a React element.
```jsx
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
- *Class components*. A component defined using ES6 classes sintaxis. 
```jsx
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```
The above two components are equivalent from React’s point of view. Both types of components have each additional features though.

When React sees an element representing a user-defined component, it passes JSX attributes and children to this component as a single object. We call this object “props”.

    Note: React treats components starting with lowercase letters as DOM tags. For example, <div /> represents an HTML div tag, but <Welcome /> represents a component and requires Welcome to be in scope.

We recommend naming props from the component’s own point of view rather than the context in which it is being used.

A component must never modify its own props.
```jsx
function sum(a, b) {
    return a + b;
}
// “pure” function because they do not attempt to change their inputs, and always return the same result for the same inputs.
```
```jsx
function withdraw(account, amount) {
    account.total -= amount;
}
//impure function. Changes its own output.
```

React is pretty flexible but it has a single strict rule: ***All React components must act like pure functions with respect to their props.***

## **State and Props**

`State` are properties intrinsic to the component. It will cause the component to re-render. `Props` are properties that are passed down to the component from the parent.

___
### **Videos**

- How to add components to the ProofConcenpt. 
    - Meet - uoe-dufj-fqm - Google Chrome 2020-10-27 21-42-50_Bootstrap-109. 1:20

___
# MISC

- `import React from 'react';` used to be mandatory import line on React because even though you were not going to use react on that particular file, it was needed for the JSX portion of the file.