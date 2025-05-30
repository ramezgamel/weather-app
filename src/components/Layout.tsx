import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="bg-gradient-to-r from-[#57d6d4] to-[#71eeec]">
      <Link
        to="/"
        className="text-6xl absolute top-8 left-10 cursor-pointer hover:text-gray-400 transition-colors duration-300 hover:scale-120"
      >
        <i className="fa-solid fa-arrow-left"></i>
      </Link>
      <main className="flex  items-center justify-center h-screen">
        <Outlet />
      </main>
    </div>
  );
}
