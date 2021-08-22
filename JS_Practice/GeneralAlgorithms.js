
// /* DigitsAt Simplified: Carlos */
// const digitsAt = (num, index) => ~~(num / 10 ** --index % 10);
// console.log( digitsAt(23456, 1)); // 6


// /* Prints number in oposite order. Cero to the left are discarded */

// const invertOrder = n => {
//   let digit = 0;
//   let isNegative = false;

//   if (n < 0) {
//     n *= -1;
//     isNegative = true;
//   }
//   while (n > 0) {
//     digit = digit * 10 + n % 10;
//     n = ~~(n / 10);
//   }

//   return isNegative ? digit * -1 : digit;
// };

// console.log(invertOrder(15));
// console.log(invertOrder(981));
// console.log(invertOrder(500));
// console.log(invertOrder(-90));
// console.log(invertOrder(3005));


// /* Get most repeated char */

// const mostUsedChar = s => {
//   const charObj = {};
//   let count = 0;
//   let returnChar = '';

//   for(let i = 0; i < s.length; i++) {
//     console.log(s[i]);
//     charObj[s[i]] = (charObj.hasOwnProperty(s[i])) ? charObj[s[i]] + 1 : 1;
//     console.log(charObj);

//     if (charObj[s[i]] > count) {
//       count = charObj[s[i]];
//       returnChar = s[i];
//     }
//   }

//   return returnChar;
// }

// console.log(mostUsedChar('aabklklbraarrrrrkkkllllllll'));


// /* Divide Array in Chunks */

// /* Solution 1 */
// const chunkArray = (arr, size) => {
//   let chunkedArray = [[]];

//   for (let i = 1, j = 0; i <= arr.length; i++) {
//     if (chunkedArray[j].length === size) {
//       chunkedArray[++j] = [];
//     }
//     chunkedArray[j].push(arr[i-1]);
//   }
//   return chunkedArray;
// }

// /* Solution 2 */
// const chunkArray2 = (arr, size) => {
//   let chunkedArray = [];
//   let tempArr = [];

//   for (let i = 1; i <= arr.length; i++) {
//     tempArr.push(arr[i-1]);
//     if (tempArr.length === size) {
//       chunkedArray.push(tempArr);
//       tempArr = [];
//     }
//   }
//   return chunkedArray;
// }

// console.log(chunkArray([1,2,3,6,4,8,9,7,10],5));
// console.log(chunkArray2([1,2,3,6,4,8,9,7,10],2));


// /* Capitalizes a string */

// /* Solution 1 */
// const capitalize = (s) => {
//   const arrChar = s.split('');
//   for (let i = 0; i < arrChar.length; i++) {
//     if (i === 0 || arrChar[i - 1] === ' ') {
//       arrChar[i] = arrChar[i].toUpperCase();
//     }
//   }
//   return arrChar.join('');
// };
	
// /* Solution 2 */
// const capitalize2 = s => [...s].map((s, i, arr) => (arr[i-1] === ' ' || i === 0) ? arr[i].toUpperCase() : arr[i]).join('');

// console.log(capitalize('a long trip'));
// console.log(capitalize2('a long trip'));


// /* Steps with # */
// /* Solution 1 */
// const drawSteps = hight => {
//   for (let i = 1, j = hight - 1; i <= hight; i++, j--) {
//     console.log('\'' + '#'.repeat(i) + ' '.repeat(j) + '\'');
//   }
// }
// drawSteps(5);

// /* Solution 2 */
// const drawSteps2 = hight => {
//   for (let i = 1, j = hight - 1; i <= hight; i++, j--) {
//     console.log(`'${'#'.repeat(i)}${' '.repeat(j)}'`);
//   }
// }
// drawSteps2(5);

/* Sum of odd numbers triangle */
// const sumRow = r => {
//   if (r === 1) return r;
//   let prev = r * (r-1) + 1, sum = prev;
  
//   for (let i = 1; i < r; i++) {
//     sum += prev += 2;
//   }

//   return sum;
// }

// console.log(sumRow(4));


/* Draw a pyramid with the indicated depth*/

/* Solution 1*/
// const drawPyramid = h => {
//   const poundSign = '#', blank = ' ';
  
//   for(let i = 0; i < h; i++) {
//   	console.log(`'${blank.repeat(h-i-1)}${poundSign.repeat(i*2+1)}${blank.repeat(h-i-1)}'`);
//   }
// }

// drawPyramid(3);

// /* Solution 2*/
// const drawPyramid2 = h => Array(h).fill('').forEach((value, i) => 
//   console.log(`'${' '.repeat(h-i-1)}${'#'.repeat(i*2+1)}${' '.repeat(h-i-1)}'`));

// drawPyramid2(3);

// //Pyramid Jeremy
// function pyramid(n) {
//     const arr = Array(n * 2 - 1).fill(' ');
//     const midLength = n - 1;
//     for(let i = midLength, j = midLength; i >= 0; i--, j++) {
//         arr[i] = '#';
//         arr[j] = '#';
//         console.log(`'${arr.join('')}'`);
//     }
// }

// pyramid(3);

/* Matrix N*N ordered in spiral*/

// const createSpiralMatrix = n => {
//   const matrix = [...Array(n)].map( i => Array(n).fill(0));//new Array(n).fill([]);
//   //console.log(matrix);
//   let abcMovements = n - 1;
//   let dMovements = n - 2;
//   let side = 'a';
//   let x = 0, y = 0;
//   let nMoves = abcMovements;

//   for (let i = 0; i < n*n; i++) {
//     matrix[y][x] = i + 1;
//     console.log(matrix);
//     console.log(y, x);
//     switch (side) {
//       case 'a':
//         if (nMoves === 0) {
//           side = 'b';
//           nMoves = abcMovements;
//           //break;
//         } else {
//           x++;
//           nMoves--;
//           break;
//         }
//       case 'b':
//         if (nMoves === 0) {
//           side = 'c';
//           nMoves = abcMovements;
//          // break;
//         } else {
//           y++;
//           nMoves--;
//           break;
//         }
//       case 'c':
//         if (nMoves === 0) {
//           side = 'd';
//           nMoves = dMovements;
//           // break;
//         } else {
//           x--;
//           nMoves--;
//           break;
//         }
//       case 'd':
//         if (nMoves === 0) {
//           side = 'a';
//           nMoves = abcMovements = dMovements;
//           dMovements -= 2;
//           //x++;
//           break;
//         } else {
//           y--;
//           nMoves--;
//         }
//     }
//   }

// //  console.log(matrix);
// };

// createSpiralMatrix(4);

// const testFunc = () => {
//   const arrExample = [[],[],[]];

//   arrExample[0][0] = 1; 
//   arrExample[0][1] = 1; 
//   arrExample[0][2] = 1; 
//   arrExample[1][1] = 1; 
//   arrExample[1][1] = 1; 
//   arrExample[2][2] = 1; 

//   console.log(arrExample);
// }

// testFunc();