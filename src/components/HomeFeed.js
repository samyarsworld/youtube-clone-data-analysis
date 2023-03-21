import React from 'react';
import VideoCard from './VideoCard';

function HomeFeed({searchTerm, videos}) {

  return (
    <div style={{flex: 0.8,  backgroundColor: '#f9f9f9', padding: '40px 20px', paddingBottom: 0}}>
      <h2 style={{marginLeft: 5,  marginBottom: 20}}><span style={{color: '#6906af'}}>{searchTerm}</span> Videos</h2>
      <div style={{display: 'flex', flexWrap: 'wrap'}}>

        {videos.map((video, indx) => (
          <div key={indx}>
            {video.id.videoId && <VideoCard video={video}/>}
          </div>
        ))}     
        
      </div>
    </div>
  );
}

export default HomeFeed;
