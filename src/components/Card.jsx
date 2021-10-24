import React from 'react';
import { motion} from 'framer-motion';

import {MdClose} from 'react-icons/md';



export default function Card({key, title, author, flag, handleDelete, item, color}) {
    return (
        <div className="card-container">
            <motion.div className="card"
                style={{backgroundColor:color}}
                whileHover={{
                    scale:  1.1,
                    
                }}
               
                transition={{
                    type: "spring",
                    stiffness:60
                }}

            >
                <motion.div
                    style={{backgroundColor:'inherit'}}
                    whileHover={{scale:1.4}}
                    onClick={() => handleDelete(item, flag)}
                    transition={{
                        type:"spring",
                        stiffness:60,
                    }}
                >
                    <MdClose
                    style={{color: 'black', backgroundColor:'transparent', fontWeight:'bold'}}
                    />
                </motion.div>
                <div className="card-title">
                    {title}
                </div>
                <div className="info-container">
                    <div className="author">
                        {author ? "by: " + author : "Not Specified" }
                    </div>
                </div>
                
                
            </motion.div>            
        </div>
    )
}
