/*var length = 10;

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

/*
// Obtains a given digit from the given number

function getDigitsAt (num, position) {
  let digit = 0;
  const arrDigits = [];

  while (num > 0) {
    digit = num % 10;
    num = num / 10 >>0;
    arrDigits.push(digit);
  }

  return arrDigits[position-1];
}

console.log( getDigitsAt(23456, 1) === 6); // 6
console.log(getDigitsAt(23456, 2) === 5); // 5
console.log(getDigitsAt(23456, 3) === 4); // 4
console.log(getDigitsAt(23456, 4) === 3); // 3
console.log(getDigitsAt(23456, 5) === 2); // 2

// Simplified
const digitsAt = (num, index) => ~~(num / 10 ** --index % 10);
console.log( digitsAt(23456, 1)); // 6
*/