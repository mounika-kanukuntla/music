import React from "react";
import { useLocation } from "react-router-dom";
function Redirect(){
    let Location = useLocation()
    let specificImg = Location.state.image
    return(
        <>
        <div>
            <img src="{specificImg."></img>
            </div>
            </>
    )

}
export default Redirect