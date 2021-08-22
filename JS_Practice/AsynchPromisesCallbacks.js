let stocks = {
  fruits : ['strawberry', 'grapes', 'banana', 'apple'],
  liquid : ['water', 'ice'],
  holder : ['cone', 'cup', 'stick'],
  toppings : ['chocolate', 'peanuts'],
};

// Function 1
let order = (fruitName, callProduction) => {
  setTimeout(function() {
    console.log(`${stocks.fruits[fruitName]} was selected`);

    // Order placed. Call production to start
    callProduction();
  }, 2000)
};

//Function 2
// Callback hell
let production = () =>{
  setTimeout(() => {
    console.log('Production has started')
    setTimeout(() => {
      console.log('The fruit has been chopped')
      setTimeout(() => {
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} Added`)
        setTimeout(() => {
          console.log('start the machine')
          setTimeout(() => {
            console.log(`Ice cream placed on ${stocks.holder[1]}`)
            setTimeout(() => {
              console.log(`${stocks.toppings[0]} as toppings`)
              setTimeout(() => {
                console.log('service Ice Cream')
              }, 2000);
            }, 3000);
          }, 2000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 0000);
};

//Trigger
order(0, production);