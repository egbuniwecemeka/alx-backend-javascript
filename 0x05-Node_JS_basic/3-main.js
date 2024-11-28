const countStudents = require('./3-read_fileAsync');

countStudents('database.csv')
    .then(() => {
        console.log(Done)
    }).catch((error) => {
        console.log(error);
    });
console.lof('After!');