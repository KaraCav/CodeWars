-- NUMBER 1
-- For this challenge you need to create a simple SELECT statement that will return all columns from the people table WHERE their age is over 50. You should return all people fields where their age is over 50 and order by the age descending.
SELECT * FROM people WHERE age>50 ORDER BY age DESC;

--NUMBER 2: Fix the code below
SELECT price * amount AS total FROM items;

-- NUMBER 3: Given the following table 'decimals':
-- decimals table schema: id number1 number2
-- Return a table with one column (mod) which is the output of number1 modulus number2.
select MOD(number1, number2) from decimals 

--NUMBER 4: In your application, there is a section for adults only. You need to get a list of names and ages of users from the users table, who are 18 years old or older. Users table schema is just name and age.
SELECT * FROM users WHERE age >= 18
