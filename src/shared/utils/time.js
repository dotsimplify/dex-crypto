const dateFromUnix = (unixTimeStamp) => {
  let format = {
    day: "numeric",
    month: "2-digit",
    year: "numeric",
  };
  return console.log(new Date(unixTimeStamp).toLocaleString(format));
};

dateFromUnix(1616313600000);
