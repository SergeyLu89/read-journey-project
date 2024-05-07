import BookInfoComponent from 'components/reUseComponents/BookInfoComponent/BookInfoComponent';
import css from './RecommendedBooksItem.module.css';

import Modal from 'components/reUseComponents/Modal/Modal';
import { useState } from 'react';

const RecommendedBooksItem = ({ book }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  const { author, imageUrl, title } = book;
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
          <button type="button">Add to library</button>
        </Modal>
      )}
    </>
  );
};
export default RecommendedBooksItem;
