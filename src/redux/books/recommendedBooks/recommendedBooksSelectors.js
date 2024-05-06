export const selectRecommendedBooks = state => state.recommended.recommended;
export const selectRecommendedTotalPages = state =>
  state.recommended.totalPages;
export const selectRecommendedIsLoading = state => state.recommended.isLoading;
export const selectRecommendedError = state => state.auth.error;
