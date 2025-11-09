use library

db.createCollection("Book");

db.Book.insertMany([
  {
    Title: "Harry Potter and the Philosopher's Stone",
    Author_name: "J.K. Rowling",
    Borrowed_status: false,
    price:210
  },
  {
    Title: "Harry Potter and the Chamber of Secrets",
    Author_name: "J.K. Rowling",
    Borrowed_status: true,
    price:310

  },
  {
    Title: "Harry Potter and the Prisoner of Azkaban",
    Author_name: "J.K. Rowling",
    Borrowed_status: false,
    price:240
  },
  {
    Title: "1984",
    Author_name: "George Orwell",
    Borrowed_status: false,
    price:310
  },
  {
    Title: "Animal Farm",
    Author_name: "George Orwell",
    Borrowed_status: true,
    price:210
  },
  {
    Title: "Homage to Catalonia",
    Author_name: "George Orwell",
    Borrowed_status: false,
    price:210
  },
  {
    Title: "Pride and Prejudice",
    Author_name: "Jane Austen",
    Borrowed_status: true,
    price:310
  },
  {
    Title: "Sense and Sensibility",
    Author_name: "Jane Austen",
    Borrowed_status: false,
    price:210
  },
  {
    Title: "Emma",
    Author_name: "Jane Austen",
    Borrowed_status: true,
    price:210
  }
]);


// query 1 : Display Author wise list of books 

db.Book.mapReduce(
    function(){
        emit(this.Author_name,this.Title);
    },
    function(key,values){
        return values;
    },
    {
        out:"listOfbooks"
    }
);

db.listOfbooks.find();

// query 2 : Display Author wise list of books having Borrowed status as "TRUE"

db.Book.mapReduce(
    function(){
        if(this.Borrowed_status){
            emit(this.Author_name,this.Title);
        }
    },
    function(key,values){
        return values;
    },
    {
        out:"booksBorrowed"
    }
);

db.booksBorrowed.find();

//query 3 : Display Author wise list of books having prices greater than 300

db.Book.mapReduce(
    function(){
        if(this.price > 300){
            emit(this.Author_name,this.Title);
        }
    },
    function(key,values){
        return values;
    },
    {
        out:"PriceGreater"
    }
);

db.PriceGreater.find();