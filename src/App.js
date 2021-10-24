import React from 'react';
import './App.css';
import {motion} from "framer-motion";
import { useEffect, useState} from 'react';
import Cardlist from './components/Cardlist';
import SearchBar from './components/SearchBar';
import TopBar from './components/TopBar';



function App() {
  // Colors
  const colors = ["#8831FB", "#F80E07", "#176B23", "#2E2BD9", "#E26E06", "#BB42FF", "#9C9739"]
  // Local Storage Items 
  const savedBooks = JSON.parse(localStorage.getItem("books")) // book array
  const savedNum = JSON.parse(localStorage.getItem("num")) // number of books
  const savedMusic = JSON.parse(localStorage.getItem("music")) // music array
  const savedNumMusic = JSON.parse(localStorage.getItem("numMusic")) // number of albums 
  const savedMusicColors = JSON.parse(localStorage.getItem("savedMusicColors"))
  const savedBookColors = JSON.parse(localStorage.getItem("savedBookColors"))

  // State for Books
  const [books, setBooks ] = useState(savedBooks ? savedBooks : [])
  const [numCards, setNumCards] = useState(savedNum ? savedNum : 0)
  const [bookCardColors, setBookCardColors] = useState(savedBookColors ? savedBookColors : [])

  // State for Music
  const [music, setMusic ] = useState(savedMusic ? savedMusic : [])
  const [numAudio, setNumAudio] = useState(savedNumMusic ? savedNumMusic : 0)
  const [musicCardColors, setMusicCardColors] = useState(savedMusicColors ? savedMusicColors : [])
  
  // Flag for
  const [isBooks, setIsBooks] = useState(true);

  const handleDelete = (item, flag, color) => {
    
    if(flag) {
      const index = books.indexOf(item)
      if (index > -1) {
        books.splice(index, 1);
        bookCardColors.splice(index, 1)
        setBookCardColors(bookCardColors)
        setBooks(books);
        setNumCards(books.length);
      }
    } else {
      const index = music.indexOf(item)

      if (index > -1) {
        music.splice(index, 1);
        musicCardColors.splice(index, 1)
        setMusic(music);
        setMusicCardColors(musicCardColors)
        setNumAudio(music.length);
      }
    }
  }

  const handleSwitch = (item) => {
    setIsBooks(item === "Books");
  }

  const handleAdd = (item) => {

    const index = Math.floor(Math.random()*colors.length)
    books.push(item)
    bookCardColors.push(colors[index])

    setBooks(Array.from(new Set(books.map(JSON.stringify))).map(JSON.parse));
    setBookCardColors(bookCardColors)

    setNumCards(books.length)
  }

  const handleAddMusic = (item) => {
    const index = Math.floor(Math.random()*colors.length)
    music.push(item)
    musicCardColors.push(colors[index])
    setMusic(Array.from(new Set(music.map(JSON.stringify))).map(JSON.parse))
    setNumAudio(music.length)
    setMusicCardColors(musicCardColors)
  }

  useEffect(() => {
    localStorage.setItem("books", JSON.stringify(books))
    localStorage.setItem("num", JSON.stringify(numCards))
    localStorage.setItem("music" , JSON.stringify(music))
    localStorage.setItem("numMusic", JSON.stringify(numAudio))
    localStorage.setItem("savedMusicColors", JSON.stringify(musicCardColors))
    localStorage.setItem("savedBookColors", JSON.stringify(bookCardColors))
    localStorage.setItem("isBook", JSON.stringify(isBooks))
  }, [books, numCards, music, numAudio, bookCardColors, musicCardColors, isBooks])

  return ( 
    <motion.div className="App">
      <TopBar handleSwitch={handleSwitch} switch/> 
      <SearchBar books = {isBooks ? books : music} setBooks={isBooks ? handleAdd : handleAddMusic} flag={isBooks}/>
      {isBooks ? <Cardlist booklist={books} numCards={numCards} flag={isBooks} handleDelete={handleDelete} colors={bookCardColors}/> : 
      <Cardlist booklist={music} numCards={numAudio} flag={isBooks} handleDelete={handleDelete} colors ={musicCardColors}/>}
      {/* <Cardlist booklist={isBooks ? books : music} numCards={isBooks ? numCards : numAudio} flag={isBooks}/> */}
      
    </motion.div>
    
  );
}

export default App;
