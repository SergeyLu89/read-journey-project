// import css from './MyLibraryPage.module.css'

import MyLibraryForm from 'components/Forms/MyLibraryForm/MyLibraryForm';
import MyLibraryBooksList from 'components/MyLibraryBooks/MyLibraryBooksList/MyLibraryBooksList';
import Dashboard from 'components/reUseComponents/Dashboard/Dashboard';

const MyLibraryPage = () => {
  return (
    <>
      <Dashboard>
        <MyLibraryForm />
      </Dashboard>
      <MyLibraryBooksList />
    </>
  );
};
export default MyLibraryPage;
