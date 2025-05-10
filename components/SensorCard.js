export default function SensorCard({ label, value, satuan }) {
  return (
    <div className="border rounded-xl shadow p-4 text-center bg-white">
      <h2 className="text-lg text-gray-700 font-semibold">{label}</h2>
      <p className="text-2xl text-green-600">
        {value} {satuan}
      </p>
    </div>
  );
}
