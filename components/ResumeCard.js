import React from 'react';
export default function ResumeCard({ data }) {
  if (!data) return null;

  //kondisi
  const suhuStatus = data.temperature < 18 
  ? "Suhu Terlalu Dingin" 
  : data.temperature > 35 
  ? "Suhu Terlalu Panas" 
  : "Suhu Ideal";

  const kelembabanStatus = data.humidity < 40
  ? "Kelembaban Terlalu Rendah"
  : data.humidity > 80
  ? "Kelembaban Terlalu Tinggi"
  : "Kelembaban Ideal";

  const phStatus = data.ph < 5.5
  ? "pH Terlalu Asam"
  : data.ph > 7.5
  ? "pH Terlalu Basa"
  : "pH Ideal";


  return (
    <div className="bg-gray-200 px-4 mx-3 py-4 rounded-xl">
      <div className="text-gray-900 font-semibold">
        <div>{suhuStatus}</div>
        <div>{kelembabanStatus}</div>
        <div>{phStatus}</div>
      </div>
    </div>
  );
}
