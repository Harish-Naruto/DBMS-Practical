use movies

db.createCollection("Movies_Data");

db.Movies_Data.insertMany([
  { Movie_ID: 1, Movie_Name: "Inception", Director: "Christopher Nolan", Genre: "Sci-Fi", BoxOfficeCollection: 829 },
  { Movie_ID: 2, Movie_Name: "Interstellar", Director: "Christopher Nolan", Genre: "Sci-Fi", BoxOfficeCollection: 677 },
  { Movie_ID: 3, Movie_Name: "Dunkirk", Director: "Christopher Nolan", Genre: "War", BoxOfficeCollection: 526 },
  { Movie_ID: 4, Movie_Name: "Avatar", Director: "James Cameron", Genre: "Sci-Fi", BoxOfficeCollection: 2847 },
  { Movie_ID: 5, Movie_Name: "Titanic", Director: "James Cameron", Genre: "Romance", BoxOfficeCollection: 2187 },
  { Movie_ID: 6, Movie_Name: "The Dark Knight", Director: "Christopher Nolan", Genre: "Action", BoxOfficeCollection: 1005 },
  { Movie_ID: 7, Movie_Name: "Terminator 2", Director: "James Cameron", Genre: "Action", BoxOfficeCollection: 520 },
  { Movie_ID: 8, Movie_Name: "Pulp Fiction", Director: "Quentin Tarantino", Genre: "Crime", BoxOfficeCollection: 213 },
  { Movie_ID: 9, Movie_Name: "Kill Bill", Director: "Quentin Tarantino", Genre: "Action", BoxOfficeCollection: 180 },
  { Movie_ID: 10, Movie_Name: "Once Upon a Time in Hollywood", Director: "Quentin Tarantino", Genre: "Drama", BoxOfficeCollection: 377 }
]);

// query 1
db.Movies_Data.aggregate([
  { $group: { _id: "$Director", TotalMovies: { $sum: 1 } } },
  { $project: { Director: "$_id", TotalMovies: 1, _id: 0 } }
]);

// query 2
db.Movies_Data.aggregate([
  { $sort: { BoxOfficeCollection: -1 } },
  { $group: { 
      _id: "$Genre",
      TopMovie: { $first: "$Movie_Name" },
      Director: { $first: "$Director" },
      HighestCollection: { $first: "$BoxOfficeCollection" }
  }},
  { $project: { Genre: "$_id", TopMovie: 1, Director: 1, HighestCollection: 1, _id: 0 } }
]);


//query 3
db.Movies_Data.aggregate([
  { $sort: { BoxOfficeCollection: -1 } },
  { $group: { 
      _id: "$Genre",
      TopMovie: { $first: "$Movie_Name" },
      Director: { $first: "$Director" },
      HighestCollection: { $first: "$BoxOfficeCollection" }
  }},
  { $sort: { HighestCollection: 1 } },
  { $project: { Genre: "$_id", TopMovie: 1, Director: 1, HighestCollection: 1, _id: 0 } }
]);

//query 4
db.Movies_Data.createIndex({ Movie_ID: 1 });

//query 5
db.Movies_Data.createIndex({ Movie_Name: 1, Director: 1 });

//query 6
db.Movies_Data.dropIndex({ Movie_ID: 1 });

//query 7
db.Movies_Data.dropIndex({ Movie_Name: 1, Director: 1 });

