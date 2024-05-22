import css from './RecommendedBlok.module.css';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRecommended } from '../../../redux/books/recommendedBooks/recommendedBooksOperations';
import { defaultImageBookSmallPng } from 'assets/images/defaultImages/defaultImages';
import { Link } from 'react-router-dom';
import sprite from '../../../assets/images/sprite.svg';

const RecommendedBlok = () => {
  const dispatch = useDispatch();

  const getRandomElements = (arr, count) => {
    return arr
      .slice()
      .sort(() => Math.random() - 0.5)
      .slice(0, count);
  };

  const [resultArray, setResultArray] = useState([]);

  useEffect(() => {
    const fetchRecommendedBooks = async () => {
      const searchParams = new URLSearchParams({ limit: 30 });
      try {
        const fetchedBooks = await dispatch(
          getRecommended(searchParams)
        ).unwrap();
        const randomSelection = getRandomElements(fetchedBooks.results, 3);
        setResultArray(randomSelection);
      } catch (error) {
        console.error('Error fetching recommended books:', error);
      }
    };

    fetchRecommendedBooks();
  }, [dispatch]);

  return (
    <section className={css.recommendedSection}>
      <h3>Recommended books</h3>
      <ul className={css.recommendedSectionList}>
        {resultArray.map(({ imageUrl, title, author, _id }) => (
          <li key={_id} className={css.recommendedSectionListItem}>
            <img
              src={imageUrl ? imageUrl : defaultImageBookSmallPng}
              alt={title}
            />
            <h4>{title}</h4>
            <p>{author}</p>
          </li>
        ))}
      </ul>
      <div className={css.recommendedLinkWrapper}>
        <Link className={css.recommendedLink} to="/">
          Home
        </Link>
        <Link className={css.recommendedLinkSvg} to="/">
          <svg aria-label="arrow icon">
            <use href={sprite + '#icon-log-in'}></use>
          </svg>
        </Link>
      </div>
    </section>
  );
};
export default RecommendedBlok;
