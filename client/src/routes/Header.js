import React from "react";
import '../css/Header.css';

export default function Header() {
 return (
   <div className="header-content" >
      <div class="header-bar" >
        <a href="/" style={{float: 'left'}} class="split">
            <img src="https://i.imgur.com/YybREza.png" alt="Logo" loading="lazy" style={{ height:"30px"}} />
        </a>
        <a href="/">Degree Planner</a>
        
       
        <a href="/" style={{float: 'right'}} >
            <img src="https://i.imgur.com/SBzhBeP.png" alt="Logo" loading="lazy" style={{ height:"30px"}} />
        </a>
      </div>
    </div>
 );
}