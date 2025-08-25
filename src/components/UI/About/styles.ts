'use client';
import { styled } from 'styled-components';

export const AboutWrapper = styled.section`
  background: var(--primaryBlue);
  color: var(--white);
  padding: 8rem 2rem 0rem 2rem;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
    min-height: 80vh;
  }
`;

export const AboutContent = styled.div`
  max-width: 1200px;
  width: 100%;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const QuotationMark = styled.div`
  font-size: 25rem;
  font-weight: 900;
  color: var(--white);
  opacity: 0.08;
  position: absolute;
  top: -7rem;
  left: -2rem;
  line-height: 1;
  font-family: serif;
  z-index: 1;
  user-select: none;
  pointer-events: none;

  @media (max-width: 1024px) {
    font-size: 20rem;
    top: -6rem;
    left: -1.5rem;
  }

  @media (max-width: 768px) {
    font-size: 15rem;
    top: -4rem;
    left: -1rem;
  }

  @media (max-width: 480px) {
    font-size: 12rem;
    top: -3rem;
    left: -0.5rem;
  }
`;

export const AboutText = styled.p`
  font-size: 3rem;
  font-weight: 300;
  line-height: 1.4;
  color: #BDBDBD;
  margin: 0;
  padding-left: 3rem;
  position: relative;
  z-index: 2;
  margin-top: 1rem;

  @media (max-width: 1024px) {
    font-size: 2.5rem;
    padding-left: 2.5rem;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    padding-left: 2rem;
    line-height: 1.5;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
    padding-left: 1.5rem;
    line-height: 1.6;
  }
`;