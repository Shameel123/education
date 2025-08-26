'use client';
import { styled } from 'styled-components';

export const CommunitySection = styled.section`
  text-align: center;
  padding: 4rem 0;
  color: #fff;

`;

export const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const SubText = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: #cfd8dc;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`;

export const JoinButton = styled.a<{ color: string }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  color: #fff;
  border-radius: 0.75rem;
  text-decoration: none;
  transition: all 0.3s ease;
  background: ${({ color }) => color};

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 4px 15px ${({ color }) => color}88;
  }

  svg {
    width: 24px;
    height: 24px;
    fill: #fff;
  }
`;

export const IconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`;
