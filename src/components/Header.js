import React, {useState} from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import KeyboardVoiceSharpIcon from '@mui/icons-material/KeyboardVoiceSharp';
import VideoCallOutlinedIcon from '@mui/icons-material/VideoCallOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Avatar from '@mui/material/Avatar';
import AppsIcon from '@mui/icons-material/Apps';

import {Paper, IconButton} from '@mui/material';
import {Link, useNavigate} from 'react-router-dom';
import './Header.css';

function Header() {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            navigate(`/search/${searchTerm}`);
            setSearchTerm('');
        }
    }

    return (
        <div className='header'>  
        
            <div className='header__left'>
                <MenuSharpIcon />
                <Link to='/'>
                    <img className='header__logo' alt='YouTube' src='https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg'></img>    
                </Link>
            </div>
            
            <div className='header__middle'>
                <Paper
                    component='form'
                    onSubmit={handleSubmit}
                    sx={{ flex: 1, display: 'flex', borderRadius: 20, border: '1px solid #e3e3e3', boxShadow: 'none', height: 30 }}
                    >
                    <input className='search-bar' placeholder='Search...' value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
                    <IconButton type='submit' aria-label='search'>
                        <SearchOutlinedIcon />
                    </IconButton>
                </Paper>
                <KeyboardVoiceSharpIcon sx={{color:'gray'}}/>           
            </div>
            
            <div className='header__right'>
                <VideoCallOutlinedIcon className='header__icons'/>
                <NotificationsNoneOutlinedIcon className='header__icons'/>
                <AppsIcon className='header__icons'/>
                <Avatar sx={{height:30, width:30}} className='header__icons' alt="Shpeel" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Logo_of_YouTube_%282015-2017%29.svg" />
            </div>  
        </div>
    );
}

export default Header;

