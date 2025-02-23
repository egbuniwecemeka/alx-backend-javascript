#!/usr/bin/node

export default function createReportObject(employeesList=createEmployeesObject()) {
  const obj = {
    allEmployees: { ...employeesList },
    getNumberOfDepartments() {
      return Object.keys(this.allEmployees).length;
    }
  }

  return obj;
}
