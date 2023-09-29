const dayValidator = (day: number) => day >= 1 && day <= 31;
const monthValidator = (month: number) => month >= 1 && month <= 12;
const yearValidator = (year: number) =>
  year > 0 && year <= new Date().getFullYear();

export { dayValidator, monthValidator, yearValidator };
