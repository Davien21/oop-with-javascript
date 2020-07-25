function test (a,b) {
	let c = a + b;
	return function multiply (y) {
		return x = c*y
	}
}

let result = test(2,3);
let result_2 = result(2);
// console.log(result_2);
 
 /*This is an example of an IIFE - 
 Immediately Invoked Function Expression*/
(function add (a,b) {
	console.log(a + b);
})(2,3);

(function open () {
	console.log('welcome') ;
})();
(function() {
  // 'use strict';
  let ok;
  if (true) {
    ok = function() {
      return 'true ok';
    };
  } else {
    ok = function() {
      return 'false ok';
    };
  }
  console.log(typeof ok === 'function'); // => true
  console.log(ok()); // => 'true ok'
})();

let sum = function (a,b) {
	return a + b;
}
console.log(sum.name);

let teste = {
	name : 'tets',
	horn : () => {
		console.log('PI PI!!!');
		return 'tetess';
	}
}
console.log(teste.horn());