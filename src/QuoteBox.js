import React from "react";

export default function QuoteBox({ quote, toggle }) {
  return (
    <div
      id="quote-box"
      className="flex flex-col justify-center items-center w-11/12 sm:max-w-2xl sm:w-4/5 rounded sm:shadow-lg sm:py-10 sm:px-12 sm:bg-white h-auto"
    >
      <p id="text" className="text-3xl">
        {quote.content}
      </p>
      <p
        id="author"
        className="w-4/5 sm:w-full text-right text-xl text-slate-500 pt-4"
      >
        &mdash; {quote.author}
      </p>
      <div className="flex justify-between w-full pt-10">
        <button className="bg-blue-600 shadow-md active:bg-blue-700 rounded px-5 py-3 text-white w-32 ">
          <a
            id="tweet-quote"
            href={`https://twitter.com/intent/tweet?text="${quote.content}" ${quote.author}`}
            target="_blank"
            rel="noreferrer"
          >
            <i className="fab fa-twitter font-medium"> Tweet</i>
          </a>
        </button>
        <button
          id="new-quote"
          className="bg-blue-600 shadow-md active:bg-blue-700 rounded px-5 py-3 text-white font-medium w-32"
          onClick={toggle}
        >
          New Quote
        </button>
      </div>
    </div>
  );
}
