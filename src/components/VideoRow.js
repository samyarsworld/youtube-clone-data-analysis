import React from 'react';
import { Link } from 'react-router-dom';
import './VideoRow.css';
import { Avatar } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";


function VideoRow({video}) {
  const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
  const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
  const demoVideoUrl = '/video/GDa8kZLNhJ4';
  const demoChannelTitle = 'JavaScript Mastery';
  const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
  const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';

  const videoId = video.videoId

  return (
    <div className='videoRow'>
      <Link className='link' to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <img className='videocard__img' src={video.snippet?.thumbnails?.high?.url} alt={video.snippet?.title}/>
      </Link>
      <div className='videoRow__info'>
          <h3>{video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</h3>
          <div className='videoRow__head'>
            <p>100 views | {video.snippet?.publishTime || '1 day ago'}</p>
          </div>
          <Link className='link' to={video.snippet?.channelId ? `/channel/${video.snippet?.channelId}` : demoChannelUrl}>
            <p>
              <Avatar sx={{height:30, width:30}} src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg' alt='avatar'/>
              {video.snippet?.channelTitle || demoChannelTitle}
              <CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} />
            </p>
          </Link>
          <Link className='link' to={videoId ? `video/${videoId}` : demoVideoUrl}>
            <div className='videoRow__description'>
              <p>{video.snippet?.description}</p>
            </div>
          </Link>
      </div>
    </div>
  );
}


export default VideoRow;
