import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './VideoCard.css';
import { Avatar } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { fetchAPI } from '../utils/fetchAPI';


function VideoCard({video}) {
  const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
  const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
  const demoVideoUrl = '/video/GDa8kZLNhJ4';
  const demoChannelTitle = 'JavaScript Mastery';
  const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
  const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';

  const videoId = video.videoId;

  const [channelThumb, setChannelThumb] = useState(demoProfilePicture);


  return (
    <div className='videocard'>
      <Link className='link' to={videoId ? `video/${videoId}` : demoVideoUrl}>
        <img className='videocard__img' src={video.snippet?.thumbnails?.high?.url} alt={video.snippet?.title}/>
      </Link>
      <div className='videocard__info'>
        <Link className='link' to={video.snippet?.channelId ? `/channel/${video.snippet?.channelId}` : demoChannelUrl}>
          <Avatar sx={{height:30, width:30}} src={channelThumb?.snippet?.thumbnails?.high?.url} alt='avatar'/>
        </Link>
        <Link className='link' to={videoId ? `video/${videoId}` : demoVideoUrl}>
          <div className='videocard__text'>
              <h4>{video.snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}</h4>
              <p>{video.snippet?.channelTitle || demoChannelTitle}<CheckCircleIcon sx={{ fontSize: "12px", color: "gray", ml: "5px" }} /></p>
              
              <p>100 views | {video.snippet?.publishTime || '1 day ago'}</p>
          </div>
        </Link>
      </div>
    </div>
    
  );
}

export default VideoCard;
