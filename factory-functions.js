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

