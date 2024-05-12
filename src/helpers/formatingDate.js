export const formatingDate = fullDate => {
  console.log('fullDate: ', fullDate);
  const [dateString, timeString] = fullDate.split('T');
  console.log('dateString: ', dateString);
  console.log('timeString: ', timeString);

  const date = new Date(dateString);

  const year = date.getFullYear();
  console.log('year: ', year);
  const month = date.getMonth() + 1;
  console.log('month: ', month);
  const day = date.getDate();
  console.log('day: ', day);
};
