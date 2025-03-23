class ALXClass {
  constructor(year, location) {
    this._year = year;
    this._location = location;
  }

  get year() {
    return this._year;
  }

  get location() {
    return this._location;
  }
}

const class2023 = new ALXClass(2023, 'Lagos');
const class2025 = new ALXClass(2025, 'Abuja');

class ALXStudent {
    constructor(firstname, lastname, alxClass) {
      this._firstname = firstname;
      this._lastname = lastname;
      this._alxClass = alxClass;
    }

    get fullName() {
      return `${this._firstname} ${this._lastname}`;
    }

    get alxClass() {
      return this._alxClass;
    }

    getFullStudentDescription() {
      return `${this._firstname} - ${this._lastname} - ${this._alxClass.year} - ${this.alxClass.location}`;
    }
}

const student1 = new ALXStudent('Egbuniwe', 'Emmanuel', class2023);
const student2 = new ALXStudent('Emeka', 'Codes', class2025);

export const listStudent = [student1, student2];
