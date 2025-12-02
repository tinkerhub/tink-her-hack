import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import image from '../assets/Frame1.webp';
import { GiHamburgerMenu } from "react-icons/gi";
import image3 from '../assets/count.webp';
import Drawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import logo from '../assets/logo.webp';

function Hero() {

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
          <ListItem button key={text} className="list-item">
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
        <div className="hero"></div>

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
          <p>Kerala's Largest Hackathon for Girls</p>
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
        </div>

      </div>
    </div>
  );
}

export default Hero;
