# **JavaScript**

Unlike most programming languages, the JavaScript language has no concept of input or output. It is designed to run as a scripting language in a host environment, and it is up to the host environment to provide mechanisms for communicating with the outside world. The most common host environment is the browser, but JavaScript interpreters can also be found in a huge list of other places,


# **Basics**

## **Variables**

JS has 8 different data types:  `undefined, null, boolean, string, symbol, bigint, number,` and `object.`

```js
let ourName;
/* In JavaScript we end statements with semicolons.
 Variable names can be made up of numbers, letters, 
and $ or _, but may not contain spaces or start with 
a number.*/
```

When JavaScript variables are declared, they have an initial value of `undefined`. If you do a mathematical operation on an `undefined` variable your result will be `NaN` which means *"Not a Number"*. If you concatenate a string with an `undefined` variable, you will get a literal string of "undefined".

You can declare several variables on one single statement separating them with coma:
```js
var person = "John Doe", carName = "Volvo", price = 200;
```

<br>

### **String**
Strings in JavaScript are sequences of Unicode characters. More accurately, they are sequences of UTF-16 code units; each code unit is represented by a 16-bit number. Each Unicode character is represented by either 1 or 2 code units.

Did we mention that you can use strings like objects too? They have methods as well that allow you to manipulate the string and access information about the string:
```js
'hello'.length; // 5
'hello'.charAt(0); // "h"
'hello, world'.replace('world', 'mars'); // "hello, mars"
'hello'.toUpperCase(); // "HELLO"
```

When you are defining a string you must start and end with a single or double quote. You can escape a quote from considering it as an end of string quote by placing a backslash (\) in front of the quote.

```js
let sampleStr = "Alan said, \"Peter is learning JavaScript\".";
```
**Escape Sequences** <br> 
| **Code** | **Output** |
| -------- | ---------- |
| \\' | single quote |
| \\" | double quote |
| \\\ | backslash |
| \\n | newline |
| \\r | carrige return |
| \\t | tab |
| \\b | word boundary |
| \\f | form feed |
<br>

Ex.:
```js
let myStr;
myStr = "FirstLine\n\t\\SecondLine\nThirdLine"
/*
The string looks like:
"FirstLine
	\SecondLine
ThirdLine"
*/
```
<br>

#### **Concatenation**. 
We use the `+` sign to concatenate in 
:
```js
let myStr; // Change this line
myStr = "This is the start. " + "This is the end."
// = This is the start. This is the end.
```
<br>

#### **`.length`** 
Se puede usar:
```js
let firstName = "Frank";
let firstNameLength1 = firstName.length;
let firstNameLength2 = "Frank".length;
// firstNameLength1 =  firstNameLength2 > 5 = 5 
```
<br>

#### **Bracket Notation**. 
Gets a character at a specific index within a string.
```js
var firstName = "Charles";
var firstLetter = firstName[0]; // 'f'
```

String values are immutable, which means that they cannot be altered once created. Note that this does not mean that string cannot be changed, just that the individual characters of a string literal cannot be changed. The only way to change a string would be to assign it with a new string:
```js
var myStr = "Bob";
myStr = "Job";
```
<br>

### **Numbers**
Numbers in JavaScript are "double-precision 64-bit format IEEE 754 values", according to the spec —  There's no such thing as an integer in JavaScript
```js
console.log(3 / 2);             // 1.5, not 1
console.log(Math.floor(3 / 2)); // 1
```
So an apparent integer is in fact implicitly a float.

`Math` provides advanced mathematical functions and constants:
```js
Math.sin(3.5);
var circumference = 2 * Math.PI * r;
```
<br>

#### **`parseInt()`**
```js
parseInt('123', 10); // 123
parseInt('010', 10); // 10
```

You can parse floating point numbers using the built-in `parseFloat()` function. Unlike its `parseInt()` cousin, `parseFloat()` always uses base 10.

The `parseInt()` and `parseFloat()` functions parse a string until they reach a character that isn't valid for the specified number format, then return the number parsed up to that point. However the "+" operator simply converts the string to NaN if there is an invalid character contained within it. 

You can also use the unary `+` operator to convert values to numbers:
```js
+ '42';   // 42
+ '010';  // 10
+ '0x10'; // 16
```

It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
```js
var a = parseInt("11", 2);
//The radix variable says that "11" is in the binary system, or base 2. Converts the string "11" to an integer 3.
```

If the first character in the string can't be converted into a number, then it returns NaN.

 NaN es lo único en Javascript que no es igual a sí mismo. Podría ser cualquier cosa pero lo unico que se sabe es que no es un número.

