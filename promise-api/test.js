// testing code for async tasks using promises

let promise = new Promise((resolve,reject)=>
    {
	setTimeout(()=>{
	    let a = 1 + 1;
	if(a==2)
	{
	    resolve('Success!');
	}
	else
	{
	    reject('Failure');
	}


	},1000);
}
);

console.log(promise);// Pending 
setTimeout(()=>{console.log(promise);},5000);
// Success
