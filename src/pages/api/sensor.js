export default function handler(req, res) {
  if (req.method === 'POST') {
    // Mengambil data dari request body, dengan nilai default 0 jika data tidak ada
    const { temperature = 0, humidity = 0, ph = 0 } = req.body;

    // Lakukan sesuatu dengan data yang diterima (misalnya, simpan ke database)
    console.log('Data dari ESP32:', { temperature, humidity, ph });

    // Kirim response sukses
    res.status(200).json({ message: 'Data diterima', temperature, humidity, ph });
  } else {
    // Menangani metode selain POST
    res.status(405).json({ message: 'Method not allowed' });
  }
}