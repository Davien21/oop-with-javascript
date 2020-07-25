function Animal (name,limbs) {
	this.name = name; 
	this.limbs = limbs; 
}
Animal.prototype.move = function  () {
	console.log('Walking');
};

function Dog (name) {
	Animal.call(this,name, 4);
}
Dog.prototype = Object.create(Animal.prototype);

function Bird (name) {
	Animal.call(this, name, 2);
}

Bird.prototype = Object.create(Animal.prototype);

Bird.prototype.move = function  () {
	console.log('Flying');
};

const puppy = new Dog('Django')
console.log(puppy);
puppy.move();

const chick = new Bird('falcon');
console.log(chick);

chick.move();
