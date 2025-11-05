// src/components/invitation/InvitationLinkGenerator.jsx
import { useState, useEffect } from 'react';
import { FaFeatherAlt, FaWhatsapp, FaSyncAlt } from 'react-icons/fa';
import MessageTemplateEditor from './MessageTemplate';
import RecipientForm from './Recipient';
import ResultTable from './ResultTable';

const DEFAULT_TEMPLATE = `Dengan penuh rasa syukur dan kebahagiaan,
kami bermaksud mengundang Bapak/Ibu/Saudara/i *[Nama]*.

Berikut tautan undangan digital kami:

_[Link]_

Merupakan suatu kehormatan dan kebahagiaan bagi kami apabila Bapak/Ibu/Saudara/i berkenan hadir dan memberikan doa restu pada hari bahagia kami.

Atas perhatian dan doa restunya, kami ucapkan terima kasih.`;

const InvitationLinkGenerator = () => {
  const [penerima, setPenerima] = useState(() => {
    const saved = localStorage.getItem('penerima');
    return saved ? JSON.parse(saved) : [{ nama: '', wa: '' }];
  });

  const [hasil, setHasil] = useState(() => {
    const saved = localStorage.getItem('hasil');
    return saved ? JSON.parse(saved) : [];
  });

  // Template pesan — tidak disimpan di localStorage
  const [pesanTemplate, setPesanTemplate] = useState(DEFAULT_TEMPLATE);

  // Simpan data penerima dan hasil ke localStorage
  useEffect(() => {
    localStorage.setItem('penerima', JSON.stringify(penerima));
  }, [penerima]);

  useEffect(() => {
    localStorage.setItem('hasil', JSON.stringify(hasil));
  }, [hasil]);

  // Normalisasi nomor WA
  const normalizePhone = (nomor) => {
    if (!nomor) return '';
    let num = nomor.replace(/\D/g, '');
    if (num.startsWith('0')) num = '62' + num.slice(1);
    else if (num.startsWith('8')) num = '62' + num;
    return num;
  };

  // Generate link
  const handleGenerate = () => {
    if (!penerima.length) return alert('Belum ada penerima.');

    const mapped = penerima
      .filter((p) => p.nama.trim() !== '' && p.wa.trim() !== '')
      .map((p) => {
        const cleanNumber = normalizePhone(p.wa);
        const encodedName = encodeURIComponent(p.nama.trim());
        const link = `${window.location.origin}/?to=${encodedName}`;
        const rawMessage = pesanTemplate.replace(/\[Nama\]/g, p.nama).replace('[Link]', link);
        const encodedMessage = encodeURIComponent(rawMessage);

        return {
          ...p,
          wa: cleanNumber,
          link,
          pesan: rawMessage,
          waLink: `https://wa.me/${cleanNumber}?text=${encodedMessage}`,
        };
      });

    // Buang duplikat nomor
    const uniqueMap = new Map();
    mapped.forEach((item) => {
      if (!uniqueMap.has(item.wa)) uniqueMap.set(item.wa, item);
    });

    const uniqueResult = Array.from(uniqueMap.values());
    if (uniqueResult.length !== mapped.length) alert('Nomor sudah ada.');

    setHasil(uniqueResult);
  };

  // Kirim WA satu per satu
  const handleSendWA = (index) => {
    const h = hasil[index];
    window.open(h.waLink, '_blank');
    // Update status sent
    const newHasil = [...hasil];
    newHasil[index].sent = true;
    setHasil(newHasil);
  };

  // Kirim semua via WA
  const handleBlastSend = () => {
    if (!hasil.length) return alert('Belum ada data untuk dikirim.');
    hasil.forEach((h) => window.open(h.waLink, '_blank'));
  };

  // Reset semua data (tapi tidak template)
  const handleReset = () => {
    if (confirm('Yakin ingin menghapus semua data?')) {
      localStorage.removeItem('penerima');
      localStorage.removeItem('hasil');
      setPenerima([{ nama: '', wa: '' }]);
      setHasil([]);
    }
  };

  return (
    <section id="generator" className="relative w-full flex justify-center py-16 overflow-hidden">
      <div className="w-full max-w-5xl px-6 font-playfair">
        {/* Judul */}
        <div className="text-center mb-8">
          <h3 className="text-5xl font-vibes font-medium text-amber-600 mb-2">Generator Link Undangan</h3>
          <p className="text-gray-500 max-w-lg mx-auto">Buat undangan otomatis dengan pesan personal untuk setiap penerima.</p>
        </div>

        {/* Card utama */}
        <div className="bg-white border border-gray-300 rounded-lg p-6 shadow-sm">
          <MessageTemplateEditor pesanTemplate={pesanTemplate} setPesanTemplate={setPesanTemplate} />

          <RecipientForm penerima={penerima} setPenerima={setPenerima} />

          <div className="flex justify-center mt-8 gap-4 flex-wrap">
            <button onClick={handleGenerate} className="bg-yellow-500 hover:bg-amber-600 text-white py-2.5 px-6 rounded-lg font-semibold flex items-center gap-2 hover:scale-102">
              <FaFeatherAlt /> Generate Link
            </button>

            <button onClick={handleReset} className="bg-gray-200 hover:bg-gray-300 text-gray-700 py-2.5 px-6 rounded-lg font-semibold flex items-center gap-2  hover:scale-102">
              <FaSyncAlt /> Reset Data
            </button>
          </div>

          {hasil.length > 0 && (
            <>
              <div className="text-center mt-10 ">
                <ResultTable hasil={hasil} onSendWA={handleSendWA} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default InvitationLinkGenerator;
