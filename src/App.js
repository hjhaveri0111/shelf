import React from "react";
import Main from "./components/Main";

import { AppContextProvider } from "./Contexts/AppContext";
export default function App() {
  return (
    <AppContextProvider>
      <Main />
    </AppContextProvider>
  );
}
