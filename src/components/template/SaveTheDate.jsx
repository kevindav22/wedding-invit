// src/components/template/WeddingCardSection.jsx
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import CountdownDate from '../entities/Date';
import bgCard from '../../assets/images/foto2.webp';
import bgSection from '../../assets/images/bg2.jpg';
import logoWayang from '../../assets/images/wayang2.png';
import bungaAtas from '../../assets/images/bungaatas.png';
import bungaBawah from '../../assets/images/bungabawah.png';

AOS.init({
  duration: 900,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
});

const WeddingCardSection = () => {
  const eventData = [
    {
      id: 1,
      title: 'Akad Nikah',
      dateText: 'Kamis, 30 Oktober 2025',
      timeText: '10.00 WIB – Selesai',
      countdown: { id: 1, date: '20-10-2025-09:00' },
      place: 'Kantor Urusan Agama (KUA)',
      address: 'Jl. Rahayu No.1, Gondang',
      region: 'Sragen - Jawa Tengah',
      mapsUrl: 'https://maps.app.goo.gl/gW1FeoDRW5GUPJ3s9?g_st=ac',
    },
    {
      id: 2,
      title: 'Resepsi Pernikahan',
      dateText: 'Minggu, 9 November 2025',
      timeText: '10.00 WIB – Selesai',
      countdown: { id: 2, date: '12-12-2025-11:00' },
      place: 'Kediamanan Mempelai Wanita',
      address: 'Dk. Ceme Rt.01, Wonotolo, Gondang',
      region: 'Sragen - Jawa Tengah',
      mapsUrl: '#',
    },
  ];

  return (
    <section id='savethedatesection' className="relative w-full flex flex-col items-center py-16 px-6 text-center bg-cover bg-center bg-no-repeat overflow-hidden" style={{ backgroundImage: `url(${bgSection})` }}>
      {/* === Dekorasi bunga atas === */}
      <div data-aos="fade-down" data-aos-duration="600" className="absolute -top-30 opacity-80 pointer-events-none select-none">
        <motion.img
          src={bungaAtas}
          alt="Dekorasi bunga atas"
          style={{ willChange: 'transform' }}
          animate={{ y: [-10, 10, -10] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 8,
            ease: [0.45, 0.05, 0.55, 0.95],
          }}
        />
      </div>

      {/* === Dekorasi bunga bawah === */}
      <div data-aos="fade-up" data-aos-duration="1200" className="absolute -bottom-30 opacity-80 pointer-events-none select-none">
        <motion.img
          src={bungaBawah}
          alt="Dekorasi bunga bawah"
          style={{ willChange: 'transform' }}
          animate={{ y: [10, -10, 10] }}
          transition={{
            repeat: Infinity,
            repeatType: 'reverse',
            duration: 8,
            ease: [0.45, 0.05, 0.55, 0.95],
          }}
        />
      </div>

      {/* === Konten utama === */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Judul */}
        <h2 data-aos="fade-down" className="text-5xl font-vibes text-yellow-500 drop-shadow-[0_1px_1px_rgba(0,0,0,0.8)] mb-10 text-center">
          Save The Date
        </h2>

        {/* Daftar event */}
        <div className="flex flex-col items-center gap-6">
          {eventData.map((event, index) => (
            <div key={event.id} data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} className="relative w-full max-w-[420px] mx-auto h-[560px] rounded-lg overflow-hidden border-2 border-white bg-black">
              {/* Gambar background */}
              <div className="absolute inset-0">
                <img src={bgCard} alt="Background kartu" className="w-full h-full object-cover object-top brightness-[0.5]" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>
              </div>

              {/* Isi kartu */}
              <div className="relative z-10 h-full px-8 py-12 flex flex-col justify-between text-white">
                {/* Logo wayang */}
                <div data-aos="zoom-in" data-aos-delay="100" className="flex justify-center">
                  <img src={logoWayang} alt="Ornamen wayang" className="w-20 h-20 object-contain" draggable="false" onContextMenu={(e) => e.preventDefault()} />
                </div>

                {/* Header acara */}
                <header className="mt-2" data-aos="fade-up" data-aos-delay="200">
                  <h3 className="text-3xl font-jawa text-yellow-400  drop-shadow-sm">{event.title}</h3>
                  <p className="text-base font-playfair  text-gray-200">{event.dateText}</p>
                  <p className="text-base font-playfair text-gray-300">{event.timeText}</p>
                </header>

                {/* Lokasi */}
                <div data-aos="fade-up" data-aos-delay="300">
                  <p className="text-xl font-playfair font-semibold text-yellow-300">{event.place}</p>
                  <p className="text-base font-playfair text-gray-200">{event.address}</p>
                  <p className="text-base font-playfair text-gray-300 mb-4">{event.region}</p>

                  <a
                    href={event.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 px-3 py-2 rounded-md bg-yellow-500 text-gray-900 font-playfair text-sm hover:bg-yellow-300 hover:text-gray-800 hover:scale-105 transition-all"
                  >
                    <FaMapMarkerAlt className="text-sm" />
                    <span>Lihat Lokasi</span>
                  </a>

                  <div data-aos="fade-up" data-aos-delay="400">
                    <CountdownDate
                      events={[event.countdown]}
                      nameClass="text-base font-medium tracking-wider text-white"
                      timeBoxClass="bg-gray-900 text-yellow-300 px-2 py-0.5 rounded-sm text-2xl font-semibold"
                      labelClass="text-xs pb-1 font-medium tracking-wide text-yellow-500"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Garis bawah */}
        <div className="mt-10 mx-auto w-28 h-0.5 bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default WeddingCardSection;
