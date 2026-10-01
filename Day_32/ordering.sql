SELECT * FROM orders
ORDER BY amount DESC;

SELECT * FROM orders
ORDER BY order_date DESC;

SELECT DISTINCT country
FROM orders
ORDER BY country;

SELECT DISTINCT category
FROM orders
ORDER BY category;

SELECT * FROM orders
ORDER BY customer_name;

SELECT DISTINCT product
FROM orders
ORDER BY product DESC;