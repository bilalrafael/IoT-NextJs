import React, { useEffect, useState } from 'react';

export default function InformCard() {
  const [data, setData] = useState(null);

    useEffect(() => {
    // Fungsi untuk mengambil data dari API
    const fetchData = () => {
      fetch('http://192.168.16.164:3000/api/sensor')
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    };

    // Panggil fetchData setiap 5 detik
    fetchData(); // Ambil data pertama kali
    const interval = setInterval(fetchData, 5000); // Ambil data setiap 5 detik

    // Membersihkan interval ketika komponen di-unmount
    return () => clearInterval(interval);
  }, []); // Hanya dijalankan sekali saat komponen pertama kali dirender

  // Cek apakah data tersedia, jika tidak beri nilai default 0
  const temperature = data ? data.temperature : 0;
  const humidity = data ? data.humidity : 0;
  const ph = data ? data.ph : 0;

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-700 mx-3 my-2 py-4 rounded-2xl shadow-xl">
      <div className="flex flex-wrap justify-center">
        <div className="bg-white text-black mx-3 my-2 rounded-xl w-24 text-center shadow-xl">
          <i className="fa-solid fa-temperature-high text-3xl pt-6" />
          <div className="pt-4 text-2xl font-bold">{data.temperature}°</div> {/* Menampilkan data suhu */}
          <div className="font-semibold py-2">Suhu</div>
        </div>

        <div className="bg-white text-black mx-3 my-2 rounded-xl w-24 text-center shadow-xl">
          <i className="fa-solid fa-droplet text-3xl pt-6" />
          <div className="pt-4 text-2xl font-bold">{data.humidity}%</div> {/* Menampilkan data kelembapan */}
          <div className="font-semibold py-2">Humidity</div>
        </div>

        <div className="bg-white text-black mx-3 my-2 rounded-xl w-24 text-center shadow-xl">
          <i className="fa-solid fa-vial text-3xl pt-6" />
          <div className="pt-4 text-2xl font-bold">{data.ph}.</div> {/* Menampilkan data pH */}
          <div className="font-semibold py-2">PH</div>
        </div>
      </div>
    </div>
  );
}
