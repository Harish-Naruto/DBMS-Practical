create database student;
use student;

create table Stud_Marks (
    name varchar(30),
    total_marks int
);

create table Result (
    Roll int,
    Name varchar(20),
    Class varchar(20)
);

-- insert data
INSERT INTO Stud_Marks (name, total_marks)
VALUES
('Rahul Patil', 1455),
('Sneha Deshmukh', 1480),
('Amit Sharma', 895),
('Priya Nair', 920),
('Rohit Verma', 860),
('Komal Jadhav', 1435),
('Vikas Singh', 910),
('Anjali More', 875),
('Sagar Pawar', 1390),
('Neha Joshi', 850);

INSERT INTO Result (Roll, Name, Class)
VALUES
(1, 'Rahul Patil', NULL),
(2, 'Sneha Deshmukh', NULL),
(3, 'Amit Sharma', NULL),
(4, 'Priya Nair', NULL),
(5, 'Rohit Verma', NULL),
(6, 'Komal Jadhav', NULL),
(7, 'Vikas Singh', NULL),
(8, 'Anjali More', NULL),
(9, 'Sagar Pawar', NULL),
(0, 'Neha Joshi', NULL);

select * from Stud_Marks;
select * from Result;

-- Procedure 
delimiter $$
create procedure proc_Grade (IN r_no int, OUT grade varchar(20))
begin

declare m int;

select s.total_marks into m from Stud_Marks s
join Result r on r.name = s.name
where r.Roll = r_no;

if m between 990 and 1500 then
    set grade = 'distinction';
elseif m between 900 and 989 then
    set grade = 'first';
elseif m between 825 and 899 then
    set grade = 'higher second';
else 
    set grade = '---';
end if;

update Result set Class = grade where Roll = r_no;

end $$

-- function

create function callMark (roll int)
returns varchar(20)
deterministic
begin
    declare grade varchar(20);
    call proc_Grade(roll,grade);
    return grade;
end $$
delimiter ;


-- calling function (function need select and procedure need call)
select callMark(1) as 'Grade';

select * from Result;
