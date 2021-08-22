/*
//Practicing undefined

let a = 5;
let b = 10;
let c = "I am a";
// Only change code above this line

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(+ "10.abc");
console.log(parseInt("10.abc"));

let a, b, rest;
({ a, rest } = { rest: 30, a: 10, b: 20 });
console.log(a); // 10
console.log(b); // 20
console.log(rest); // 20

function myFunction(v, w, x, y, z) { 
    console.log(v+' '+w+x+y+z);
}
let args = [0, 1];
myFunction(-1, ...args, 2, ...[3]);
*/

/*
//CACHING
let cache = {};
function fibonacci (n) { 
    if (n <= 2) return 1;

    if(cache[n]) return cache[n];
    
    const value = fibonacci(n-1) + fibonacci(n-2);

    cache[n] = value;

    return value;
}

console.log(fibonacci (1200));
*/


/*
let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(function() { myResolve("I love You !!"); myReject('Failed');}, 3000);
  });
  
  myPromise.then(function(value) {
    console.log(value);;
  }, function(errMsg) {console.log(errMsg);});
  */


// const makeServerRequest = new Promise((resolve, reject) => {
//     // responseFromServer is set to true to represent a successful response from a server
//     let responseFromServer = false;
      
//     if(responseFromServer) {
//       resolve("We got the data");
//     } else {  
//       reject("Data not received");
//     }
//   });
  
// makeServerRequest.then(
//       result => {console.log(result + '\n' + '||');},
//       errMsg => {console.log(errMsg + '\n' + '||');}
// );
// makeServerRequest.catch(
//     errMsg => {console.log(errMsg);}
// );


/*
var length = 10;

function fn() {
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  }
};

obj.method(fn, 1);*/

/*
//Prints a pyramid whose levels are determine by the parameter
function Pyramid(lvl) {
  
  let line = '';

  for (let i = 0; i < lvl; i++) {

    let space = '';
  
    for (let j = 0; j < (lvl-(i+1)); j++){
      space = space + ' ';
    }

    line = line + space;

    for (let m = 0; m < (i*2+1); m++) {
      line = line + '#';
      if (i+1 == 1) break;
    }

    line = line + space + '\n';
  }
  
  return line;
}

console.log(Pyramid(10));

// Testing errors

function func(text){
  
  try{
    if (text == '') throw 'Enter something';
    if (isNaN(text)) throw 'Enter a number';
    console.log('You entered this number: ' + text);
  }
  catch (err){ 
    console.log(err);
  }
  finally{
    console.log('The end');
  }
}

func('a-');

function outer() {
  let counter = 0;
  function incrementCounter() {
    counter++;
    console.log(counter);
  }
  return incrementCounter;
}

const myNewFunction = outer();
myNewFunction();
myNewFunction();

const anotherFunction = outer();
anotherFunction();
anotherFunction();

function outer(){
  const outerValue = 'Outer';

  function middle() {
    const middleValue = 'Middle';
    const outerValue = 'Middle';

    function inner() {
      const innerValue = 'Inner';
      console.log(outerValue, middleValue, innerValue);
    }

    return inner;
  }

  return middle();
}

let inner = outer();
inner();


async function doOperation(callback) {
  const n = await 5;
  console.log('n:', n);
  callback();
}

doOperation(() => {
  console.log('This is the call back');
})

console.log('after do operation');
// await es un keyword. Cuando el engine vio eso, pues metió todo el código desde esa línea ahí hacia abajo al queue.
*/

/*
async function doOperation(callback) {
  const n = 5;
  const result = await console.log('n:', n);
  console.log('result: ', result);
  callback();
}

const d = doOperation(() => {
  console.log('This is the call back');
});

console.log('d: ', d);

console.log('after do operation');
/*La función doOperation se ejecuta de forma síncrono hasta que llega al await, por lo que imprime n:5 antes de llegar al await. Cuando llegua al await, el engine envuelve todo desde la línea del await hasta el fondo dentro de una promesa, y la mete en el queue. Luego el engine sigue ejecutando y ejecuta el console.log de afuera. Y luego cuando ese stack se vacía, entonces el js va al queue a buscar y ejecutar el resultado de la promise.

La línea del await se va a invocar de una vez. Es el resultado de esa línea y todas las líneas siguientes las que se van a meter en la promesa. Lo que quiere decir que, al hacer await, para que lo que se ejecute en la línea del await se ejecute asíncrono, tiene que ser una promesa.
*/
