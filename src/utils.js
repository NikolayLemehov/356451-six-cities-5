export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const upperCaseFirst = (str) => str ? str[0].toUpperCase() + str.slice(1) : str;
