import React from 'react';
import './Sidebar.css';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import BoltOutlinedIcon from '@mui/icons-material/BoltOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import VideoLibraryOutlinedIcon from '@mui/icons-material/VideoLibraryOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';


function Sidebar({selectedCategory, setSelectedCategory}) {
  
  const links1 = [
    { title: 'Home', icon: <CottageOutlinedIcon className='sidebar__icon'/>, url: '/' },
    { title: 'Shorts', icon: <BoltOutlinedIcon className='sidebar__icon'/>, url: '/' },
    { title: 'Subscription', icon: <SubscriptionsOutlinedIcon className='sidebar__icon'/>, url: '/' },
    { title: 'Library', icon: <VideoLibraryOutlinedIcon className='sidebar__icon'/>, url: '/' },
    { title: 'History', icon: <HistoryOutlinedIcon className='sidebar__icon'/>, url: '/' },
    { title: 'Your Videos', icon: <SmartDisplayOutlinedIcon className='sidebar__icon'/>, url: '/' },
    { title: 'Watch Later', icon: <WatchLaterOutlinedIcon className='sidebar__icon'/>, url: '/' },
    { title: 'Liked videos', icon: <ThumbUpAltOutlinedIcon className='sidebar__icon'/>, url: '/' },
    { title: 'Show more', icon: <ExpandMoreOutlinedIcon className='sidebar__icon'/>, url: '/' }
  ];


  return (
    <div className='sidebar'>
      {links1.map((link, indx) => (
        <div key={indx}>
          <div onClick={() => setSelectedCategory(link.title)} className={`sidebar__row ${selectedCategory === link.title && "selected"} `}>
            {link.icon}
            <h2 className='sidebar__title'>{link.title}</h2>
          </div>
          {indx === 2 && <hr/>}
        </div>
      ))}

    </div>
  );
}

export default Sidebar;
