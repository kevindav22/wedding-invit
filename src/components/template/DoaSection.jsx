// src/components/template/DoaSection.jsx
import { motion } from 'framer-motion';
import topImage from '../../assets/images/foto5.jpg';
import wayangIcon from '../../assets/images/wayang1.png';
import bgDoa from '../../assets/images/bg1.png';

const Doa = [
  {
    id: 1,
    inisialMempelai: [
      { id: 1, inisial: 'F' },
      { id: 2, inisial: 'Y' },
    ],
    ayat: '“Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan-pasangan dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang.”',
    surat: '— QS. Ar-Rum : 21 —',
  },
];

const DoaSection = () => {
  return (
    <section className="relative w-full min-h-screen flex justify-center items-center py-24 px-8 overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${bgDoa})` }}>
      <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>

      <div className="relative z-10 bg-white/40  rounded-3xl shadow-md overflow-hidden border-2 border-white/70 max-w-3xl w-full" data-aos="fade-up">
        <div className="w-full h-80 overflow-hidden rounded-xl" data-aos="fade-up" data-aos-delay="200">
          <img src={topImage} alt="Doa Section Header" loading="lazy" className="w-full h-full object-cover object-top scale-105 select-none pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-linear-to-t from-black/70 via-black/40 to-transparent z-0"></div>
        </div>

        <div className="p-8 text-center" data-aos="fade-up" data-aos-delay="800">
          {Doa.map((item) => (
            <div key={item.id}>
              <div className="flex items-center justify-center mb-4">
                <span className="text-5xl font-jawa text-white translate-y-4">{item.inisialMempelai[0].inisial}</span>

                <motion.img
                  src={wayangIcon}
                  alt="Wayang Icon"
                  className="w-20 h-20 object-contain"
                  animate={{ rotate: [-10, 5, -10] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />

                <span className="text-5xl font-jawa text-white translate-y-4">{item.inisialMempelai[1].inisial}</span>
              </div>
              <p data-aos="fade-up" data-aos-delay="800" className="text-gray-700 text-base leading-relaxed italic font-playfair px-2 inline-block">
                {' '}
                {item.ayat}
              </p>

              <p className="mt-6 text-white text-lg font-playfair font-semibold tracking-wide">{item.surat}</p>

              <div className="mt-10 mx-auto w-28 h-0.5 bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DoaSection;
