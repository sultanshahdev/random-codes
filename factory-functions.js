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


