import React,{useState} from "react";
import Navbar from "./components/Navbar";
import LoadingBar from 'react-top-loading-bar'
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Movies from "./components/Movies";
import MovieHelper from "./components/MovieHelper";

export default function App() {
  const [progress, setProgress] = useState(0);
  const apiKey = process.env.REACT_APP_MOVIE_API;
  return (
    <div>
      <Router>
        <Navbar />
     <LoadingBar
    height={3}
        color='#1859c9'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        <Routes>

          <Route exact path="/" element={<Movies key="trending" apiKey={apiKey} setProgress={setProgress} category="Home" />} />
          <Route exact path="/trending" element={<Movies key="trending" apiKey={apiKey} setProgress={setProgress} category="trending" />} />
          {/* <Route exact path="/originals" element={<Movies apiKey={apiKey} category="originals" />} /> */}
          <Route exact path="/toprated/:country/:language" element={<MovieHelper key="top_rated" apiKey={apiKey} setProgress={setProgress} category="top_rated" />} />
          <Route exact path="/mystery" element={<Movies key="mystery" apiKey={apiKey} setProgress={setProgress} category="mystery" id={9648} />} />
          <Route exact path="/comedy" element={<Movies key="comedy" apiKey={apiKey} setProgress={setProgress} category="comedy" id={35} />} />
          <Route exact path="/horror" element={<Movies key="horror" apiKey={apiKey} setProgress={setProgress} category="horror" id={27} />} />
          <Route exact path="/action" element={<Movies key="action" apiKey={apiKey} setProgress={setProgress} category="action" id={28} />} />
          <Route exact path="/scifi" element={<Movies key="sci-fi" apiKey={apiKey} setProgress={setProgress} category="sci-fi" id={878} />} />
          <Route exact path="/romance" element={<Movies key="romance" apiKey={apiKey} setProgress={setProgress} category="romance" id={10749} />} />
          <Route exact path="/animation" element={<Movies key="animation" apiKey={apiKey} setProgress={setProgress} category="animation" id={16} />} />
          <Route exact path="/adventure" element={<Movies key="adventure" apiKey={apiKey} setProgress={setProgress} category="adventure" id={12} />} />
          <Route exact path="/drama" element={<Movies key="drama" apiKey={apiKey} setProgress={setProgress} category="drama" id={18} />} />


        </Routes>

      </Router>
    </div>
  );
}
