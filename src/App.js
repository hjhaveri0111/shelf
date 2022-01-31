import React from "react";
import Main from "./components/Main";

import { AppContextProvider } from "./Contexts/AppContext";
export default function App() {
  console.log("Called from App.js");
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
}
