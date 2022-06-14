import React from "react";
import "./tools.scss"
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import { useEffect } from 'react';

const ToolLog = ({logos}) => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className="logo" data-aos="zoom-in-down">
      { 
        logos.map((logo,index)=>(
        <img key={index}  src={logo.imagen} alt={logo.nombre} /> 
        ))}
    </div>
  );
};
export default ToolLog;
    
  
  
  
        
        

