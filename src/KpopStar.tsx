import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AudioPlayer from "./pages/AudioPlayerYouTube";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Impress from "./pages/Impress";


const KpopStarApp = () => (
<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/audio/:id" element={<AudioPlayer />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="/impress" element={<Impress />} />
    </Routes>
  </Router>
);

export default KpopStarApp;
