use college

db.createCollection("Student");

db.Student.insertMany([
  { Roll_No: "A01", Name: "Rahul Patil", Class: "FE", Marks: 78, Address: "Pune", Enrolled_Courses: ["DBMS", "OOP", "DSA"] },
  { Roll_No: "A02", Name: "Sneha Kulkarni", Class: "SE", Marks: 85, Address: "Mumbai", Enrolled_Courses: ["TOC", "DBMS", "CN"] },
  { Roll_No: "A03", Name: "Amit Sharma", Class: "TE", Marks: 45, Address: "Nashik", Enrolled_Courses: ["OS", "DBMS", "SEPM"] },
  { Roll_No: "A04", Name: "Priya Desai", Class: "FE", Marks: 67, Address: "Kolhapur", Enrolled_Courses: ["DSA", "CN", "TOC"] },
  { Roll_No: "A05", Name: "Rohit Joshi", Class: "BE", Marks: 92, Address: "Pune", Enrolled_Courses: ["AI", "ML", "DBMS"] },
  { Roll_No: "A06", Name: "Neha Rane", Class: "SE", Marks: 58, Address: "Nashik", Enrolled_Courses: ["TOC", "OOP", "DSA"] },
  { Roll_No: "A07", Name: "Karan Mehta", Class: "TE", Marks: 35, Address: "Mumbai", Enrolled_Courses: ["CN", "DBMS"] },
  { Roll_No: "A08", Name: "Isha Nair", Class: "BE", Marks: 88, Address: "Pune", Enrolled_Courses: ["AI", "TOC", "CN"] },
  { Roll_No: "A09", Name: "Vikas Pawar", Class: "SE", Marks: 15, Address: "Solapur", Enrolled_Courses: ["DSA", "OS"] },
  { Roll_No: "A10", Name: "Meena Gaikwad", Class: "FE", Marks: 49, Address: "Satara", Enrolled_Courses: ["OOP", "CN", "DBMS"] }
]);

//query 1
db.Student.find({
    Enrolled_Courses:{$in:["DBMS","TOC"]}
},{
    _id:0,
    Name:1
});

//query 2
db.Student.find({
    $or:[{Marks:{$gt:50}},{Class:"TE"}]
},
{
    _id:0,
    Roll_No:1
});

//query 3

db.Student.updateOne(
    {
        Roll_No:"A10"
    },{
        $set:{
            Name: "Meena Jadhav",
            Class: "SE",
            Marks: 72,
            Address: "Aurangabad",
            Enrolled_Courses: ["DBMS", "OOP", "SEPM"]
        }
    }
);

//query 4
db.Student.find({},{_id:0,Name:1}).sort({Marks:-1}).skip(2).limit(2);

//query 5
db.Student.deleteMany({Marks:{$lt:20}});

//query 6
db.Student.deleteOne({});
