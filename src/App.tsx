import { useEffect } from "react";
import { Link } from "react-router-dom";
function App() {
  useEffect(() => {
    document.title = "BootCamp Apps";
  }, []);
  return (
    <nav className="grid grid-cols-3 gap-10 p-4">
      <Link
        to="/weatherApp"
        className="py-24 px-24 text-4xl rounded-4xl hover:bg-blue-400 hover:scale-110 transition-all bg-blue-500 text-white"
      >
        Weather
      </Link>
      <Link
        to="/quoteApp"
        className="py-24 px-24 text-4xl rounded-4xl hover:bg-blue-400 hover:scale-110 transition-all bg-blue-500 text-white"
      >
        Quote
      </Link>
    </nav>
  );
}

export default App;