**NaN is toxic:** If you provide it as an operand to any mathematical operation, the result will also be NaN:
```js
NaN + 5; // NaN
```
<br>

### **Arrays**
- Nested:
```JS
var myArray = [[]];
var myArray2 = [["Bulls", 23], ["White Sox", 45]];
``` 
   **Note:**
   There shouldn't be any spaces between the array name and the square brackets, like `array [0]`. Although JavaScript is able to process this correctly, this may confuse other programmers reading your code.

Unlike strings, the entries of arrays are mutable and can be changed freely.

#### *Multidimensional Array*.
```js
var arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9],
  [[10,11,12], 13, 14]
];
arr[3]; // equals [[10,11,12], 13, 14]
arr[3][0]; // equals [10,11,12]
arr[3][0][1]; // equals 11
```
<br>

#### **`.push()`**, 
Takes one or more parameters and "pushes" them onto the end of the array.
```js
var arr1 = [1,2,3];
arr1.push(4);
// arr1 is now [1,2,3,4]

var arr2 = ["Stimpson", "J", "cat"];
arr2.push(["happy", "joy"]);
// arr2 now equals ["Stimpson", "J", "cat", ["happy", "joy"]]
```
<br>

#### **`.unshift()`** 
Works exactly like .push(), but instead of adding the element at the end of the array, unshift() adds the element at the beginning of the array.
```js
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
```
<br>

#### **`.pop()`** 
Is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, .pop() removes the last element from an array and returns that element.
Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```
<br>

#### **`.shift()`** 
Just like `.pop()` but it removes the first element instead of the last
```js
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].
```
<br>

### **Global vs local variables.** 
It is possible to have both local and global variables with the same name. When you do this, the local variable takes precedence over the global variable.
```js
var someVar = "Hat";
function myFun() {
  var someVar = "Head";
  return someVar;
} // returns "Head"
```
If `return` is omitted the functions returns `undefined`.

*Returning Boolean Values from Functions*. If you want to return just `true` or `false` in a comparison, the easiest way is to:
```js
function isEqual(a,b) {
  return a === b;
}
```
<br>

## **Functions**

`Parameters` are variables that act as placeholders for the values that are to be input to a function when it is called. The actual values that are input (or "passed") into a function when it is called are known as `arguments`.

<br>

## **Objects**

Objects are similar to `arrays`, except that instead of using indexes to access and modify their data, you access the data in objects through what are called `properties`.

```js
var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};
```
In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows:
```js
var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};
```
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

### **Dot notation**

```js
var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2
```
<br>

### **Bracket Notation**

If the property of the object you are trying to access has a space in its name, you will need to use bracket notation.
```js
var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise
```
Using a variable to access a property:
```js
var dogs = {
  Fido: "Mutt",  Hunter: "Doberman",  Snoopie: "Beagle"
};
var myDog = "Hunter";
var myBreed = dogs[myDog];
console.log(myBreed); // "Doberman"
```
<br>

### **Update**
You can update its properties at any time just like you would update any other variable. You can use either dot or bracket notation to update.

### **Add**
You can add new properties to existing JavaScript objects the same way you would modify them.

### **Delete**
```js
ar ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

/*After the last line shown above, ourDog looks like:
{
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
}
*/
```

Objects can be thought of as a key/value storage, like a dictionary. If you have tabular data, you can use an object to "lookup" values rather than a switch statement or an if/else chain. This is most useful when you know that your input data is limited to a certain range.

```js
var alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // "Y"
alpha[24]; // "C"

var value = 2;
alpha[value]; // "Y"
```
<br>

### **`.hasOwnProperty()`** 
```js
var myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top");    // true
myObj.hasOwnProperty("middle"); // false
```
<br>

### **Accessing Nested Objects**
The sub-properties of objects can be accessed by chaining together the dot or bracket notation.
```js
var ourStorage = {
  "desk": {
    "drawer": "stapler"
  },
  "cabinet": {
    "top drawer": { 
      "folder1": "a file",
      "folder2": "secrets"
    },
    "bottom drawer": "soda"
  }
};
ourStorage.cabinet["top drawer"].folder2;  // "secrets"
ourStorage.desk.drawer; // "stapler"
```
<br>

### **Accessing Nested Arrays**
```js
var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"
```
<br>

## **Loops**

### **While**
```js
var ourArray = [];
var i = 0;
while(i < 5) {
  ourArray.push(i);
  i++;
}
```
<br>

### **For**
```js
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```
<br>

### **Do...While**. Code will execute at least once.
```js
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```
<br>

### **Replace Loops using Recursion**
Recursion is the concept that a function can be expressed in terms of itself. 
```js
function multiply(arr, n) {
    var product = 1;
    for (var i = 0; i < n; i++) {
        product *= arr[i];
    }
    return product;
  }
