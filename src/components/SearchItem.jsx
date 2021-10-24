import React from 'react'
import { motion } from 'framer-motion';
export default function SearchItem({id, item, books,setBooks, flag}) {
    // const {key, books, title, author} = props;
    return (
        <motion.div className="item-container"
            // whileHover={{opacity: 1}}
            whileTap={{ scale: .9}}
            transition={{
                type:"spring",
                stiffness:100
            }}
            onClick={() => setBooks(item)}    
        >
           
            <motion.h3 className="title"
            whileHover={{opacity: 1}}>
                {item.title} {flag ? "by " + item.author_name : ""}
            
            
            </motion.h3>
            
        </motion.div>
    )
}
