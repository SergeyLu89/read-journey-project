import css from './MyLibraryBooksItem';
import Modal from 'components/reUseComponents/Modal/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import BookInfoComponent from 'components/reUseComponents/BookInfoComponent/BookInfoComponent';
import UniversalButton from 'components/reUseComponents/UniversalButton/UniversalButton';
import { removeLibraryBooksThunk } from '../../../redux/books/libraryBooks/libraryBooksOperations';

const MyLibraryBooksItem = ({ book }) => {
  const { author, imageUrl, title, _id } = book;
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li>
        <button type="button" onClick={openModal} className={css.modalOpenBtn}>
          <img src={imageUrl} alt={title} className={css.bookImage} />
        </button>

        <h4>{title}</h4>
        <p>{author}</p>
        <button
          type="button"
          onClick={() => {
            dispatch(removeLibraryBooksThunk(_id));
          }}
        >
          Delete
        </button>
      </li>
      {isOpen && (
        <Modal isOpen={isOpen} closeFnc={closeModal}>
          <BookInfoComponent book={book} />
          <UniversalButton
            title={'Start reading'}
            // btnFunction={() => {}}
          />
        </Modal>
      )}
    </>
  );
};
export default MyLibraryBooksItem;
