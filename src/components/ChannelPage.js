import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { fetchAPI } from '../utils/fetchAPI';
import VideoCard from './VideoCard';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Avatar from '@mui/material/Avatar';
import './ChannelPage.css';


function ChannelPage() {

  const [channel, setChannel] = useState('');
  const [videos, setVideos] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    fetchAPI(`channels?part=snippet&id=${id}`)
    .then(data => setChannel(data?.items[0]))

    fetchAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`)
    .then(data => setVideos(data?.items))
    
  }, [id])


  return (
    <div className='channelPage'>
       <div className='channelPage__top'>
        <div className='channelCard'>
          <Link style={{textDecoration: 'none'}} to={`/channel/${channel?.id?.channelId}`}>
            <Avatar className='channelCard__avatar' alt={channel?.snippet?.title} src={channel?.snippet?.thumbnails?.high?.url} />
            <div className='channelCard__info'>
                <h4>{channel?.snippet?.title} <CheckCircleIcon /></h4>
                <p>{parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers</p>
            </div>
          </Link> 
        </div>
      </div>

      <div className='channelPage__feed'>
        {videos.map((video, indx) => (
          video.id.videoId && <VideoCard key={indx} video={video} />
        ))}
      </div>
      
    </div>
  );
}

export default ChannelPage;
