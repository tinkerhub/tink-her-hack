
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css'; // Import the CSS file
import image from '../assets/Frame1.webp';

import image3 from '../assets/count.webp';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '../assets/logo.webp';
import { GiHamburgerMenu } from "react-icons/gi";


function Hero() {

  const [timeLeft, setTimeLeft] = useState({
    days: '15',
    hours: '6',
    minutes: '45',
    seconds: '30',
  });

  const targetDate = new Date('2025-01-25T00:00:00').getTime();

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: '0', hours: '0', minutes: '0', seconds: '0' });
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const [isMobileView, setIsMobileView] = useState(window.innerWidth < 768);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  const drawerList = () => (
    <Box role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
  <List>
  {['Home', 'Actions', 'Participants'].map((text) => (
    <ListItem button key={text}>
      <Link 
        to={text === 'Home' ? '/' : `/${text.toLowerCase()}`} 
        style={{ textDecoration: 'none' }}
      >
        <ListItemText primary={text} />
      </Link>
    </ListItem>
  ))}
</List>
    </Box>
  );

  return (
    <div className="hero-container">
      <div
        className="hero-background"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="hero">
          <div className="hero-registrations">
            <h1>Registrations from Jan 10th</h1>
            <button>APPLY NOW</button>
          </div>
        </div>
        <nav className="hero-nav">
          <GiHamburgerMenu
            onClick={() => setIsDrawerOpen(true)}
            className="nav-toggle"
            color="#fff"
            fontSize={35}
          />
          <ul className="nav-links">
            <Link to="/" style={{ textDecoration: 'none' }}>
              <li>Home</li>
            </Link>
            <Link to="/actions" style={{ textDecoration: 'none' }}>
              <li>Actions</li>
            </Link>
            <Link to="#" style={{ textDecoration: 'none' }}>
              <li>Participants</li>
            </Link>
          </ul>

          {isMobileView && (
            <div className="nav-mobile">
              <Drawer anchor="top" open={isDrawerOpen} onClose={toggleDrawer(false)}>
                {drawerList()}
              </Drawer>
            </div>
          )}
        </nav>

        <div className="hero-content">
          <img src={logo} alt="logo" className="hero-logo" />
          <h1 style={{ margin: '0' }}>TINK-HER-HACK 3.0</h1>
          <p style={{}}>Kerala's Largest Hackathon for Girls</p>
        </div>
        <div className="hero-statistics">
          <div className="hero-image-container">
            <img src={image3} alt="count" className="hero-count-image" />
            <div className="hero-stats-text">
              <p>
                4000 girls <br /> 1 night of making
              </p>
            </div>
          </div>

          <div className="hero-images">
            
            <div>{timeLeft.days}d</div>
            <div>{timeLeft.hours}h</div>
            <div>{timeLeft.minutes}m</div>
            <div>{timeLeft.seconds}s</div>
          

          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
