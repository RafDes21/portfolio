import React from "react";
import "./tools.scss"

const ToolLog = ({logos}) => {
  return (
    <div className="logo">
      { 
        logos.map((logo,index)=>(
        <img key={index}  src={logo.imagen} alt={logo.nombre} /> 
        ))}
    </div>
  );
};
export default ToolLog;
  
        
        

