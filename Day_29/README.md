# Day 29 - PostgreSQL

Today I started learning databases with PostgreSQL.

## What I learned

- Creating a database
- Connecting to a database
- Creating tables
- Columns and data types
- `BIGSERIAL`
- `PRIMARY KEY`
- `NOT NULL`
- Inspecting tables with `\d`

## Simple Database Structure

```text
Database
└── task_manager
    ├── users
    │   ├── id
    │   ├── username
    │   └── bio
    │
    └── products
        ├── id
        ├── name
        ├── price
        └── description