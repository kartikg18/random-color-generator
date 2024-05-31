import React, { useEffect } from "react";
import { useState } from "react";

const RandomColor= () => {
  const [typecolor, setTypeColor] = useState("hex");
  const [color, setColor] = useState("");

  function randomColorUtility(length){
    return Math.floor(Math.random()*length)
  }

  function handleRandomHexColor  (){
    const hex = [1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
    let hexColor = '#';
    
    for(let i=0; i<6; i++){
      hexColor +=hex[randomColorUtility(hex.length)]
    }
    setColor(hexColor)
  }

  const handleRandomRgbColor = ()=>{
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r},${g},${b})`)
  }

  useEffect(()=>{
    if(typecolor==='rgb') handleRandomRgbColor();
    else handleRandomHexColor();
  },[typecolor])

  return (
    <div style={{ width: "100vw", height: "100vh", }}>
      <button onClick={()=> setTypeColor("hex")}>Create HEX Color</button>
      <button onClick={()=> setTypeColor("rgb")}>Create RGB Color</button>
      <button onClick={typecolor === "hex" ? handleRandomHexColor : handleRandomRgbColor}>Create Random Color</button>
      <div style={{ display:'flex', justifyContent:'center',alignItems:'center',color:'white', marginTop: "20px", width: "100px", height: "100px", backgroundColor: color }}>
        <h3> {typecolor ==='rgb' ? 'RGB Color' : 'HEX Color'}</h3>
      </div>

    </div>
  );
};

export default RandomColor;
