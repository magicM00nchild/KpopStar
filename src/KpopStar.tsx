import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import YouTube from "react-youtube";
import QRCode from "qrcode.react";
import "./KpopStar.css"
import ReactPlayer from 'react-player/youtube'
import { link } from "fs";

const audioLinks = [
    {id: "1", link: "https://www.youtube.com/watch?v=gdZLi9oWNZg&ab_channel=HYBELABELS"},
    {id: "2", link: "www.youtube.com/platzhalter"},
    {id: "3", link: "www.youtube.com/platzhalter"},
    {id: "4", link: "www.youtube.com/platzhalter"},
    {id: "5", link: "www.youtube.com/platzhalter"},
    {id: "6", link: "www.youtube.com/platzhalter"},
    {id: "7", link: "www.youtube.com/platzhalter"},
    {id: "8", link: "www.youtube.com/platzhalter"},
    {id: "9", link: "www.youtube.com/platzhalter"},
    {id: "10", link: "www.youtube.com/platzhalter"},    
];


const Home = () => (
    <div className="home-container">
      <h1>Kpopstar</h1>
      <p>Scanne einen QR-Code auf den Spielekarten, um dein Audio zu hören.</p>
    </div>
  );


const AudioPlayer = () => {
    const [playing, setPlaying] = useState(false)

    const handlePlayPause = () => {
        if (playing === true){
            setPlaying(false)
        } else {
            setPlaying(true)
        }
      }

    const { id } = useParams<{ id: string }>(); 
    const videoUrl = audioLinks.find(item => item.id === id)?.link;

    if (!videoUrl) {
      return <p className="text-white">Audio nicht gefunden.</p>;
    }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-900 text-white">
      <h2 className="text-3xl">Jetzt abspielen</h2>
      <div className="mt-4 w-full max-w-lg">
      <ReactPlayer width="0" height="0" url={videoUrl} playing={playing}/>
      <button className="button" onClick={handlePlayPause} > {playing ? 'Pause' : 'Play'} </button>
      </div>
    </div>
  );
};

const KpopStarApp = () => (
<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/audio/:id" element={<AudioPlayer />} />
    </Routes>
  </Router>
);

export default KpopStarApp;
