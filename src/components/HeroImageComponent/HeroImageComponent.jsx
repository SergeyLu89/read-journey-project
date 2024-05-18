import css from './HeroImageComponent.module.css';
import * as heroImg from '../../assets/images/heroImage/index';

const HeroImageComponent = () => {
  return (
    <section className={css.heroSection}>
      <picture>
        <source
          media="(min-width: 1440px)"
          type="image/webp"
          srcSet={`${heroImg.heroDesktopWeb} 1x, ${heroImg.heroDesktopWeb2x} 2x`}
        />
        <source
          media="(min-width: 1440px)"
          type="image/png"
          srcSet={`${heroImg.heroDesktopPng} 1x, ${heroImg.heroDesktopPng2x} 2x`}
        />

        <source
          media="(min-width: 375px)"
          type="image/webp"
          srcSet={`${heroImg.heroMobileWeb} 1x, ${heroImg.heroMobileWeb2x} 2x`}
        />

        <source
          media="(min-width: 375px)"
          type="image/png"
          srcSet={`${heroImg.heroMobilePng} 1x, ${heroImg.heroMobilePng2x} 2x`}
        />

        <img srcSet={heroImg.heroMobilePng} alt="iPhone" />
      </picture>
    </section>
  );
};
export default HeroImageComponent;
