'use client';
import Link from 'next/link';
import { styled } from 'styled-components';

export const Wrapper = styled.section`
  padding: 1rem 0;
  border-bottom: 0.5px solid #3d3d3d;
  position: fixed;
  top: 2.2rem;
  left: 0;
  z-index: 10000;
  width: 100%;
  height: 5rem;
  background-color: rgba(18, 22, 81, 0.2);
  backdrop-filter: blur(10px); 
  box-shadow: 0 8px 32px 0 rgba(3, 9, 76, 0.1);
  display: flex;
  height: fit-content;
  
  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const Inner = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  max-width: 1440px;
  margin: 10px auto;
`;

export const LogoContainer = styled.div`
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }
`;

export const BurgerMenu = styled.div`
  display: none;
  position: relative;

  @media (max-width: 768px) {
    display: block;
    padding: 0.5rem 0.6rem;

    div {
      position: absolute;
      background: var(--primaryOrange);
      width: '250px';
      height: '300px';
      border-radius: 20px;
      z-index: 1;
      top: 50px;
    }

    img {
      position: absolute;
      top: 50%
      right: 50%;
      transform: translate(-75%, -65%);
      z-index: 30;
      object-fit: cover;
      z-index: 30;

    }
  }
`;

export const Nav = styled.div`
  display: flex;
  align-items: center;
  gap: 3.75rem;
  position: relative;
  margin-right: -6.3rem;


  a {
    color: var(--link-color);
    font-size: 1rem;
    font-weight: 400;
  }

  @media (min-width: 769px) and (max-width: 1023px) { 
     display: flex;
    align-items: center;
    gap: 2rem !important;
    position: relative;
    margin-right: -6.3rem;
  }

  @media (max-width: 768px) {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 350%);
    width: 80%;
    height: 90%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    z-index: 20;
    visibility: hidden;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.1s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const AbsoluteLinks = styled(Link)`
  position: absolute;
  top: 40px;
  color: var(--link-color);
  font-size: 1rem;
  font-weight: 400;
`;

export const CallToActions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  div {
    span {
      color: var(--white);
      font-size: 1rem;
      font-weight: 600;
    }
  }

  @media (max-width: 768px) {
    position: absolute;
    top: 220px;
    z-index: 30;
    right: 50px;
    display: none;
    opacity: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    transition-delay: 0.5s;

    &.active {
      opacity: 1;
      visibility: visible;
    }
  }
`;
