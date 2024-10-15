import React, {useEffect, useState} from "react";
import Carousel from 'react-bootstrap/Carousel';
function Songs(){
    let [song, setSongs] = useState([])
    useEffect(()=>{
        fetch("https://qtify-backend-labs.crio.do/songs").then(x=>x.json()).then(x=>setSongs(x)
        )

    },[])
    return(
        <>
    <div style={{ backgroundColor:"black"}}>
   
    <div style={{display:"flex",gap:"12px"}}>
     {song.map((x,y)=>{
        return(
            <>
            <div  className='card1' >
            <img src={x.image} alt="cardimage" style={{width: "158px", height:"190px" , borderRadius:"10px 10px 0px 0px"}}/>
            <div className='card_inner'>
                <p style={{backgroundColor:"#34c94b",height:"50px", borderRadius:"0px 0px 10px 10px" }}><button style={{backgroundColor:"black", color:"white" , width:"110px", height:"25px", borderRadius:"20px", fontSize:"15px", marginLeft:"10px", marginTop:"5px"}}>{x.likes} Likes</button></p>


            </div>
            
            <p style={{color:"white", fontFamily:"sans-serif"}}>{x.title}</p>
            </div>
            </>
        )
     })}
        
     </div>

     <hr  style={{border:"2px solid #34c94b", marginTop:"80px"}}/>
     </div>

        </>
    )
}
export default Songs