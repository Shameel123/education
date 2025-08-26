'use client';
import { styled } from 'styled-components';

export const FolderWrapper = styled.div`
  --paper-1: #e6e6e6;
  --paper-2: #f2f2f2;
  --paper-3: #ffffff;

  display: flex;
  justify-content: center;
  align-items: center;

  /* Shrink everything on small screens */
  @media (max-width: 600px) {
    transform: scale(0.8);
    transform-origin: top center;
  }
`;

export const Folder = styled.div`
  transition: all 0.3s ease-in-out;
  cursor: pointer;

  /* Hover state when not open */
  &:not(.open):hover {
    transform: translateY(-8px);

    .paper {
      transform: translate(-50%, 0%);
    }

    .folder__front {
      transform: skew(15deg) scaleY(0.6);
    }

    .folder__front.right {
      transform: skew(-15deg) scaleY(0.6);
    }
  }

  /* Open state (on click) */
  &.open {
    transform: translateY(-8px);

    .paper:nth-child(1) {
      transform: translate(-120%, -70%) rotateZ(-15deg);
    }

    .paper:nth-child(2) {
      transform: translate(10%, -70%) rotateZ(15deg);
      height: 80%;
    }

    .paper:nth-child(3) {
      transform: translate(-50%, -100%) rotateZ(5deg);
      height: 80%;
    }

    .folder__front {
      transform: skew(15deg) scaleY(0.6);
    }

    .folder__front.right {
      transform: skew(-15deg) scaleY(0.6);
    }
  }
`;

export const FolderBack = styled.div`
  position: relative;
  width: 100px;
  height: 80px;
  background: rgb(247, 127, 62);
  border-radius: 0px 10px 10px 10px;

  &::after {
    position: absolute;
    z-index: 0;
    bottom: 98%;
    left: 0;
    content: "";
    width: 30px;
    height: 10px;
    background: rgb(220, 101, 37);
    border-radius: 5px 5px 0 0;
  }
`;

/* Add className='paper' for nth-child targeting */
export const Paper = styled.div.attrs(() => ({
  className: 'paper'
}))`
  position: absolute;
  z-index: 2;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, 10%);
  width: 70%;
  height: 80%;
  background: var(--paper-1);
  border-radius: 10px;
  border: 1px solid #ccc;
  transition: all 0.4s ease-in-out;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  font-weight: 600;
  color: #03094c;
  text-align: center;
  padding: 5px;

  &:nth-child(2) {
    background: var(--paper-2);
    width: 80%;
    height: 70%;
  }

  &:nth-child(3) {
    background: var(--paper-3);
    width: 90%;
    height: 60%;
  }
`;

/* Add className='folder__front' for skew animation */
export const FolderFront = styled.div.attrs(() => ({
  className: 'folder__front'
}))`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  background: rgb(248, 140, 82);
  border-radius: 5px 10px 10px 10px;
  transform-origin: bottom;
  transition: all 0.3s ease-in-out;
`;
