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
    }
}