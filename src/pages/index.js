import SensorCard from '../../components/SensorCard';

export default function Home() {
  return (
    <div className="min-h-screen p-8 bg-gray-200">
      <h1 className="text-3xl text-gray-800 font-bold mb-6">Dashboard Pertanian IoT</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <SensorCard label="Suhu" value={27.5} satuan="°C" />
        <SensorCard label="Kelembaban Tanah" value={60} satuan="%" />
        <SensorCard label="PH" value="Aktif" satuan="" />
      </div>
    </div>
  );
}
