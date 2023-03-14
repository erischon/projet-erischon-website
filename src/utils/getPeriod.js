import { getMonth } from "./getMonth";

export const getPeriod = (start, end) => {
  const startMonth = `${getMonth(start.getMonth())} ${start.getFullYear()}`;

  const endMonth = end
    ? `${getMonth(end.getMonth())} ${end.getFullYear()}`
    : "Aujourd'hui";

  return `${startMonth} - ${endMonth} `;
};
