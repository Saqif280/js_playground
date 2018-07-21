// ES5
function myObject(){
  var myValue = 1;
  return {
    display: function(){
      return console.log(myValue);
    },
    increment: function(){
      return myValue++;
    }
  }
}

// ES6
var myObject = () => {
  var myValue = 1;
  return {
    display: () => console.log(myValue),
    increment: () => myValue++
  }
}

var myThing = myObject();
myThing.display();
myThing.increment();
myThing.display();
