const monthsNames = [
  "Janvier",
  "Février",
  "Mars",
  "Avril",
  "Mai",
  "Juin",
  "Juillet",
  "Août",
  "Septembre",
  "Octobre",
  "Novembre",
  "Décembre",
];

/**
 * Get the Month name from a number
 * @param {number} monthNumber
 * @returns {string}
 */
export const getMonth = (monthNumber) => {
  return monthsNames[monthNumber];
};
