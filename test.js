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
*/

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