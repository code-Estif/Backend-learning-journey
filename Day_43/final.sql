SELECT * FROM users
WHERE age >= 22
AND city = 'Addis Ababa';

SELECT * FROM users
WHERE city = 'Addis Ababa'
OR age < 20;

SELECT * FROM users
WHERE city IN ('Addis Ababa', 'Bahir Dar');

SELECT * FROM users
WHERE age BETWEEN 18 AND 22;

SELECT * FROM users
WHERE name ILIKE 's%';

SELECT DISTINCT city FROM users
ORDER BY city
LIMIT 2;

SELECT COUNT(*) AS total_tasks FROM tasks;

SELECT
    SUM(hours) AS total_hours,
    AVG(hours) AS average_hours,
    MIN(hours) AS shortest_task_hours,
    MAX(hours) AS longest_task_hours
FROM tasks;

SELECT user_id, COUNT(*) AS task_count FROM tasks
GROUP BY user_id;

SELECT user_id, COUNT(*) AS task_count FROM tasks
GROUP BY user_id
HAVING COUNT(*) > 1;

SELECT * FROM users
WHERE bio IS NULL;

SELECT * FROM users
WHERE bio IS NOT NULL;

SELECT name,
    COALESCE(bio, 'No bio') AS bio_display
FROM users;

SELECT name AS user_name FROM users;

SELECT users.name, tasks.title FROM users
INNER JOIN tasks ON tasks.user_id = users.id;

SELECT users.name, tasks.title FROM users
LEFT JOIN tasks ON tasks.user_id = users.id
ORDER BY users.id, tasks.id;

CREATE TABLE IF NOT EXISTS practice_members (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    age INTEGER NOT NULL CHECK (age >= 18),
    email TEXT UNIQUE
);

SELECT CURRENT_DATE AS today;
SELECT NOW() AS current_timestamp;

SELECT * FROM tasks
WHERE created_at >= NOW() - INTERVAL '7 days';

CREATE TABLE IF NOT EXISTS practice_notes (
    id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    title TEXT NOT NULL
);

INSERT INTO practice_members (name, age, email)
VALUES ('Sara', 20, 'sara@example.com')
ON CONFLICT (email) DO NOTHING;