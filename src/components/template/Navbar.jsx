import { FaHome, FaUserFriends, FaCalendarDay, FaPrayingHands } from 'react-icons/fa';
import MusicPlayer from '../entities/MusicPlayer';

const BottomNavbar = () => {
  const navItems = [
    { id: 'herosection', icon: FaHome, title: 'Home' },
    { id: 'mempelaisection', icon: FaUserFriends, title: 'Mempelai' },
    { id: 'savethedatesection', icon: FaCalendarDay, title: 'Save The Date' },
    { id: 'ucapansection', icon: FaPrayingHands, title: 'Ucapan & Doa' },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50
                 flex items-center justify-between
                 bg-black/40 backdrop-blur-xs border border-white/10
                 shadow-lg rounded-md px-5 py-3 w-80"
    >
      {/* kiri */}
      <div className="flex items-center gap-5">
        {navItems.slice(0, 2).map(({ id, icon: Icon, title }) => (
          <button key={id} onClick={() => scrollToSection(id)} className="text-white hover:text-yellow-400 transition-colors" title={title}>
            <Icon className="size-5" />
          </button>
        ))}
      </div>

      {/* tengah - Music Player sedikit keluar dari bg blur */}
      <div className="relative flex justify-center items-center">
        <div className="absolute ">
          <div className="p-1.5 rounded-full bg-white/10 backdrop-blur-md shadow-md">
            <MusicPlayer />
          </div>
        </div>
      </div>

      {/* kanan */}
      <div className="flex items-center gap-5">
        {navItems.slice(2).map(({ id, icon: Icon, title }) => (
          <button key={id} onClick={() => scrollToSection(id)} className="text-white hover:text-yellow-400 transition-colors" title={title}>
            <Icon className="size-5" />
          </button>
        ))}
      </div>
    </nav>
  );
};

export default BottomNavbar;
