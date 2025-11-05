// src/components/template/SpecialGift.jsx
import { FaUniversity, FaCopy } from 'react-icons/fa';
import cardBackground from '../../assets/images/rek.png';
import sectionBackground from '../../assets/images/foto4.webp';

const gifts = [
  {
    id: 1,
    name: 'Fitria Agustina',
    number: '6870 0103 9653 530',
    bank: 'BRI',
  },
];

const SpecialGift = () => {
  const handleCopy = (number) => {
    navigator.clipboard.writeText(number);
    alert('Nomor rekening berhasil disalin!');
  };

  return (
    <section id="gift" className="relative w-full flex flex-col items-center justify-center text-center min-h-screen overflow-hidden bg-gray-900">
      {/* Background full layar */}
      <div
        className="absolute inset-0 will-change-transform scale-105"
        style={{
          backgroundImage: `url(${sectionBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'translateZ(0)',
          backfaceVisibility: 'hidden',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black to-transparent"></div>
      


      <div className="absolute inset-0 bg-black/60"></div>

      {/* Konten */}
      <div className="relative z-10 w-full flex flex-col items-center px-6">
        <h2 data-aos="fade-down" data-aos-delay="100" className="text-5xl font-vibes text-white mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
          Spesial Gift
        </h2>

        <p data-aos="fade-up" data-aos-delay="200" className="text-white/90 font-playfair mb-28 max-w-lg leading-relaxed">
          Doa dan restu Anda merupakan anugerah terindah bagi kami. Namun, bagi yang berkenan berbagi tanda kasih, kami menerimanya dengan penuh rasa syukur..
        </p>

        <div className="flex flex-col gap-8 items-center w-full">
          {gifts.map((gift, i) => (
            <div
              key={gift.id}
              data-aos="fade-up"
              data-aos-delay={300 + i * 200}
              className="relative w-[380px] h-[220px] rounded-3xl text-white flex flex-col justify-between overflow-hidden px-6 shadow-xl shadow-black/40"
              style={{
                backgroundImage: `url(${cardBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              <div className="relative z-10 flex flex-col justify-between h-full py-4 px-2">
                <div className="flex items-center gap-2 justify-end">
                  <FaUniversity className="text-3xl" />
                  <span className="text-3xl font-bold tracking-wide uppercase">{gift.bank}</span>
                </div>

                <div className="flex flex-col items-start">
                  <div className="text-xl tracking-widest font-semibold">{gift.number}</div>
                  <div className="text-sm opacity-90">A/N {gift.name}</div>
                  <button onClick={() => handleCopy(gift.number)} title="Salin nomor rekening" className="mt-1 flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs px-2 py-1 rounded-lg transition-all duration-200">
                    <FaCopy className="text-sm" />
                    <span>Copy Nomor Rekening</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div data-aos="fade-up" data-aos-delay="800" className="mt-10 w-24 h-1 bg-white/60 rounded-full"></div>
      </div>
    </section>
  );
};

export default SpecialGift;
