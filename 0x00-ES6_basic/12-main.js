#!/usr/bin/node

import createEmployeesObject from "./11-createEmployeesObject.js";
import createReportObject from "./12-createReportObject.js";

const employees = {
    ...createEmployeesObject('SCD', ['Emeka', 'Dayo']),
    ...createEmployeesObject('Logistics', ['Steven', 'Abe']),
}

const report = createReportObject(employees);
console.log(report.allEmployees);
console.log(report.getNumberOfDepartments(report.allEmployees));
