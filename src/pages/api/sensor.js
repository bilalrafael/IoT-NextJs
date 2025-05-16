export default function handler(req, res) {
  if (req.method === 'POST') {
    const { temperature = 0, humidity = 0, ph = 0 } = req.body;
    console.log('Data dari ESP32:', { temperature, humidity, ph });

    // Simpan ke dalam variabel atau database kalau perlu
    latestData = { temperature, humidity, ph };

    res.status(200).json({ message: 'Data diterima', temperature, humidity, ph });
  } else if (req.method === 'GET') {
    // Kirim data terakhir
    res.status(200).json(latestData);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// Simpan data terakhir (di luar handler agar bisa dipanggil ulang)
let latestData = {
  temperature: 0,
  humidity: 0,
  ph: 0
};
