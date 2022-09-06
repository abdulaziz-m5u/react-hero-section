import styled from 'styled-components';

const media = {
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
};

export const SectionHeroStyle = styled.section`
  margin-top: 2rem;

  .hero-container {
    ${media.tablet} {
      margin-inline: auto;
      max-width: 900px;
    }
  }

  .hero-content {
    justify-content: center;

    ${media.tablet} {
      grid-template-columns: max-content max-content;
      padding-top: 9rem;
    }

    .hero-image {
      justify-self: center;

      ${media.tablet} {
        order: 1;
      }
      svg {
        width: 230px;

        ${media.tablet} {
          width: 430px;
        }

        image {
          width: 450px;
        }
      }
    }

    .hero-data {
      text-align: center;

      ${media.tablet} {
        text-align: initial;
      }

      .hero-title {
        font-size: var(--big-font-size);
      }

      .hero-subtitle {
        font-size: var(--h3-font-size);
        color: var(--text-color);
        font-weight: 500;
        margin-bottom: 0.75rem;
      }

      .hero-description {
        margin-bottom: 2rem;
      }

      .hero-button {
        display: inline-block;
        color: #fff;
        background-color: var(--first-color);
        padding: 1rem;
        border-radius: 0.5rem;
        box-shadow: 0 4px 8px hsla(var(--hue-color), 69%, 61%, 0.25);
        transition: 1s;
        &:hover {
          background-color: var(--first-color-alt);
        }
      }
    }
  }
`;
