// src/components/template/WeddingGallery.jsx
import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import img1 from '../../assets/images/foto1.jpg';
import img2 from '../../assets/images/foto2.jpg';
import img3 from '../../assets/images/foto3.jpg';
import img4 from '../../assets/images/foto4.jpg';

const images = [img1, img2, img3, img4];

const WeddingGallery = () => {
  const [selected, setSelected] = useState(null);
  const controls = useAnimation();

  const heightClasses = ['h-48', 'h-56', 'h-64', 'h-72', 'h-80', 'h-96'];
  const getRandomHeight = () => heightClasses[Math.floor(Math.random() * heightClasses.length)];

  // Jalankan animasi langsung saat komponen dimount
  useEffect(() => {
    controls.start({
      x: ['0%', '-50%'],
      transition: {
        x: { repeat: Infinity, repeatType: 'loop', duration: 30, ease: 'linear' },
      },
    });
  }, [controls]);

  return (
    <section id="gallery" className="relative w-full flex flex-col items-center bg-gray-50 text-center py-16 px-6">
      {/* Judul */}
      <h2 className="text-5xl font-vibes text-gray-700 mb-12">Our Gallery</h2>

      {/* Slider Landscape Otomatis (Framer Motion) */}
      <div className="relative w-full overflow-hidden mb-6 cursor-grab active:cursor-grabbing">
        <motion.div className="flex gap-2" animate={controls} initial={{ x: 0 }}>
          {[...images, ...images].map((img, index) => (
            <div key={index} className="shrink-0 w-64 h-40 rounded-xl overflow-hidden" onClick={() => setSelected(img)}>
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Masonry 2 Kolom */}
      <div className="w-full">
        <div className="columns-2 gap-2">
          {images.map((img, index) => (
            <div key={index} onClick={() => setSelected(img)} className="relative overflow-hidden rounded-xl shadow-md cursor-pointer break-inside-avoid mb-2">
              <img src={img} alt={`Gallery ${index + 1}`} className={`w-full object-cover ${getRandomHeight()}`} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal Preview */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={() => setSelected(null)}>
          <img src={selected} alt="Preview" className="max-h-[90vh] max-w-[90vw] rounded-2xl shadow-2xl object-contain" />
        </div>
      )}

      {/* Garis bawah */}
      <div className="mt-16 mx-auto w-24 h-[1.5px] bg-gray-300 rounded-full"></div>
    </section>
  );
};

export default WeddingGallery;
