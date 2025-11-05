// src/components/template/TerimakasihSection.jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AOS from 'aos';
import 'aos/dist/aos.css';
import bg1 from '../../assets/images/foto1.webp';
import bg2 from '../../assets/images/foto2.webp';
import bg3 from '../../assets/images/foto3.webp';
import bg4 from '../../assets/images/foto4.webp';
import img5 from '../../assets/images/foto5.jpg';
import Footer from './Footer';

const TerimakasihSection = () => {
  const backgrounds = [bg1, bg2, bg3, bg4, img5];
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  // Ganti gambar tiap 6 detik dengan crossfade overlap
  useEffect(() => {
    const interval = setInterval(() => {
      setPrev(current);
      setCurrent((prev) => (prev + 1) % backgrounds.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [current, backgrounds.length]);

  // Inisialisasi AOS sekali saja
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <section id="terimakasih" className="relative w-full flex flex-col items-center py-20 px-6 text-center overflow-hidden">
      {/* === Background crossfade === */}
      <div className="absolute inset-0">
        {/* Gambar sebelumnya (fade out) */}
        {prev !== null && (
          <motion.div
            key={`prev-${prev}`}
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ duration: 2.2, ease: 'easeInOut' }}
            className="absolute inset-0 bg-cover bg-center will-change-transform"
            style={{ backgroundImage: `url(${backgrounds[prev]})` }}
          />
        )}

        {/* Gambar berikutnya (fade in) */}
        <motion.div
          key={`current-${current}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2.2, ease: 'easeInOut' }}
          className="absolute inset-0 bg-cover bg-center will-change-transform"
          style={{ backgroundImage: `url(${backgrounds[current]})` }}
        />

        {/* Overlay gelap agar teks tetap terbaca */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* === Konten utama === */}
      <div className="relative z-10 w-full max-w-4xl bg-white/10 backdrop-blur-[3px] rounded-2xl shadow-lg p-10 border border-white/20" data-aos="zoom-in">
        <h3 className="text-5xl text-yellow-500 mb-8 font-vibes" data-aos="fade-up" data-aos-delay="200">
          Terima Kasih
        </h3>

        <p className="text-gray-200 text-base leading-relaxed font-serif italic mb-8 max-w-2xl mx-auto" data-aos="fade-up" data-aos-delay="400">
          Atas kehadiran dan doa restunya, merupakan suatu kehormatan dan kebahagiaan bagi kami sekeluarga apabila Bapak/Ibu/Saudara/i berkenan hadir untuk memberikan doa restu kepada kedua mempelai.
          <br />
          <br />
          Atas kehadiran serta doa restu, kami ucapkan terima kasih.
        </p>

        <p className="text-gray-200 mt-6 text-base font-serif italic" data-aos="fade-up" data-aos-delay="600">
          Sampai jumpa di hari bahagia kami,
        </p>

        <div className="mt-6 space-y-1 font-playfair" data-aos="fade-up" data-aos-delay="800">
          <h4 className="text-3xl font-jawa text-yellow-500">Fitria & Yusril</h4>
          <p className="text-sm text-gray-200 font-serif">Keluarga Besar Mempelai Wanita</p>
          <p className="text-sm text-gray-200 font-serif">Keluarga Besar Mempelai Pria</p>
        </div>

        <p className="mt-10 text-yellow-500 font-vibes text-4xl" data-aos="fade-up" data-aos-delay="1000">
          Wassalamu'alaikum Wr. Wb.
        </p>

        <Footer />
      </div>
    </section>
  );
};

export default TerimakasihSection;
