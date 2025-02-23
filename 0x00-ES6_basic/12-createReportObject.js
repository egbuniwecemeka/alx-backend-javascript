#!/usr/bin/node

import createEmployeesObject from "./11-createEmployeesObject.js";

export default function createReportObject(employeesList = createEmployeesObject()) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    },
  };

  return obj;
}
