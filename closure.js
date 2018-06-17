// closure is a function with preserved data
var addToX = function(x){
  var add = function(y){
    return x + y;
  }
  return add;
}

// here we preserve the 3 and 4
var add3 = new addToX(3);
var add4 = new addToX(4);

// when we run the functions now, x is preserved to 3 and 4 respectively
console.log(add3(4),' == 7');
console.log(add4(4),' == 8');
