import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaHeart, FaEnvelope } from 'react-icons/fa';
import bgOpening from '../../assets/images/foto1.webp';

const OpeningSection = ({ onOpen }) => {
  const [namaTamu, setNamaTamu] = useState('Bapak/Ibu/Saudara/i Tercinta');
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });

    const params = new URLSearchParams(window.location.search);
    const nama = params.get('to');
    if (nama) setNamaTamu(decodeURIComponent(nama));
  }, []);

  const handleOpen = () => {
    setIsClosing(true);
    setTimeout(() => {
      onOpen();
    }, 600);
  };

  return (
    <section
      id="opening"
      className={`relative w-full h-screen flex flex-col justify-between items-center text-center overflow-hidden transition-all duration-700 ease-in-out ${isClosing ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-cover bg-center z-0" style={{ backgroundImage: `url(${bgOpening})` }}></div>
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Bagian atas: nama mempelai */}
      <div className="relative z-10 pt-10 flex flex-col items-center" data-aos="fade-down" data-aos-delay="200">
        <p className="text-gray-300 font-serif italic text-sm tracking-wide mb-1">Wedding of</p>
        <h1 className="text-yellow-500 font-vibes text-5xl sm:text-6xl">Fitria & Yusril</h1>
      </div>

      {/* Bagian tengah: isi + tombol */}
      <div className="relative z-20 flex flex-col items-center justify-center grow px-6" data-aos="fade-up" data-aos-delay="400">
        <p className="text-gray-200 font-serif italic text-xs mb-2 tracking-wide">Kepada Yth.</p>
        <h2 className="text-white font-playfair text-3xl font-black mb-2">{namaTamu}</h2>
        <div className="w-52 h-0.5 bg-yellow-500 mb-4"></div>
        <p className="text-gray-300 font-serif italic text-sm max-w-md mb-6">Dengan penuh rasa syukur dan kebahagiaan, kami mengundang Anda untuk hadir di hari istimewa kami.</p>
        <p className="text-gray-400 font-serif italic text-xs mb-8" data-aos="fade-up" data-aos-delay="600">
          *Mohon maaf apabila ada kesalahan dalam penulisan nama dan gelar
        </p>

        {/* Tombol di tengah */}
<button
  onClick={handleOpen}
  className="bg-yellow-500 text-black px-8 py-3 rounded-md font-semibold shadow-lg font-playfair hover:bg-yellow-400 transition-all duration-300 flex items-center justify-center gap-2"
  data-aos="zoom-in"
  data-aos-delay="800"
>
  <FaEnvelope className="text-lg" />
  Buka Undangan
</button>
      </div>

      {/* Bagian bawah: icon cinta */}
      <div className="relative z-20 pb-8 flex gap-3 text-pink-500 text-xl justify-center" data-aos="fade-up" data-aos-delay="1000" data-aos-anchor-placement="top-bottom">
        <FaHeart className="animate-pulse" />
        <FaHeart className="animate-pulse delay-200" />
        <FaHeart className="animate-pulse delay-500" />
      </div>
    </section>
  );
};

export default OpeningSection;
