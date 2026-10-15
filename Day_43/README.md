# Day 43 — PostgreSQL Fundamentals

A compact SQL reference for the PostgreSQL topics reviewed on Day 43.

## Topics
- Filtering: `WHERE`, `AND`, `OR`, `IN`, `BETWEEN`, `LIKE` / `ILIKE`, `DISTINCT`, `LIMIT`
- Aggregation: `COUNT`, `SUM`, `AVG`, `MIN`, `MAX`, `GROUP BY`, `HAVING`
- NULL handling and aliases: `IS NULL`, `IS NOT NULL`, `COALESCE`, `AS`
- Relationships: `INNER JOIN`, `LEFT JOIN`, foreign keys and delete behavior
- Essentials: constraints, dates/timestamps, generated IDs, `ON CONFLICT`, transactions

## How to use
1. Open `day43_postgresql_review.sql`.
2. Run one section at a time against your practice PostgreSQL database.
3. Adjust table and column names to match your schema.
4. Attempt the five practice prompts at the bottom before checking the examples.

## Important
- The examples assume `users` and `tasks` tables with the columns described in the SQL comments.
- `created_at` must exist before running the date-filter example.
- The `practice_members` and `practice_notes` tables are created by this file.
- `UPDATE` and `DELETE` examples are commented out to reduce the risk of accidental data changes.
- Run transaction examples manually and use `ROLLBACK` to cancel uncommitted changes.

This is a learning reference, not a complete application schema.
