SELECT country_of_birth, COUNT(*) AS people FROM person
GROUP BY country_of_birth
HAVING COUNT(*) >= 2
ORDER BY people DESC;