// src/components/invitation/ResultTable.jsx
import { FaCopy, FaWhatsapp } from 'react-icons/fa';

const ResultTable = ({ hasil, onSendWA }) => {
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert('Teks berhasil disalin!');
  };

  return (
    <div className="overflow-x-auto rounded-lg  border border-gray-300">
      <table className="w-full text-sm text-left text-gray-800 border-collapse">
        <thead className="bg-yellow-100 text-gray-800">
          <tr>
            <th className="p-3 border border-gray-300">No</th>
            <th className="p-3 border border-gray-300">Nama</th>
            <th className="p-3 border border-gray-300">Nomor WA</th>
            <th className="p-3 border border-gray-300">Link Undangan</th>
            <th className="p-3 border border-gray-300 text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {hasil.map((h, i) => (
            <tr key={i} className="hover:bg-amber-50/50">
              <td className="p-3 border border-gray-300">{i + 1}</td>
              <td className="p-3 border border-gray-300">{h.nama}</td>
              <td className="p-3 border border-gray-300">{h.wa}</td>
              <td className="p-3 border border-gray-300 break-all text-amber-700">{h.link}</td>
              <td className="p-3 border border-gray-300 text-center flex flex-col gap-2 justify-center items-center">
                <button onClick={() => copyToClipboard(h.link)} className="text-xs bg-gray-100 hover:bg-gray-200 px-3 py-1 rounded-md flex items-center gap-1">
                  <FaCopy /> Salin
                </button>
                <button onClick={() => onSendWA(i)} className={`text-xs px-3 py-1 rounded-md flex items-center gap-1 ${h.sent ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-green-500 hover:bg-green-600 text-white'}`} disabled={h.sent}>
                  <FaWhatsapp /> Kirim
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ResultTable;
