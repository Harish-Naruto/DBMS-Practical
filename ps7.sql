CREATE DATABASE LibraryDB;
USE LibraryDB;


CREATE TABLE Library_1(
    Book_id INT PRIMARY KEY,
    Book_name VARCHAR(50),
    Author VARCHAR(50),
    Price DECIMAL(10,2)
);


CREATE TABLE Library_Audit(
    Audit_id INT AUTO_INCREMENT PRIMARY KEY,
    Book_id INT,
    Book_name VARCHAR(50),
    Author VARCHAR(50),
    Price DECIMAL(10,2),
    Action_type VARCHAR(20),
    Action_date DATETIME
);


INSERT INTO Library_1 VALUES
(1, 'DBMS Concepts', 'Korth', 550.00),
(2, 'Operating Systems', 'Silberschatz', 620.00),
(3, 'Computer Networks', 'Tanenbaum', 700.00),
(4, 'Let Us C', 'Yashwant Kanetkar', 480.00),
(5, 'Clean Code', 'Robert C. Martin', 750.00),
(6, 'The Pragmatic Programmer', 'Andrew Hunt', 670.00),
(7, 'Algorithms', 'Cormen', 890.00),
(8, 'Introduction to AI', 'Russell & Norvig', 950.00);

DELIMITER $$


CREATE TRIGGER before_Library_update
BEFORE UPDATE ON Library_1
FOR EACH ROW
BEGIN
    INSERT INTO Library_Audit(Book_id, Book_name, Author, Price, Action_type, Action_date)
    VALUES(OLD.Book_id, OLD.Book_name, OLD.Author, OLD.Price, 'UPDATE', NOW());
END$$


CREATE TRIGGER before_Library_delete
BEFORE DELETE ON Library_1
FOR EACH ROW
BEGIN
    INSERT INTO Library_Audit(Book_id, Book_name, Author, Price, Action_type, Action_date)
    VALUES(OLD.Book_id, OLD.Book_name, OLD.Author, OLD.Price, 'DELETE', NOW());
END$$

DELIMITER ;


UPDATE Library_1 SET Price = 600 WHERE Book_id = 1;
DELETE FROM Library_1 WHERE Book_id = 3;

SELECT * FROM Library_1;
SELECT * FROM Library_Audit;
