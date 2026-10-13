SELECT person.name, car.make, car.model
FROM person
INNER JOIN car
ON person.car_id = car.id;

SELECT person.name, car.make, car.model
FROM person
LEFT JOIN car
ON person.car_id = car.id;

SELECT person.name
FROM person
LEFT JOIN car
ON person.car_id = car.id
WHERE car.id IS NULL;

SELECT person.name, car.make, car.model
FROM person
LEFT JOIN car
ON person.car_id = car.id
WHERE car.id IS NOT NULL;

SELECT person.name, car.make, car.model
FROM person
RIGHT JOIN car
ON person.car_id = car.id;

SELECT person.name, car.make, car.model
FROM person
FULL OUTER JOIN car
ON person.car_id = car.id;