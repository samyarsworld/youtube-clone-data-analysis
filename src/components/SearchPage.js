import React, {useState, useEffect} from 'react';
import Sidebar from './Sidebar';
import SearchFeed from './SearchFeed';
import {fetchAPI} from '../utils/fetchAPI';
import { useParams } from 'react-router-dom';


function SearchPage() {
  const [videos, setVideos] = useState([]);
  const { searchTerm } = useParams();
  
  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
    <div style={{display: 'flex'}}>
        <Sidebar selectedCategory={''} setSelectedCategory={''}/>
        <SearchFeed videos={videos} searchTerm={searchTerm}/>
    </div>
  );
}

export default SearchPage;
