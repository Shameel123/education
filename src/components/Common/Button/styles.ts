'use client';
import { styled } from 'styled-components';
import Link from 'next/link';

export const LinkTo = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border-radius: 6.25rem;
  background: var(--primaryOrange);
  color: var(--primaryBlue);
  font-size: 1rem;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  /* Make sure it targets the <a> rendered by Next.js Link */
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    text-decoration: none;
    color: inherit;
  }

  &:hover {
    background:rgb(250, 138, 78);
  }
`;
