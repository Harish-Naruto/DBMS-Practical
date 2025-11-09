create database company;
use company;

create table Employee(
    emp_id int auto_increment primary key,
    emp_name varchar(20),
    salary decimal(10,2),
    designation varchar(30)
);

create table Salary_backup (
    emp_id int,
    old_salary decimal(10,2),
    new_salary decimal(10,2),
    salary_diff decimal(10,2),
    foreign key (emp_id) references Employee(emp_id)
);

INSERT INTO Employee (emp_name, salary, designation) VALUES
('Rahul Patil', 150000.00, 'CEO'),
('Neha Sharma', 95000.00, 'Project Manager'),
('Amit Verma', 75000.00, 'Senior Developer'),
('Sneha Iyer', 65000.00, 'Software Developer'),
('Rohit Mehta', 55000.00, 'Junior Developer'),
('Priya Nair', 60000.00, 'HR Manager'),
('Vikram Singh', 50000.00, 'QA Engineer'),
('Anjali Desai', 48000.00, 'UI/UX Designer'),
('Karan Joshi', 45000.00, 'Technical Support'),
('Simran Kaur', 40000.00, 'Intern');

delimiter $$

create trigger after_salary_update
after update on Employee
for each row
begin
    insert into Salary_backup(emp_id,old_salary,new_salary,salary_diff)
    values (OLD.emp_id,OLD.salary,NEW.salary, New.salary - OLD.salary);
end $$


CREATE TRIGGER trg_prevent_ceo_delete
BEFORE DELETE ON Employee
FOR EACH ROW
BEGIN
    IF OLD.designation = 'CEO' THEN
        SIGNAL SQLSTATE '45000'
        SET MESSAGE_TEXT = 'Cannot delete record of CEO!';
    END IF;
END $$

DELIMITER ;


-- Update salary (this should log to Salary_Backup)
UPDATE Employee SET salary = 52000 WHERE emp_id = 5;

-- Check Salary_Backup
SELECT * FROM Salary_backup;

-- Try to delete CEO (should fail)
DELETE FROM Employee WHERE designation = 'CEO';
