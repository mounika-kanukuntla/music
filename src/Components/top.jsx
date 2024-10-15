  
import React, { useEffect, useState } from 'react';

import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from 'react-router-dom';

const Top = () => {
    let[topSong,setTopSong]=useState([])
    let[news,setnews]=useState([])
   
    useEffect(()=>{
        fetch("https://qtify-backend-labs.crio.do/albums/top").then(x=>x.json()).then(x=>setTopSong(x)
        )

    },[])
    let Navigate = useNavigate()

    useEffect(()=>{
        fetch("https://qtify-backend-labs.crio.do/albums/new").then(x=>x.json()).then(x=>setnews(x)
        )

    },[])
   
    
   
    
  return (
    <>
    <div id='main' >
    <Carousel fade>
    
   
    <div style={{display:"flex",gap:"12px", flexWrap:"nowrap"}}>
     {topSong.map((x,y)=>{
        return(
            <>
            <div id='cards'>
             <Carousel.Item key={y}>
            <div  className='card1' title={x.songs.length}>
            <button onClick={()=>Navigate("/")}><img src={x.image} alt="cardimage" style={{width: "158px", height:"190px", borderRadius:"10px 10px 0px 0px"}}/></button>
                <p style={{backgroundColor:"#34c94b",height:"50px", borderRadius:"0px 0px 10px 10px" }}><button style={{backgroundColor:"black", color:"white" , width:"110px", height:"25px", borderRadius:"20px", fontSize:"15px", marginLeft:"10px", marginTop:"5px"}}>{x.follows} Follows</button></p>
            </div>
        
            <p style={{color:"white", fontFamily:"sans-serif"}}>{x.title}</p>
            </Carousel.Item>
            </div>
            </>
        )
     })}
     </div>
     
    
    </Carousel>
   

 
    <Carousel fade>
    
   
    <div style={{display:"flex",gap:"12px"}}>
     {news.map((x,y)=>{
        return(
            <>
             <Carousel.Item key={y}>
            <div  className='card1' title={x.songs.length}>
            <img src={x.image} alt="cardimage" style={{width: "158px", height:"190px" , borderRadius:"10px 10px 0px 0px"}}/>
            <div className='card_inner'>
                {/* <p style={{backgroundColor:"#34c94b",height:"50px"}}>{x.follows} Follows</p> */}
                <p style={{backgroundColor:"#34c94b",height:"50px", borderRadius:"0px 0px 10px 10px" }}><button style={{backgroundColor:"black", color:"white" , width:"110px", height:"25px", borderRadius:"20px", fontSize:"15px", marginLeft:"10px", marginTop:"5px"}}>{x.follows} Follows</button></p>


            </div>
            
            </div>
            <p style={{color:"white", fontFamily:"sans-serif"}}>{x.title}</p>
            </Carousel.Item>
            </>
        )
     })}
     </div>
     
    
    </Carousel>


    <hr  style={{border:"2px solid #34c94b", marginTop:"80px"}}/>
    </div>
  

    </>


  );
}

export default Top;

      