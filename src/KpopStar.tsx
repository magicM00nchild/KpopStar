import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AudioPlayer from "./pages/AudioPlayerYouTube";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";


const KpopStarApp = () => (
<Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/audio/:id" element={<AudioPlayer />} />
      <Route path="/not-found" element={<NotFound />} />
    </Routes>
  </Router>
);

export default KpopStarApp;
