-- NUMBER 1
-- For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50. You should return all people fields where their age is over 50 and order by the age descending.
SELECT * FROM people WHERE age>50 ORDER BY age DESC;

--NUMBER 2: Fix the code below
SELECT price * amount AS total FROM items