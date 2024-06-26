import css from './MyLibraryPage.module.css';

import MyLibraryForm from 'components/Forms/MyLibraryForm/MyLibraryForm';
import MyLibraryBooksList from 'components/MyLibraryBooks/MyLibraryBooksList/MyLibraryBooksList';
import RecommendedBlok from 'components/MyLibraryBooks/RecommendedBlok/RecommendedBlok';
import Dashboard from 'components/reUseComponents/Dashboard/Dashboard';

const MyLibraryPage = () => {
  return (
    <div className={css.libraryPageWrapper}>
      <Dashboard>
        <MyLibraryForm />
        <RecommendedBlok />
      </Dashboard>
      <MyLibraryBooksList />
    </div>
  );
};
export default MyLibraryPage;
