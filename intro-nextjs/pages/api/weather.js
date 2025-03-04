export default async function handler(req, res) {
    const API_KEY = process.env.OPENWEATHER_API_KEY; // Simpan API key di .env.local
    const city = req.query.city || 'Malang'; // Default ke Malang jika tidak ada query

    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
            throw new Error('Gagal mengambil data cuaca');
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}