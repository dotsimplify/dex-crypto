export const formatNumber = (n) => {
  if (n < 1e6) return n;
  if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + "m";
  if (n >= 1e9 && n < 1e12) return +(n / 1e9).toFixed(1) + "b";
  if (n >= 1e12) return +(n / 1e12).toFixed(1) + "t";
};

export const trend = (str) => {
  if (str.startsWith("-")) {
    return true;
  }
  return false;
};
