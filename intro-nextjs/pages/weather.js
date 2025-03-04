import { useState } from 'react';

const WeatherPage = () => {
    const [city, setCity] = useState('');
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        try {
            const res = await fetch(`/api/weather?city=${city}`);
            const data = await res.json();

            if (data.error) {
                setError(data.error);
                setWeather(null);
            } else {
                setWeather(data);
                setError(null);
            }
        } catch (err) {
            setError('Terjadi kesalahan');
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-4">
            <div className="flex items-center gap-2">
                <input
                    type="text"
                    placeholder="Masukkan nama kota"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border px-3 py-2 text-black dark:text-white dark:bg-gray-800 dark:border-gray-600 rounded-md w-64"
                />
                <button 
                    onClick={fetchWeather}
                    className="border-1 px-4 py-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition">
                    Cari
                </button>
            </div>

            {weather && (
                <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white p-4 rounded-lg shadow-md w-72 text-center">
                    <h2 className="text-lg font-semibold">{weather.name}</h2>
                    <p>Temperatur: {weather.main.temp}°C</p>
                    <p>Cuaca: {weather.weather[0].description}</p>
                    <p>Kecepatan Angin: {weather.wind.speed} m/s</p>
                </div>
            )}
        </div>
    );
};

export default WeatherPage;