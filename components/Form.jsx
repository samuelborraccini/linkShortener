"use client";

import { useState } from "react";

const Form = () => {
  const [longUrl, setLongUrl] = useState("");
  const [tinyUrl, setTinyUrl] = useState("");
  const [copy, setCopy] = useState(false);

  const handleCopyClick = () => {
    if (!tinyUrl) return;
    setCopy(true);
    navigator.clipboard.writeText(tinyUrl);
    setTimeout(() => setCopy(false), 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch(
      "https://api.tinyurl.com/create?api_token=xu20EjAKOesixqoLj45coanSGSs6vl6vv5vWGv5p1eRTa1zV5AswrORE1neC",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: longUrl }),
      }
    );

    const { data } = await res.json();
    const { tiny_url } = data;

    setTinyUrl(tiny_url);
  };
  return (
    <div className="flex flex-col bg-white bg-opacity-10 backdrop-blur-md rounded-md p-6 border-black border-opacity-30 border-2 w-1/2">
      <h1 className="text-xl md:text-2xl font-extrabold flex justify-center uppercase pb-2 md:pb-6 text-gray-600">
        Link&nbsp;
        <span className="text-transparent bg-clip-text bg-gradient-to-r font-extrabold from-blue-500  to-yellow-500">
          Shortener.
        </span>
      </h1>
      <form className=" flex items-center flex-col">
        <div className=" w-full py-2 text-sm md:text-lg">
          <label className="">Url</label>
          <input
            className="text-sm md:text-lg w-full py-1 text-gray-600 pl-2 my-2 rounded-md border-black border-opacity-40 border-2"
            type="text"
            placeholder="Link to shorten"
            onChange={(e) => setLongUrl(e.target.value)}
          />
        </div>
        <div className=" w-full py-2">
          <label className="py-4 text-sm md:text-lg">Tiny Url</label>
          <div
            className={`text-sm md:text-lg w-full overflow-hidden my-2 py-1 pl-2 rounded-md bg-white  border-black border-opacity-40 border-2 ${
              tinyUrl
                ? "cursor-pointer text-gray-600"
                : "cursor-default text-gray-400"
            }`}
            onClick={handleCopyClick}
          >
            {tinyUrl || "https://shortenedUrl.example"}
          </div>
          <div
            className={`md:text-md text-sm ${copy ? "visible" : "invisible"}`}
          >
            Copied To ClipBoard!
          </div>
        </div>
        <button
          onClick={handleSubmit}
          className="text-sm md:text-lg my-4  before:ease rounded-full relative h-12 w-40 overflow-hidden bg-gradient-to-r from-blue-500  to-yellow-500 text-white  transition-all before:absolute before:right-0 before:top-0 before:h-12 before:w-6 before:translate-x-12 before:rotate-6 before:bg-white before:opacity-20 before:duration-700 hover:before:-translate-x-40"
        >
          Generate Tiny Url !
        </button>
      </form>
    </div>
  );
};

export default Form;
