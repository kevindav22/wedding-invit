import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMusic } from 'react-icons/fa';
import musicFile from '../../assets/music/cintaterakhirarilasso.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    } else {
      audio.pause();
    }
  }, [isPlaying]);

  const togglePlay = () => {
    setIsPlaying((p) => !p);
  };

  return (
    <>
      {/* Audio element */}
      <audio ref={audioRef} src={musicFile} loop preload="auto" />

      {/* Inline CSS untuk spin dan pause (agar portable tanpa config Tailwind) */}
      <style>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .music-icon-spin {
          display: inline-block;
          transform-origin: center;
          animation: spin 5s linear infinite;
        }
        .music-icon-paused {
          animation-play-state: paused;
        }
      `}</style>

      {/* Button */}
      <motion.div
        onClick={togglePlay}
        whileTap={{ scale: 0.95, translateY: 1 }} /* efek ditekan kedalam */
        className="cursor-pointer flex items-center justify-center w-14 h-14 bg-yellow-500 rounded-full shadow-lg border border-white/20"
        title={isPlaying ? 'Pause Musik' : 'Putar Musik'}
      >
        {/* Icon: pakai CSS animation, tambahkan class paused saat isPlaying=false */}
        <div className={isPlaying ? 'music-icon-spin' : 'music-icon-spin music-icon-paused'}>
          <FaMusic className="text-black text-2xl" />
        </div>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
