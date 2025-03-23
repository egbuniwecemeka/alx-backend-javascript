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

const class2019 = new ALXClass(2023, 'Lagos');
const class2020 = new ALXClass(2025, 'Abuja');

class StudentALX {
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

const student1 = new StudentALX('Guillaume', 'Salva', class2020);
const student2 = new StudentALX('John', 'Doe', class2020);
const student3 = new StudentALX('Albert', 'Clinton', class2019);
const student4 = new StudentALX('Donald', 'Bush', class2019);
const student5 = new StudentALX('Jason', 'Sandler', class2019);

export const listOfStudent = [student1, student2];
