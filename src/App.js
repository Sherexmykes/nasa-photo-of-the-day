import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Header from "./components/Header";
import Image from "./components/Image";
import { Button } from 'reactstrap';
function App() {
  const[photo,setPhoto] = useState();
  const[title,setTitle] = useState();
  const[info,setInfo] = useState();
  const[date,setDate] = useState();

  useEffect(() => {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
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
      <Button/>
      <Image imgURL ={photo} imgTitle = {title} description = {info}/>
    </div>
  );
}

export default App; 