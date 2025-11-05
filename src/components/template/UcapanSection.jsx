import { useState, useEffect } from 'react';
import { FaCheckCircle, FaTimesCircle, FaClock, FaReply, FaUserCircle } from 'react-icons/fa';
import { getTimeAgo } from '../entities/TimesAgo';
import ApiClient from '../../api/ApiClient'; // tetap impor ini saja

const UcapanSection = () => {
  const [nama, setNama] = useState('');
  const [status, setStatus] = useState('');
  const [ucapan, setUcapan] = useState('');
  const [dataUcapan, setDataUcapan] = useState([]);
  const [replyTo, setReplyTo] = useState(null);
  const [replyNama, setReplyNama] = useState('');
  const [replyText, setReplyText] = useState('');
  const [loading, setLoading] = useState(false);

  // === Fungsi API langsung di sini ===
  const getUcapanApi = async () => {
    const res = await ApiClient.get('/ucapan');
    return res.data;
  };

  const addUcapanApi = async (data) => {
    const res = await ApiClient.post('/ucapan', data);
    return res.data;
  };

  const addReplyApi = async (id, data) => {
    const res = await ApiClient.post(`/ucapan/${id}/reply`, data);
    return res.data;
  };

  // === Ambil data dari backend saat pertama kali render ===
  useEffect(() => {
    fetchUcapan();
  }, []);

  const fetchUcapan = async () => {
    try {
      setLoading(true);
      const data = await getUcapanApi();
      setDataUcapan(data);
    } catch (err) {
      console.error('Gagal mengambil data ucapan:', err);
    } finally {
      setLoading(false);
    }
  };

  // === Kirim ucapan baru ke backend ===
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nama || !ucapan || !status) return;

    try {
      const newData = await addUcapanApi({ nama, status, ucapan });
      setDataUcapan((prev) => [newData, ...prev]);
      setNama('');
      setUcapan('');
      setStatus('');
    } catch (err) {
      console.error('Gagal mengirim ucapan:', err);
    }
  };

  // === Kirim balasan ke backend ===
  const handleReply = async (id) => {
    if (!replyNama || !replyText) return;

    try {
      const updated = await addReplyApi(id, { nama: replyNama, text: replyText });
      setDataUcapan((prev) => prev.map((item) => (item.id === updated.id ? updated : item)));
      setReplyTo(null);
      setReplyNama('');
      setReplyText('');
    } catch (err) {
      console.error('Gagal mengirim balasan:', err);
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'Hadir':
        return <FaCheckCircle className="text-green-500" />;
      case 'Diusahakan':
        return <FaClock className="text-yellow-500" />;
      case 'Tidak Hadir':
        return <FaTimesCircle className="text-red-500" />;
      default:
        return null;
    }
  };

  const totalUcapan = dataUcapan.length;
  const totalHadir = dataUcapan.filter((d) => d.status === 'Hadir').length;
  const totalDiusahakan = dataUcapan.filter((d) => d.status === 'Diusahakan').length;
  const totalTidakHadir = dataUcapan.filter((d) => d.status === 'Tidak Hadir').length;

  return (
    <section id="ucapansection" className="bg-gray-50 py-12 px-6 flex justify-center">
      <div className="relative z-10 w-full max-w-2xl">
        {/* === Judul === */}
        <h2 data-aos="fade-down" className="text-5xl font-vibes text-yellow-500 text-center">
          Doa & Ucapan
        </h2>
        <h3 data-aos="fade-up" className="font-playfair text-gray-800 mb-8 text-center">
          Semoga doa yang terselip senantiasa mengiringi dan menguatkan perjalanan suci ini.
        </h3>

        {/* === Statistik === */}
        <div className="text-center mb-2 font-playfair" data-aos="fade-up">
          <div className="flex justify-center items-end gap-2 mb-4">
            <span className="text-gray-800 font-bold text-4xl leading-none">{totalUcapan}</span>
            <span className="text-base text-gray-600 font-bold">Comments</span>
          </div>

          <div className="grid grid-cols-3 gap-2">
            {[
              { value: totalHadir, label: 'Hadir' },
              { value: totalDiusahakan, label: 'Diusahakan' },
              { value: totalTidakHadir, label: 'Tidak Hadir' },
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center border border-gray-200 bg-white/60 backdrop-blur-sm rounded-lg py-2 shadow-sm">
                <span className="font-bold text-gray-800 text-2xl leading-none">{item.value}</span>
                <span className="text-sm text-gray-600 mt-1">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* === Form utama === */}
        <form onSubmit={handleSubmit} className="bg-white/80 rounded-lg shadow-md p-6 border border-gray-100 flex flex-col gap-6 font-playfair" data-aos="fade-up">
          <div className="flex flex-col gap-3" data-aos="zoom-in">
            <input
              id="nama"
              name="nama"
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full p-2.5 rounded-md border border-gray-300 text-gray-800 focus:ring-1 focus:ring-amber-400 focus:outline-none placeholder-gray-400"
              placeholder="Nama..."
              required
            />

            <select id="status" name="status" value={status} onChange={(e) => setStatus(e.target.value)} className="w-full p-2.5 rounded-md border border-gray-300 text-gray-700 focus:ring-1 focus:ring-amber-400 focus:outline-none" required>
              <option value="" disabled>
                Status kehadiran...
              </option>
              <option value="Hadir">Hadir</option>
              <option value="Diusahakan">Diusahakan</option>
              <option value="Tidak Hadir">Tidak Hadir</option>
            </select>

            <textarea
              id="ucapan"
              name="ucapan"
              value={ucapan}
              onChange={(e) => setUcapan(e.target.value)}
              rows="3"
              className="w-full p-2.5 rounded-md border border-gray-300 text-gray-800 focus:ring-1 focus:ring-amber-400 focus:outline-none resize-none placeholder-gray-400"
              placeholder="Tulis ucapan..."
              required
            ></textarea>

            <button type="submit" disabled={loading} className="mt-2 bg-amber-500 text-white py-2 px-6 rounded-md font-semibold hover:bg-amber-600 transition-all shadow-sm">
              {loading ? 'Mengirim...' : 'Kirim'}
            </button>
          </div>

          {/* === Daftar Ucapan === */}
          <div className="pt-6 mt-4 border-t border-gray-200">
            <div className="max-h-[600px] overflow-y-auto pr-2 space-y-6">
              {dataUcapan.length === 0 && !loading && <p className="text-gray-500 text-center italic">Belum ada ucapan yang dikirim.</p>}

              {loading && <p className="text-center text-gray-500">Memuat data...</p>}

              {dataUcapan.map((item) => (
                <div key={item.id} className="pb-4 border-b border-gray-200">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-100 rounded-full p-3 shadow-sm">
                      <FaUserCircle className="text-amber-600 text-2xl" />
                    </div>

                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-800 flex items-center gap-2">
                        {item.nama} {getStatusIcon(item.status)}
                      </h4>
                      <p className="text-gray-700">{item.ucapan}</p>

                      <div className="mt-2 flex items-center gap-3 text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <FaClock className="text-sm" />
                          {getTimeAgo(item.createdAt)}
                        </span>
                        <button type="button" onClick={() => setReplyTo(replyTo === item.id ? null : item.id)} className="flex items-center gap-1 hover:text-amber-600">
                          <FaReply className="text-sm" />
                          <span>Balas</span>
                        </button>
                      </div>

                      {/* === Balasan === */}
                      {(Array.isArray(item.replies) ? item.replies : []).map((r) => (
                        <div key={r.id} className="mt-3 ml-8 border-l border-gray-300 pl-4 space-y-1">
                          <p className="font-semibold text-gray-800">{r.nama}</p>
                          <p className="text-gray-700">{r.text}</p>
                          <p className="text-gray-400 text-xs mt-1 flex items-center gap-1">
                            <FaClock /> {getTimeAgo(r.waktu)}
                          </p>
                        </div>
                      ))}

                      {/* === Form balasan === */}
                      {replyTo === item.id && (
                        <div className="mt-3 flex flex-col gap-2 ml-8">
                          <input
                            id="reply-nama"
                            name="reply-nama"
                            type="text"
                            value={replyNama}
                            onChange={(e) => setReplyNama(e.target.value)}
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-amber-400 focus:outline-none"
                            placeholder="Nama..."
                            required
                          />
                          <textarea
                            id="reply-text"
                            name="reply-text"
                            value={replyText}
                            onChange={(e) => setReplyText(e.target.value)}
                            rows="2"
                            className="w-full p-2 rounded-md border border-gray-300 focus:ring-1 focus:ring-amber-400 focus:outline-none resize-none"
                            placeholder="Tulis balasan..."
                            required
                          ></textarea>
                          <div className="flex justify-end gap-2">
                            <button onClick={() => handleReply(item.id)} className="bg-amber-500 text-white px-4 py-1 rounded-md hover:bg-amber-600 transition">
                              Kirim
                            </button>
                            <button
                              onClick={() => {
                                setReplyTo(null);
                                setReplyNama('');
                                setReplyText('');
                              }}
                              className="bg-gray-200 text-gray-700 px-4 py-1 rounded-md hover:bg-gray-300 transition"
                            >
                              Batal
                            </button>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default UcapanSection;
