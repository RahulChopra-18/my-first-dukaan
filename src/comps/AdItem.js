import React, {useState} from "react";

// Props are passed to the component in the same way as arguments passed in a function.
//react is known for its reusability and props plays an important role here.
//as it's allows data to pass from one component to another.
function AdItem(props){ 

        
        
        {
            return(
                <div className="ad-item">
                    <div className="poster anim placeholder" >
                    <img src={props.imgsrc} />
                </div>                        
                    <div className="title anim placeholder b" >{props.title}</div>
                    <div className="tagline anim placeholder fontl s12" >{props.content}</div>
                    <div className="ftr anim flex">
                    <div className="anim location placeholder s16" >{props.location}</div>
                    <div className="anim stamp placeholder" >{props.stamp}</div>
                    </div>
                </div>
            )
        }

    return(
        <div className="ad-item">

        </div>
    )
}

export default AdItem;
