import styled from 'styled-components';

const media = {
  mobile: '@media(max-width: 768px)',
  tablet: '@media(min-width: 768px)',
};

export const HeaderStyle = styled.header`
  background-color: var(--body-color);
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  x-index: 3;

  ${media.tablet} {
    bottom: initial;
    padding: 0 1rem;
  }

  nav {
    height: var(--header-height);
    max-width: 968px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${media.tablet} {
      margin-inline: auto;
      height: calc(var(--header-height) + 1.5rem);
    }

    .nav-toggle {
      font-size: 1.3rem;
      cursor: pointer;
      &:hover {
        color: var(--first-color);
      }

      ${media.tablet} {
        display: none;
      }
    }

    .nav-logo {
      color: var(--text-color);
      &:hover {
        color: var(--first-color);
      }
    }

    .nav-menu {
      ${media.mobile} {
        background-color: var(--body-color);
        position: fixed;
        width: 100%;
        height: 100%;
        left: 0;
        bottom: ${(props) => (props.showMenu === 'show-menu' ? '0' : '-100%')};
        display: flex;
        justify-content: center;
        transition: 0.3s;
        z-index: 4;
      }

      .nav-close {
        position: absolute;
        right: 45px;
        top: 45px;
        font-size: 1.4rem;
        color: var(--first-color);
        cursor: pointer;

        ${media.tablet} {
          display: none;
        }
      }

      .nav-list {
        grid-template-columns: repeat(3, 1fr);
        place-items: center;
        gap: 4rem;

        .nav-link {
          font-size: 1.4rem;
          color: var(--text-color);
          &:hover {
            color: var(--first-color);
          }
        }
      }
    }
  }
`;
