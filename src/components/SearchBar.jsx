import React from 'react';
import '../App.css';
import {motion} from "framer-motion";
import axios from 'axios';
import { useClickOutside} from 'react-click-outside-hook';
import { useEffect, useState, useRef} from 'react';
// import 
import {SearchOutline} from 'react-ionicons'

import useDebounce from '../hooks/debounceHook';
import SearchItem from './SearchItem';

export default function SearchBar({ books, setBooks, flag }) {
  const [data, setData] = useState([])
  const inputRef = useRef()
  const [isLoading, setisLoading] = useState(true)
  const [ref, isClickedOutside] = useClickOutside();
  const [isExpanded, setisExpanded] = useState(false)
  const [search, setSearch] = useState("")
  const [noBooks, setNoBooks] = useState(false)


  const isEmpty = !data || data.length === 0;

  const searchURL = 'http://openlibrary.org/search.json?q='
  const searchLim = 10
  const limURL = "&limit="
  
  // Music Searching
  const musicURL = "https://musicbrainz.org/ws/2/release/?query="
  const format = "&fmt=json"
  const musicLim = 1
  // Variants

  const containerVariants = {
      expanded: {
          height: "30vh",
      },
      collapsed: {
          height: "3vh"
      }
  }

  // Animation Functions
  const expandContainer = () => {
      setisExpanded(true);
  };

  const collapseContainer = () => {
      setisExpanded(false)
      setSearch("");
      setData([])
      setisLoading(false);
      setNoBooks(false);
      if (inputRef.current ){
        inputRef.current.value = "";
      }
  }

  // Search Queries
  const changeHandler = (e) => {
    e.preventDefault();
    if(e.target.value.trim() === "") {
        setNoBooks(false);
    }
    setSearch(e.target.value);
  };

  const prepareQuery = (value) => {
    if (flag) {
        return (encodeURI(searchURL + value+limURL+searchLim))
        
    } else {
        return (encodeURI(musicURL+value+format+limURL+musicLim))
    }
}

  // handle API calls
  const searchBooks = async () => {
    if(!search || search.trim() === "") {
      return;
    }
    setisLoading(true);
    setNoBooks(false)

    const URL = prepareQuery(search)

    const response = await axios.get(URL).catch((err) => {
      console.log(err)
    });

    if (response) {
      if (response.data && response.data.length === 0) {
          setNoBooks(true);
      }
      setData(response.data);
    }
    setisLoading(false);
  };

  useDebounce(search, 500, searchBooks)

  useEffect(() => {
      if (isClickedOutside) collapseContainer();

  }, [isClickedOutside])


  // modifying parent state

  return (
        <motion.div className="search-container" 
            animate={isExpanded ? "expanded" : "collapsed"}
            variants={containerVariants}
            ref = {ref}
        >
            <div className="input-container">
                <input 
                    type="text"
                    className="search"
                    placeholder={flag ? "Search for book to add" :"Search for an album to add"}
                    value={search}
                    ref={inputRef}
                    onChange={changeHandler}
                    onFocus={expandContainer}
                >
                </input>
                    <motion.div 
                        className="search-icon"
                        whileTap={{scale:.9}}
                        transition={{
                            type:"spring",
                            stiffness:"1000",
                        }}
                    >
                        <SearchOutline
                            color={"white"}
                            // title={}
                            height="3vh"
                            onClick={expandContainer}
                
                        />
                    </motion.div>
            </div>
            <div className="content">
                {isExpanded && !isLoading && !isEmpty && (
                    <>
                    {flag ? data.docs.map((book) => (
                        
                        <SearchItem
                            key={book.key}
                            item = {book}
                            books = {books}
                            setBooks = {setBooks}
                            flag = {flag}
                        />
                    )) : 
                    data.releases.map((audio) => 
                        <SearchItem
                            key={audio.id}
                            item={audio}
                            books={books}
                            setBooks={setBooks}
                            flag={flag}
                        />
                    )}
                    </>
                )}
            </div>
            
           
        
        </motion.div>

  );
}