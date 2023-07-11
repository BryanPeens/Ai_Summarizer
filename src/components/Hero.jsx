import React from "react";
import { sun } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex flex-col items-center justify-center">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={sun} alt="sunz_logo" className="w-28 object-contain" />

        <button
          type="button"
          onClick={() =>
            window.open("https://github.com/BryanPeens", "_blank")
          }
          className="bg-black text-white py-2 px-4 rounded-lg shadow-md"
        >
          GitHub
        </button>
      </nav>

      <h1 className="text-4xl text-center mb-4">
        Efficient Article Summarization Leveraging{" "}
        <br className="max-md:hidden" />
        <span className="text-orange-500">OpenAI GPT-4</span>
      </h1>
      <h2 className="text-lg text-center">
        Simplify your reading with ArticleSynth, an open-source article summarizer
        that transforms lengthy articles into clear and concise summaries.
      </h2>
    </header>
  );
};

export default Hero;
