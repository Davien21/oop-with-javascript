/*The purpose of this file is to
explain encapsulation by hiding data away 
here there is no way to access the counter variable*/
const createCounter = function () {
	let count = 0;

	return {
		click: function () {
			return count +=1;
		},
		getCount: function () {
			return count
		}
	}
}
const counter  = createCounter();
counter.click();
counter.click();
counter.click();

console.log(counter.getCount());
console.log(counter)


