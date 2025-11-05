// src/components/template/WeddingGallerySlide.jsx
import { motion } from 'framer-motion';
import img1 from '../../assets/images/foto1.webp';
import img2 from '../../assets/images/foto2.webp';
import img3 from '../../assets/images/foto3.webp';
import img4 from '../../assets/images/foto4.webp';
import img5 from '../../assets/images/foto5.webp';

const images = [img1, img2, img3, img4, img5];

const WeddingGallerySlide = () => {
  // jumlah gambar * (lebar + gap)
  const slideWidth = images.length * (256 + 8); // 256px (w-64) + 8px gap

  return (
    <section
      id="gallery"
      className="relative w-full flex flex-col items-center bg-gray-50 text-center py-16 px-6 overflow-hidden"
    >
      {/* SLIDER */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex gap-2"
          animate={{ x: [0, -slideWidth] }}
          transition={{
            duration: 25,
            ease: 'linear',
            repeat: Infinity,
          }}
          style={{
            willChange: 'transform',
          }}
        >
          {[...images, ...images].map((img, index) => (
            <div key={index} className="shrink-0 w-64 h-40 rounded-xl overflow-hidden">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover pointer-events-none select-none"
                loading="lazy"
                decoding="async"
                draggable={false}
                onContextMenu={(e) => e.preventDefault()}
                onMouseDown={(e) => e.preventDefault()}
              />
            </div>
          ))}
        </motion.div>
      </div>

      {/* GARIS PEMBATAS */}
      <div className="mt-10 mx-auto w-28 h-0.5 bg-linear-to-r from-yellow-500 via-yellow-400 to-yellow-500 rounded-full"></div>
    </section>
  );
};

export default WeddingGallerySlide;
