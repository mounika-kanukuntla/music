import React from "react";
function Title(){
    return(
        <>
       <div style={{backgroundColor:"black"}}>
        <h1 style={{color:"#34c94b", padding:"40px 80px", fontFamily:"sans-serif"}}>Songs</h1> <br />
        <ul id="list">
            <li>ALL</li>
            <li>ROCK</li>
            <li>POP</li>
            <li>JAZZ</li>
            <li>BLUEZ</li>
        </ul>

       </div>
        </>
    )
}
export default Title