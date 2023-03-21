import React from 'react';
import Avatar from '@mui/material/Avatar';
import './ChannelRow.css';
import TaskAltOutlinedIcon from '@mui/icons-material/TaskAltOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material';

function ChannelRow({channel}) {
  const demoThumbnailUrl = 'https://i.ibb.co/G2L2Gwp/API-Course.png';
  const demoChannelUrl = '/channel/UCmXmlB4-HJytD7wek0Uo97A';
  const demoVideoUrl = '/video/GDa8kZLNhJ4';
  const demoChannelTitle = 'JavaScript Mastery';
  const demoVideoTitle = 'Build and Deploy 5 JavaScript & React API Projects in 10 Hours - Full Course | RapidAPI';
  const demoProfilePicture = 'http://dergipark.org.tr/assets/app/images/buddy_sample.png';


  return (
    <Link to={`/channel/${channel?.id?.channelId}`}>
      <div className='channelRow'>
          <Avatar className='channelRow__avatar' alt={channel?.snippet?.title} src={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture} />
          
          <div className='channelRow__info'>
              <h4>{channel?.snippet?.title} <CheckCircleIcon sx={{ fontSize: '14px', color: 'gray', ml: '5px' }} /></h4>
              {channel?.statistics?.subscriberCount && (
                <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                  {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                </Typography>
              )}

              <p>
                  {} subscribers . {} videos
              </p>
              <p>{channel.description}</p>
          </div>
      </div>
    </Link>
    
  );
}

export default ChannelRow;
