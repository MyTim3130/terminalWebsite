import gsap from 'gsap'
import {useEffect, useContext} from 'react'
import { terminalContext } from '../../../App';

const Title = () => {
     const context = useContext(terminalContext);
     
     useEffect(()=>{
          console.log (context.tempInput)
          if (context.tempInput != 'start') return
          gsap.to(".titleContainer", { 
               duration: 2,
               y: -500,
             
             });

        
             
         },[context.checkEnter])
  return (
    <>
    <div className="titleContainer">
      <h2 className="introHeadding">What is the Terminal?</h2>
      <span className="introText">
        Use the "start" command to begin the Introduction
      </span>
      </div>
    </>
  );
};

export default Title
