// src/components/template/MempelaiSection.jsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import fotowanita from '../../assets/images/fotowanita.jpg';
import fotopria from '../../assets/images/fotopria.jpg';
import floralElement from '../../assets/images/elemen1.png';
import pampasElement from '../../assets/images/element2.png'; // gambar baru (yang kamu kirim)

const MempelaiSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
    });
  }, []);

  const mempelai = [
    {
      id: 1,
      namaLengkap: 'Fitria Agustina',
      orangTuaNama: 'Bpk. Mariman & Ibu Rukmiyati',
      alamat: 'Dk. Ceme Rt.01, Wonotolo, Gondang, Sragen - Jawa Tengah',
      instagram: 'riaagsttt_',
      linkIg: 'https://www.instagram.com/riaagsttt_/?utm_source=ig_web_button_share_sheet',
      foto: fotowanita,
    },
    {
      id: 2,
      namaLengkap: 'Rizki Yusril Mahendra',
      orangTuaNama: 'Bpk. Ratmo & Ibu Sri Sugiyanti',
      alamat: 'Dk. Padas Rt.05, Glonggong, Gondang, Sragen - Jawa Tengah',
      instagram: 'rizkyyusrilm',
      linkIg: 'https://www.instagram.com/rizkyyusrilm/?utm_source=ig_web_button_share_sheet',
      foto: fotopria,
    },
  ];

  return (
    <section id="mempelaisection" className="relative w-full flex flex-col items-center py-16 px-6 bg-surface-50 overflow-hidden">
      {/* === Elemen dekorasi bunga kanan atas === */}
      {/* === Elemen dekorasi bunga kanan atas === */}
      <motion.img
        src={floralElement}
        alt="Dekorasi bunga kanan atas"
        className="absolute top-40 -right-20 w-64 opacity-70 pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.95, rotate: -5 }}
        animate={{
          opacity: [0.6, 0.75, 0.6],
          scale: [1, 1.04, 1],
          rotate: [-5, 5, -5],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      {/* === Elemen dekorasi pampas bawah kiri === */}
      <motion.img
        src={pampasElement}
        alt="Dekorasi pampas bawah kiri"
        className="absolute -bottom-20 -left-5 w-80 opacity-70 pointer-events-none select-none"
        initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
        animate={{
          opacity: [0.4, 0.6, 0.4],
          scale: [1, 1.05, 1],
          rotate: [2, -8, 2],
        }}
        transition={{
          duration: 7,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      {/* === Konten utama === */}
      <div className="relative z-10 w-full max-w-5xl">
        {/* Judul */}
        <h2 data-aos="fade-down" className="text-4xl text-yellow-500 mb-2 font-vibes text-center">
          Assalamualaikum Wr.Wb
        </h2>

        {/* Kalimat pembuka */}
        <p data-aos="fade-up" data-aos-delay="150" className="text-gray-700 text-base font-playfair mb-16 text-center max-w-3xl mx-auto leading-relaxed">
          Dengan memohon rahmat dan ridho Allah SWT, mohon do&apos;a restu dan kehadiran Bapak/Ibu/Saudara/i dalam rangka melangsungkan pernikahan kami :
        </p>

        {/* Mempelai */}
        <div className="flex flex-col items-center w-full gap-6">
          {mempelai.map((m) => {
            const isLeft = m.id % 2 !== 0;

            return (
              <div key={m.id} className={`w-full flex ${isLeft ? 'justify-start' : 'justify-end'}`}>
                <div className={`max-w-xl flex flex-col ${isLeft ? 'text-left items-start' : 'text-right items-end'}`}>
                  {/* Foto */}
                  <div data-aos={isLeft ? 'fade-right' : 'fade-left'} className="relative inline-block mb-8">
                    <div className={`absolute inset-0 bg-gray-200 rounded-xl -z-10 ${isLeft ? 'translate-x-4 translate-y-4' : '-translate-x-4 translate-y-4'}`}></div>

                    <img src={m.foto} alt={m.namaLengkap} className="w-80 h-96 object-cover rounded-xl shadow-md ring-1 ring-white" />
                  </div>

                  {/* Nama */}
                  <p data-aos="zoom-in" data-aos-delay="100" className="text-4xl font-jawa text-yellow-500 mb-2 drop-shadow-sm">
                    {m.namaLengkap}
                  </p>

                  {/* Orang tua */}
                  <div data-aos="fade-up" data-aos-delay="200" className="text-gray-700 text-base font-playfair leading-snug mb-2">
                    <p className="text-yellow-600">{m.id % 2 !== 0 ? 'Putri dari' : 'Putra dari'}</p>
                    <p>{m.orangTuaNama}</p>
                  </div>

                  {/* Alamat */}
                  <p data-aos="fade-up" data-aos-delay="300" className="text-sm text-gray-600 font-playfair mb-4">
                    {m.alamat}
                  </p>

                  {/* Tombol Instagram */}
                  <a
                    data-aos="flip-up"
                    data-aos-delay="400"
                    href={m.linkIg}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-2.5 rounded-md bg-yellow-500 text-gray-900 font-playfair text-sm font-medium hover:bg-yellow-400 hover:text-gray-800 transition-colors"
                  >
                    <FaInstagram className="text-base" />
                    {m.instagram}
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Garis bawah */}
        <div className="mt-10 mx-auto w-28 h-0.5 bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default MempelaiSection;
