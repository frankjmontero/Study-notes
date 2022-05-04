
In JSON, values must be one of the following data types:

- a string
- a number
- an object (JSON object)
- an array
- a boolean
- null

# **`JSON.stringify()`**

When stringifying a function covert the function to string first since `stringify()` does not convert functions to string.

```js
const animal = {
  type: 'mammal';
  eat: function(){return 'poop'};
};
animal.eat = animar.eat.toString();
const sampleJSON = JSON.stringify(obj);
```

# Exceptions

## **Parsing Dates**
Date objects are not allowed in JSON.

If you need to include a date, write it as a string.

## **Parsing Functions**

The converted function will lose its scope. To convert it back into function `eval()` would have to be used.

