// --- --- ---
// --- ES5 ---
// --- --- ---

// person baseclass
function Person(age){
  this.isAlive = true;
  this.age = age;
}
// person prototype function
Person.prototype = {
  getAge: function(){
    return this.age;
  },
  isHuman: true
}

// teenager subclass
function Teenager(angst,age){
  // call function sets this = arg1, param1 = arg2, ...
  Person.call(this,age);
  this.angst = angst;
}
// inherit
Teenager.prototype = Object.create(Person.prototype);
Teenager.prototype.constructor = Teenager;
// "overwrite" and add
Teenager.prototype.isHuman = false;

// create instances
var john = new Person(34);
var ricky = new Teenager(99,16);



// --- --- ---
// --- ES6 ---
// --- --- ---

// base class
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  retSum(){
    return this.x + this.y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }
}

const p1 = new Point(5, 5);
const p2 = new Point(10, 10);

console.log(Point.distance(p1, p2)); // 7.0710678118654755

// subclass
class ThreeDPoint extends Point{
  constructor(x, y, z){
    super(x,y);
    this.z = z;
  }
}

const p3 = new ThreeDPoint(10, 10, 10);
