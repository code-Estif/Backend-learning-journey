# Day 30 — PostgreSQL INSERT INTO

Today I learned how to insert data into PostgreSQL tables using `INSERT INTO`.

## What I learned

- How to insert a row
- How to insert multiple rows
- How columns match with values
- How `BIGSERIAL PRIMARY KEY` generates IDs automatically
- How to check inserted data with `SELECT`

## Example

```sql
INSERT INTO users (name, age)
VALUES ('Estif', 17);
