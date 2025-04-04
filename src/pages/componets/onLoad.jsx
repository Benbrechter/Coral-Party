import Logo from "../pictures/filler.jpg"
import React, { useState, useEffect } from 'react';

import 'animate.css';

function OnLoad(){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate page loading (you can adjust this based on your specific loading needs)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); // 2 seconds loading time
  
      // Cleanup the timer
      return () => clearTimeout(timer);
    }, []);
  
    if (!isLoading) return null;
  
    return (
      <div>
        <img src= {Logo} alt="" className='onload-img animate__animated animate__backInDown' />
      </div>
    );
  };

export default OnLoad