# Day 37 — LIKE & ILIKE

Practiced PostgreSQL pattern matching with:

* `LIKE`
* `ILIKE`
* `%` wildcard
* `_` wildcard

### Challenge

Find people whose email contains `google`, regardless of case.

```sql
SELECT *
FROM person
WHERE email ILIKE '%google%';
```
