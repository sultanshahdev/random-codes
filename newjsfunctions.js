const Book=
	function(title,author,numOfPages,readStatus)
	{
		this.title = String(title);
		this.author= String(author);
		this.numOfPages = Number(numOfPages);
		this.readStatus = readStatus;
		this.info = function()
		{
			return `${this.title}, by ${this.author} , ${this.numOfPages}, ${this.readStatus}`;
		}


	}

// random books

let book1 = new Book("harry-potter","jk-rowling",233,'read');
console.log(book1.info());

console.log(Object.getPrototypeOf(book1) == Book.prototype);

console.log(Object.getPrototypeOf(book1));
