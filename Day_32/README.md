# Day 32 — ORDER BY & DISTINCT

## What I Learned

Today I learned how to sort and remove duplicate values in PostgreSQL using:

* `ORDER BY`
* `ASC`
* `DESC`
* `DISTINCT`

## ORDER BY

`ORDER BY` is used to sort query results.

### Ascending order

```sql
SELECT * FROM orders
ORDER BY customer_name;
```

`ASC` is the default, so this is also valid:

```sql
SELECT * FROM orders
ORDER BY customer_name ASC;
```

### Descending order

```sql
SELECT * FROM orders
ORDER BY amount DESC;
```

This sorts the highest amounts first.

## DISTINCT

`DISTINCT` returns unique values instead of duplicates.

For example:

```sql
SELECT DISTINCT country
FROM orders;
```

This returns each country only once.

I also learned that `DISTINCT` applies to the columns being selected.

For example:

```sql
SELECT DISTINCT *
FROM orders;
```

does **not** necessarily remove duplicate values from individual columns because PostgreSQL checks whether the entire row is unique.

## Combining DISTINCT and ORDER BY

I can combine both:

```sql
SELECT DISTINCT product
FROM orders
ORDER BY product DESC;
```

This gives me unique products and sorts them from Z → A.

## Practice

I practiced sorting the `orders` table by:

* Amount
* Order date
* Customer name
* Product

I also practiced getting unique:

* Countries
* Categories
* Products

## Key Takeaways

* `ORDER BY` → sorts results
* `ASC` → smallest/earliest → largest/latest or A → Z
* `DESC` → largest/latest → smallest/earliest or Z → A
* `DISTINCT` → removes duplicate result values
* `DISTINCT` works on the selected columns
* `ORDER BY` and `DISTINCT` can be used together

## Next

**Day 33 — WHERE**

Learning how to filter records based on conditions.
