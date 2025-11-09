# DBMS Practical - Database Management System Lab Assignments

This repository contains comprehensive solutions for Database Management System (DBMS) practical assignments covering MySQL (DDL, DML, Joins, Subqueries, PL/SQL) and MongoDB (CRUD operations, Aggregation, Indexing, Map-Reduce).

## 📚 Table of Contents

- [Prerequisites](#prerequisites)
- [Repository Structure](#repository-structure)
- [Problem Statements](#problem-statements)
  - [PS1: DML Using MySQL](#problem-statement-1-dml-using-mysql)
  - [PS2: DDL Using MySQL](#problem-statement-2-ddl-using-mysql)
  - [PS3: Joins & Subqueries](#problem-statement-3-joins--subqueries-using-mysql)
  - [PS4: PL/SQL Stored Procedures](#problem-statement-4-plsql-stored-procedures)
  - [PS5: Procedures & Functions](#problem-statement-5-procedures--functions)
  - [PS6: Cursors](#problem-statement-6-cursors)
  - [PS7: Database Triggers](#problem-statement-7-database-triggers)
  - [PS8: MongoDB CRUD Operations](#problem-statement-8-mongodb-crud-operations)
  - [PS9: MongoDB CRUD Operations](#problem-statement-9-mongodb-crud-operations)
  - [PS10: MongoDB Aggregation & Indexing](#problem-statement-10-mongodb-aggregation--indexing)
  - [PS11: MongoDB Aggregation & Indexing](#problem-statement-11-mongodb-aggregation--indexing)
  - [PS12: MongoDB Map-Reduce](#problem-statement-12-mongodb-map-reduce)
  - [PS13: MongoDB Map-Reduce](#problem-statement-13-mongodb-map-reduce)
  - [PS14: Database Triggers](#problem-statement-14-database-triggers)
- [How to Use](#how-to-use)
- [Author](#author)

## 🔧 Prerequisites

Before running the code in this repository, ensure you have the following installed:

### For MySQL (Problem Statements 1-7, 14):
- **MySQL Server** (version 5.7 or higher)
- **MySQL Workbench** or any MySQL client
- Basic knowledge of SQL and PL/SQL

### For MongoDB (Problem Statements 8-13):
- **MongoDB** (version 4.0 or higher)
- **MongoDB Compass** (optional, for GUI)
- **mongo shell** or **mongosh** for running queries
- Basic knowledge of JavaScript and NoSQL databases

## 📁 Repository Structure

```
DBMS-Practical/
├── ps1.sql     # DML Using MySQL
├── ps2.sql     # DDL Using MySQL
├── ps3.sql     # Joins & Subqueries Using MySQL
├── ps4.sql     # PL/SQL Stored Procedures
├── ps5.sql     # Procedures & Functions
├── ps6.sql     # Cursors
├── ps7.sql     # Database Triggers
├── ps8.js      # MongoDB CRUD Operations
├── ps9.js      # MongoDB CRUD Operations
├── ps10.js     # MongoDB Aggregation & Indexing
├── ps11.js     # MongoDB Aggregation & Indexing
├── ps12.js     # MongoDB Map-Reduce
├── ps13.js     # MongoDB Map-Reduce
└── ps14.sql    # Database Triggers
```

## 📖 Problem Statements

---

### Problem Statement 1: DML Using MySQL

**File:** `ps1.sql`

**Objective:** Create and manipulate a banking database with Customer, Branch, and Account tables.

#### Schema:
- **Customer** (CustID, Name, Cust_Address, Phone_no, Age)
- **Branch** (BranchID, Branch_Name, Address)
- **Account** (Account_no, BranchID, CustID, date_open, Account_type, Balance)

#### Tasks:
1. Add the column "Email_Address" in Customer table
2. Change the name of column "Email_Address" to "Email_ID" in Customer table
3. Display customer details with highest balance in the account
4. Display customer details with lowest balance for account type = "Saving Account"
5. Display customer details that live in Pune and have age greater than 35
6. Display CustID, Name and Age of customers in ascending order of their age
7. Display Name and BranchID of customers grouped by Account_type

#### Key Concepts:
- ALTER TABLE (ADD, CHANGE)
- JOIN operations
- Aggregate functions (MAX, MIN)
- WHERE clause with multiple conditions
- ORDER BY and GROUP BY clauses

---

### Problem Statement 2: DDL Using MySQL

**File:** `ps2.sql`

**Objective:** Create tables with referential integrity, views, indexes, and sequences.

#### Schema:
- **Customer** (CustID, Name, Cust_Address, Phone_no, Email_ID, Age)
- **Branch** (BranchID, Branch_Name, Address)
- **Account** (Account_no, BranchID, CustID, open_date, Account_type, Balance)

#### Tasks:
1. Create tables with referential integrity (Foreign Keys)
2. Draw ER diagram for the schema
3. Create a View "Saving_account" displaying customer details with open_date as 16/8/2018
4. Update the View with Cust_Address as Pune for CustID = 103
5. Create a View "Loan_account" displaying customer details with open_date as 16/2/2018
6. Create an Index on primary key column of table Customer
7. Create an Index on primary key column of table Branch
8. Create a sequence on Customer Table (using AUTO_INCREMENT)
9. Create synonym 'Cust_info' for Branch table (using VIEW as alternative)

#### Key Concepts:
- Foreign Key constraints
- CREATE VIEW
- UPDATE on views
- CREATE INDEX
- AUTO_INCREMENT sequences
- VIEW as synonym alternative

---

### Problem Statement 3: Joins & Subqueries Using MySQL

**File:** `ps3.sql`

**Objective:** Work with employee database using joins and subqueries.

#### Schema:
- **Employee** (Employee_id, First_name, Last_name, Hire_date, Salary, Job_title, Manager_id, department_id)
- **Departments** (Department_id, Department_name, Manager_id, Location_id)
- **Locations** (Location_id, Street_address, Postal_code, city, state, Country_id)
- **Manager** (Manager_id, Manager_name)

#### Tasks:
1. Find names and salary of employees who earn more than average salary and work in IT departments
2. Find names and salary of employees who earn the same salary as minimum salary for all departments
3. Display employee ID, names, salary of all employees whose salary is above average for their departments
4. Display department name, manager name, and city
5. Display name, hire date, salary of all managers with experience more than 15 years

#### Key Concepts:
- INNER JOIN
- Subqueries (correlated and non-correlated)
- Aggregate functions with GROUP BY
- Date functions (YEAR, CURDATE)
- CONCAT function

---

### Problem Statement 4: PL/SQL Stored Procedures

**File:** `ps4.sql`

**Objective:** Create stored procedures for student grade categorization.

#### Schema:
- **Stud_Marks** (name, total_marks)
- **Result** (Roll, Name, Class)

#### Tasks:
1. Write a stored procedure `proc_Grade` to categorize students:
   - **Distinction**: marks between 990 and 1500
   - **First Class**: marks between 900 and 989
   - **Higher Second Class**: marks between 825 and 899
2. Create a PL/SQL block to use the procedure

#### Key Concepts:
- DELIMITER for procedure definition
- CREATE PROCEDURE with IN and OUT parameters
- IF-ELSEIF-ELSE conditional logic
- CALL statement
- Functions calling procedures

---

### Problem Statement 5: Procedures & Functions

**File:** `ps5.sql`

**Objective:** Create procedures and functions for bank account interest calculation.

#### Schema:
- **Account** (Account_No, Cust_Name, Balance, NoOfYears)
- **Earned_Interest** (Account_No, Interest_Amt)

#### Tasks:
1. Write a PL/SQL procedure to:
   - Take Account_No and Interest_Rate as input
   - Calculate simple interest
   - Store Interest_Amt in Earned_Interest table
2. Display all details from Earned_Interest table
3. Write a PL/SQL function to display all records from Account table with Balance > 50,000

#### Key Concepts:
- CREATE PROCEDURE with parameters
- Simple interest calculation
- INSERT INTO from procedure
- CREATE FUNCTION with RETURNS
- CURSOR for returning multiple records

---

### Problem Statement 6: Cursors

**File:** `ps6.sql`

**Objective:** Work with different types of cursors (Implicit, Explicit, Cursor FOR Loop, Parameterized Cursor).

#### Tasks:
Merge data from N_RollCall table with O_RollCall table using parameterized cursor. Skip data that already exists in the second table.

#### Key Concepts:
- DECLARE CURSOR
- Parameterized cursors
- CURSOR FOR loop
- FETCH operations
- EXISTS condition
- INSERT with conditional logic

---

### Problem Statement 7: Database Triggers

**File:** `ps7.sql`

**Objective:** Create triggers for audit tracking on Library table.

#### Schema:
- **Library** (main table)
- **Library_Audit** (audit tracking table)

#### Tasks:
Create database triggers to track records being updated or deleted. Old values should be added to Library_Audit table.

#### Key Concepts:
- CREATE TRIGGER
- BEFORE/AFTER triggers
- Row-level triggers
- OLD and NEW references
- INSERT INTO audit table

---

### Problem Statement 8: MongoDB CRUD Operations

**File:** `ps8.js`

**Objective:** Design and develop MongoDB queries using CRUD operations for social media data.

#### Collection:
**Social_Media** (User_Id, User_Name, No_of_Posts, No_of_Friends, Friends_List, Interests)

#### Tasks:
1. Insert 20 documents in Social_Media collection
2. List all users in formatted manner
3. Find all users having number of posts greater than 100
4. List user names and their Friends_List
5. Display user IDs and Friends_List of users who have more than 5 friends
6. Display all users with number of posts in descending order

#### Key Concepts:
- db.createCollection()
- insertMany()
- find() with query filters
- Projection with find()
- $gt operator
- sort() method

---

### Problem Statement 9: MongoDB CRUD Operations

**File:** `ps9.js`

**Objective:** CRUD operations on Student collection with array fields.

#### Collection:
**Student** (Roll_No, Name, Class, Marks, Address, Enrolled_Courses)

#### Tasks:
1. Insert 10 documents in Student collection
2. List names of students enrolled in "DBMS" and "TOC" courses
3. List Roll numbers and class of students with marks > 50 or class = TE
4. Update entire record of roll_no A10
5. Display names of students with 3rd and 4th highest marks
6. Delete records of students with marks < 20
7. Delete only first record from collection

#### Key Concepts:
- insertMany() with array fields
- $in operator for array queries
- $or operator
- updateOne() and updateMany()
- sort() with limit() and skip()
- deleteOne() and deleteMany()

---

### Problem Statement 10: MongoDB Aggregation & Indexing

**File:** `ps10.js`

**Objective:** Use aggregation pipeline and indexing on Movies database.

#### Collection:
**Movies_Data** (Movie_ID, Movie_Name, Director, Genre, BoxOfficeCollection)

#### Tasks:
1. Display how many movies are directed by each director
2. Display list of movies with highest BoxOfficeCollection in each genre
3. Display list sorted in ascending order of BoxOfficeCollection
4. Create index on Movie_ID field
5. Create compound index on Movie_Name and Director
6. Drop index on Movie_ID
7. Drop compound index on Movie_Name and Director

#### Key Concepts:
- aggregate() pipeline
- $group stage
- $count and $sum operators
- $max operator
- $sort stage
- createIndex()
- dropIndex()
- getIndexes()

---

### Problem Statement 11: MongoDB Aggregation & Indexing

**File:** `ps11.js`

**Objective:** Aggregation and indexing on Student database.

#### Collection:
**Student_Data** (Student_ID, Student_Name, Department, Marks)

#### Tasks:
1. Display all students by department with average marks
2. Display number of students in each department
3. Display list of students with highest marks in each department (descending order)
4. Create index on Student_ID
5. Create compound index on Student_Name and Department
6. Drop index on Student_ID
7. Drop compound index on Student_Name and Department

#### Key Concepts:
- $group with $avg
- $count accumulator
- $max operator
- $sort in descending order
- Index management
- Query performance optimization

---

### Problem Statement 12: MongoDB Map-Reduce

**File:** `ps12.js`

**Objective:** Use Map-Reduce for aggregating student data.

#### Collection:
**Student1** (roll_no, name, class, dept, aggregate_marks)

#### Tasks:
1. Find total marks of students in "TE" class department-wise
2. Find highest marks of students in "SE" class department-wise
3. Find average marks of students in "BE" class department-wise

#### Key Concepts:
- mapReduce() function
- Map function with emit()
- Reduce function with Array.sum()
- Math.max() in reduce
- Filtering in map phase
- Output collections

---

### Problem Statement 13: MongoDB Map-Reduce

**File:** `ps13.js`

**Objective:** Map-Reduce operations on Book collection.

#### Collection:
**Book** (Title, Author_name, Borrowed_status)

#### Tasks:
Use Map-Reduce functions for analyzing book borrowing patterns.

#### Key Concepts:
- mapReduce() for document analysis
- emit() with key-value pairs
- Custom reduce functions
- Boolean field processing

---

### Problem Statement 14: Database Triggers

**File:** `ps14.sql`

**Objective:** Create triggers for employee salary tracking.

#### Schema:
- **Employee** (emp_id, emp_name, salary, designation)
- **Salary_Backup** (emp_id, old_salary, new_salary, salary_difference)

#### Tasks:
1. Create a trigger to record salary changes (insert into Salary_Backup on UPDATE)
2. Create a trigger to prevent deleting employee records with designation = 'CEO'

#### Key Concepts:
- UPDATE triggers
- DELETE triggers
- BEFORE/AFTER triggers
- OLD and NEW references
- SIGNAL for error handling
- Calculated fields in triggers

---

## 🚀 How to Use

### For MySQL Files (.sql):

1. **Open MySQL Workbench or MySQL Command Line Client**

2. **Run the SQL file:**
   ```bash
   mysql -u username -p < ps1.sql
   ```
   Or copy-paste the contents into MySQL Workbench and execute.

3. **Interactive Execution:**
   - Open the file in MySQL Workbench
   - Execute queries one by one or in batches
   - View results in the output panel

### For MongoDB Files (.js):

1. **Start MongoDB Server:**
   ```bash
   mongod
   ```

2. **Open MongoDB Shell:**
   ```bash
   mongo
   # or for newer versions
   mongosh
   ```

3. **Run the JavaScript file:**
   ```bash
   load("ps8.js")
   ```
   Or copy-paste the contents into the mongo shell.

4. **Execute Queries:**
   - Copy individual queries from the .js files
   - Paste into mongo shell
   - Press Enter to execute

## 💡 Tips

- Always create a database before running the scripts
- Make sure to have proper permissions (CREATE, INSERT, UPDATE, DELETE, etc.)
- For MongoDB, ensure the MongoDB service is running before executing queries
- Read comments in each file for detailed explanations
- Test queries on sample data before using production data

## 📝 Notes

- All SQL files include table creation, data insertion, and query examples
- MongoDB files include collection creation and 20+ sample documents
- Code includes comments for better understanding
- Each problem statement is self-contained and can be run independently

## 🤝 Contributing

Feel free to fork this repository and submit pull requests for improvements or additional problem statements.

## 📄 License

This repository is for educational purposes. Feel free to use and modify as needed.

## 👤 Author

Created as part of DBMS Laboratory coursework.

---

**Happy Learning! 🎓**
