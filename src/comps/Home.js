import React, {useEffect, useState} from "react";
import AdItem from "./AdItem";
import Data from "./Data";
function HomePage(){

    // const [list, setList]= useState([]);
    // const [loading, setLoading] =useState(true);

   /* useEffect(()=>{
        if(loading){
            let _list= [];
            for(let i=0; i<5; i++)
            {
                _list.push(<AdItem placeholder={true} />);
            }
            setList(_list);
        }
    }, list);
*/
    return(
        // This allow us to wrap multiple elements without adding an extra node to DOM.
        <React.Fragment> 
           
        <div className="home-page">
            <div className="ad-list flex">
            { Data.map((val,ind)=>{
    return <AdItem
    key={ind}
    imgsrc={val.imgsrc}
    title={val.title}
    content={val.content}
    location={val.location}
    stamp={val.stamp}

    />
})
}
            </div>
            <button className="load-more fontb c333 anim">
                Load More
            </button>
        </div>
        <div className="app-ribbon flex aic">
            <div className="img">
            <img src={require("../ui/shop.png").default} />
            </div>
            <div className="meta">
                <h2 className="title fontb s30 color">Come before the Dukaan get close!</h2>
                <h2 className="slogan font s18 color">Buy, sell and find just about anything using 
                our application </h2>
            </div>
            <div className="links">
                <h2 className="title fontb s20 color">Get your App Today</h2>
                <div className="flex as">
                <a href='#' className="noul bl"><img src="//statics.olx.in/external/base/img/appstore_2x.png" /></a>
                <a href='#' className="noul bl"><img src="https://statics.olx.in/external/base/img/playstore_2x.png" /></a>
                </div>
            </div>
        </div>
        </React.Fragment>
    )
}

export default HomePage;

