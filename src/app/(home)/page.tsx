import {
  FAQ,
  Featured,
  FinancilaFreedom,
  HeroSection,
  Registrations,
  ProgramsSection,
} from '@/components';
import TopMarqueeBar from '@/components/Common/TopMarqueeBar';
import About from '@/components/UI/About';
import JoinCommunity from '@/components/UI/JoinCommunity';
import MeetTheTeam from '@/components/UI/MeetTheTeam';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <Featured />
      <About />
      <ProgramsSection />
      <FinancilaFreedom />
      <Registrations />
      <MeetTheTeam />
      <FAQ />
      {/* <JoinCommunity /> */}
    </main>
  );
}