```
However, notice that `multiply(arr, n)` == `multiply(arr, n - 1) * arr[n - 1]`. That means you can rewrite multiply in terms of itself and never need to use a loop.
```js
  function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
```
The recursive version of multiply breaks down like this. In the base case, where n <= 0, it returns 1. For larger values of n, it calls itself, but with n - 1. That function call is evaluated in the same way, calling multiply again until n <= 0. At this point, all the functions can return and the original multiply returns the answer.

*Note*: Recursive functions must have a *`base case`* when they return without calling the function again (in this example, when n <= 0), otherwise they can never finish executing.

### **Random number**
JavaScript has a Math.random() function that generates a random decimal number between 0 (inclusive) and not quite up to 1 (exclusive). Thus Math.random() can return a 0 but never quite return a 1.
  Generate Random Whole Numbers within a Range:
```js
function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax -myMin + 1)) + myMin;
}
```
<br>

### **Ternary Operator**
Can be used as a one line if-else expression.
```js
function findGreater(a, b) {
  return a > b ? "a is greater" : "b is greater";
}
```
It can be chained:
```js
function checkSign(num) {
    return (num > 0) ? 'positive' 
        : (num == 0) ? 'zero'
        : 'negative';
}

checkSign(10);
```
<br>

## **ES6**

### **`Const`**

Objects (including arrays and functions) assigned to a variable using const are still mutable. Using the const declaration only prevents reassignment of the variable identifier.

```js
const s = [5, 6, 7];
s = [1, 2, 3]; // throws error, trying to assign a const
s[2] = 45; // works just as it would with an array declared with var or let
console.log(s); // returns [5, 6, 45]
```
<br>

### **Object.freeze()**
Prevents object mutations. You can no longer add, update, or delete properties from it. Any attempt at changing the object will be rejected without an error.
```js
let obj = {
  name:"FreeCodeCamp",
  review:"Awesome"
};
Object.freeze(obj);
obj.review = "bad"; // will be ignored. Mutation not allowed
obj.newProp = "Test"; // will be ignored. Mutation not allowed
console.log(obj); 
// { name: "FreeCodeCamp", review:"Awesome"}
```
<br>

### **`Arrow Functions`**
```js
const myFunc = function() {
  const myVar = "value";
  return myVar;
}
```
It's equal to:
```js
const myFunc = () => {
  const myVar = "value";
  return myVar;
}
```
When there is no function body, and only a return value:
```js
const myFunc = () => "value";
```
if an arrow function has a single parameter, the parentheses enclosing the parameter may be omitted.
```js
const doubler = item => item * 2;
```
<br>

### **`Default Parameters`**
```js
const greeting = (name = "Anonymous") => "Hello " + name;

console.log(greeting("John")); // Hello John
console.log(greeting()); // Hello Anonymous
```
The default parameter kicks in when the argument is not specified (it is undefined)
<br>

### **`Rest Parameter`**

You can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
```js
const sum = (...args) => {
  return args.reduce((a, b) => a + b, 0);
}

console.log(sum(1,2,3,4));
```
<br>

### **`Spread Operator`**

Allows us to expand arrays and other expressions in places where multiple parameters or elements are expected.
```js
const arr = [6, 89, 3, 45];
const maximus = Math.max(...arr); /*instead of
var maximus = Math.max.apply(null, arr);*/
// returns 89
```

`...arr` returns an unpacked array. In other words, it spreads the array. However, the spread operator only works in-place, like in an argument to a function or in an array literal. In other words, allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.


### **`Destructuring assignment`**

Assigns values taken directly from an object. 
```js
onst user = { name: 'John Doe', age: 34 };

