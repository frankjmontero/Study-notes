_______________________________
## CODECACADEMY SQL
___

### **Clauses = commands**. 
By convention they are written in capital letters.

### Several rows
Easier way to make insert of several rows:
```sql
INSERT INTO table (col1, col2, col3)
VALUES
(row1_val1, row1_val2, row1_val3),
(row2_val1, row2_val2, row2_val3),
(row3_val1, row3_val2, row3_val3);
```

### `SELECT`
`SELECT` statements always return a new table called the result set.

### Limiting Changes
The following limits the changes caused by the statement (and the `DELETE` clause) to the first 5 rows:
```sql
DELETE FROM table
WHERE condition
LIMIT 5;
```

### `UNIQUE`
`UNIQUE` and `PRIMARY KEY` are similar except that a table can have many different UNIQUE columns.
```sql
CONSTRAINTS
CREATE TABLE celebs (
   id INTEGER PRIMARY KEY, 
   name TEXT UNIQUE,
   date_of_birth TEXT NOT NULL,
   date_of_death TEXT DEFAULT 'Not Applicable'
);
```

### `LIKE`
**`LIKE`** is a special operator used with the `WHERE` clause to search for a specific pattern in a column.
```sql
SELECT * 
FROM movies
WHERE name LIKE 'Se_en';
```
The `_` means you can substitute any individual character here without breaking the pattern. The names Seven and Se7en both match this pattern. You can apply the `LIKE` operator to numerical values as well.
Whenever you use `LIKE` however, you must always wrap the pattern within a pair of quotations, whether for matching a number or a string.
```sql
SELECT * 
FROM movies
WHERE name LIKE 'A%';
//
SELECT * 
FROM movies 
WHERE name LIKE '%man%';
```
`%` is a wildcard character that matches zero or more missing letters in the pattern. `LIKE` is not case sensitive.

### `IS Null / IS NOT NULL`
**`IS Null / IS NOT NULL`**
It is not possible to test for NULL values with comparison operators, such as `=` and `!=`. 
```sql
SELECT name
FROM movies 
WHERE imdb_rating IS NOT NULL;
```

### `AS`
Renames column and table.

### `BETWEEN`
```sql
SELECT *
FROM movies
WHERE name BETWEEN 'A' AND 'J';
```
Gets the rows with names beginning in A up to, BUT NOT INCLUDING J. Here is another one:
```sql
SELECT *
FROM movies
WHERE year BETWEEN 1990 AND 1999;
```
Gets rows between years 1990 up to, AND INCLUDING 1999.

`BETWEEN` two letters is not inclusive of the 2nd letter, but for two numbers is inclusive of the 2nd number.

### `ORDER BY`

- **`DESC`** is a keyword used in `ORDER BY` to sort the results in descending order (high to low or Z-A).
- **`ASC`** is a keyword used in ORDER BY to sort the results in ascending order (low to high or A-Z.
The column that we `ORDER BY` doesn’t even have to be one of the columns that we’re displaying.
**Note:** `ORDER BY` always goes after `WHERE` (if `WHERE` is present).

### `LIMIT`
LIMIT always goes at the very end of the query. Also, it is not supported in all SQL databases.

### **`CASE`**
```sql
SELECT name,
 CASE
  WHEN imdb_rating > 8 THEN 'Fantastic'
  WHEN imdb_rating > 6 THEN 'Poorly Received'
  ELSE 'Avoid at All Costs'
 END
FROM movies;
```
Each `WHEN` tests a condition and the following `THEN` gives us the string if the condition is true.
The `ELSE` gives us the string if all the above conditions are false.
The `CASE` statement must end with `END`.

### Count Unique Values
```sql
SELECT COUNT(DISTINCT category)
FROM fake_apps;
-- If you wanted to count unique values
```

###  **`MIN`**
```sql
SELECT id, name, MIN(price)
FROM fake_apps;
/* if the table contained multiple rows with the minimum price of 0.0, then the result of a query with MIN(price) will choose the topmost row from the table that had this price value.
*/
```

### **`GROUP BY`**

`GROUP BY` is a clause in SQL that is used with aggregate functions. It is used in collaboration with the `SELECT` statement to arrange identical data into groups.
The `GROUP BY` statement comes after any `WHERE` statements, but before `ORDER BY` or `LIMIT`.
```sql
SELECT year,
   AVG(imdb_rating)
FROM movies
GROUP BY year
ORDER BY year;
```

### **`HAVING`**
```sql
SELECT year,
   genre,
   COUNT(name)
FROM movies
GROUP BY 1, 2
HAVING COUNT(name) > 10;
```
When we want to limit the results of a query based on values of the individual rows, use `WHERE`. When we want to limit the results of a query based on an aggregate property, use `HAVING`. 
`HAVING` statement always comes after `GROUP BY`, but before `ORDER BY` and `LIMIT`. We can’t use `WHERE` above because we don’t want to filter the rows; we want to filter groups. `HAVING` can filter both columns a groups

### **`JOIN / INNER JOIN`**

When matching two tables only rows with matching values in between the tables will be shown. However, if we want to show the unmatched rows we can. Using `LEFT JOIN` we can show the the matched and unmatched rows of the first table that doesn't have any value in the subsequent tables but discarding the unmatched rows of the rest of the tables.
```sql
SELECT *
FROM table1
LEFT JOIN table2
  ON table1.c2 = table2.c2;
```

### **Candidate Key**

A column that can uniquely identify a record of data is known as a `Candidate Key`. Tables can have multiple `Candidate Key`'s, each of which could potentially be the `Primary Key`, but there must only be one `Primary Key` per table.