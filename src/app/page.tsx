import Hero from '@/components/sections/Hero';
import AboutUs from '@/components/sections/AboutUs';
import UnitSection from '@/components/sections/UnitSection';
import TeamSection from '@/components/sections/TeamSection';
import QuestionSection from '@/components/sections/QuestionSection';
import PendaftaranSection from '@/components/sections/PendaftaranSection';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <AboutUs />
      <UnitSection />
      <TeamSection />
      <QuestionSection />
      <PendaftaranSection />
    </div>
  );
}
