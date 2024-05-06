export const selectRecommendedBooks = state => state.recommended.recommended;
export const selectRecommendedTotalCount = state =>
  state.recommended.totalCount;
export const selectRecommendedIsLoading = state => state.recommended.isLoading;
export const selectRecommendedError = state => state.auth.error;
