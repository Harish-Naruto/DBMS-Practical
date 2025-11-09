create database company;
use company;

create table Manager (
    Manager_id int auto_increment primary key,
    Manager_name varchar(50)
);

create table Locations (
    Location_id int auto_increment primary key,
    Street_address varchar(50),
    Postal_code int,
    city varchar(20),
    state varchar(20),
    Country_id int
);

create table Departments (
    department_id int auto_increment primary key,
    department_name varchar(30),
    Manager_id int,
    Location_id int,
    foreign key (Manager_id) references Manager(Manager_id),
    foreign key (Location_id) references Locations(Location_id)
);

create table Employee (
    Employee_id int auto_increment primary key,
    First_name varchar(20),
    Last_name varchar(20),
    Hire_date date,
    Salary decimal(10,2),
    Job_title varchar(20),
    Manager_id int,
    department_id int,
    foreign key (Manager_id) references Manager(Manager_id),
    foreign key (department_id) references Departments(department_id)
);


-- inserting data 
INSERT INTO Manager (Manager_name)
VALUES 
('Rahul Sharma'),
('Priya Verma'),
('Amit Desai'),
('Neha Kapoor');

INSERT INTO Locations (Street_address, Postal_code, city, state, Country_id)
VALUES
('123 MG Road', 411001, 'Pune', 'Maharashtra', 1),
('45 Nehru Street', 600001, 'Chennai', 'Tamil Nadu', 1),
('78 Brigade Road', 560001, 'Bangalore', 'Karnataka', 1),
('12 Park Street', 700016, 'Kolkata', 'West Bengal', 1);

INSERT INTO Departments (department_name, Manager_id, Location_id)
VALUES
('IT', 1, 1),
('Finance', 2, 2),
('Engineering', 3, 3),
('Sales', 4, 4);

INSERT INTO Employee 
(First_name, Last_name, Hire_date, Salary, Job_title, Manager_id, department_id)
VALUES
('Arjun', 'Patel', '2020-05-12', 55000.00, 'HR Assistant', 1, 1),
('Sneha', 'Iyer', '2019-08-21', 72000.00, 'Accountant', 2, 2),
('Vikram', 'Rao', '2021-02-14', 95000.00, 'Software Engineer', 3, 3),
('Kavita', 'Singh', '2022-11-01', 65000.00, 'Sales Executive', 4, 4),
('Rohan', 'Deshmukh', '2023-03-18', 120000.00, 'Tech Lead', 3, 3),
('Meena', 'Joshi', '2021-07-09', 48000.00, 'HR Intern', 1, 1);

-- display tables
SELECT * FROM Manager;
SELECT * FROM Locations;
SELECT * FROM Departments;
SELECT * FROM Employee;

-- Query 1
select concat(e.First_name," ",e.Last_name) as name ,e.Salary,d.department_name from Employee e
join Departments d on d.department_id = e.department_id
where Salary >= (select avg(Salary) from Employee) and d.department_id = 'IT';

-- Query 2
select concat(e.First_name," ",e.Last_name) as name ,e.Salary, d.department_name from Employee e
join Departments d on d.department_id = e.department_id
where Salary = (
    select min(Salary) from Employee 
    where department_id = d.department_id
);

-- Query 3
select e.Employee_id,e.First_name,e.Last_name,e.Salary from Employee e
join Departments d on e.department_id = d.department_id
where e.Salary >= (
    select avg(Salary) from Employee
    where department_id = e.department_id
);

--Query 4
select d.department_name,m.Manager_name,l.city from Departments d
join Manager m on m.Manager_id = d.Manager_id
join Locations l on l.Location_id = d.Location_id;

-- Query 5
select concat(First_name," ",Last_name) as Name, Hire_date, Salary from Employee
where (year(curdate()) - year(Hire_date)) > 2;