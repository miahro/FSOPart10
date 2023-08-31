const formatDate = (date_string) => {
  const inputDate = new Date(date_string);
  const month = inputDate.getMonth() + 1;
  const day = inputDate.getDate();
  const year = inputDate.getFullYear();

  const outputDateString = `${month.toString().padStart(2, "0")}.${day
    .toString()
    .padStart(2, "0")}.${year.toString()}`;

  return outputDateString;
};

export default formatDate;
