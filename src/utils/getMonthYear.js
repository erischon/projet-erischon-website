import { getMonth } from "./getMonth";

export const getMonthYear = (stringDate) => {
  const date = new Date(stringDate);

  const monthYear = `${getMonth(date.getMonth())} ${date.getFullYear()}`;

  return monthYear;
};
