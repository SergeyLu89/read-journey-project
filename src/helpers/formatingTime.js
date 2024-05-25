export const formatingTime = (strtAt, finishAt) => {
  const startDate = new Date(strtAt);
  const finishDate = new Date(finishAt);
  const msDifference = finishDate - startDate;
  const minuteDifference = Math.floor(msDifference / 60000);

  return { minuteDifference };
};
