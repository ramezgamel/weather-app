import { useEffect, useState } from "react";
type Quote = {
  text: string;
  author: string;
};
export default function QuoteApp() {
  const [quote, setQuote] = useState<Quote>({
    text: "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  });
  const [showFavorite, setShowFavorite] = useState<boolean>(false);
  const [favoriteList, setFavoriteList] = useState<Quote[]>(
    localStorage.getItem("favoriteQuotes")
      ? JSON.parse(localStorage.getItem("favoriteQuotes")!)
      : []
  );
  const newQuote = async () => {
    const res = await fetch("https://api.quotable.io/random");
    const data = await res.json();
    setQuote({
      text: data.content,
      author: data.author,
    });
  };
  const addToFavorite = () => {
    const isExist = favoriteList.some(
      (favQuote) =>
        favQuote.text === quote.text && favQuote.author === quote.author
    );
    if (!isExist) {
      setFavoriteList((prev) => [...prev, quote]);
    }
  };
  const deleteQuote = (index: number) => {
    setFavoriteList((prev) => prev.filter((_, i) => i !== index));
  };

  useEffect(() => {
    document.title = "Quote App";
  }, []);
  useEffect(() => {
    localStorage.setItem("favoriteQuotes", JSON.stringify(favoriteList));
  }, [favoriteList]);
  return (
    <div className="text-white bg-gradient-to-r from-yellow-500 to-yellow-400 w-full h-full flex items-center justify-center">
      <div className="bg-black relative overflow-hidden rounded-[3rem] shadow-[-2rem_2rem_6rem_rgba(0,0,0,0.6)] justify-between flex-col p-[4rem] w-[90vmin] aspect-[1/2] md:aspect-[3/2] ">
        <div className="flex items-center justify-between ">
          <h1 className="text-[3rem] md:text-[5rem] font-extrabold ">Quote,</h1>
          <i
            onClick={() => setShowFavorite(true)}
            className="fa-solid fa-heart text-[2rem] md:text-[4rem]  bg-gradient-to-l from-[#2e6f79] to-[#1b9b96] bg-clip-text text-transparent cursor-pointer text-shadow-[-0.3rem_0.5rem_2rem_rgba(27,155,150,0.3)] active:-translate-y-[.1rem]"
          ></i>
        </div>
        <div className="absolute flex-col gap-[1rem] top-1/2 left-1/2 -translate-1/2">
          <i className="fa-solid fa-quote-left text-wrap sm:text-[3rem] -translate-x-1/2"></i>
          <p className="text-[clamp(1rem,2rem,2.5rem)] text-center w-[15rem] sm:w-[clamp(25rem,35rem,50rem)] leading-[3rem] tracking-[0.1rem]">
            {quote.text}
          </p>
          <p className="text-right text-[1.4rem]  text-[#888]">
            {quote.author}
          </p>
          <i className="fa-solid fa-quote-right sm:text-[3rem] float-right translate-x-1/2"></i>
        </div>
        <div className="absolute bottom-[6rem] left-1/2 -translate-x-1/2 flex  gap-[2rem]">
          <button
            onClick={() => newQuote()}
            className="active:translate-0.5 cursor-pointer w-[10rem] sm:w-[15rem] md:text-[18rem] h-[4rem] tracking-[.1rem] font-bold shadow-[3rem_1rem_4rem_rgba(0,0,0,.3)] rounded-[2rem] text-[1.2rem]   transition-colors duration-300 text-shadow-[-.3rem_.5rem_1rem_rgba(0,0,0,.3)] bg-gradient-to-l from-[#553ddd] to-[#7f69eb] hover:from-[#7f69eb] hover:to-[#553ddd]"
          >
            New Quote
          </button>
          <button
            onClick={() => addToFavorite()}
            className="active:translate-0.5 cursor-pointer w-[10rem] sm:w-[15rem] md:text-[18rem] h-[4rem] tracking-[.1rem] font-bold shadow-[3rem_1rem_4rem_rgba(0,0,0,.3)] rounded-[2rem] text-[1.2rem]   transition-colors duration-300 text-shadow-[-.3rem_.5rem_1rem_rgba(0,0,0,.3)] bg-gradient-to-l from-[#2e6f79] to-[#1b9b96] hover:from-[#1b9b96] hover:to-[#2e6f79]"
          >
            Favorite
          </button>
        </div>
        <div className="absolute aspect-square rounded-full hidden sm:block w-[clamp(5rem,10cqi,16rem)] bg-gradient-to-t from-[#ddac24] to-[#ffd788] -top-[6cqi] left-1/2"></div>
        <div className="absolute aspect-square rounded-full hidden sm:block w-[clamp(2rem,4cqi,6rem)] bg-gradient-to-t from-[#ddac24] to-[#ffd788] bottom-[15rem] left-[7rem]"></div>
        <div className="absolute aspect-square rounded-full hidden sm:block w-[clamp(5rem,10cqi,15rem)] bg-gradient-to-t from-[#281485] to-[#705ae9] top-1/2 -right-[5cqi]"></div>
        <div className="absolute aspect-square rounded-full hidden sm:block w-[clamp(1rem,1cqi,2rem)] bg-gradient-to-t from-[#d8121c] to-[#e0424f] top-1/3 "></div>
        {showFavorite && (
          <div className="absolute w-full h-full p-[3rem] pt-[7rem] inset-0 bg-gradient-to-l from-[#1b9b96] to-[#2e6f79] ">
            <button
              onClick={() => setShowFavorite(false)}
              className="cursor-pointer absolute top-7 right-8 text-[2rem]"
            >
              X
            </button>
            <ul>
              {favoriteList.map((favQuote, index) => (
                <li
                  key={index}
                  className="flex items-center justify-between mb-[1rem] bg-[rgba(255,255,255,0.1)] p-[1rem] rounded-[1rem]"
                >
                  <p className="text-[2.5rem]">{favQuote.text}</p>
                  <button onClick={() => deleteQuote(index)}>
                    <i className="fa-solid fa-trash cursor-pointer text-[2rem]"></i>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