const { name, age } = user;
// name = 'John Doe', age = 34
```
Here, the `name` and `age` variables will be created and assigned the values of their respective values from the `user` object.

You can give it a new name when assigning by placing the new name after colon:
```js
const { name: userName, age: userAge } = user;
// userName = 'John Doe', userAge = 34
```

#### *Destructuring nested objects:*
```js
const { johnDoe: { age, email }} = user;
//variables with different names:
const { johnDoe: { age: userAge, email: userEmail }} = user;
```
<br>

#### *Destructuring an array:*
```js
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2
```
The variable a is assigned the first value of the array, and b is assigned the second value of the array. We can also access the value at any index in an array with destructuring by using commas to reach the desired index:
```js
const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5
```
It differs from the the spread operator in that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

With destructuring you don't need a third variable to swab values between two:
```js
let a = 8, b = 6;
[a, b] = [b, a];
// Now a = 6 and b = 8
```

Destructuring Assignment can be used *with the Rest Parameter to Reassign Array Elements*. In some situations involving array destructuring, we might want to collect the rest of the elements into a separate array.

The result is similar to `Array.prototype.slice()`, as shown below:
```js
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]
```
Variables `a` and `b` take the first and second values from the array. After that, because of the rest parameter's presence, `arr` gets the rest of the values in the form of an array. The rest element only works correctly as the last variable in the list. As in, you cannot use the rest parameter to catch a subarray that leaves out the last element of the original array.

Destructure the object in a function argument:
```js
const profileUpdate = ({ name, age, nationality, location }) => {
  /* do something with these fields */
}

//Similar to the following if you were to pass profileData as argument to the function above
const profileUpdate = (profileData) => {
  const { name, age, nationality, location } = profileData;
  // do something with these variables
}
```
<br>

### **`Template Literals`**
Allow you to create multi-line strings and to use string interpolation features to create strings.
```js
const person = {
  name: "Zodiac Hasbro",
  age: 56
};

