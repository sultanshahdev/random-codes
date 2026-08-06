// CLOSURES IN JAVASCRIPT

function makingAddingFunction(firstNumber)
{
	return function returnedFunction(secondNumber)
	{
		return firstNumber+secondNumber;
	
	}
}

//TESTING CREATED FUNCTION 
let addFive = makingAddingFunction(5);
console.log(addFive(3));

//FROM CONSTRUCTORS TO FACTORY FUNCTIONS

// CREATING A CONSTRUCTOR FOR BOOK

const Book = function(title,author,pageCount,readStatus)
{
	if(!new.target)

	{
		throw new Error('a constructor call must be followed by the new keyword');
	}
	this.title  = title;
	this.author = author;
	this.pageCount = pageCount;
	this.readStatus = readStatus;
	
	this.info= function()
	{
		return `${this.title}, by ${this.author}, ${this.pageCount} pages , ${readStatus}`;
	}
}

//CREATING A BOOK USING A CONSTRUCTOR

let book1 = new Book('Emma', 'Jane Austen', 343, 'read');

console.log(book1.info());


// CREATING A FACTORY FUCNTION FOR CAR

let createCar = function(model,make,brand,category)
{
	function drive()
	{
		return 'VROM VROM';
	}
	return {model,make,brand,category,drive};
	
}


//CREATING A CAR USING FACTORY FUNCTION

let car1 = createCar('mehran','2016','Suzuki','classic');

console.log(car1.drive());

//ADDING ENCAPSULATION USIGN CLOSURE 


let createEncapsulatedCar = function(model,make,brand) 
{
	let registeredNumber;

	registerCar= function()
	{
		registeredNumber=Math.random()*10000;
	}
	
	showRegistrationNumber= function()
	{
		return registeredNumber;
	}

	return {model,make,brand,registerCar,showRegistrationNumber};
}

//notice that no matter what we cannot access the registeredNumber by ourselves except by the proper method

let car2= createEncapsulatedCar('Alto','2026','Suzuku');

car2.registerCar();
console.log(car2.showRegistrationNumber());


// PROTOTYPAL INHERITANCE WITH FACTORY FUNCTIONS

// SUPPOSE WE HAVE A SUPERCLASS AS SUPERHERO AND BASE CLASS SUPER-HUMAN

//LETS CREATE THE SUPERCLASS


let createSuperHero = function(name,ability,heroClass)
{
	return {name,ability,heroClass};

}

let createSuperHuman=function(name,ability,heroClass)
{
	let superHero    = createSuperHero(name,ability,heroClass);
	let isSuperHuman = true;
	let showInfo = function ()
	{
		return `${superHero.name}, from class ${superHero.heroClass}, can ${superHero.ability}`
	}

	return Object.assign({},superHero,{isSuperHuman,showInfo});

}


//CREATING A SUPER-HERO


let superHero1 = new createSuperHuman('Captain America','Super Strength','A');
console.log(superHero1.showInfo());

// USAFAGE OF IMEDIATELLY INVOKED FUNCTION EXPRESSIONS IIFEs
// CONSTRUCTING AN OBJECT FOR A GAME_PLAYER


let player= (()=>
	{
		let currentHealth = 100;
		let damageTake = 5.0;
		let damageGive = 10.0;


		let attack = function()
		{
			return `DAMAGE DEALT = ${damageGive}`;
		}

		let defend = function()
		{
			return `DAMAGE SUPRESSED = ${damageTake}`;
		}
		let gotHit = function()
		{
			currentHealth = currentHealth-damageTake;
			return `DAMAGE TOOK = ${damageTake}, CURRENT HEALTH = ${currentHealth}`;
		}

		return{attack,defend,gotHit}
	}
)();

//TESTING CREATED PLAYER USING IIFE METHODS

console.log(player.attack());
console.log(player.defend());
console.log(player.gotHit());

