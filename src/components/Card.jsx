import React from "react";
import { motion } from "framer-motion";

import { MdClose } from "react-icons/md";
import { useDispatchContext, useStateContext } from "../Contexts/AppContext";

export default function Card({ key, title, author, flag, item, color }) {
  const dispatch = useDispatchContext();
  const { books, music } = useStateContext();
  return (
    <motion.div className="card-container">
      <motion.div
        className="card"
        style={{ backgroundColor: color }}
        whileHover={{
          scale: 1.1,
        }}
        transition={{
          type: "spring",
          stiffness: 60,
        }}
      >
        <motion.div
          style={{ backgroundColor: "inherit" }}
          whileHover={{ scale: 1.4 }}
          onClick={() =>
            flag
              ? dispatch({ type: "deleteBook", index: books.indexOf(item) })
              : dispatch({ type: "deleteMusic", index: music.indexOf(item) })
          }
          transition={{
            type: "spring",
            stiffness: 60,
          }}
        >
          <MdClose
            size={30}
            style={{
              color: "black",
              backgroundColor: "transparent",
              fontWeight: "bold",
            }}
          />
        </motion.div>
        <div className="card-title">{title}</div>
        <div className="info-container">
          <div className="author">
            {author ? "by: " + author : "Not Specified"}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
