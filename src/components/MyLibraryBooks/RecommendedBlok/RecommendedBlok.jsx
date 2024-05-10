import css from './RecommendedBlok';

import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getRecommended } from '../../../redux/books/recommendedBooks/recommendedBooksOperations';
import { defaultImageBookSmallPng } from 'assets/images/defaultImages/defaultImages';
import { Link } from 'react-router-dom';

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
    <>
      <h3>Recommended books</h3>
      <ul>
        {resultArray.map(({ imageUrl, title, author, _id }) => (
          <li key={_id}>
            <img
              src={imageUrl ? imageUrl : defaultImageBookSmallPng}
              alt={title}
            />
            <h4>{title}</h4>
            <p>{author}</p>
          </li>
        ))}
      </ul>
      <Link className={css.recommebdedLink} to="/">
        Home
      </Link>
    </>
  );
};
export default RecommendedBlok;
