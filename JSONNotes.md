JSON = Javascript Object Notation

JSON sintaxis is identical to how JS defines objects.

```json
{
"employees":[
  {"firstName":"John", "lastName":"Doe"},
  {"firstName":"Anna", "lastName":"Smith"},
  {"firstName":"Peter", "lastName":"Jones"}
]
}
```

Sintaxis rules:
- Data is in name/value pairs
- Data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

Data is stored in name/value pairs.

JSON text can be converted to a JS object:

```js
let text = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';
Then, use the JavaScript built-in function JSON.parse() to convert the string into a JavaScript object:

const obj = JSON.parse(text);
```
