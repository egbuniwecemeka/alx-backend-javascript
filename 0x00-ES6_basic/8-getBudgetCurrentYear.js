function getCurrentYear() {
  const date = new Date();
  return date.getFullYear();
}

<<<<<<< HEAD
export default function getBudgetForCUrrentYear(income, gpd, capita) {
  const year = getCurrentYear();

  const budget = {
    [`income-${year}`]: income,
    [`gpd-${year}`]: gpd,
    [`capita-${year}`]: capita,
  };
=======
export default function getBudgetForCUrrentYear(income, gdp, capita) {
    const year = getCurrentYear();

    const budget = {
        [`income-${year}`]: income,
        [`gdp-${year}`]: gdp,
        [`capita-${year}`]: capita
    }
>>>>>>> c011a7fd10eda72cd5588cce7c5b1c9f177a59de

  return budget;
}
