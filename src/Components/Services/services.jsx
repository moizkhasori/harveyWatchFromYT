import React, { useRef } from 'react'
import {motion, useInView} from 'framer-motion'
import "./services.scss"

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren: 0.1
        }
    }
}

const Services = () => {

    const ref = useRef()
    const isInView = useInView(ref,{
        margin: "-100px",
        
    })
    

  return (
    <motion.div
    ref={ref}
    className='services'
    variants={variants}
    initial="initial"
    animate={isInView && "animate"}
    >

        <motion.div className="textContainer">
            <p>I focus on helping your brand grow<br />and move forward</p>
            <hr />
        </motion.div>

        <motion.div className="titleContainer">
            <div className="title">
                <motion.img whileHover={{scale:1.01, rotate:"-1deg"}} src="/people.webp" alt="" />
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business.</h1>
                <motion.button whileHover={{scale:1.01, rotate:"1deg"}}>WHAT WE DO?</motion.button>
            </div>
        </motion.div>

        <motion.div className="listContainer" variants={variants}>
            {[1,2,3,4].map(item => (
                <motion.div key={item} className="box" 
                whileHover={{ backgroundColor: "lightgray", color: "#111"}}
                >
                    <h2>Branding</h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?</p>
                    <button>Go</button>
                </motion.div>
            ))}

            
        </motion.div>

    </motion.div>
  )
}

export default Services