import BookInfoComponent from 'components/reUseComponents/BookInfoComponent/BookInfoComponent';
import css from './RecommendedBooksItem.module.css';
import Modal from 'components/reUseComponents/Modal/Modal';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import UniversalButton from 'components/reUseComponents/UniversalButton/UniversalButton';
import { addLibraryBooksThunk } from '../../../redux/books/libraryBooks/libraryBooksOperations';

const RecommendedBooksItem = ({ book }) => {
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const { author, imageUrl, title, _id } = book;
  return (
    <>
      <li>
        <button type="button" onClick={openModal} className={css.modalOpenBtn}>
          <img src={imageUrl} alt={title} className={css.bookImage} />
        </button>

        <h4>{title}</h4>
        <p>{author}</p>
      </li>
      {isOpen && (
        <Modal isOpen={isOpen} closeFnc={closeModal}>
          <BookInfoComponent book={book} />
          <UniversalButton
            title={'Add to library'}
            btnFunction={() => dispatch(addLibraryBooksThunk(_id))}
          />
        </Modal>
      )}
    </>
  );
};
export default RecommendedBooksItem;
