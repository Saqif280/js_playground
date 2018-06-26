function theFunction(name, profession) {
  console.log("My name is " + name + " and I am a " + profession +".");
}
theFunction("John", "fireman");

// A = Array
// theFunction.apply(valueForThis, arrayOfArgs)
theFunction.apply(undefined, ["Susan", "school teacher"]);

// C = Comma
// theFunction.call(valueForThis, arg1, arg2, ...)
theFunction.call(undefined, "Claude", "mathematician");
theFunction.call(undefined, ...["Matthew", "physicist"]); // used with the ES6 spread operator

// Use case: pass object reference with call/apply, not originally
