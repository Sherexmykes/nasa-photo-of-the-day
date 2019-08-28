import React from "react";
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Image({imgURL,imgTitle,description}) {
    return  (
        <div className = "image">
            <h2>{imgTitle}</h2>
            <img src = {imgURL} alt="description" />
            <p>{description}</p>
            <br></br>
            <Button color="primary" size="lg" active>Learn More</Button>{' '}

        </div>
    );
} 

