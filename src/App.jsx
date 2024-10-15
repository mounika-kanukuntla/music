import React from "react";
import Top from "./Components/top.jsx";
import Navb from "./pages/nav.jsx";
import Tit from "./pages/title.jsx";
import "./style.css"
import Songs from "./Components/songs.jsx";
import Title from "./Components/Tit2.jsx";
import Faq from "./Components/faq.jsx";
import Footer from "./Components/footer.jsx";
function App(){
    return(
        <>
        < Navb />
        <Tit />
        < Top />
        < Title />
        <Songs />
        < Faq />
        < Footer />
        </>
    )
}
export default App