'use client';
import { styled } from 'styled-components';

export const Wrapper = styled.div`
  background: var(--primaryBlue);
  color: var(--white);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9999;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

export const Inner = styled.div`
  display: flex;
  gap: 2em;
  align-items: center;
  padding: 0 2em;
  overflow: hidden;
  height: 12em;

  img {
    width: 13em;
    height: 13em;
  }

  div {
    overflow: hidden;
    display: flex;
    align-items: center;

    div {
      font-weight: 600;
      font-size: 15em;
    }
  }

  @media (min-width: 621px) and (max-width: 1023px) { 
    gap: 1rem;
    img {
      width: 7rem;
      height: 7rem;
    }

    div {
      div {
        font-size: 7rem;
      }
    }
  }

  @media (max-width: 620px) {
    gap: 1rem;
    display: flex;
    align-items: center;
    height: fit-content;
    margin-bottom: 20rem;
    
    img {
      width: 3rem;
      height: 3rem;
    }

    div {
      div {
        font-size: 2.5rem;
      }
    }
  }
`;

export const SecondOverlay = styled.div`
  background: var(--primaryOrange);
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 9990;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
`;
