/*
ES5 Map Call Bacl
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
}
Turned into ES2015 below
*/
const double = (arr) => (arr.map((val) => (val * 2)));

/*
ES5 Map Call Bacl
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
Turned into ES2015 below
*/

const squareAndFindEvens = (numbers) => {
    const squares = numbers.map(num => num ** 2)

    const evens = squares.filter(square => square % 2 === 0)

    return evens;
}