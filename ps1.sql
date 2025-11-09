create database bank;
use bank;

create table Customer(
    CustID int auto_increment primary key,
    Name varchar(10),
    Cust_Address varchar(50),
    Phone_no varchar(15),
    Age int
);

create table Branch (
    BranchID int auto_increment primary key,
    Branch_Name varchar(10),
    Address varchar(50)
);

create table Account (
    Account_no int auto_increment primary key,
    BranchID int,
    CustID int,
    date_open date,
    Account_type varchar(10),
    Balance decimal(10,2),
    foreign key (BranchID) references Branch(BranchID) on delete cascade,
    foreign key (CustID) references Customer(CustID) on delete cascade
);

-- Query 1
alter table Customer
add column Email_Address varchar(50);

desc Customer; --this is used only to display changes(you can skip this)

-- Query 2
alter table Customer
change column Email_Address Email_ID varchar(50);  -- when changing name we need to re-specify datatype

desc Customer; --this is used only to display changes(you can skip this)

-- adding data to tables for next query
INSERT INTO Customer (Name, Cust_Address, Phone_no, Age, Email_ID) VALUES
('Rahul', 'Pune', '9876543210', 25, 'rahul@gmail.com'),
('Aditi', 'Mumbai', '9822011223', 30, 'aditi@yahoo.com'),
('Rohan', 'Delhi', '9765432100', 28, 'rohan@outlook.com'),
('Sneha', 'Nashik', '9898989898', 22, 'sneha@gmail.com'),
('Aman', 'Nagpur', '9012345678', 35, 'aman@gmail.com'),
('Priya', 'Kolhapur', '9856231478', 27, 'priya@hotmail.com');

INSERT INTO Branch (Branch_Name, Address) VALUES
('Main', 'Pune'),
('East', 'Mumbai'),
('North', 'Delhi'),
('West', 'Nagpur'),
('South', 'Kolhapur');

INSERT INTO Account (BranchID, CustID, date_open, Account_type, Balance) VALUES
(1, 1, '2023-01-15', 'Saving Account', 50000.00),
(1, 2, '2023-02-10', 'Current Account', 125000.00),
(2, 3, '2023-03-05', 'Saving Account', 75500.75),
(3, 4, '2023-04-12', 'Saving Account', 25400.00),
(4, 5, '2023-05-25', 'Current Account', 98200.50),
(5, 6, '2023-06-30', 'Saving Account', 61250.25);

-- skip this step this is just for debugging
Select * from Customer;
Select * from Account;
Select * from Branch;

-- Query 3
Select c.Name,c.Cust_Address,c.Phone_no,c.Age, a.Balance from Customer c
join Account a on a.CustID = c.CustID
where Balance = (Select max(Balance) from Account);

-- Query 4
Select c.Name,c.Cust_Address,c.Phone_no,c.Age, a.Balance from Customer c
join Account a on a.CustID = c.CustID
where a.Account_type = 'Saving Account' && Balance = (
    Select min(Balance) from Account
    where Account_type = 'Saving Account'
);

-- Query 5
Select * from Customer
where Cust_Address = 'Pune' && Age >= 25;

-- Query 6 
Select CustID,Name,Age from Customer
order by Age asc;

-- Query 7
Select c.Name,a.BranchID,a.Account_type from Customer c
join Account a on a.CustID = c.CustID
group by a.Account_type,c.Name,a.BranchID;

