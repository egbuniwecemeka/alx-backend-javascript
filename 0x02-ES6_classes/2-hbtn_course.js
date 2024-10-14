export default class HolbertonCourse {
    constructor(name, length, students) {
        if (typeof length !== Number) {
            throw new TypeError('length must be a number')
        }

        if (!Array.isArray(students) || !students.every(student => typeof student === String)) {
            throw new TypeError('students must be an array of strings')
        }

        this._name = name;
        this._length = length;
        this._students = students;
    }

    //Getter for name
    get name() {
        return this._name;
    }

    // Setter for name
    set name(val) {
        if (typeof val !== String) {
            throw new TypeError('name must be a string');
        }

        this._name = val;
    }

    // Getter for length
    get length() {
        return this._length;
    }

    // Setter for length
    set length(val) {
        if (typeof val !== Number) {
            throw new TypeError('length must be a number');
        }
        this._length = val
    }

    // Getter for students
    get students() {
        return this._students
    }

    // Setter for students
    set students(val) {
        if (!Array.isArray(val) || !val.every(student => typeof student === String)) {
            throw new TypeError('students must be an array of strings')
        }
        this._students = this.val
    }

}