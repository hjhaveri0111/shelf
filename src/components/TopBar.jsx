import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useDispatchContext } from "../Contexts/AppContext";
export default function TopBar({ handleSwitch }) {
  const screens = ["Books", "Audio"];
  const [isSelected, setIsSelected] = useState(screens[0]);
  const dispatch = useDispatchContext();
  useEffect(() => {
    dispatch({ type: "setFlag", flag: isSelected === "Books" });
  }, [isSelected, handleSwitch]);

  return (
    <motion.div className="nav-container">
      <div className="nav-title">SHELF</div>
      <AnimateSharedLayout className="nav-selector-container">
        <ul>
          {screens.map((screen) => (
            <ToggleItem
              key={screen}
              screen={screen}
              isSelected={isSelected === screen}
              onClick={() => setIsSelected(screen)}
            />
          ))}
        </ul>
      </AnimateSharedLayout>
    </motion.div>
  );
}

function ToggleItem({ screen, isSelected, onClick }) {
  return (
    <li className="nav-item" onClick={onClick}>
      {isSelected && (
        <motion.div
          layoutId="outline"
          className="outline"
          initial={false}
          animate={{ borderColor: "yellow" }}
          transition={spring}
        ></motion.div>
      )}
      {screen}
    </li>
  );
}

const spring = {
  type: "spring",
  stiffness: 500,
  damping: 30,
};
