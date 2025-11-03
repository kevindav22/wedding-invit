import { useState } from 'react';
import DoaSection from '../components/template/DoaSection';
import WeddingGallerySlide from '../components/template/GalerySlide';
import HeroSection from '../components/template/HeroSection';
import MempelaiSection from '../components/template/MempelaiSection';
import SaveTheDate from '../components/template/SaveTheDate';
import SpecialGift from '../components/template/SpecialGift';
import TerimakasihSection from '../components/template/TerimaKasihSection';
import UcapanSection from '../components/template/UcapanSection';
import OpeningSection from '../components/template/OpeningSection'; // ← tambahkan ini

import BottomNavbar from '../components/template/Navbar';


const PageTemplate = () => {
  const [opened, setOpened] = useState(false); // state untuk membuka undangan

  return (
    <div className="min-h-screen flex justify-center items-start bg-amber-600">
      <div className="w-[560px] min-h-screen bg-white shadow-lg overflow-y-auto">
        {!opened ? (
          // === Halaman pembuka undangan ===
          <OpeningSection onOpen={() => setOpened(true)} />
        ) : (
          // === Isi undangan setelah dibuka ===
          <>
            <HeroSection />
            <DoaSection />
            <MempelaiSection />
            <SaveTheDate />
            <WeddingGallerySlide />
            <UcapanSection />
            <SpecialGift />
            <TerimakasihSection />

            <BottomNavbar />
          </>
        )}
      </div>
    </div>
  );
};

export default PageTemplate;
