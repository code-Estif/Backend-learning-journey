Day 41 — PostgreSQL Aggregate Functions
Today I practiced using PostgreSQL aggregate functions to summarize car data.
Topics Covered
- COUNT() — counts rows or non-NULL values.
- SUM() — adds non-NULL numeric values.
- AVG() — calculates the average of non-NULL numeric values.
- MIN() — returns the smallest value.
- MAX() — returns the largest value.
- ROUND() — rounds a numeric result.
- GROUP BY — groups rows so aggregates can be calculated for each group.
- HAVING — filters groups after aggregation.
Example Queries
Count all cars
SELECT COUNT(*)
FROM car;
COUNT(*) counts every row. By contrast, COUNT(make) counts only rows where make is not NULL.
Calculate the total value of car prices
SELECT SUM(price)
FROM car;
Calculate the average price by manufacturer
SELECT
    make,
    ROUND(AVG(price), 2) AS avg_price
FROM car
GROUP BY make;
Compare the cheapest and most expensive cars by manufacturer
SELECT
    make,
    COUNT(*) AS total_cars,
    MIN(price) AS cheapest_price,
    MAX(price) AS most_expensive_price
FROM car
GROUP BY make;
Filter groups with HAVING
SELECT
    make,
    ROUND(AVG(price)) AS average_price
FROM car
GROUP BY make
HAVING AVG(price) > 30000;
HAVING filters grouped results. Here, it keeps manufacturers whose actual average price is greater than 30000.
Important Difference: WHERE vs. HAVING
- WHERE filters individual rows before grouping.
- HAVING filters groups after aggregation.
For example, to show manufacturers with at least three cars:
SELECT
    make,
    COUNT(*) AS total_cars
FROM car
GROUP BY make
HAVING COUNT(*) >= 3;
How to Run
1. Open PostgreSQL and connect to the database that contains the car table.
2. Run the queries in day-41-aggregate-functions.sql individually or execute the file.
3. Make sure the table has the columns make, model, and price.
The SQL file assumes the car table already exists; it does not create or populate the table.
Key Takeaway
Aggregate functions summarize data. Combined with GROUP BY and HAVING, they can answer useful questions such as how many cars each manufacturer has, its average price, and its cheapest and most expensive cars.
Day 41 of my PostgreSQL learning journey.