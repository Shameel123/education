'use client';
import { styled } from 'styled-components';
import grid_background from '../../../../public/images/offer_card_grid_1.png';

export const Wrapper = styled.section``;

export const Inner = styled.div`
  max-width: 1440px;
  width: 90%;
  margin: 12.38rem auto 0;

  @media (max-width: 768px) {
    margin-top: 6.44rem;
  }
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  text-align: center;
  max-width: 56rem;
  margin: 0 auto 6.75rem;

  h1 {
    font-size: 4.75rem;
    font-weight: 400;
  }

  p {
    max-width: 41.75rem;
    color: #989898;
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.75rem;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 2.25rem;
    }

    p {
      font-size: 1rem;
      line-height: 1.5rem;
    }
  }
`;

export const ImageCtn = styled.div`
  margin: 3rem auto 0;
  position: relative;
  display: flex;

  &::after {
    position: absolute;
    content: '';
    height: 13.4375rem;
    width: 100%;
    background: linear-gradient(180deg,rgba(39, 53, 92, 0),rgba(37, 52, 91, 0.44));
    left: 0;
    top: 50px;
  }

  img {
    width: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    margin: 0.32rem auto 0;

    &::after {
      top: 30px;
    }

    img {
      width: 90%;
      margin: 0 auto;
      object-fit: contain;
    }
  }
`;

export const TextCtn = styled.div`
  padding: 2.5rem;
  padding-top: 3.25rem;
  max-width: 32.25rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: auto;

  h2 {
    font-size: 2rem;
    font-weight: 500;
    line-height: 1.75rem;
  }

  p {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5rem;
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    h2 {
      font-size: 1.5rem;
    }
  }
`;

export const Offers = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;

  &:last-child {
    margin-top: 2rem;

    div:first-child {
      flex: 1;

      ${ImageCtn} {
        margin-top: 5.7rem;
        flex: 2;
      }

      ${TextCtn} {
        margin-top: -2rem;
        height: 1em;
        flex: 1;
      }
    }

    div:last-child {
      flex: 2;

      ${ImageCtn} {
        margin-top: 2rem;
        flex: 2;
        margin-left: auto;
      }

      ${TextCtn} {
        max-width: 55rem;
        height: 1em;
        flex: 1;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    &:last-child {
      div:first-child {
        flex: 1;

        ${ImageCtn} {
          margin-top: 4.78rem;
          flex: 1;
        }

        ${TextCtn} {
          margin-top: 4rem;
        }
      }

      div:last-child {
        flex: 1;

        ${ImageCtn} {
          margin-top: 5.7rem;
          flex: 1;
          margin-left: auto;
        }

        ${TextCtn} {
          margin-top: 2rem;
        }
      }
    }
  }
`;

//  linear-gradient(
//   135deg,
//   rgba(27, 38, 59, 0.5) 0%,
//   rgba(61, 84, 107, 0.54) 50%,
//   rgba(33, 58, 85, 0.44) 100%
// ),
// url(${grid_background.src}) rgb(20, 26, 79) no-repeat;

export const OfferCard = styled.div`
  position: relative;
  overflow: hidden;
  height: 31.25rem;
  border-radius: 0.75rem;
  border: 1px solid var(--stroke, #2c3e50);
  display: flex;
  flex-direction: column;
  background: 
    linear-gradient(
      135deg,
      rgba(14, 21, 36, 0.5) 0%,
      rgba(61, 84, 107, 0.54) 50%,
      rgba(21, 43, 67, 0.44) 100%
    ),
    url(${grid_background.src}) rgb(20, 26, 79) no-repeat;
  background-size: cover;
  background-position: center;

  /* Shiny overlay that follows cursor */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(
      circle at var(--x, 50%) var(--y, 50%),
      rgba(19, 51, 165, 0.4) 0%,
      transparent 60%
    );
    transition: background 0.1s;
    pointer-events: none;
  }

  &:first-child {
    flex: 2;
  }

  &:nth-child(2) {
    flex: 1;

    ${ImageCtn} {
      margin-left: 2.5rem;
      width: 100%;
    }
  }
`;


/* ----------------------------- */
/* New styles for Programs Grid  */
/* ----------------------------- */

export const ProgramsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const ProgramCard = styled.div`
  position: relative;
  background: linear-gradient(135deg,rgba(27, 38, 59, 0.5) 0%,rgba(61, 84, 107, 0.54) 50%,rgba(33, 58, 85, 0.44) 100%);
  border: 1px solid #2c3e50;
  border-radius: 12px;
  padding: 2rem 1.5rem;
  text-align: center;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  min-height: 250px;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
  }

  /* Shiny overlay */
  &::before {
    content: "";
    position: absolute;
    top: var(--y, 50%);
    left: var(--x, 50%);
    transform: translate(-50%, -50%);
    width: 70%;
    height: 70%;
    background: radial-gradient(
      circle at center,
      rgba(19, 51, 165, 0.60),
      transparent 60%
    );
    opacity: 0;
    transition: opacity 0.2s;
    pointer-events: none;
    z-index: -20;
  }

  &:hover::before {
    opacity: 1;
  }

  .icon {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  .title {
    font-size: 1.25rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }

  .description {
    font-size: 0.95rem;
    color: #dcdcdc;
    margin-bottom: 1rem;
  }

  .status {
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 500;
  }

  .status.active {
    background-color:rgb(31, 179, 93);
    color: #fff;
  }

  .status.coming-soon {
    background-color: #e67e22;
    color: #fff;
  }

  .status.planned {
    background-color: #3498db;
    color: #fff;
  }
`;
