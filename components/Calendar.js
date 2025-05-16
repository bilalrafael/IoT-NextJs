'use client';
import { useEffect, useState } from 'react';
import { supabase } from '../lib/Supabase';

export default function CalendarPage() {
  const [data, setData] = useState([]);
  const [tanaman, setTanaman] = useState('');
  const [tanggalTanam, setTanggalTanam] = useState('');
  const [lamaPanen, setLamaPanen] = useState('');
  const [pesanKosong, setPesanKosong] = useState('');


  // Ambil data dari Supabase saat halaman dimuat
  useEffect(() => {
  const fetchData = async () => {
    const { data: hasil, error } = await supabase
      .from('masaTanam')
      .select('*')
      .order('tanggalTanam', { ascending: true });

    if (error) {
      console.error('Gagal mengambil data:', error.message);
    } else {
      if (hasil.length === 0) {
        setPesanKosong('Data Masih Kosong.');
        setData([]);
      } else {
        setPesanKosong('');
        setData(hasil.map((item) => ({ ...item, showOptions: false })));
      }
    }
  };

  fetchData();
}, []);


  // Tambah data baru
  const tambahData = async () => {
    if (!tanaman || !tanggalTanam || !lamaPanen) {
      alert('Mohon isi semua field!');
      return;
    }

    const tanggalPanen = new Date(tanggalTanam);
    tanggalPanen.setDate(tanggalPanen.getDate() + parseInt(lamaPanen));

    const newData = {
      tanaman,
      tanggalTanam,
      tanggalPanen: tanggalPanen.toISOString().slice(0, 10),
    };

    const { data: inserted, error } = await supabase
      .from('masaTanam')
      .insert([newData])
      .select();

    if (error) {
      console.error('Gagal menyimpan data:', error.message);
      return;
    }

    setPesanKosong('');
    setTanaman('');
    setTanggalTanam('');
    setLamaPanen('');
    setData((prev) => [...prev, ...inserted.map((i) => ({ ...i, showOptions: false }))]);
  };
  // hapus data
  const hapusData = async (id) => {
  const { error } = await supabase
    .from('masaTanam')
    .delete()
    .eq('id', id); 

  if (error) {
    alert('Gagal menghapus data: ' + error.message);
  } else {
    const newData = data.filter((item) => item.id !== id);
    setData(newData);

    if (newData.length === 0) {
      setPesanKosong('Belum ada data.');
    }
  }
};


  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-gray-800">Kalender Masa Tanam & Panen</h1>
      <div className="mb-4 space-y-2">
        <input
          className="border px-2 text-gray-800 py-1 rounded w-full"
          placeholder="Nama tanaman"
          value={tanaman}
          onChange={(e) => setTanaman(e.target.value)}
        />
        <input
          className="border px-2 text-gray-800 py-1 rounded w-full"
          type="number"
          placeholder="Lama panen (hari)"
          value={lamaPanen}
          onChange={(e) => setLamaPanen(e.target.value)}
        />
        <input
          className="border px-2 text-gray-800 py-1 rounded w-full"
          type="date"
          value={tanggalTanam}
          onChange={(e) => setTanggalTanam(e.target.value)}
        />
        <button
          onClick={tambahData}
          className="bg-gray-400 shadow-md text-white font-semibold px-4 py-2 rounded-xl"
        >
          Simpan
        </button>
      </div>

      <h2 className="text-xl font-semibold mb-2 text-gray-800">Daftar Jadwal Tanam & Panen</h2>
      {pesanKosong && (
        <div className="text-red-600 font-medium my-2">{pesanKosong}</div>
      )}
      <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
        {data.map((item) => (
          <div key={item.id} className="relative bg-gray-100 rounded p-3 my-2">
            <div className="flex justify-between items-center text-gray-800">
              <div>
                🌱 <b>{item.tanaman}</b> ditanam: {item.tanggalTanam}, panen: <b>{item.tanggalPanen}</b>
              </div>
              <div className="relative">
                <button
                  onClick={() => {
                    const newData = data.map((d) =>
                      d.id === item.id ? { ...d, showOptions: !d.showOptions } : { ...d, showOptions: false }
                    );
                    setData(newData);
                  }}
                  className="text-xl px-2"
                >
                <i className="fas fa-trash text-3xl hover:text-white cursor-pointer transition duration-200"></i>
                </button>
                {item.showOptions && (
                  <button
                    onClick={() => hapusData(item.id)}
                    className="absolute right-0 top-8 bg-red-600 text-white text-sm px-3 py-1 rounded shadow"
                  >
                    Hapus
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
