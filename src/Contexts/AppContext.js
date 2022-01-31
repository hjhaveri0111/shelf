import React, { useContext, useReducer, createContext } from "react";

const savedBooks = JSON.parse(localStorage.getItem("books")); // book array
const savedMusic = JSON.parse(localStorage.getItem("music")); // music array
const savedMusicColors = JSON.parse(localStorage.getItem("savedMusicColors"));
const savedBookColors = JSON.parse(localStorage.getItem("savedBookColors"));
const isBook = JSON.parse(localStorage.getItem("isBook"));

const initial_state = {
  books: savedBooks ? savedBooks : [],
  music: savedMusic ? savedMusic : [],
  bookCardColors: savedBookColors ? savedBookColors : [],
  musicCardColors: savedMusicColors ? savedMusicColors : [],
  flag: isBook ? isBook : true,
};

const colors = [
  "#8831FB",
  "#F80E07",
  "#176B23",
  "#2E2BD9",
  "#E26E06",
  "#BB42FF",
  "#9C9739",
];

// Reducer to handle state updates in the app
function AppReducer(state, action) {
  switch (action.type) {
    case "initBooks": {
      return {
        ...state,
        books: action.books,
        bookCardColors: action.cardColors,
      };
    }
    case "initMusic": {
      return {
        ...state,
        music: action.music,
        musicCardColors: action.cardColors,
      };
    }
    case "addBook": {
      const index = Math.floor(Math.random() * colors.length);
      state.books.push(action.book);
      state.bookCardColors.push(colors[index]);
      return {
        ...state,
        books: Array.from(new Set(state.books.map(JSON.stringify))).map(
          JSON.parse
        ),
        bookCardColors: state.bookCardColors,
      };
    }
    case "addMusic": {
      const index = Math.floor(Math.random() * colors.length);
      state.music.push(action.music);
      state.musicCardColors.push(colors[index]);
      return {
        ...state,
        music: Array.from(new Set(state.music.map(JSON.stringify))).map(
          JSON.parse
        ),
        musicCardColors: state.musicCardColors,
      };
    }
    case "deleteBook": {
      if (action.index > -1) {
        state.books.splice(action.index, 1);
        state.bookCardColors.splice(action.index, 1);
        return {
          ...state,
          books: state.books,
          bookCardColors: state.bookCardColors,
        };
      } else {
        return {
          ...state,
        };
      }
    }
    case "setFlag": {
      return {
        ...state,
        flag: action.flag,
      };
    }

    case "deleteMusic": {
      if (action.index > -1) {
        state.music.splice(action.index, 1);
        state.musicCardColors.splice(action.index, 1);
        return {
          ...state,
          music: state.music,
          musicCardColors: state.musicCardColors,
        };
      } else {
        return {
          ...state,
        };
      }
    }
  }
}

// create the context for the app state
const stateContext = createContext();
// custom hook to access the app state from within the app
export const useStateContext = () => useContext(stateContext);

// create the context for the dispatch function for state updates
const dispatchContext = createContext();
// custom hook to access the dispatch from within the app
export const useDispatchContext = () => useContext(dispatchContext);

export function AppContextProvider({ children }) {
  const [state, dispatch] = useReducer(AppReducer, initial_state);

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>{children}</stateContext.Provider>
    </dispatchContext.Provider>
  );
}
