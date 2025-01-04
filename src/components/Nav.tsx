//import flag from "./public/flag-orpheus-left.png"
import { motion } from "framer-motion"
import { useState } from "react"
import { useMediaQuery } from "./useMediaQuery"
import "./Navbar.css"

const navMotion = {
    visible: {
        opacity: 1,
        transition: {
            when: "beforeChildren",
            staggerChildren: 0.15,
        },
    },
    hidden: {
        opacity:0,
    },
}
const itemMotion = {
    visible: { opacity: 1, x: 0},
    hidden: { opacity: 0, x: -100 },
}
const imageflex = {
    display: 'flex',
    marginLeft: '23px',
   

};
const imageflexcontent = {
    marginLeft: '10px',
    marginTop: '11px',
    fontSize: "20px",
    fontWeight: "bold",

}



export default function Nav(){
    const[toggled, setToggled] = useState(false)
    const matches = useMediaQuery('(min-width: 1000px)')
    console.log(matches)
    return (
        <div className="header">
            <div className="relative top-0" style={imageflex}>
                <img src="HackClubPhilippines.jpg" alt="HackClubPhilippines" width="58px">
                </img>
                <h1 style={imageflexcontent}>Hack Club Philippines</h1>
            </div>

            <div className="NavBar">
                {/* Check if we are on Mobile or Not*/}

                {matches && (
                    <div className="Options">
                        <a href="/">ABOUT</a>
                        <a href="/">EVENTS</a>
                        <a href="/">COMMUNITY</a>
                    </div>
                )}
                {!matches && (
                    <div onClick={() => setToggled(prevToggle => !prevToggle)}
                        className="fixed space-y-1.5 cursor-pointer xl:hidden z-50">
                        <motion.span
                            animate={{ rotate: toggled ? 45 : toggled ? 8 : 0 }}
                            className="block h-0.5 w-8 bg-black">
                        </motion.span>
                        <motion.span animate={{ width: toggled ? 0 : 24 }}
                            className="block h-0.5 w-6 bg-black">
                        </motion.span>

                        <motion.span
                            animate={{
                                rotateZ: toggled ? -40 : 0,
                                y: toggled ? -15 : 0,
                                width: toggled ? 32 : 15,
                            }}
                            className="block h-0.5 w-4 bg-black"></motion.span>
                    </div>
                )}
                {/* If the Burger is toggled then the settings will be displayed */}

                {toggled && !matches && (
                    <motion.div
                        animate={{ opacity: 1, x: 0 }}
                        initial={{ opacity: 0, x: 27 }}
                        className=" fixed flex bottom-0  left-0 bg-white  w-full h-screen items-center justify-center z-40 overflow-auto">
                        <motion.div variants={navMotion}

                            animate="visible"
                            initial="hidden"
                            className="flex flex-col gap-20 text-lg items-center">
                            <motion.a variants={itemMotion} href="/">ABOUT</motion.a>
                            <motion.a variants={itemMotion} href="/">EVENTS</motion.a>
                            <motion.a variants={itemMotion} href="/">COMMUNITY</motion.a>
                        </motion.div>
                    </motion.div>
                    
                )}
                </div>
            </div>

          
        

        
       
    
    
    )
}



