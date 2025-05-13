export default function LandingPage() {
  return (
    <div className="bg-[#4A2C20] min-h-screen text-white p-4 space-y-4 font-sans">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2lg font-bold">AgroBa</h2>
            <p className="text-sm text-gray-300">Everything is Good</p>
          </div>
          <div className="space-x-2">
            <i className="fas fa-user-circle text-2xl"></i>
            <i className="fas fa-bars text-2xl"></i>
          </div>
        </div>

      {/* Sensor Cards */}
      <div className="grid grid-cols-2 gap-2">
        <SensorBox label="Temp" value="12" />
        <SensorBox label="Humidity" value="9.6%" />
        <SensorBox label="Fire" value="81.1°C" />
        <SensorBox label="Gas" value="88.4 ppm" />
      </div>

      {/* Data Tambahan */}
      <div className="grid grid-cols-2 gap-2">
        <SensorBox label="Camera" value="59.3" />
        <SensorBox label="Sound" value="59.3 dB" />
      </div>
      <p className="text-center text-sm text-gray-300">Online: 23 Jan 2025 – 22:05 WIB</p>

      {/* Kontrol */}
      <div className="grid grid-cols-3 gap-2">
        <ControlBox label="Toaster" value="2 minutes" />
        <ControlBox label="Heater" value="50°C" />
        <ControlBox label="Jacuzzi" value="60°C" />
      </div>

      {/* Lampu */}
      <div className="grid grid-cols-4 gap-2">
        <ButtonLight label="Light 1" />
        <ButtonLight label="Light 2" />
        <ButtonLight label="Light 3" />
        <ButtonLight label="Light 4" />
      </div>

      {/* Bottom Nav */}
      <div className="flex justify-around border-t pt-2 mt-4">
        <button className="text-center">
          <i className="fas fa-map text-xl"></i>
          <p className="text-sm">Map</p>
        </button>
        <button className="text-center">
          <i className="fas fa-cog text-xl"></i>
          <p className="text-sm">Settings</p>
        </button>
      </div>
    </div>
  );
}

function SensorBox({ label, value }) {
  return (
    <div className="bg-white text-black p-3 rounded-md shadow text-center">
      <h3 className="font-semibold">{value}</h3>
      <p className="text-sm">{label}</p>
    </div>
  );
}

function ControlBox({ label, value }) {
  return (
    <div className="bg-[#5B3A2A] p-3 rounded-md text-center shadow">
      <h3 className="text-lg font-bold">{value}</h3>
      <p className="text-sm">{label}</p>
    </div>
  );
}

function ButtonLight({ label }) {
  return (
    <button className="bg-yellow-500 p-2 rounded-md font-semibold">{label}</button>
  );
}
