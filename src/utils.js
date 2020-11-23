export const extend = (a, b) => {
  return Object.assign({}, a, b);
};
export const makeUpperCaseFirst = (str) => str ? str[0].toUpperCase() + str.slice(1) : str;