// Template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting); // prints
// Hello, my name is Zodiac Hasbro!
// I am 56 years old.
```
Several things about the code above:
- Backticks (`), not quotes (' or "),
- The string is multi-line, both in the code and the output. This saves inserting \n within strings. 
- The ${variable} syntax is a placeholder. Basically, you won't have to use concatenation with the + operator. Similarly, you can include other expressions in your string literal, for example ${a + b}.

### **`Concise Object Literal Declarations Using Object Property Shorthand`**. 
```js
const getMousePosition = (x, y) => ({
  x: x,
  y: y
});

//equals
const getMousePosition = (x, y) => ({ x, y });
```
Syntactic sugar to eliminate the redundancy of having to write `x: x`. You can simply write x once, and it will be converted tox: x (or something equivalent) under the hood. 

#### **`Concise Declarative Functions`**

You can remove the function keyword and colon altogether when defining functions in objects. Here's an example of this syntax:
```js
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};

///instead of:
const person = {
  name: "Taylor",
  sayHello: function() {
    return `Hello! My name is ${this.name}.`;
  }
};
```
<br>

### **`Syntax to Define a Constructor Function`**
The class syntax:
```js
class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');
```
It should be noted that the class keyword declares a new function, to which a constructor is added. This constructor is invoked when new is called to create a new object.
- UpperCamelCase should be used by convention for ES6 class names, as in `SpaceShuttle` used above.
- The constructor method is a special method for creating and initializing an object created with a class.

### **`Getters and Setters`**

Getter functions are meant to simply return (get) the value of an object's private variable. Setter functions are meant to modify (set) the value of an object's private variable based on the value passed into the setter function. 
```js
class Book {
  constructor(author) {
    this._author = author;
    //It is convention to precede the name of a private variable with an underscore (_). However, the practice itself does not make a variable private.
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);  // anonymous
novel.writer = 'newAuthor';
console.log(novel.writer);  // newAuthor
```
<br>

### **`Export to Share a Code Block`**
If you want to use this a function or variable in several different JavaScript files you first need to export it.
```js
export const add = (x, y) => {
  return x + y;
}
// or
const add = (x, y) => {
  return x + y;
}

export { add };
```
<br> 

#### *`export default`*. 
Usually you will use this syntax if only one value is being exported from a file. It is also used to create a fallback value for a file or module.
```js
// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}
```
Since `export default` is used to declare a fallback value for a module or file, you can only have one value be a default export in each module or file. Additionally, you cannot use `export default` with `var, let, or const`.

#### **`Using import`**
`import` allows you to choose which parts of a file or module to load. 
```js
import { add } from './math_functions.js';
//Here, import will find add in math_functions.js, import just that function for you to use, and ignore the rest.
```
 The ./ tells the import to look for the math_functions.js file in the same folder as the current file. The relative file path (./) and file extension (.js) are required when using import in this way.

You can import more than one item from the file by adding them in the import statement like this:
```js
import { add, subtract } from './math_functions.js';
```

IF you wish to import all of its contents into the current file. This can be done with the `import * as` syntax.
```js
import * as myMathModule from "./math_functions.js";

myMathModule.add(2,3);
myMathModule.subtract(5,3);
```
The above import statement will create an object called myMathModule. This is just a variable name, you can name it anything. The object will contain all of the exports from math_functions.js in it, so you can access the functions like you would any other object property.

#### *`Import a Default Export`*
```js
import add from "./math_functions.js";
```
The syntax differs in one key place. The imported value, `add`, is not surrounded by curly braces `({})`. `add` here is simply a variable name for whatever the default export of the `math_functions.js` file is. You can use any name here when importing a default.

### **`Callback Functions`**

Callbacks make sure that a function is not going to run before a task is completed but will run right after the task has completed. It helps us develop asynchronous JavaScript code and keeps us safe from problems and errors. A callback function is to pass it as a parameter to another function, and then to call it back right after something has happened or some task is completed.
```js
function myDisplayer(some) {
  document.getElementById("demo").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);
```
<br>

### **`Promises`**

A promise in JavaScript is exactly what it sounds like - you use it to make a promise to do something, usually asynchronously. When the task completes, you either fulfill your promise or fail to do so. Promise is a constructor function, so you need to use the new keyword to create one. It takes a function, as its argument, with two parameters - resolve and reject. These are methods used to determine the outcome of the promise.
```js
const myPromise = new Promise((resolve, reject) => {
  if(condition here) {
    resolve("Promise was fulfilled");
  } else {
    reject("Promise was rejected");
  }
});
```
A promise has three states: *pending*, *fulfilled*, and *rejected*. A promise is forever stuck in the pending state if you don't add a way to complete the promise. The `resolve` and `reject` parameters given to the promise argument are used to do this. `resolve` is used when you want your promise to succeed, and `reject` is used when you want it to fail.
If something is going to take a unknown amount of time promises are handy. Server requests, for instance. After completing them and receiving the server's result you can use the method `then`. The `then` method is executed immediately after your promise is fulfilled with resolve.
```js
const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;
    
  if(responseFromServer) {
    resolve("We got the data");
  } else {  
    reject("Data not received");
  }
});

makeServerRequest.then(result => {
  console.log(result);
});
// result comes from the argument given to the resolve method
```
Promise.then() takes two arguments, a callback for success and another for failure. Both are optional, so you can add a callback for success or failure only.
```js
myPromise.then(
  function(value) { /* code if successful */ },
  function(error) { /* code if some error */ }
);
```
> *SEE JS_Practice, Line 46*
<br>

#### **`Rejected Promise with catch`**
`catch` is the method used when your promise has been rejected. It is executed immediately after a promise's reject method is called. It is an alternative to the second parameter of `then`.
```js
myPromise.catch(error => {
  // do something with the error.
});
```
`error` is the argument passed in to the `reject` method.



---
# **Good To Know**

## `localStorage`
Si yo estoy en Facebook y abro la consola y agrego algo así: `'localStorage.myValFromFB = 'From facebook' `, y luego en otra tab entro a Youtube, abro la consola y accedo a `localStorage.myValFromFB`, por seguridad no se puede. Las webs ponen información como login tokens, información del usuario, información del app, etc., en localStorage. Así que el navegador no puede permitir que otro dominio pueda ver lo que otro dominio guardó ahí. Así que el storage es por dominio. Cada quiente tiene su propio storage.

## **THIS AND ARROW FUNCTIONS**
Las arrow function no tienen un `this` propio como las demás funciones. El `this` es la de su contexto. Los arrows functions no tienen contexto. El engine tiene que salir a buscarlo más arriba.

## **Functions**
### **FIRST CLASS FUNCTIONS** 
Para entender mejor las First Class Functions en JavaScript, uno puede decir que las funciones en JavaScript son objetos ejecutables/invocables.
### **HIGH CLASS FUNCTIONS** 
Son funciones que aceptan como parametro otra funcion y/o pueden devolver una funcion como resultado. Ex.:

```js
function powerOfTwo(x){
    return x *x;
}
function double(y, func){
    return func(y) * 2;
}
const powerThenDouble = double(3, powerOfTwo);
console.log(powerThenDouble);
//prints 18
//double(y, func) es nuestra high class function
```
<br>

## ***Binding***
- **HARD BINDING**. Se hace con `bind()`. Se dice que es hard con el bind, porque la wrapped function que te devuelve bind, por más bind que le vuelvas a hacer y más jodiendas, ya no se volverá a referir a nadie más que el objeto original que le pasaste.
- **SOFT BINDING**. Soft binding lo hace `call` y `apply` y llamando a la función desde el objeto también.

## ***Switch Case***
JavaScript's switch case uses the strict comparison (===), i didn't know that.

## **Key = Value**
Si la llave y el valor de una objeto en javascript es una misma variable, para usarlo puedes:
```js
let x = obj1 (p1 : p1); //Utiliza el nombre de la variable como key y su valor como valor
//Es igual que
let x = obj1 (p1);
```

## **Let vs Var**

### **Scoping rules**
Main difference is scoping rules. Variables declared by `var` keyword are scoped to the immediate function body (hence the function scope) while let variables are scoped to the immediate enclosing block denoted by `{ }` (hence the block scope).

```js
function run() {
  var foo = "Foo";
  let bar = "Bar";

  console.log(foo, bar); // Foo Bar

  {
    let baz = "Bazz";
    console.log(baz); // Bazz
  }

  console.log(baz); // ReferenceError
}

run();
```

The reason why `let` keyword was introduced to the language was function scope is confusing and was one of the main sources of bugs in JavaScript.

```js
var funcs = [];
// let's create 3 functions
for (var i = 0; i < 3; i++) {
  // and store them in funcs
  funcs[i] = function() {
    // each should log its value.
    console.log("My value: " + i);
  };
}
for (var j = 0; j < 3; j++) {
  // and now let's run each one to see
  funcs[j]();
}
```
`My value: 3` was output to console each time `funcs[j]();` was invoked since anonymous functions were bound to the same variable.

People had to create immediately invoked functions to capture correct value from the loops but that was also hairy.

You can overwrite variable declarations without an error.
```js
var camper = 'James';
var camper = 'David';
console.log(camper);
// logs 'David'
```

### **Hoisting**
Hoisting is the process of setting up of memory space for our variables and functions. Before the code starts to execute, the JS engine goes thru the code and sets up blocks of memory for functions and variables. The values of variables are not stored but functions are stored entirely along with their definitions. However, for variables declared with `var` the engine assigns `undefined` as the default value.

While variables declared with var keyword are hoisted (initialized with undefined before the code is run) which means they are accessible in their enclosing scope even before they are declared:

```js
function run() {
  console.log(foo); // undefined
  var foo = "Foo";
  console.log(foo); // Foo
}

run();
```
`let` variables are not initialized until their definition is evaluated. Accessing them before the initialization results in a `ReferenceError`. Variable said to be in "temporal dead zone" from the start of the block until the initialization is processed.

```js
function checkHoisting() {
  console.log(foo); // ReferenceError
  let foo = "Foo";
  console.log(foo); // Foo
}

checkHoisting();
```

### **Creating global object property**
At the top level, let, unlike var, does not create a property on the global object:

```js
var foo = "Foo";  // globally scoped
let bar = "Bar"; // globally scoped

console.log(window.foo); // Foo
console.log(window.bar); // undefined
```

### **Number Placeholder**
Be careful using 0 to initialize variables with meant to store numbers. JS evaluates ceros to falsy, rather use `null` to indicate absence of values.

---
# **MISC**


## **Comparable** 
Son un tipo de objetos que entre ellos pueden ser comparables. **Comparator** es un objeto que se encarga de comparar a otros objetos entre ellos.

## **Sorting numbers**
- A way to sort numbers:
```js
const sortAscending = (x,y) => x-y;
[0,11,100,2,4,500,33].sort(sortAscending);
//
const sortDescending = (x,y)=>y-x;
```
<br>

## **Redeclaration**

In strict mode, var will let you re-declare the same variable in the same scope while let raises a SyntaxError.

```js
'use strict';
var foo = "foo1";
var foo = "foo2"; // No problem, 'foo' is replaced.

let bar = "bar1";
let bar = "bar2"; // SyntaxError: Identifier 'bar' has already been declared
```

## **`.reduce()`**
Executes a provided function for each value of the array (from left-to-right).
*Syntax:*
`array.reduce(function(total, currentValue, currentIndex, arr), initialValue)`

## **switch case ... Statements**
- `case` values are tested with strict equality (===).

##  **<Scripts>**
Placing scripts at the bottom of the `<body>` element improves the display speed, because script interpretation slows down the display.

## **Print**
JavaScript does not have any print object or print methods. You cannot access output devices from JavaScript. The only exception is that you can call the window.print() method in the browser to print the content of the current window.
```js
<button onclick="window.print()">Print this page</button>
```