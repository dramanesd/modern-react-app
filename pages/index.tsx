import { NextPage } from "next";
import { useState, useEffect } from "react";
import Head from "next/head";

const useMarquee = () => {
  const DISPLAY_TEXT =
    "wow   such next.js   very react   much title   so marquee   ";

  const [text, setText] = useState(DISPLAY_TEXT);
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(DISPLAY_TEXT.substring(i) + DISPLAY_TEXT.substring(0, i));
      i = (i + 1) % DISPLAY_TEXT.length;
    }, 300);
    return () => clearInterval(timer);
  }, []);

  return text;
};

const IndexPage: NextPage = () => {
  const text = useMarquee();

  return (
    <>
      <Head>
        <title>{text}</title>
      </Head>
      <h2>How to display this in the page title though?</h2>
      <h2>{text}</h2>
      <Head>
        <meta name="description" content="Nice page" />
      </Head>
    </>
  );
};

export default IndexPage;