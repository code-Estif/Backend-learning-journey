CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    age INT
);

INSERT INTO users (name, age)
VALUES ('Estif', 17);

INSERT INTO users (name, age)
VALUES ('Abebe', 20);

INSERT INTO users (name, age)
VALUES
    ('Sara', 22),
    ('John', 25);

SELECT * FROM users;