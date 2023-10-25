
const pg = require('pg');

const Client = pg.Client; // single connection to the database
// const Pool = pg.Pool; // collection of clients (5) managed

const config = {
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
};

const client = new Client(config);

client.connect();





const cohort = process.argv[2];
const limit = process.argv[3];


client.query(`
SELECT students.id AS id, students.name AS stu_name, cohorts.name AS co_name
FROM students
JOIN cohorts ON cohorts.id = students.cohort_id
WHERE cohorts.name LIKE $1
LIMIT $2;
`, [`%${cohort}%`, limit])
.then(res => {
  res.rows.forEach(user => {
    console.log(`${user.stu_name} has an id of ${user.id} and was in the ${user.co_name} cohort`);
  })

  client.end();
});

// pool.query(`
// SELECT students.id as student_id, students.name as name, cohorts.name as cohort
// FROM students
// JOIN cohorts ON cohorts.id = cohort_id
// WHERE cohorts.name LIKE '%${process.argv[2]}%'
// LIMIT ${process.argv[3] || 5};
// `)
// .then(res => {
//   res.rows.forEach(user => {
//     console.log(`${user.name} has an id of ${user.student_id} and was in the ${user.cohort} cohort`);
//   })
// }).catch(err => console.error('query error', err.stack));