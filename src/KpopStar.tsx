import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useParams } from "react-router-dom";
import "./KpopStar.css"
import ReactPlayer from 'react-player/youtube'
import { audioLinks } from "./audioLinks";
import InputForm from "./Utils/InputForm";

const Home = () => (
    <div className="home-container">
      <h1>Kpopstar</h1>
      <p>Bist du so ein krasser Kpop Fan?</p>
      <InputForm />
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
