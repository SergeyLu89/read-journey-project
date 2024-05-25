export const getLastPage = (progress, totalPages) => {
  const lastProgressPoint = progress[progress.length - 1];
  const lastPageRead =
    lastProgressPoint.finishPage ?? progress[progress.length - 2].finishPage;

  return lastPageRead > totalPages ? totalPages : lastPageRead;
};
