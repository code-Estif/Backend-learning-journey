SELECT * FROM person
WHERE date_of_birth BETWEEN '1980-01-01' AND '1995-01-01'
AND country_of_birth IN ('Ethiopia', 'Nigeria', 'Portugal')
ORDER BY date_of_birth ASC;