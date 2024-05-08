import React, { useState } from 'react'
import "./sidebar.scss"
import {motion} from "framer-motion"

const Sidebar = () => {
    const [open, setOpen] = useState(false)

    const variants = {
      open:{
        scale: 40,
        transition:{
          duration: 0.3,
          ease: "linear"
        }
      },
      closed:{
        scale: 1,
        transition:{
          duration: 0.3,
          delay:0.5,
          ease: "linear"
        }
      }
    }
  
    const childVariants = {
      open:{
        transition:{
          staggerChildren: 0.1
        }
      },
      closed:{
        transition:{
          staggerChildren: 0.05,
          staggerDirection: -1
        }
      }
    }
  
    const itemVariants = {
      open:{
        y:0,
        opacity:1
      },
      closed:{
        y:10,
        opacity:0
      }
    }
  
    
  
    return (
      <motion.div className='relative-container' animate={open ? "open" : "closed"}>
  
        <motion.div variants={variants} className="white-background"></motion.div>
  
        <motion.div className="links" variants={childVariants}>
  
          {["Homepage", "Services", "Portfolio", "Contact", "About"].map(item => (<motion.a
          whileTap={{scale:0.9}}
          whileHover={{scale:1.1}} 
          href={`#${item}`}
          key={item}
          variants={itemVariants}
          >{item}</motion.a>))}
  
        </motion.div>
  
        <button className='btn' onClick={() => setOpen((prev) => !prev)}>
          <svg width="23" height="23" viewBox="0 0 23 23">
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 2.5 L 20 2.5" },
                open: { d: "M 3 16.5 L 17 2.5" },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              d="M 2 9.423 L 20 9.423"
              variants={{
                closed: { opacity: 1 },
                open: { opacity: 0 },
              }}
            />
            <motion.path
              strokeWidth="3"
              stroke="black"
              strokeLinecap="round"
              variants={{
                closed: { d: "M 2 16.346 L 20 16.346" },
                open: { d: "M 3 2.5 L 17 16.346" },
              }}
            />
          </svg>
      </button>
  
      </motion.div>
  
    )
}

export default Sidebar