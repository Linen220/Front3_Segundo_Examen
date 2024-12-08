import { useState, useEffect } from "react";

export const Favs = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {

    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <div className="flex flex-wrap gap-4 p-6">
      {favorites.length > 0 ? (
        favorites.map((dentist) => (
          <div
            key={dentist.id}
            className="w-52 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
          >
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">
              {dentist.name}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
              📧 {dentist.email}
            </p>
            <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
              📞 {dentist.phone}
            </p>
            <p className="text-blue-600 dark:text-blue-400 text-sm underline">
              🌐 <a href={`https://${dentist.website}`}>{dentist.website}</a>
            </p>
          </div>
        ))
      ) : (
        <p className="text-gray-600 dark:text-gray-300 text-lg">
          No tienes dentistas destacados.
        </p>
      )}
    </div>
  );
};
