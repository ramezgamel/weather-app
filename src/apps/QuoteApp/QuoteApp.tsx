import { useEffect } from "react";

export default function QuoteApp() {
  useEffect(() => {
    document.title = "Quote App";
  }, []);
  return (
    <div className="text-white bg-gradient-to-r from-yellow-500 to-yellow-400 w-full h-full flex items-center justify-center">
      <div className="bg-black rounded-3xl shadow-2xl flex flex-col py-16 px-12">
        <div className="  flex items-center justify-between mb-8">
          <h1 className="text-7xl font-extrabold ">Quote,</h1>
          <i className="fa-solid fa-heart text-4xl"></i>
        </div>
        <div className="px-52 my-8  text-wrap relative">
          <i className="fa-solid fa-quote-left absolute left-32 text-5xl"></i>
          <p className="pt-8 max-w-xl text-4xl">
            The only limit to our realization of tomorrow will be our doubts of
            today.
          </p>
          <p className="text-right text-2xl mt-8 mb-5 text-gray-500">
            - Franklin D. Roosevelt
          </p>
          <i className="fa-solid fa-quote-right absolute right-32 text-5xl"></i>
          <div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-12 mt-8">
          <button className="bg-blue-400 cursor-pointer px-16 py-6 rounded-xl text-2xl font-bold hover:bg-blue-500 transition-colors duration-300">
            New Quote
          </button>
          <button className="bg-red-400 cursor-pointer px-16 py-6 rounded-xl text-2xl font-bold hover:bg-red-500 transition-colors duration-300">
            Favorite
          </button>
        </div>
      </div>
    </div>
  );
}
