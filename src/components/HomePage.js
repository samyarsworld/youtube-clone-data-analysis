import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import HomeFeed from './HomeFeed';
import {fetchAPI} from '../utils/fetchAPI';


function HomePage() {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);


  useEffect(() => {
    fetchAPI(`search?q=${selectedCategory}`)
    .then((data) => {console.log(data.items);})
    }, [selectedCategory]);
  
  return (
    <div style={{display: 'flex'}}>
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
        <HomeFeed searchTerm={selectedCategory} videos={videos}/>
    </div>
  );
}

export default HomePage;
