use student

db.createCollection("Student1");

db.Student1.insertMany([
  { roll_no: 1, name: "Amit", class: "TE", dept: "CSE", aggregate_marks: 780 },
  { roll_no: 2, name: "Neha", class: "TE", dept: "IT", aggregate_marks: 720 },
  { roll_no: 3, name: "Ravi", class: "TE", dept: "CSE", aggregate_marks: 850 },
  { roll_no: 4, name: "Priya", class: "SE", dept: "CSE", aggregate_marks: 650 },
  { roll_no: 5, name: "Sohan", class: "SE", dept: "IT", aggregate_marks: 700 },
  { roll_no: 6, name: "Ankit", class: "SE", dept: "CSE", aggregate_marks: 680 },
  { roll_no: 7, name: "Meena", class: "BE", dept: "CSE", aggregate_marks: 820 },
  { roll_no: 8, name: "Rita", class: "BE", dept: "IT", aggregate_marks: 780 },
  { roll_no: 9, name: "Karan", class: "BE", dept: "CSE", aggregate_marks: 860 },
  { roll_no: 10, name: "Simran", class: "TE", dept: "IT", aggregate_marks: 750 }
]);

//query 1

db.Student1.mapReduce(
    function(){
        if(this.class == "TE"){
            emit(this.dept,this.aggregate_marks);
        }
    },
    function(key,values){
        return Array.sum(values);
    },
    {
        out: "TotalMarksPerDepartement"
    }
);
db.TotalMarksPerDepartement.find(); //display output

// query 2

db.Student1.mapReduce(
    function(){
        if(this.class == "SE"){
            emit(this.dept,this.aggregate_marks);
        }
    },
    function(key,values){
        return Math.max(...values);
    },
    {
        out:"MaxMarksSE"
    }
);

db.MaxMarksSE.find() //display output

//query 3

db.Student1.mapReduce(
    function(){
        if(this.class == "BE"){
            emit(this.dept,this.aggregate_marks);
        }
    },
    function(key,values){
        return ((Array.sum(values))/values.length);
    },
    {
        out : "AvgMarksBE"
    }
);

db.AvgMarksBE.find();