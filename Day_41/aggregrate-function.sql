SELECT COUNT(make) FROM car;

SELECT COUNT(*) FROM car;

SELECT SUM(price) FROM car;

SELECT AVG(price) FROM car;

SELECT ROUND(AVG(price)) FROM car;

SELECT ROUND(AVG(price), 2) FROM car;

SELECT MIN(price) FROM car;

SELECT MAX(price) FROM car;

SELECT make, model, MIN(price) AS cheapest_price FROM car
GROUP BY make, model;

SELECT make, MAX(price) AS most_expensive_price FROM car
GROUP BY make;

SELECT make, ROUND(AVG(price), 2) AS avg_price FROM car
GROUP BY make;

SELECT make, COUNT(*) AS total_cars, MIN(price) AS cheapest_price, MAX(price) AS most_expensive_price FROM car
GROUP BY make;

SELECT make, ROUND(AVG(price)) AS average_price FROM car
GROUP BY make
HAVING AVG(price) > 30000;

SELECT make, COUNT(*) AS total_cars FROM car
GROUP BY make
HAVING COUNT(*) >= 3;