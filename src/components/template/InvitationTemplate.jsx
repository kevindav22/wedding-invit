import React from 'react';

const InvitationTemplate = () => (
  <div className="font-['Poppins'] text-gray-800">
    {/* HERO SECTION */}
    <section
      className="relative min-h-[100vh] flex flex-col justify-center items-center text-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=800&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>
      <div className="relative z-10 px-6">
        <h3 className="text-sm tracking-widest text-gray-600 mb-2">The Wedding of</h3>
        <h1 className="text-5xl font-['Great_Vibes'] text-amber-700 mb-3">Kevin & Shella</h1>
        <p className="text-gray-600 text-base mb-5">Minggu, 25 Mei 2025</p>
        <a href="#couple" className="px-6 py-3 bg-amber-600 text-white rounded-full shadow-md hover:bg-amber-700 transition-all">
          Lihat Undangan
        </a>
      </div>
    </section>

    {/* COUPLE SECTION */}
    <section id="couple" className="py-16 px-6 text-center bg-gradient-to-b from-white to-amber-50">
      <h2 className="text-3xl font-['Playfair_Display'] mb-10 text-amber-800">Pasangan Bahagia</h2>
      <div className="flex flex-col items-center justify-center gap-10">
        <div>
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80" alt="Groom" className="w-40 h-40 object-cover rounded-full border-4 border-amber-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold">Kevin</h3>
          <p className="text-gray-600 text-sm">Putra dari Bapak David & Ibu Maria</p>
        </div>

        <span className="text-4xl text-amber-600">&amp;</span>

        <div>
          <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=300&q=80" alt="Bride" className="w-40 h-40 object-cover rounded-full border-4 border-amber-600 mb-4 mx-auto" />
          <h3 className="text-lg font-semibold">Shella</h3>
          <p className="text-gray-600 text-sm">Putri dari Bapak Rudi & Ibu Sinta</p>
        </div>
      </div>
    </section>

    {/* EVENT SECTION */}
    <section id="event" className="py-16 px-6 text-center bg-white border-t border-amber-100">
      <h2 className="text-3xl font-['Playfair_Display'] mb-10 text-amber-800">Waktu & Tempat</h2>
      <div className="bg-amber-50 p-6 rounded-2xl shadow-sm border border-amber-100">
        <h3 className="text-xl font-semibold mb-3 text-amber-700">Akad Nikah</h3>
        <p>Minggu, 25 Mei 2025 • 08.00 WIB</p>
        <p className="text-gray-600 mb-6">Masjid Agung Yogyakarta, Jl. Kauman No. 12</p>
        <h3 className="text-xl font-semibold mb-3 text-amber-700">Resepsi</h3>
        <p>Minggu, 25 Mei 2025 • 11.00 - 14.00 WIB</p>
        <p className="text-gray-600">Gedung Graha Citra, Jl. Malioboro No. 45, Yogyakarta</p>
      </div>
    </section>

    {/* GALLERY SECTION */}
    <section id="gallery" className="py-16 px-6 bg-gradient-to-b from-amber-50 to-white text-center">
      <h2 className="text-3xl font-['Playfair_Display'] mb-10 text-amber-800">Galeri Cinta</h2>
      <div className="grid grid-cols-2 gap-3 max-w-sm mx-auto">
        {[
          'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1526045612212-70caf35c14df?auto=format&fit=crop&w=600&q=80',
          'https://images.unsplash.com/photo-1530023367847-a683933f4172?auto=format&fit=crop&w=600&q=80',
        ].map((url, i) => (
          <img key={i} src={url} alt="Gallery" className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300" />
        ))}
      </div>
    </section>

    {/* RSVP SECTION */}
    <section id="rsvp" className="py-16 px-6 text-center bg-white border-t border-amber-100">
      <h2 className="text-3xl font-['Playfair_Display'] mb-8 text-amber-800">Konfirmasi Kehadiran</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Nama Lengkap" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none" />
        <select className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none">
          <option>Hadir</option>
          <option>Tidak Hadir</option>
        </select>
        <textarea rows="3" placeholder="Ucapan & Doa" className="w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-amber-500 outline-none"></textarea>
        <button type="button" className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-all">
          Kirim
        </button>
      </form>
    </section>

    {/* FOOTER */}
    <footer className="py-10 text-center bg-amber-50 border-t border-amber-100">
      <p className="text-gray-600">
        Terima kasih atas doa dan restunya ❤️ <br />
        <span className="text-amber-700 font-semibold">Kevin & Shella</span>
      </p>
    </footer>
  </div>
);

export default InvitationTemplate;
