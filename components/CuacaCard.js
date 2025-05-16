import { useEffect, useState } from "react";
import { Sun, Cloud, CloudRain, CloudSnow, CloudLightning, CloudFog, CloudSun, CalendarDays, Clock } from "lucide-react";
import { getLokasi } from "./Lokasi";

function IkonCuaca({ weatherMain }) {
  switch (weatherMain) {
    case "Clear":
      return <Sun className="w-6 h-6 text-yellow-400" />;
    case "Clouds":
      return <Cloud className="w-6 h-6 text-gray-400" />;
    case "Rain":
    case "Drizzle":
      return <CloudRain className="w-6 h-6 text-blue-500" />;
    case "Thunderstorm":
      return <CloudLightning className="w-6 h-6 text-yellow-600" />;
    case "Snow":
      return <CloudSnow className="w-6 h-6 text-blue-200" />;
    case "Mist":
    case "Fog":
      return <CloudFog className="w-6 h-6 text-gray-500" />;
    default:
      return <CloudSun className="w-6 h-6 text-yellow-400" />;
  }
}


export default function CuacaCard() {
  const [cuaca, setCuaca] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  // SET LOKASI MANUAL
  // const latitude = -7.8087731;
  // const longitude = 112.1985321;

  useEffect(() => {
    const fetchCuaca = async () => {
      try {
        setLoading(true);
        setError(null);
        

        // QUERY UNTUK SET LOKASI GPS
        const { latitude, longitude } = await getLokasi();

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric&lang=id`
        );

        if (!res.ok) {
          throw new Error("Gagal mengambil data dari API");
        }

        const data = await res.json();
        setCuaca(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCuaca();
  }, []);

  if (loading) return <div className="p-4 text-center">Loading data cuaca...</div>;
  if (error) return <div className="p-4 text-center text-red-600">Error: {error}</div>;
  if (!cuaca) return null;

  const kota = cuaca.city.name;
  // Ambil cuaca sekarang dari forecast pertama
  const cuacaSekarang = cuaca.list[0];

  // Ramalan per jam: ambil 12 jam ke depan (4 data, karena interval 3 jam)
  const ramalanPerJam = cuaca.list.slice(0, 5);

  // Ramalan harian: kita kelompokkan berdasarkan tanggal, ambil max/min temp tiap hari dan weather description
  const ramalanHarian = [];
  const hariMap = {};

  cuaca.list.forEach((item) => {
    const tanggal = new Date(item.dt * 1000).toLocaleDateString("id-ID");
    if (!hariMap[tanggal]) {
      hariMap[tanggal] = {
        dt: item.dt,
        temp_min: item.main.temp_min,
        temp_max: item.main.temp_max,
        weather: item.weather[0],
      };
    } else {
      if (item.main.temp_min < hariMap[tanggal].temp_min) hariMap[tanggal].temp_min = item.main.temp_min;
      if (item.main.temp_max > hariMap[tanggal].temp_max) hariMap[tanggal].temp_max = item.main.temp_max;
    }
  });

  // Ubah object jadi array dan ambil 4 hari kedepan
  for (const tanggal in hariMap) {
    ramalanHarian.push(hariMap[tanggal]);
  }

  ramalanHarian.sort((a, b) => a.dt - b.dt);

  const ramalan4Hari = ramalanHarian.slice(0, 4);

  return (
    <div className="bg-white px-6 py-6 mx-3 mt-5 rounded-2xl shadow-xl transition-shadow hover:shadow-2xl">
      {/* Cuaca Saat Ini */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-gray-700 text-lg font-semibold">
          <div className="w-6 h-6 text-yellow-400">
            <IkonCuaca weatherMain={cuacaSekarang.weather[0].main} />
          </div>
          <span>Cuaca Sekarang</span>
        </div>
        <p className="text-3xl font-bold text-gray-900 mt-2">
          {Math.round(cuacaSekarang.main.temp)}°C
        </p>
        <p className="capitalize text-sm text-gray-500">
          {cuacaSekarang.weather[0].description}
        </p>
        <p className="text-sm text-gray-500">Cuaca di {kota} Hari Ini</p>
      </div>

      {/* Ramalan Per Jam (setiap 3 jam) */}
      <div className="mb-6">
        <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
          <Clock className="w-5 h-5" />
          <span>Ramalan Cuaca Per 3 Jam</span>
        </div>
        <div className="flex space-x-4 overflow-x-auto pb-2">
          {ramalanPerJam.map((jam, index) => (
            <div
              key={index}
              className="bg-blue-100 text-blue-800 px-4 py-2 rounded-xl text-sm font-medium shadow-sm min-w-[98px] text-center items-center"
            >
              <div className="flex">
                <div><IkonCuaca weatherMain={jam.weather[0].main} /></div>
                <div className="pl-1">{Math.round(jam.main.temp)}°C</div>
              </div>
              {/* <br/> */}
              {new Date(jam.dt * 1000).getHours()}:00 WIB
            </div>
          ))}
        </div>
      </div>

      {/* Ramalan 4 Hari Kedepan */}
      <div>
        <div className="flex items-center gap-2 text-gray-700 font-semibold mb-2">
          <CalendarDays className="w-5 h-5" />
          <span>Cuaca 4 Hari Kedepan</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {ramalan4Hari.map((hari, index) => (
            <div
              key={index}
              className="bg-green-100 text-green-800 px-3 py-2 rounded-xl text-sm font-medium text-center shadow-sm"
            >
              {new Date(hari.dt * 1000).toLocaleDateString("id-ID", {
                weekday: "long",
              })}
              <br />
              <span>Min: {Math.round(hari.temp_min)}°C</span> <br />
              <span>Max: {Math.round(hari.temp_max)}°C</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
