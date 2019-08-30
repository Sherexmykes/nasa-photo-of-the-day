import React from "react";


import { Segment } from "semantic-ui-react";
export default function Image({imgURL,imgTitle,description,showContent}) {
    console.log(showContent)
    if(showContent) {
        return (
            <div className = "img-card">
                <h2>{imgTitle}</h2>
                <Image src = {imgURL} alt = "nasa image of day" />
                
                <Segment className="ui raised segment" >
                    <p>{description}</p>
                </Segment>
                <br></br>
           
                </div>
        )
    }
    else {
        return (
            <div className = "img-card">
                <h2>{imgTitle}</h2>
                <Image src = {imgURL} alt = "nasa image of day" />
                <br></br>
            </div>
        )
    }
}