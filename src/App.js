import React from "react";
import QuoteBox from "./QuoteBox";

function App() {
  const [quote, setQuote] = React.useState({});
  const [isReady, setIsReady] = React.useState(false);
  const [toggle, setToggle] = React.useState(false);
  React.useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((res) => res.json())
      .then((data) => {
        setQuote({
          content: data.content,
          author: data.author,
        });
      });
    setIsReady(true);
  }, [toggle]);

  function handleClick() {
    setToggle((oldToggle) => !oldToggle);
  }
  return <>{isReady && <QuoteBox quote={quote} toggle={handleClick} />}</>;
}

export default App;
