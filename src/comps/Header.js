import React from 'react';
import {Link} from "react-router-dom";
import Post from "./post";
function Header(){

    const nav=[
        {ID:1, label: "Mobile Phones"},
        {ID:2, label: "Furniture"},
        {ID:3, label: "Electronic"},
        {ID:4, label: "Beauty-Products"},
        {ID:5, label: "TV-Video-Audio"},
        {ID:6, label: "Tablets"},
        {ID:7, label: "Automobile"}
];

    return (
        <React.Fragment>
        <div className="header fixed flex aic">
            <div className="logo">
            <img src={require("../ui/logo.png").default} />
            </div>
            <div className="location rel flex aic">
                <div className="icon-search ico s24" />
                <input className="label s16 font" placeholder="Your Location" value="India" />
                <button className="icon-circle-down arro s24" />
            </div>
        <div className="search flex aic">
            <input type="text" placeholder="Find Laptops,Mobile Phones and more..." className="query font s15" />
            <button className="icon-search go s24 cfff" />
        </div>
        <div className="actions flex aic">
            <Link to="/account/signin" className="fontb s16 noulh noul">Sign in</Link>
            <Link to='/abc' >
            <button className="sell flex aic">
    
                <div className="icon-plus ico s18" />
            <h2 className="s18 fontb">Sell</h2>
        
            </button>
            </Link>
            </div>
        </div>

        <div className="hnav fixed flex aic">
             
            <button className="view-cates flex aic color">
                <h2 className="s18 font">All Categories</h2>
                <button className="icon-circle-down arro s24" />
            </button>
            {
                nav.map(item=>{
                    return(
                        <Link to={"/browser/"+item.ID} className="noul noulh color bl font s15">{item.label}</Link>
                    )
                })
            }
        </div>
        <div className="hclr" />
        </React.Fragment>
    );
}
export default Header;