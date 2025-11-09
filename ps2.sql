create database bank;
use bank;

create table Customer(
    CustID int auto_increment primary key,
    Name varchar(10),
    Cust_Address varchar(50),
    Phone_no varchar(15),
    Age int,
    Email_ID varchar(50)
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
(1, 1, '2018-08-16', 'Saving Account', 50000.00),
(1, 2, '2023-02-10', 'Current Account', 125000.00),
(2, 3, '2018-02-16', 'Saving Account', 75500.75),
(3, 4, '2023-04-12', 'Saving Account', 25400.00),
(4, 5, '2023-05-25', 'Current Account', 98200.50),
(5, 6, '2023-06-30', 'Saving Account', 61250.25);


-- Query 3 
create view Saving_account as
select c.*, a.Balance from Customer c
join Account a on a.CustID = c.CustID
where date_open = '2018-08-16' and a.Account_type = 'Saving Account';

SELECT * FROM Saving_account; -- display view

-- Query 4 (changed this question a littlebit since i already have customer with customer address as pune and none with CustId with 103)
update Saving_account
set Cust_Address = 'Mumbai'
where CustID = 1;

select * from Saving_account;

-- Query 5
create view Loan_account as
select c.*, a.Balance from Customer c
join Account a on a.CustID = c.CustID
where date_open = '2018-02-16';

select * from Loan_account;

-- Query 6
create index indxCustId on Customer(CustID);

-- Query 7
create index indxBrachId on Branch(BranchID);

-- Query 8 (already added auto increment in customer but you can use following querry to modify)
alter table Customer
modify CustID int auto_increment;

-- Query 9 (mysql doesnot support synonym so we are creating Cust_info as alternate method)
create view Cust_info as 
select * from Branch;
