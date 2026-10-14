CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100),
    age INTEGER
);

INSERT INTO profiles (username, email, age)
VALUES
    ('Abel', 'abel@gmail.com', 20),
    ('Hana', NULL, NULL),
    ('Dawit', 'dawit@gmail.com', 22),
    ('Sara', NULL, 25);

SELECT * FROM profiles
WHERE email IS NULL;

SELECT * FROM profiles
WHERE email IS NOT NULL;

SELECT username,
    COALESCE(email, 'Not provided') AS email_status,
    COALESCE(age, 18) AS display_age 
FROM profiles;

SELECT id AS profile_id, username AS name, email AS contact_email FROM profiles;

SELECT username AS name,
    COALESCE(email, 'Not provided') AS email_status,
    COALESCE(age, 18) AS display_age
FROM profiles
WHERE email IS NULL;