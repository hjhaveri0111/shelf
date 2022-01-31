import React from "react";
import { motion } from "framer-motion";
import Card from "./Card";
import { useEffect } from "react";
import { useStateContext } from "../Contexts/AppContext";

export default function Cardlist({ flag }) {
  const { books, music, bookCardColors, musicCardColors } = useStateContext();
  const numCards = flag ? books.length : music.length;
  const numHalf = numCards / 2 + 1;

  return (
    <motion.div
      className="list"
      drag="x"
      dragConstraints={{
        right: 16 * 10 * (numCards - (Math.floor(numHalf / 2) + 1)),
        left: -(16 * 10) * (numCards - (Math.floor(numHalf / 2) + 1)),
      }}
    >
      {books && (
        <>
          {flag && books
            ? books.map((book, index) => (
                <Card
                  key={book.key}
                  title={book.title}
                  author={book.author_name}
                  flag={flag}
                  item={book}
                  color={bookCardColors[index]}
                />
              ))
            : music.map((audio, index) => (
                <Card
                  key={audio.id}
                  title={audio.title}
                  author={audio["artist-credit"][0]["name"]}
                  flag={flag}
                  item={audio}
                  color={musicCardColors[index]}
                />
              ))}
        </>
      )}
    </motion.div>
  );
}
