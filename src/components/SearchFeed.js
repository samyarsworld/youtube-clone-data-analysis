import React from 'react';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import ChannelRow from './ChannelRow';
import './SearchFeed.css';
import VideoRow from './VideoRow';


function SearchFeed({videos, searchTerm}) {

  return (
    <div className='searchfeed'>
      <div className='searchfeed__filter'>
        <TuneOutlinedIcon />
        <h2>Filter</h2>
      </div>
      <hr/>
      <h2><span style={{color: '#6906af'}}>{searchTerm}</span> Videos</h2>

      <div className='feed__videos'>
        {videos.map((video, indx) => (
          <div key={indx}>
            {video.id.videoId && <VideoRow video={video}/>}
            {video.id.channelId && <ChannelRow channel={video}/>}
          </div>
        ))}     
      </div>

    </div>
  )
}

export default SearchFeed;
