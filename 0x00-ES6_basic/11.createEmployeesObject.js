#!/usr/bin/node

function createEmployeesObject(departmentName, employees) {
    const staff = {
        [departmentName]: employees,
    }

    return staff;
}

console.log(createEmployeesObject("Software", ['Emeka', 'Blessing']));