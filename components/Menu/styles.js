import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;

  .overlay {
    animation-name: op;
    animation-duration: 1s;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    z-index: -1;
  }

  .wrapper {
    animation-name: op;
    animation-duration: 1s;
    background: #fff;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 3;
    width: 30rem;

    .header {
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1.4rem;
      border-bottom: 1px solid var(--color-line-in-white);
      .close {
        svg {
          font-size: 2.4rem;
          color: var(--color-primary);
        }
      }
    }
  }

  .content-area {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: calc(100% - 8rem);

    .menu {
      padding: 1rem 2rem;
      width: 100%;
      ul {
        list-style: none;

        li {
          width: 100%;
          padding: 0.5rem 0;

          a {
            font-size: 1.4rem;
            text-decoration: none;
            color: var(--color-text-title);
            transition: 200ms;

            &:hover {
              color: var(--color-primary);
            }
          }
        }
      }
    }

    .social-links {
      padding: 2rem;
      border-top: 1px solid var(--color-line-in-white);
      width: 100%;
      ul {
        list-style: none;

        display: flex;
        justify-content: center;
        align-items: center;

        li {
          a {
            color: var(--color-title);

            svg {
              font-size: 2.4rem;
              &:hover {
                opacity: 0.9;
              }
            }
          }
          & + li {
            margin-left: 1rem;
          }
        }
      }
    }
  }
`
