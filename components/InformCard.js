import React, { useEffect, useState } from 'react';
import ResumeCard from './ResumeCard';

export default function InformCard() {
  const [data, setData] = useState(null);

    useEffect(() => {
   
    const fetchData = () => {
<<<<<<< HEAD
      fetch('http://growio.vercel.app/api/sensor')
=======
      fetch('https://growio.vercel.app/api/sensor')
>>>>>>> 2e76b3af078ab8fbdc18d9b43cf2840c9abe2757
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error('Error fetching data:', error));
    };

    fetchData(); // Ambil data pertama kali
    const interval = setInterval(fetchData, 5000); // Ambil data setiap 5 detik

    return () => clearInterval(interval);
  }, []); 

  // Cekdata
  const temperature = data ? data.temperature : 0;
  const humidity = data ? data.humidity : 0;
  const ph = data ? data.ph : 0;

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-gray-100 mx-3 my-3 py-4 rounded-2xl shadow-xl">
      <div className="flex flex-wrap justify-center">
        <div className="bg-white text-black mx-3 my-2 rounded-xl w-24 text-center shadow-xl">
          <i className="fa-solid fa-temperature-high text-3xl pt-6" />
          <div className="pt-4 text-2xl font-bold">{data.temperature}°</div> {/* Menampilkan data suhu */}
          <div className="font-semibold py-2">Temperature</div>
        </div>

        <div className="bg-white text-black mx-3 my-2 rounded-xl w-24 text-center shadow-xl">
          <i className="fa-solid fa-droplet text-3xl pt-6" />
          <div className="pt-4 text-2xl font-bold">{data.humidity}%</div>
          <div className="font-semibold py-2">Humidity</div>
        </div>

        <div className="bg-white text-black mx-3 my-2 rounded-xl w-24 text-center shadow-xl">
          <i className="fa-solid fa-vial text-3xl pt-6" />
          <div className="pt-4 text-2xl font-bold">{data.ph}.</div>
          <div className="font-semibold py-2">PH</div>
        </div>
      </div>
        {/* kirim ke file resume */}
      <ResumeCard data={data}/>
    </div>
  );
}
