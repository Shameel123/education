'use client';

import Image from 'next/image';
import {
  Wrapper,
  Inner,
  LogoContainer,
  Nav,
  CallToActions,
  BurgerMenu,
} from './styles';
import logo_white from '../../../../public/images/hasabtech-education-logo.png';
import ic_bars from '../../../../public/svgs/ic_bars.svg';
import AnimatedLink from '@/components/Common/AnimatedLink';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { links, menu } from './constants';
import Button from '@/components/Common/Button';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleLinkClick = (href: any) => {
    // Close the menu
    closeMenu();
    
    // Handle smooth scrolling for hash links
    if (href.startsWith('#')) {
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // Small delay to allow menu to start closing
    }
  };

  return (
    <Wrapper>
      <Inner>
        <LogoContainer>
          <a href='/' aria-label="hasabtech_logo">
            <Image src={logo_white} alt="hasabtech_logo" priority width={140} />
          </a>
          <BurgerMenu onClick={() => setIsOpen(!isOpen)}>
            <motion.div
              variants={menu}
              animate={isOpen ? 'open' : 'closed'}
              initial="closed"
            ></motion.div>
            <Image src={ic_bars} alt="bars" />
          </BurgerMenu>
        </LogoContainer>
        <Nav className={isOpen ? 'active' : ''}>
          {links.map((link, i) => (
            <div key={i} onClick={() => handleLinkClick(link.url)}>
              <AnimatedLink
                key={i}
                title={link.linkTo}
                href={link.url}
                onClick={closeMenu}
              />
            </div>
          ))}
        </Nav>
        <CallToActions className={isOpen ? 'active' : ''}>
          <Button padding="0.5rem 0.75rem" text={'Register!'} link={'https://forms.gle/kE3L55e7zsN1VZ3j9'} openInNewTab />
        </CallToActions>
      </Inner>
    </Wrapper>
  );
};

export default Header;