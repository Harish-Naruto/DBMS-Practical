use social_app

db.createCollection("Social_Media");

//insert 20 documents in collecetion
db.Social_Media.insertMany([
  {
    User_Id: 1,
    User_Name: "Rahul",
    No_of_Posts: 120,
    No_of_Friends: 6,
    Friends_List: ["Amit", "Sneha", "Vikram", "Neha", "Rohit", "Priya"],
    Interests: ["Cricket", "Movies", "Music"]
  },
  {
    User_Id: 2,
    User_Name: "Sneha",
    No_of_Posts: 85,
    No_of_Friends: 4,
    Friends_List: ["Rahul", "Amit", "Riya", "Karan"],
    Interests: ["Cooking", "Traveling", "Yoga"]
  },
  {
    User_Id: 3,
    User_Name: "Vikram",
    No_of_Posts: 200,
    No_of_Friends: 8,
    Friends_List: ["Rahul", "Rohit", "Sneha", "Priya", "Karan", "Riya", "Soham", "Amit"],
    Interests: ["Gaming", "Tech", "Photography"]
  },
  {
    User_Id: 4,
    User_Name: "Neha",
    No_of_Posts: 45,
    No_of_Friends: 3,
    Friends_List: ["Riya", "Sneha", "Rahul"],
    Interests: ["Dance", "Music"]
  },
  {
    User_Id: 5,
    User_Name: "Rohit",
    No_of_Posts: 150,
    No_of_Friends: 7,
    Friends_List: ["Rahul", "Vikram", "Karan", "Amit", "Sneha", "Priya", "Neha"],
    Interests: ["Fitness", "Movies", "Traveling"]
  },
  {
    User_Id: 6,
    User_Name: "Priya",
    No_of_Posts: 190,
    No_of_Friends: 10,
    Friends_List: ["Rahul", "Sneha", "Riya", "Vikram", "Rohit", "Neha", "Amit", "Soham", "Karan", "Tina"],
    Interests: ["Yoga", "Cooking", "Photography"]
  },
  {
    User_Id: 7,
    User_Name: "Riya",
    No_of_Posts: 75,
    No_of_Friends: 4,
    Friends_List: ["Priya", "Sneha", "Rahul", "Neha"],
    Interests: ["Art", "Reading", "Travel"]
  },
  {
    User_Id: 8,
    User_Name: "Karan",
    No_of_Posts: 130,
    No_of_Friends: 6,
    Friends_List: ["Rohit", "Rahul", "Sneha", "Priya", "Amit", "Neha"],
    Interests: ["Cricket", "Movies", "Travel"]
  },
  {
    User_Id: 9,
    User_Name: "Amit",
    No_of_Posts: 95,
    No_of_Friends: 5,
    Friends_List: ["Rahul", "Sneha", "Priya", "Rohit", "Karan"],
    Interests: ["Gaming", "Tech", "Coding"]
  },
  {
    User_Id: 10,
    User_Name: "Soham",
    No_of_Posts: 250,
    No_of_Friends: 8,
    Friends_List: ["Priya", "Rohit", "Vikram", "Amit", "Karan", "Sneha", "Neha", "Riya"],
    Interests: ["Music", "Movies", "Photography"]
  },
  {
    User_Id: 11,
    User_Name: "Tina",
    No_of_Posts: 110,
    No_of_Friends: 6,
    Friends_List: ["Priya", "Riya", "Neha", "Sneha", "Rahul", "Karan"],
    Interests: ["Cooking", "Music"]
  },
  {
    User_Id: 12,
    User_Name: "Ajay",
    No_of_Posts: 60,
    No_of_Friends: 2,
    Friends_List: ["Rahul", "Sneha"],
    Interests: ["Reading", "Movies"]
  },
  {
    User_Id: 13,
    User_Name: "Deepa",
    No_of_Posts: 170,
    No_of_Friends: 9,
    Friends_List: ["Priya", "Riya", "Neha", "Sneha", "Rohit", "Amit", "Karan", "Tina", "Vikram"],
    Interests: ["Yoga", "Cooking", "Travel"]
  },
  {
    User_Id: 14,
    User_Name: "Sagar",
    No_of_Posts: 40,
    No_of_Friends: 3,
    Friends_List: ["Rohit", "Sneha", "Karan"],
    Interests: ["Tech", "Gaming"]
  },
  {
    User_Id: 15,
    User_Name: "Kavya",
    No_of_Posts: 210,
    No_of_Friends: 7,
    Friends_List: ["Riya", "Priya", "Rahul", "Neha", "Amit", "Sneha", "Tina"],
    Interests: ["Dance", "Music", "Art"]
  },
  {
    User_Id: 16,
    User_Name: "Arjun",
    No_of_Posts: 95,
    No_of_Friends: 5,
    Friends_List: ["Sneha", "Priya", "Rohit", "Amit", "Rahul"],
    Interests: ["Cricket", "Tech"]
  },
  {
    User_Id: 17,
    User_Name: "Meena",
    No_of_Posts: 135,
    No_of_Friends: 6,
    Friends_List: ["Riya", "Neha", "Karan", "Priya", "Rohit", "Sneha"],
    Interests: ["Movies", "Yoga", "Art"]
  },
  {
    User_Id: 18,
    User_Name: "Jay",
    No_of_Posts: 160,
    No_of_Friends: 8,
    Friends_List: ["Priya", "Rahul", "Sneha", "Amit", "Karan", "Tina", "Riya", "Rohit"],
    Interests: ["Gaming", "Music", "Photography"]
  },
  {
    User_Id: 19,
    User_Name: "Lina",
    No_of_Posts: 55,
    No_of_Friends: 3,
    Friends_List: ["Sneha", "Riya", "Neha"],
    Interests: ["Cooking", "Travel"]
  },
  {
    User_Id: 20,
    User_Name: "Dev",
    No_of_Posts: 180,
    No_of_Friends: 9,
    Friends_List: ["Priya", "Karan", "Amit", "Sneha", "Rahul", "Riya", "Vikram", "Rohit", "Neha"],
    Interests: ["Tech", "Gaming", "Movies"]
  }
]);

//query 1
db.Social_Media.find();

//query 2
db.Social_Media.find(
    {No_of_Posts : {$gt:100}}
);

//query 3
db.Social_Media.find({},{
    _id:0,
    User_Name:1,
    Friends_List:1
});

//query 4 
db.Social_Media.find({
    No_of_Friends:{$gt:5}
},{
    _id:0,
    User_Id:1,
    Friends_List:1
})

//query 5
db.Social_Media.find().sort({ No_of_Posts: -1 });
