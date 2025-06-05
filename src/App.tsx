import { useEffect } from "react";
import { Link } from "react-router-dom";
function App() {
  useEffect(() => {
    document.title = "BootCamp Apps";
  }, []);
  return (
    <nav className="grid grid-cols-1 md:grid-cols-3 gap-10 p-4">
      <Link
        to="/weatherApp"
        className="w-[12rem] h-[12rem] flex items-center justify-center text-4xl rounded-4xl hover:bg-blue-400 hover:scale-110 transition-all bg-blue-500 text-white"
      >
        Weather
      </Link>
      <Link
        to="/quoteApp"
        className="w-[12rem] h-[12rem] flex items-center justify-center text-4xl rounded-4xl hover:bg-blue-400 hover:scale-110 transition-all bg-blue-500 text-white"
      >
        Quote
      </Link>
      <Link
        to="/calendarApp"
        className="w-[12rem] h-[12rem] flex items-center justify-center text-4xl rounded-4xl hover:bg-blue-400 hover:scale-110 transition-all bg-blue-500 text-white"
      >
        Calendar
      </Link>
    </nav>
  );
}

export default App;
