import React from "react";
import Footer from "./footer";
import Header from "./header";


export default function Layout({children}){
    
    return(
        <div className="app">
            <Header />
            {children}
            {console.log(children)}
            <Footer />
        </div>
    )
}