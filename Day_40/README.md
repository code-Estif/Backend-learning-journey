# Day 40 — PostgreSQL INNER JOIN and LEFT JOIN

## Overview

Today I practiced joining two PostgreSQL tables: `person` and `car`.

I learned how joins combine related rows using a matching condition and how different joins handle rows that do not have a match.

## Tables Used

### `person`

Contains information about people, including their names and `car_id`.

### `car`

Contains information about cars, including their IDs, makes, models, and prices.

The tables are connected using:

```sql
person.car_id = car.id
```

## What I Learned

### 1. INNER JOIN

Returns only rows that have matching values in both tables.

```sql
SELECT person.name, car.make, car.model
FROM person
INNER JOIN car
ON person.car_id = car.id;
```

### 2. LEFT JOIN

Returns every row from the left table (`person`) and matching information from the right table (`car`). If there is no matching car, the car columns contain `NULL`.

```sql
SELECT person.name, car.make, car.model
FROM person
LEFT JOIN car
ON person.car_id = car.id;
```

### 3. RIGHT JOIN

Returns every row from the right table (`car`), including cars without a matching person.

### 4. FULL OUTER JOIN

Returns all rows from both tables. Rows without a match have `NULL` values for the missing side.

### 5. Finding NULL Values

I learned that SQL uses `IS NULL` to find missing values and `IS NOT NULL` to find non-NULL values.

```sql
-- People without a matching car
WHERE car.id IS NULL;

-- People with a matching car
WHERE car.id IS NOT NULL;
```

Using `= NULL` does not correctly test for NULL values.

## Practice Results

- `INNER JOIN`: 2 matching people and cars.
- `LEFT JOIN`: All 11 people.
- `RIGHT JOIN`: All 3 cars.
- `FULL OUTER JOIN`: 12 rows — 11 people and 3 cars, with matching rows combined.

## Key Takeaway

The main difference between joins is which rows they preserve:

- `INNER JOIN`: Matching rows only.
- `LEFT JOIN`: All rows from the left table.
- `RIGHT JOIN`: All rows from the right table.
- `FULL OUTER JOIN`: All rows from both tables.

## Files

- `day40_joins.sql` — SQL practice queries.
- `README.md` — Notes and concepts learned.

## Status

Day 40 completed: PostgreSQL joins and NULL filtering.
