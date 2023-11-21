const fs = require('fs');

function countStudents(path) {
  let data;
  
  try {
    data = fs.readFileSync(path, 'utf8');
  } catch (error) {
    throw new Error('Cannot load the database');
  }

  const lines = data.split('\n').filter(Boolean);
  const students = lines.slice(1); // Ignore header

  console.log(`Number of students: ${students.length}`);

  const fields = { SWE: [], CS: [] };

  students.forEach(student => {
    const [name, , , field] = student.split(',');
    if (fields[field]) fields[field].push(name);
  });

  Object.entries(fields).forEach(([field, students]) => {
    console.log(`Number of students in ${field}: ${students.length}. List: ${students.join(', ')}`);
  });
}

module.exports = countStudents;
