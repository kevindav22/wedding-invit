// src/components/invitation/MessageTemplateEditor.jsx
import { useState } from 'react';
import { FaEdit, FaSave, FaTimes } from 'react-icons/fa';

const MessageTemplateEditor = ({ pesanTemplate, setPesanTemplate }) => {
  const [isEditingTemplate, setIsEditingTemplate] = useState(false);

  // ID unik untuk textarea agar label terhubung
  const textareaId = 'pesanTemplate';

  return (
    <div className="mb-6">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={textareaId} className="text-gray-700 font-medium">
          ✍️ Template Pesan WhatsApp
        </label>
        {!isEditingTemplate ? (
          <button onClick={() => setIsEditingTemplate(true)} className="text-sm flex items-center gap-1 text-amber-600 hover:text-amber-700">
            <FaEdit /> Edit Template
          </button>
        ) : (
          <div className="flex gap-2">
            <button onClick={() => setIsEditingTemplate(false)} className="text-sm bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md flex items-center gap-1">
              <FaSave /> Simpan
            </button>
            <button onClick={() => setIsEditingTemplate(false)} className="text-sm bg-gray-200 hover:bg-gray-300 text-gray-700 px-3 py-1 rounded-md flex items-center gap-1">
              <FaTimes /> Batal
            </button>
          </div>
        )}
      </div>

      <textarea
        id={textareaId} // hubungkan dengan label
        name="pesanTemplate" // juga bagus untuk form
        rows="12"
        value={pesanTemplate}
        readOnly={!isEditingTemplate}
        onChange={(e) => setPesanTemplate(e.target.value)}
        className={`w-full border border-gray-300 rounded-lg p-3 text-gray-700 text-sm outline-none resize-none bg-gray-50 ${isEditingTemplate ? 'focus:ring-1 focus:ring-amber-400' : 'opacity-80 cursor-not-allowed'}`}
      ></textarea>

      <p className="text-xs text-gray-500 mt-1">
        <b>[Nama]</b> dan <b>[Link]</b> jangan dihapus atau diganti karena otomatis.
      </p>
    </div>
  );
};

export default MessageTemplateEditor;
