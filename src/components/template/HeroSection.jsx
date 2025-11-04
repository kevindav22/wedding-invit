import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import CountdownDate from '../entities/Date';
import Snowfall from '../entities/SnowFall';
import nikahBg from '../../assets/images/foto3.webp';

const HeroSection = () => {
  const events = [{ id: 1, name: '09 November 2025', date: '09-11-2025-10:00' }];

  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: true,
      easing: 'ease-out-cubic',
    });
    setTimeout(() => {
      AOS.refreshHard();
    }, 50);
  }, []);

  return (
    <section id='herosection' className="relative w-full h-screen flex flex-col justify-end items-center text-center bg-cover bg-center overflow-hidden" style={{ backgroundImage: `url(${nikahBg})` }}>
      {/* Overlay gelap */}
      <div className="absolute inset-0 bg-black/40 z-0"></div>
      {/* Efek salju */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <Snowfall />
      </div>
      {/* Konten utama */}
      <div className="relative z-20 px-4 pb-32 flex flex-col items-center">
        {/* Save The Date */}
        <p data-aos="fade-down" data-aos-delay="200" className="font-vibes text-3xl mb-6 tracking-wider text-white drop-shadow-md">
          Save The Date
        </p>
        {/* Nama pengantin */}
        <h1 data-aos="zoom-in" data-aos-delay="400" className="text-5xl font-jawa text-yellow-500">
          Fitria <span className="text-white">&</span> Yusril
        </h1>
        {/* Countdown */}
        <div data-aos="fade-up" data-aos-delay="1000" className="text-yellow-800 w-full flex justify-center">
          <CountdownDate events={events} />
        </div>
      </div>
      {/* Gradasi bawah */}
      <div className="absolute bottom-0 w-full h-90 bg-linear-to-t from-black to-transparent z-10"></div>
    </section>
  );
};

export default HeroSection;
