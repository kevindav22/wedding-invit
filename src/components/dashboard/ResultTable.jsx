import { FaCopy, FaWhatsapp } from 'react-icons/fa';

const ResultTable = ({ hasil, onSendWA }) => {
  const copyToClipboard = (text, message) => {
    navigator.clipboard.writeText(text);
    alert(message);
  };

  const baseCell = 'p-3 border border-gray-300';
  const baseButton = 'text-xs px-3 py-1 rounded-md flex items-center gap-1 transition';

  return (
    <div className="overflow-x-auto rounded-lg border border-gray-300">
      <table className="w-full text-sm text-left text-gray-800 border-collapse">
        <thead className="bg-yellow-100 text-gray-800">
          <tr>
            {['No', 'Penerima', 'Link Undangan', 'Aksi'].map((head, idx) => (
              <th key={idx} className={`${baseCell} ${head === 'Aksi' ? 'text-center' : ''}`}>
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {hasil.map((h, i) => (
            <tr key={i} className="hover:bg-amber-50/50">
              <td className={baseCell}>{i + 1}</td>

              {/* Nama + Nomor WA */}
              <td className={baseCell}>
                <div className="flex flex-col">
                  <span className="font-semibold">{h.nama}</span>
                  <span className="text-gray-500 text-xs">{h.wa}</span>
                </div>
              </td>

              {/* Link */}

              <td className={`${baseCell} text-center`}>
                <div className="flex flex-col gap-2">
                  <button onClick={() => copyToClipboard(h.link, 'Link berhasil disalin!')} className={`${baseButton} text-gray-500 border border-amber-300 hover:bg-amber-100`}>
                    <FaCopy /> Salin Link
                  </button>
                  <button onClick={() => copyToClipboard(h.pesan, 'Pesan berhasil disalin!')} className={`${baseButton} bg-gray-100 hover:bg-gray-200`}>
                    <FaCopy /> Salin Pesan
                  </button>
                </div>
              </td>

              {/* Aksi */}
              <td className={`${baseCell} text-center`}>
                <div className="flex flex-col gap-2 justify-center items-center">
                  <button onClick={() => onSendWA(i)} disabled={h.sent} className={`${baseButton} ${h.sent ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`}>
                    <FaWhatsapp /> Kirim
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
