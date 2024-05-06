// import css from './RecommendedPage.module.css';
import RecommendedFilter from 'components/Forms/RecommendedFilter/RecommendedFilter';
import Functionality from 'components/RecommendedBooks/Functionality/Functionality';
import QuoteBlock from 'components/RecommendedBooks/QuoteBlock/QuoteBlock';
import RecommendedBooksList from 'components/RecommendedBooks/RecommendedBooksList/RecommendedBooksList';
import Dashboard from 'components/reUseComponents/Dashboard/Dashboard';
// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getRecommended } from '../../redux/books/recommendedBooks/recommendedBooksOperations';
// import { selectRecommendedBooks } from '../../redux/books/recommendedBooks/recommendedBooksSelectors';

const RecommendedPage = () => {
  // const books = useSelector(selectRecommendedBooks);
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getRecommended());
  // }, [dispatch]);
  return (
    <>
      <Dashboard>
        <RecommendedFilter />
        <Functionality />
        <QuoteBlock />
      </Dashboard>
      <RecommendedBooksList />
    </>
  );
};
export default RecommendedPage;
