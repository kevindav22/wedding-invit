// src/components/invitation/RecipientForm.jsx
import { FaUserPlus, FaTrash } from 'react-icons/fa';

const RecipientForm = ({ penerima, setPenerima }) => {
  const handleAddPenerima = () => setPenerima([...penerima, { nama: '', wa: '' }]);

  const handleRemovePenerima = (index) => {
    const newList = [...penerima];
    newList.splice(index, 1);
    setPenerima(newList);
  };

  const formatNomorWA = (nomor) => {
    if (!nomor) return '';
    let cleaned = nomor.replace(/\D/g, '');
    if (cleaned.startsWith('0')) cleaned = '62' + cleaned.slice(1);
    else if (cleaned.startsWith('62')) cleaned = cleaned;
    else if (cleaned.startsWith('8')) cleaned = '62' + cleaned;
    return cleaned;
  };

  const handleChange = (index, field, value) => {
    const newList = [...penerima];
    newList[index][field] = field === 'wa' ? formatNomorWA(value) : value;
    setPenerima(newList);
  };

  return (
    <div className="space-y-3 mb-6">
      {/* Label hanya sekali di atas */}
      <div className="grid grid-cols-2 gap-2 text-gray-700 text-sm font-medium mb-1">
        <span>Nama Penerima</span>
        <span>Nomor WhatsApp</span>
      </div>

      {/* Input list */}
      {penerima.map((p, i) => (
        <div key={i} className="grid grid-cols-2 gap-1 items-center">
          {/* Nama penerima */}
          <input
            type="text"
            placeholder="Nama penerima"
            value={p.nama}
            onChange={(e) => handleChange(i, 'nama', e.target.value)}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-1 focus:ring-amber-400 outline-none text-sm"
          />

          {/* Nomor WhatsApp */}
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Nomor WhatsApp"
              value={p.wa}
              onChange={(e) => handleChange(i, 'wa', e.target.value)}
              className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:ring-1 focus:ring-amber-400 outline-none w-full text-sm"
            />
            {penerima.length > 1 && (
              <button onClick={() => handleRemovePenerima(i)} className="text-red-500 hover:text-red-600 px-1 text-md self-center" type="button">
                <FaTrash />
              </button>
            )}
          </div>
        </div>
      ))}

      <button onClick={handleAddPenerima} className="mt-2 text-amber-600 hover:text-amber-700 flex items-center gap-1 text-sm font-semibold" type="button">
        <FaUserPlus /> Tambah Penerima
      </button>
    </div>
  );
};

export default RecipientForm;
