--Get the names of all of the students from a single cohort.
-- Select their id and name.
-- Order them by their name in alphabetical order.
-- Since this query needs to work with any specific cohort, just use any number for the cohort_id.
-- Expected Result:

-- id |       name
-- ----+-------------------
--   1 | Armand Hilll
--  13 | Brian Jones
--  16 | Carmel Grant
--  14 | Clint Cremin
--  17 | Colten Gutkowski
-- ...
-- (18 rows)

SELECT id, name FROM students
WHERE cohort_id = 1
ORDER BY name;