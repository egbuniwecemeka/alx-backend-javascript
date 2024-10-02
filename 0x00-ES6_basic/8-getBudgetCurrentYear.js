function getCurrentYear() {
    const date = new Date();
    return date.getFullYear();
}

export default function getBudgetForCUrrentYear(income, gpd, capita) {
    const year = getCurrentYear();

    const budget = {
        [`income-${year}`]: income,
        [`gpd-${year}`]: gpd,
        [`capita-${year}`]: capita
    }

    return budget;
}