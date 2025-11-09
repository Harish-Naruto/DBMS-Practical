CREATE DATABASE students;

USE students;

CREATE TABLE O_RollCall (
  RollNo INT PRIMARY KEY,
  Name VARCHAR(50),
  Dept VARCHAR(50)
);

CREATE TABLE N_RollCAll(
  RollNo INT,
  Name VARCHAR(50),
  Dept VARCHAR(50)
);

INSERT INTO O_RollCall VALUES (101,'Rahul Patil','Computer') , (102,'Samarth','IT'), (103,'Sherin Thamos','ENTC');

INSERT INTO N_RollCAll VALUES (102,'Samarth','IT'), (104,'Sarvesh','Computer'),(105,'Rohan','Mechanical');

COMMIT;

DELIMITER $$

CREATE PROCEDURE mergeRollCall()
BEGIN
DECLARE done INT DEFAULT 0;
DECLARE nRoll INT;
DECLARE nName VARCHAR(50);
DECLARE nDept VARCHAR(50);
DECLARE v_count INT;
DECLARE c CURSOR FOR SELECT RollNo,Name,Dept FROM N_RollCAll;
DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;

OPEN c;
read_loop : LOOP
FETCH c INTO nRoll,nName,nDept;
IF done = 1 THEN
LEAVE read_loop;
END IF;

SELECT COUNT(*) INTO v_count FROM O_RollCall WHERE RollNo = nRoll;
IF v_count = 0 THEN
INSERT INTO O_RollCall VALUES(nRoll,nName,nDept);
END IF;

END LOOP;
CLOSE c;
END $$

DELIMITER ;

CALL mergeRollCall();

SELECT * FROM O_RollCall ORDER BY RollNo;