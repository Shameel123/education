'use client';
import { AboutWrapper, AboutContent, QuotationMark, AboutText } from './styles';

const About = () => {
  return (
    <AboutWrapper>
      <AboutContent>
        <QuotationMark>"</QuotationMark>
        <AboutText>
        <span style={{color: 'var(--primaryOrange)'}} id="about">hasabTech Education</span> is our commitment to strengthening the tech community by sharing the skills,
        knowledge, and experience we’ve gained over the years.<br></br><br></br>This is a <span style={{color: 'var(--primaryOrange)'}}>non-profit</span> initiative by hasabTech
        dedicated to giving back to the tech community. Our <span style={{color: 'var(--primaryOrange)'}}> mission</span> is simple: Make <span style={{color: 'var(--primaryOrange)'}}>high quality tech education </span>
        accessible to everyone regardless of background and strengthen the community by helping <span style={{color: 'var(--primaryOrange)'}}>learners become
        contributors</span> themselves.
        </AboutText>
      </AboutContent>
    </AboutWrapper>
  );
};

export default About;