export const getLastReadPage = (sprints, totalPages) => {
  if (
    sprints.length === 0 ||
    (sprints.length === 1 && sprints[0].status === 'active')
  ) {
    return 1;
  }

  const lastReadingSprint = sprints[sprints.length - 1];
  const readPages =
    lastReadingSprint.finishPage ?? sprints[sprints.length - 2].finishPage;

  return readPages > totalPages ? totalPages : readPages;
};
