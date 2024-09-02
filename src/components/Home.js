import React from "react";
import './Home.css' 
import background from '../assets/coding.jpeg'
import Footer from './Footer.js'

export default function Home(){
    
    
return(   
    <>
     <img src={background} alt="Background" className="background-image" />

        <div className="text">
        <h2  className="typing">
          HI, I AM SATHRIYAN. I AM  AN ENGINEERING GRADUATE IN COMPUTER SCIENCE, GRADUATED IN 2024.
             I AM SEEKING AN ENTRY LEVEL POSITION WHERE I CAN APPLY MY ACADEMIC KNOWLEDGE AND GAIN PRACTICAL EXPERIENCE IN A DYNAMIC WORK ENVIRONMENT.
             POSSESSES STRONG COUMMUNICATION AND INTERPERSONAL SKILLS, ALONG WITH A DEMONSTRATED  ABILITY TO LEARN QUICKLY.
             DEDICATED TO CONTRIBUTING POSITIVELY TO A TEAM AND COMMITTED TO ACHIEVING PROFESSIONAL GROWTH.</h2>
        </div>

        <Footer/>
     </>
)
}