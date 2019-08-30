import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Image from "./components/Image";
import { Button } from 'reactstrap';

import Loader from "./components/Loader";

function App() {
  const[photo,setPhoto] = useState();
  const[title,setTitle] = useState();
  const[info,setInfo] = useState();
  const[date,setDate] = useState();


  // for toggling info content
  const [showContent, setShowContent] = useState(false);
  const toggleMode = e => {
    e.preventDefault();
    setShowContent(!showContent);
  };

  useEffect(() => {
    axios
    .get(`https://api.nasa.gov/planetary/apod?api_key=wQe8tiUEu5Y5nDLpRryKo8aelQSCQOdYarI7uNoC`)
      .then( response => {
        const dailyImg = response.data.url;
        console.log("image url: ",dailyImg);
        setPhoto(dailyImg);
        const imgTitle = response.data.title;
        setTitle(imgTitle);
        const imgInfo = response.data.description;
        setInfo(imgInfo);
        const imgDate = response.data.date;
        setDate(imgDate);
      })
      .catch(error => {
        console.log('The API is currently down, try again later', error)
      })
    },[])



  return (
    <div className="App">
     
      <Header date = {date} />
      <Button type="primary" onClick={toggleMode}>Show more info</Button>
      <Image imgURL ={photo} imgTitle = {title} description = {info}showContent = {showContent}/>/>
      <Loader/>
    </div>
  );
}

export default App; 