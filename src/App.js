import React from 'react';
import './App.css';
import Header from './components/Header';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import ChannelPage from './components/ChannelPage';
import VideoPage from './components/VideoPage';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className='app'>

      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<HomePage />}/>
          <Route path="/search/:searchContent" element={<SearchPage />}/>
          <Route path="/channel/:id" element={<ChannelPage />}/>
          <Route path="/video/:id" element={<VideoPage />}/>
        </Routes>        
      </Router>

    </div>
  );
}

export default App;
