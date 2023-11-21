const { count } = require('console')
const fs = require('fs')

const countStudents = (path) => {

    try {
        const data = fs.readFileSync(path, 'utf8')
        const line = data.split('\n') - 1
        console.log(line)
    } catch (error) {
        throw new Error('Cannot load the database')
    }
}
module.exports = countStudents;
