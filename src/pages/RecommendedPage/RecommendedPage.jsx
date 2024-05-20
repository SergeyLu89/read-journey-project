import css from './RecommendedPage.module.css';
import RecommendedFilter from 'components/Forms/RecommendedFilter/RecommendedFilter';
import Functionality from 'components/RecommendedBooks/Functionality/Functionality';
import QuoteBlock from 'components/RecommendedBooks/QuoteBlock/QuoteBlock';
import RecommendedBooksList from 'components/RecommendedBooks/RecommendedBooksList/RecommendedBooksList';
import Dashboard from 'components/reUseComponents/Dashboard/Dashboard';

const RecommendedPage = () => {
  return (
    <div className={css.recommendedPageWrapper}>
      <Dashboard>
        <RecommendedFilter />
        <Functionality />
        <QuoteBlock />
      </Dashboard>
      <RecommendedBooksList />
    </div>
  );
};
export default RecommendedPage;
