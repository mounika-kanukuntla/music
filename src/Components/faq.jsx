import React from "react";
function Faq(){
    return(
        <>
        <div style={{backgroundColor:"black", width:"100%", height:"400px"}}>
        <h1 style={{color:"#34c94b", textAlign:"center", fontSize:"50px", fontFamily:"sans-serif", padding:" 50px 0px 20px 0px"}}>FAQs</h1>

      <div style={{ width:"863px", height:"60px",border:"1px solid white" , margin:"auto", borderRadius:"10px"}}>
      <ul style={{listStyleType:"none" , color:"white", display:"flex", justifyContent:"space-between",padding:"20px 20px",fontFamily:"sans-serif", fontSize:"20px", fontWeight:"bold"}}>
        <li>Is QTify free to use?</li>
        <li style={{color:"#34c94b", fontSize:"40px", marginTop:"-11px"}}><i class="fa-solid fa-angle-down"></i></li>
      </ul>
      </div>

      <div style={{ width:"863px", height:"60px",border:"1px solid white" , margin:"auto", borderRadius:"10px", marginTop:"40px"}}>
      <ul style={{listStyleType:"none" , color:"white", display:"flex", justifyContent:"space-between",padding:"20px 20px",fontFamily:"sans-serif", fontSize:"20px", fontWeight:"bold"}}>
        <li>Can I download and listen to songs offline?</li>
        <li style={{color:"#34c94b", fontSize:"40px", marginTop:"-11px"}}><i class="fa-solid fa-angle-down"></i></li>
      </ul>
      </div>
      </div>

        </>
    )
}
export default Faq