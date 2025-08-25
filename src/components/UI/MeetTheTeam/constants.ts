import { StaticImageData } from 'next/image';
import munzah_shah from '../../../../public/images/munzah.jpeg';
import muzammil_Channa from '../../../../public/images/muzammil.png';
import shameel_uddin from '../../../../public/images/shameel.jpeg';
import ammad_ahmad from '../../../../public/images/ammad.jpeg';


export type Props = {
  testimony: string;
  person: string;
  avatar: StaticImageData;
  designation: string;
  linkedin: string;
};

export const testimonials = [
  {
    testimony: "When we started hasabTech Education, our goal was simple – make tech education accessible and practical. I’ve seen countless learners struggle because resources were either too expensive or too theoretical. We wanted to change that. This platform is our way of giving back to the community, by creating a space where learning is not just about watching tutorials but building real skills that matter in the industry.",
    person: 'Shameel Uddin',
    designation: 'Founder & CTO',
    linkedin: 'https://www.linkedin.com/in/shameeluddin/',
    avatar: shameel_uddin,
  },
  {
    testimony: "For me, hasabTech Education is about creating opportunities. Opportunities for learners to grow, connect, and work on real-world projects that truly prepare them for what’s ahead. I know how overwhelming the tech world can feel in the beginning, so we built this community to guide you step by step. Whether you want to land your first job or build something of your own, we’re here to help you make that happen.",
    person: 'Munzah Shah',
    designation: 'Co-Founder & CEO',
    linkedin: 'https://www.linkedin.com/in/munzah-shah/',
    avatar: munzah_shah,
  },
  {
    testimony: "Learning tech isn’t about memorizing concepts – it’s about applying them. That’s why at hasabTech Education, we’ve designed programs that push you to build, break, and rebuild. I’ve been in the industry long enough to know what companies expect, and that’s exactly what we prepare you for. If you’re ready to get your hands dirty with real projects, you’re in the right place.",
    person: 'Muzammil Channa',
    designation: 'Trainer & Internal Developer',
    linkedin: 'https://www.linkedin.com/in/muzamil-ahmed-channa/',
    avatar: muzammil_Channa,
  },
  {
    testimony: "Behind every great learning experience is a team that cares. Our job is to make sure your journey here is smooth, organized, and valuable. From managing the programs to ensuring the quality of the content, we’re committed to making hasabTech Education a place you’ll love coming back to. Your growth is our priority – and we take that seriously.",
    person: 'Ammad Ahmed',
    designation: 'Manager and Q/A Tester',
    linkedin: 'https://www.linkedin.com/in/ammad-ahmed-7466a618b/',
    avatar: ammad_ahmad,
  },
];

export const desktopHeaderPhrase = ['Meet the people who', 'make it all work!'];
