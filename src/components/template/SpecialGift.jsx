import { FaUniversity, FaCopy } from 'react-icons/fa';
import cardBackground from '../../assets/images/rek.png';
import sectionBackground from '../../assets/images/foto4.webp'; // background utama (ganti sesuai file kamu)

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
    <section
      id="gift"
      className="relative w-full flex flex-col items-center text-center py-12 px-6 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${sectionBackground})`,
      }}
    >
      {/* overlay tipis agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative z-10 w-full flex flex-col items-center">
        {/* === Judul === */}
        <h2 data-aos="fade-down" data-aos-delay="100" className="text-5xl font-vibes text-white mb-8 drop-shadow-[0_0_8px_rgba(255,255,255,0.7)]">
          Spesial Gift
        </h2>

        {/* === Paragraf === */}
        <p data-aos="fade-up" data-aos-delay="200" className="text-white/90 font-playfair mb-12 max-w-lg leading-relaxed">
          Doa dan restu Anda merupakan anugerah terindah bagi kami. Namun, bagi yang berkenan berbagi tanda kasih, kami menerimanya dengan penuh rasa syukur..
        </p>

        {/* === Daftar Kartu Gift === */}
        <div className="flex flex-col gap-8 items-center w-full">
          {gifts.map((gift, i) => (
            <div
              key={gift.id}
              data-aos="fade-up"
              data-aos-delay={300 + i * 200} // muncul satu-satu
              className="relative w-[380px] h-[220px] rounded-3xl text-white flex flex-col justify-between overflow-hidden px-6"
              style={{
                backgroundImage: `url(${cardBackground})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Isi kartu */}
              <div className="relative z-10 flex flex-col justify-between h-full card-content py-4 px-2">
                <div className="flex items-center gap-2 justify-end">
                  <FaUniversity className="text-3xl" />
                  <span className="text-3xl font-bold tracking-wide uppercase">{gift.bank}</span>
                </div>

                <div className="flex flex-col items-start">
                  <div className="text-xl tracking-widest font-semibold">{gift.number}</div>
                  <div className="text-sm opacity-90">A/N {gift.name}</div>
                  <button onClick={() => handleCopy(gift.number)} title="Salin nomor rekening" className="mt-1 flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white text-xs px-2 py-1 rounded-lg transition-colors duration-200">
                    <FaCopy className="text-sm" />
                    <span>Copy Nomor Rekening</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Garis bawah */}
        <div data-aos="fade-up" data-aos-delay="800" className="mt-10 w-24 h-1 bg-white/60 rounded-full"></div>
      </div>
    </section>
  );
};

export default SpecialGift;
