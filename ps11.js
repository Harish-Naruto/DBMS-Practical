use CollegeDB;

db.createCollection("Student_Data");

db.Student_Data.insertMany([
  { Student_ID: 1, Student_Name: "Rahul Patil", Department: "Computer", Marks: 88 },
  { Student_ID: 2, Student_Name: "Priya Sharma", Department: "IT", Marks: 92 },
  { Student_ID: 3, Student_Name: "Amit Deshmukh", Department: "Mechanical", Marks: 75 },
  { Student_ID: 4, Student_Name: "Sneha Kulkarni", Department: "Computer", Marks: 95 },
  { Student_ID: 5, Student_Name: "Rohit Joshi", Department: "IT", Marks: 80 },
  { Student_ID: 6, Student_Name: "Neha Verma", Department: "ENTC", Marks: 78 },
  { Student_ID: 7, Student_Name: "Ankit Singh", Department: "Mechanical", Marks: 90 },
  { Student_ID: 8, Student_Name: "Kavya Nair", Department: "ENTC", Marks: 84 },
  { Student_ID: 9, Student_Name: "Vikram Mehta", Department: "Computer", Marks: 70 },
  { Student_ID: 10, Student_Name: "Pooja Iyer", Department: "IT", Marks: 89 }
]);

//query 1
db.Student_Data.aggregate([
  {
    $group: {
      _id: "$Department",
      Average_Marks: { $avg: "$Marks" },
      Students: { $push: "$Student_Name" }
    }
  },
  { $project: { Department: "$_id", Average_Marks: 1, Students: 1, _id: 0 } }
]);

//query 2
db.Student_Data.aggregate([
  { $group: { _id: "$Department", Total_Students: { $sum: 1 } } },
  { $project: { Department: "$_id", Total_Students: 1, _id: 0 } }
]);

//query 3
db.Student_Data.aggregate([
  { $sort: { Marks: -1 } },
  {
    $group: {
      _id: "$Department",
      Top_Student: { $first: "$Student_Name" },
      Highest_Marks: { $first: "$Marks" }
    }
  },
  { $sort: { Highest_Marks: -1 } },
  { $project: { Department: "$_id", Top_Student: 1, Highest_Marks: 1, _id: 0 } }
]);

//query 4
db.Student_Data.createIndex({ Student_ID: 1 });

//query 5
db.Student_Data.createIndex({ Student_Name: 1, Department: 1 });

//query 6
db.Student_Data.dropIndex({ Student_ID: 1 });

//query 7
db.Student_Data.dropIndex({ Student_Name: 1, Department: 1 });

