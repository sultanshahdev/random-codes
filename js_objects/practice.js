// creating an empty object

let usr1 = new Object();
let usr2 = {};

console.log(usr1);
console.log(usr2);

console.log(typeof usr1);
console.log(typeof usr2);

// creating a usr object with some properties(key-value pair)


let usr3 =
    {
	name : "Sultan",
	age  : 20,
    }


console.log(usr3);
console.log(usr3.name);
console.log(usr3.age);

usr3.isAdmin = true;
console.log(usr3.isAdmin);

delete usr3.age;

console.log(usr3);

//adding multi-valued properties

let usr4=
    {
	"likes bird" : true,

    };


console.log(usr4);


// accessing multi valued named property
// cant be accessed using .
// use square brackets instead

// set
usr4["hehe boi"]= 33;

console.log(usr4["hehe boi"]);

// we can also do this

let key="random bs";

usr3[key]="value";

console.log(usr3[key]);

// we can also use the computed version with .

key="faah";

usr3.key="k"

console.log(usr3.key);


	
	  








