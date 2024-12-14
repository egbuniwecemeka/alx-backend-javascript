class ALXCourse {
    constructor(name, length, students) {
      // Attribute type check
      if (typeof name !== 'string') {
        throw new TypeError('Name must be a string');
      }

      // Attribute type check
      if (typeof length !== 'number') {
        throw new TypeError('Length must be a number');
      }

      if (!Array.isArray(students)) {
        throw new TypeError('Students must be an array');
      }

      // Attribute initialization
      this._name = name;
      this._length = length;
      this._students = students;
    }

    // Getter name
    get name() {
      return this._name;
    }

    // Setter
    set name(name) {
      this._name = name;
    }

    // Getter length
    get length() {
      return this._length;
    }

    // Setter length
    set length(length) {
      this._length = length;
    }

    // Getter students
    get students() {
      return this._students;
    }

    // Setter students
    set students(students) {
      this._students = students;
    }
}

const ALXCourse = ALXCourse()
module.exports = ALXCourse