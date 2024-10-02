function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}

export default function getBudgetForCUrrentYear(income, gdp, capita) {
    const year = getCurrentYear();

    const budget = {
        [`income-${year}`]: income,
        [`gdp-${year}`]: gdp,
        [`capita-${year}`]: capita
    }

    return budget;
}