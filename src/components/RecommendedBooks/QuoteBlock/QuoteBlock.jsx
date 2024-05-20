import { booksPng } from 'assets/images/defaultImages/defaultImages';
import css from './QuoteBlock.module.css';

const QuoteBlock = () => {
  return (
    <section className={css.quoteBlock}>
      <img src={booksPng} alt="books" className={css.booksImage} />
      <p className={css.quoteDescr}>
        "Books are <span className={css.quoteDescrAccent}>windows</span> to the
        world, and reading is a journey into the unknown."
      </p>
    </section>
  );
};
export default QuoteBlock;
