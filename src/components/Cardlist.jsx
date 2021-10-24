import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import { useEffect} from 'react'


export default function Cardlist({booklist, numCards, flag, handleDelete, colors}) {
    const numHalf = (numCards / 2 ) + 1
    useEffect(() => {
        return () => {

        };
    })
    return (
        <motion.div 
            className="list" 
            drag="x"
            dragConstraints={{
                right: (16*10) * (numCards - (Math.floor(numHalf/2) + 1)),
                left: -(16*10)* (numCards - (Math.floor(numHalf/2) + 1))
            }}
        >
        {booklist && (
            <>
                {flag && booklist ? booklist.map((book, index) => (
                    
                        <Card
                            key={book.key}
                            title={book.title}
                            author ={book.author_name}
                            flag = {flag}
                            handleDelete= {handleDelete}
                            item={book}
                            color={colors[index]}
                        
                        />
                    )) : 
                    booklist.map((audio, index) => (
                        <Card
                            key={audio.id}
                            title={audio.title}
                            flag = {flag}
                            handleDelete={handleDelete}
                            item={audio}
                            color ={colors[index]}
                        />
                    ))
                
                }
            </>
        )}
        
        </motion.div>
    )
}
