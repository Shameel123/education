'use client';
import Image from 'next/image';
import { Edge, Edges, Title } from '../CareerAccelerator/styles';
import {
  Wrapper,
  Inner,
  Header,
  HeaderMainText,
} from './styles';
import { MaskText } from '@/components';
import { useIsMobile } from '../../../../libs/useIsMobile';
import {
  desktopHeaderPhrase,
  desktopParagraphPhrase,
  edges,
  mobileHeaderPhrase,
  mobileParagraphPhrase,
} from './constants';
import Folder from '../Folder';
import Button from '@/components/Common/Button';

const Registrations = () => {
  const isMobile = useIsMobile();

  return (
    <Wrapper>
      <Inner>
        <Header>
          <h3>We are intaking</h3>
          <HeaderMainText>
            {isMobile ? (
              <>
                <MaskText phrases={mobileHeaderPhrase} tag="h1" />
                <MaskText phrases={mobileParagraphPhrase} tag="p" />
              </>
            ) : (
              <>
                <MaskText phrases={desktopHeaderPhrase} tag="h1" />
                <MaskText phrases={desktopParagraphPhrase} tag="p" />
              </>
            )}
          </HeaderMainText>
        </Header>
        <div style={{ height: '250px', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '2rem' }}>
          <Folder size={2} color="#5227FF" className="custom-folder" items={["Backend Dev", "Agentic AI Dev", "Frontend Dev"]} />
        </div>
        <Edges>
          {edges.map((edge, i) => (
            <Edge key={i}>
              <Title>
                <Image src={edge.icon} alt="icon" />
                <MaskText phrases={new Array(edge.point)} tag="h3" />
              </Title>
              <MaskText phrases={new Array(edge.details)} tag="p" />
            </Edge>
          ))}
        </Edges>
        <div style={{marginTop: '2rem'}}>
          <Button padding="1rem 2rem" text={'I want to register!'} link={'https://forms.gle/kE3L55e7zsN1VZ3j9'} openInNewTab />
        </div>
      </Inner>
    </Wrapper>
  );
};

export default Registrations;
