// src/components/Snowfall.jsx
import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const NUM_SNOWFLAKES = 80;
const random = (min, max) => Math.random() * (max - min) + min;

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

const Snowflake = ({ startX, startY, endX, endY, size, duration, delay }) => (
  <motion.div
    initial={{ x: startX, y: startY, opacity: 0 }}
    animate={{
      x: [startX, endX, startX + (endX - startX) / 2, startX],
      y: [startY, endY, startY - (endY - startY) / 3, endY],
      opacity: [0, 1, 1, 0],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      repeatType: 'loop',
      ease: 'easeInOut',
    }}
    className="absolute bg-white rounded-full blur-xs pointer-events-none select-none"
    style={{
      width: size,
      height: size,
    }}
  />
);

const Snowfall = () => {
  const [flakes, setFlakes] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const flakesArray = Array.from({ length: NUM_SNOWFLAKES }).map(() => {
      const size = random(2, 8);

      // Titik awal acak tapi tetap di dalam batas kontainer
      const startX = random(0, width - size);
      const startY = random(0, height - size);

      // Tentukan arah acak (bisa miring ke kiri/kanan/atas/bawah)
      const driftX = random(-width * 0.2, width * 0.2);
      const driftY = random(-height * 0.2, height * 0.2);

      // Hitung titik akhir, lalu clamp supaya tidak keluar batas
      const endX = clamp(startX + driftX, 0, width - size);
      const endY = clamp(startY + driftY, 0, height - size);

      return {
        startX,
        startY,
        endX,
        endY,
        size,
        duration: random(6, 12),
        delay: random(0, 5),
      };
    });

    setFlakes(flakesArray);
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden pointer-events-none " style={{ zIndex: 50 }}>
      {flakes.map((flake, i) => (
        <Snowflake key={i} {...flake} />
      ))}
    </div>
  );
};

export default Snowfall;
