import { useNavigate, useParams } from "react-router-dom";
import { audioLinks } from "../audioLinks";
import { useState } from "react";
import InputForm from "../utils/InputForm";
import ReactPlayer from 'react-player/youtube'
import logo from "../data/logo_kpop_star.svg"
import "./AudioPlayerYouTube.css"
import Header from "../utils/Header";



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
        <div className="container">
            <Header />
          
              <main className="main-content">
            <h1>Jetzt abspielen</h1>
            <div className="player-container">
              <ReactPlayer width="0" height="0" url={videoUrl} playing={playing} />
              <button className="play-button" onClick={handlePlayPause}>
                {playing ? 'Pause' : 'Play'}
              </button>
            </div>
          </main>
        </div>
      );
};

export default AudioPlayer 