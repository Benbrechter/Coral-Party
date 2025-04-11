import house from "../pictures/house1.png"
import React, { useState, useEffect } from 'react';

import 'animate.css';

function OnLoad(){
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
      // Simulate page loading (you can adjust this based on your specific loading needs)
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 2000); 
  
     
      return () => clearTimeout(timer);
    }, []);
  
    if (!isLoading) return null;
  
    return (
      <div className="onload">
        <img src= {house} alt="" className='onload-img animate__animated animate__backInDown ' />
      </div>
    );
  };

export default OnLoad