import { Link } from "react-router-dom";
import { useTheme } from "../../Store/Theme";

export const Navbar = () => {
  const { state, dispatch } = useTheme(); 

  const toggleTheme = () => {
    dispatch({ type: "TOGGLE_THEME" });
  };

  return (
    <nav className={`p-4 ${state.theme === "dark" ? "bg-gray-800" : "bg-blue-500"} text-white`}>
      <div className="flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/home" className="hover:underline">Home</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/favs" className="hover:underline">Favorites</Link>
        </div>
        <button 
          onClick={toggleTheme} 
          className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
        >
          {state.theme === "dark" ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
};