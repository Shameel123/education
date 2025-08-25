'use client';
import { styled, keyframes } from 'styled-components';

// Keyframes for scrolling animation
const marqueeScroll = keyframes`
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
`;

export const Wrapper = styled.div`
  width: 100%;
  background-color: #eeeeee;
  color: var(--primaryBlue);
  overflow: hidden;
  position: fixed;
  z-index: 30;
`;

export const MarqueeContainer = styled.div`
  display: flex;
  white-space: nowrap;
`;

export const Marquee = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 10rem;
  animation: ${marqueeScroll} 45s linear infinite;
  font-size: 1rem;
  font-weight: 500;
  padding: 0.5rem 0;

  span {
    margin: 0 2rem;
    font-weight: 500;
  }
`;
