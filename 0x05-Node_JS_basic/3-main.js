const countStudents = require('./3-read_file');

countStudents('database.csv')
    .then(() => {
        console.log(Done)
    }).catch((error) => {
        console.log(error);
    });
console.lof('After!');