create database bank;
use bank;

create table Account (
    Account_no int primary key,
    Cust_Name varchar(50),
    Balance decimal(10,2),
    NoOfYears int
);

create table Earned_Interest (
    Account_no int,
    Interest_Amt decimal(10,2),
    foreign key (Account_no) references Account(Account_no)
);

INSERT INTO Account VALUES (1001, 'Rahul', 45000, 2),
 (1002, 'Priya', 60000, 3),
 (1003, 'Amit', 75000, 1),
 (1004, 'Sneha', 30000, 4);

COMMIT;


delimiter $$
create procedure calInterest (IN A_no int , IN Ir int)
begin
declare ans decimal(10,2);
declare v_balance decimal(10,2);
declare v_years int;

select Balance,NoOfYears into v_balance,v_years from Account
where Account_no = A_no;

set ans = (v_balance * Ir *v_years)/100;

insert into Earned_Interest(Account_no,Interest_Amt) values (A_no,ans);

end $$

CREATE PROCEDURE displayAccount()
BEGIN
    SELECT * FROM Account WHERE Balance > 50000;
END $$
DELIMITER ;

call calInterest(1001,5);

select * from Earned_Interest;

call displayAccount();