export default function createEmployeesObject(departmentName, employees) {
  const staff = {
    [departmentName]: employees,
  };

  let count = -1;
  const iterable = {
    [Symbol.iterator]: () => ({
      next: () => {
        count += 1;
        switch (count) {
          case 0:
            return { [departmentName]: staff[departmentName] };
          default:
            return { key: undefined, done: true };
        }
      },
    }),
  };

  const data = iterable[Symbol.iterator]();

  return data.next();
}
