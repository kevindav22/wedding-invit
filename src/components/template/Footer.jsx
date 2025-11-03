import logo from '../../assets/images/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full py-6 flex flex-col items-center justify-center">
      <div className="flex items-center gap-3">
        <a href="https://kvndv.netlify.app" target="_blank" rel="noopener noreferrer" className="transform transition-transform duration-300 hover:scale-110">
          <img src={logo} alt="DavinTech Logo" className="h-8 object-contain" />
        </a>
      </div>
      <p className="text-white/50 text-xs mt-1 text-center">&copy; {currentYear} Fitria & Yusril. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
