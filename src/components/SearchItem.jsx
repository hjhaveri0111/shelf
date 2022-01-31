import React from "react";
import { motion } from "framer-motion";

import { useDispatchContext } from "../Contexts/AppContext";
export default function SearchItem({ id, item, flag }) {
  const dispatch = useDispatchContext();
  return (
    <motion.div
      className="item-container"
      whileHover={{ color: "white" }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 100,
      }}
      onClick={() =>
        flag
          ? dispatch({ type: "addBook", book: item })
          : dispatch({ type: "addMusic", music: item })
      }
    >
      <motion.h3 className="title" whileHover={{ opacity: 1.1 }}>
        {item.title}{" "}
        {flag
          ? "by " + item.author_name
          : "by " + item["artist-credit"][0]["name"]}
      </motion.h3>
    </motion.div>
  );
}
