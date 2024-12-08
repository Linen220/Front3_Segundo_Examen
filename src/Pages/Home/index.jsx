import { useState, useEffect, useReducer } from "react";
import axios from "axios";
import { FaStar, FaRegStar } from "react-icons/fa"; 

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVORITE":
      return state.some((fav) => fav.id === action.payload.id)
        ? state
        : [...state, action.payload];
    case "REMOVE_FAVORITE":
      return state.filter((fav) => fav.id !== action.payload.id);
    default:
      return state;
  }
};

export const Home = () => {
  const [dentists, setDentists] = useState([]);
  const [favorites, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setDentists(response.data);
    };

    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (dentist) => {
    const isFavorite = favorites.some((fav) => fav.id === dentist.id);

    if (isFavorite) {
      dispatch({ type: "REMOVE_FAVORITE", payload: dentist });
    } else {
      dispatch({ type: "ADD_FAVORITE", payload: dentist });
    }
  };

  return (
    <div className="flex flex-wrap gap-4 p-6">
      {dentists.map((dentist) => (
        <div
          key={dentist.id}
          className="w-52 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg p-4 hover:shadow-xl transition duration-300"
        >
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
              {dentist.name}
            </h2>
            <button
              onClick={() => toggleFavorite(dentist)}
              className="text-xl hover:text-yellow-600 transition duration-300"
            >
              {favorites.some((fav) => fav.id === dentist.id) ? (
                <FaStar className="text-yellow-500" />
              ) : (
                <FaRegStar className="text-gray-400" />
              )}
            </button>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
            📧 {dentist.email}
          </p>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-1">
            📞 {dentist.phone}
          </p>
          <p className="text-blue-600 dark:text-blue-400 text-sm underline">
            🌐 <a href={`https://${dentist.website}`}>{dentist.website}</a>
          </p>
          <a
            href={`/dentist/${dentist.id}`}
            className="block text-center mt-4 text-sm text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg transition duration-300"
          >
            Ver detalles
          </a>
        </div>
      ))}
    </div>
  );
};