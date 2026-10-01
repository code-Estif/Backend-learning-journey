# PostgreSQL WHERE, AND & OR — Practice

## Task

Write a PostgreSQL query that finds all people who:

* are **Female**
* were born in **Poland OR China**

## Concepts Practiced

* `WHERE` — filters rows
* `AND` — requires both conditions to be true
* `OR` — allows either condition to be true
* `()` — groups conditions when using `AND` and `OR` together

## Expected Query

```sql
SELECT *
FROM person
WHERE gender = 'Female'
AND (country_of_birth = 'Poland' OR country_of_birth = 'China');
```

## What I Learned

When combining `AND` and `OR`, parentheses are important because they control how PostgreSQL groups the conditions.

Without parentheses:

```sql
WHERE gender = 'Female'
AND country_of_birth = 'Poland'
OR country_of_birth = 'China';
```

PostgreSQL treats it as:

```text
(Female AND Poland) OR China
```

With parentheses:

```sql
WHERE gender = 'Female'
AND (country_of_birth = 'Poland' OR country_of_birth = 'China');
```

It means:

```text
Female AND (Poland OR China)
```

## Skills

* PostgreSQL
* SQL
* WHERE clause
* AND
* OR
* Conditional filtering
* Logical operators
