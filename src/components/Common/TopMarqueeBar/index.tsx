'use client';
import React from 'react';
import * as S from './styles';

const TopMarqueeBar = () => {
  return (
    <S.Wrapper>
      <S.MarqueeContainer>
        <S.Marquee>
          <span>Registrations for Batch # 2 of Career Accelerator Program are Open.</span>
          <span>Registrations for Batch # 2 of Career Accelerator Program are Open.</span>
          <span>Registrations for Batch # 2 of Career Accelerator Program are Open.</span>
          <span>Registrations for Batch # 2 of Career Accelerator Program are Open.</span>
          <span>Registrations for Batch # 2 of Career Accelerator Program are Open.</span>
          <span>Registrations for Batch # 2 of Career Accelerator Program are Open.</span>
          <span>Registrations for Batch # 2 of Career Accelerator Program are Open.</span>
        </S.Marquee>
      </S.MarqueeContainer>
    </S.Wrapper>
  );
};

export default TopMarqueeBar;
