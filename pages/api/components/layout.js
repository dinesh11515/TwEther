import React from "react";
import Footer from "./footer";
import Header from "./header";


export default function Layout({children},props){
    children.props = props.tweet;
    return(
        <div className="app">
            <Header />
            {children}
            {console.log(children)}
            <Footer />
        </div>
    )
}