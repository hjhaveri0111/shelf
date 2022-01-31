import React from "react";
import "../App.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Cardlist from "./Cardlist";
import SearchBar from "./SearchBar";
import TopBar from "./TopBar";

import { useStateContext } from "../Contexts/AppContext";

function Main() {
  const { books, music, bookCardColors, musicCardColors, flag } =
    useStateContext();

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books));
    localStorage.setItem("music", JSON.stringify(music));
    localStorage.setItem("savedMusicColors", JSON.stringify(musicCardColors));
    localStorage.setItem("savedBookColors", JSON.stringify(bookCardColors));
    localStorage.setItem("isBook", JSON.stringify(flag));
  }, [books, music, bookCardColors, musicCardColors, flag]);

  return (
    <motion.div className="App">
      <TopBar switch />
      <SearchBar flag={flag} />
      {flag ? <Cardlist flag={flag} /> : <Cardlist flag={flag} />}
    </motion.div>
  );
}

export default Main;
