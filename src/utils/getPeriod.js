import { getMonthYear } from "./getMonthYear";

export const getPeriod = (start, end) => {
  const startMonth = `${getMonthYear(start)}`;
  const endMonth = end ? `${getMonthYear(end)}` : "Aujourd'hui";

  return `${startMonth} - ${endMonth} `;
};
