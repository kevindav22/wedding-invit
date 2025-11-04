import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaMusic } from 'react-icons/fa';
import musicFile from '../../assets/music/cintaterakhirarilasso.mp3';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef(null);

  // Fungsi untuk play/pause
  const playAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.play().catch(() => setIsPlaying(false));
  };

  const pauseAudio = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
  };

  // Toggle manual
  const togglePlay = () => {
    setIsPlaying((p) => !p);
  };

  // Effect untuk memutar / pause sesuai isPlaying
  useEffect(() => {
    if (isPlaying) {
      playAudio();
    } else {
      pauseAudio();
    }
  }, [isPlaying]);

  // Effect untuk handle visibility (pause saat tab tidak aktif)
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'hidden') {
        pauseAudio();
      } else if (document.visibilityState === 'visible' && isPlaying) {
        playAudio();
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isPlaying]);

  return (
    <>
      <audio ref={audioRef} src={musicFile} loop preload="auto" />

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

      <motion.div
        onClick={togglePlay}
        whileTap={{ scale: 0.95, translateY: 1 }}
        className="cursor-pointer flex items-center justify-center w-14 h-14 bg-yellow-500 rounded-full shadow-lg border border-white/20"
        title={isPlaying ? 'Pause Musik' : 'Putar Musik'}
      >
        <div className={isPlaying ? 'music-icon-spin' : 'music-icon-spin music-icon-paused'}>
          <FaMusic className="text-black text-2xl" />
        </div>
      </motion.div>
    </>
  );
};

export default MusicPlayer;
