import React from 'react';
import '../styles/Joinmove.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import potrait from '../assets/potrait.webp';
import count from '../assets/count.webp';
import people from '../assets/People.webp';
import mentor from '../assets/mentor.webp';
import Union from '../assets/Union.webp';
import last from '../assets/LAST.webp';
import logo from '../assets/logo.webp';
import insta from '../assets/insta.webp';
import linkdin from '../assets/linkdin.webp';
import past1 from '../assets/past1.webp';
import past2 from '../assets/past2.webp';
import past3 from '../assets/past3.webp';
import past4 from '../assets/past4.webp';
import past5 from '../assets/past5.webp';
import past7 from '../assets/past7.webp';
import past8 from '../assets/past8.webp';
import past9 from '../assets/past9.webp';
import past6 from '../assets/past6.webp';
import { GiHamburgerMenu } from 'react-icons/gi';

function Joinmove() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <div className="main">
      <div className="first">
        <nav className="hero-nav">
          <GiHamburgerMenu
            onClick={toggleNav}
            className="nav-toggle"
            color="#fff"
            fontSize={35}
          />

          <ul className={`nav-links ${isNavOpen ? 'open' : ''}`}>
            <Link style={{ textDecoration: 'none' }} to="/">
              <li>Home</li>
            </Link>
            <Link style={{ textDecoration: 'none' }} to="/actions">
              <li>Actions</li>
            </Link>
            <Link style={{ textDecoration: 'none' }}>
              <li>Participants</li>
            </Link>
          </ul>
        </nav>
        <div className="left">
          <p className="head">
            TINK-HER-
            <br />
            HACK.
            <span
              style={{
                fontFamily: 'CoveredByYourGrace',
                fontSize: '5vw',
                color: '#FFD900',
              }}
            >
              3.0
            </span>
          </p>
          <p className="cont">
            4,000 women are about to begin their tech journey.
            <br />
            Build with them. Host them. Guide them. Support them. Choose
            <br />
            your role in their story.
          </p>
          <Link to="https://play.google.com/store/apps/details?id=com.hoomans.tinkerhub">
            <button className="whitebtn">DOWNLOAD THE APP</button>
          </Link>
          <Link to="https://www.tinkerhub.org/">
            <button className="yelbtn">VISIT OUR WEBSITE</button>
          </Link>
        </div>
        <div className="right">
          <img src={potrait} alt="Potrait" className="potrait" />
          <div className="red">
            <img src={count} alt="Red Count" className="red" />
          </div>
        </div>
      </div>

      <div className="second">
        <div className="sec-left">
          <p>
            HOST THE <br></br> <span className="res">HACKATHON.</span>
          </p>

          <img src={people} alt="" className="people" />
        </div>
        <div className="sec-right">
          <p>
            We're looking for venues that want to be part of Kerala's biggest
            tech revolution. Imagine your space filled with the energy of groups
            of girls staying up all night, building their first tech projects,
            the excitement of creation, the "aha!" moments - your venue could be
            where someone's tech journey begins.<br></br>
            <br></br> From college auditoriums to tech parks, every venue
            becomes a catalyst for change.
          </p>

          <div className="but">
            <Link to="https://bit.ly/thhvenue">
              <button className="venue-btn">APPLY AS A VENUE</button>
            </Link>

            <Link to="https://tinkerhub-foundation.notion.site/HOST-TINK-HER-HACK-AT-YOUR-VENUE-30fe3eb870844bd890a04af597f8006c?pvs=4 ">
              <button style={{}} className="venue-read">
                READ MORE
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="third">
        <div className="third-left">
          <p className="third-p-one">
            JOIN AS A<br></br> MENTOR.
          </p>
          <p className="third-p-two">
            Be the mentor you wished you had! Join TinkerHack as either an
            online guide during hackathon nights or an in-person mentor at
            venues across Kerala.<br></br>
            <br></br>
            You'll help women build their first tech projects, turning "Can I
            <br></br> do this?" into "Look what I built!" We'll take care of all{' '}
            <br></br> arrangements - just bring your experience and that memory{' '}
            <br></br> of your first project.
          </p>
          <div className="mentordiv">
            <Link
              to="https://bit.ly/thhmentors
"
            >
              <button
                className="btn1"
                style={{ color: 'white', fontWeight: 'bold' }}
              >
                APPLY AS A MENTOR
              </button>
            </Link>

            <Link to="https://tinkerhub-foundation.notion.site/BE-A-TINK-HER-HACK-MENTOR-9daf6b57fb634d3390a7a977715835a8?pvs=4 ">
              <button
                className="btn2"
                style={{ color: 'black', fontWeight: 'bold' }}
              >
                READ MORE
              </button>
            </Link>
          </div>
        </div>

        <div className="third-right">
          <img src={mentor} alt="" />
        </div>
      </div>
      <div className="fourth">
        <div className="yell">
          CONNECT WITH MAKERS ACROSS KERALA
          <span>
            <img src={Union} alt="" />
          </span>
        </div>

        <div className="black">
          <p style={{ marginTop: '0', color: 'white' }}>
            <span
              style={{ fontFamily: 'CoveredByYourGrace', color: '#FFD900' }}
            >
              our
            </span>
            <br></br>ONLINE <br></br>COMMUNITY.
          </p>

          <div className="para">
            <div className="p-div">
              <p>
                Building is always better when we do it together! The TinkerHack
                app connects you with our maker community. Share your doubts,
                celebrate small wins, find your build buddies, and be part of a
                community that grows together. Whether you're stuck on your
                first idea or celebrating your first deployment - there's always
                someone to share the moment with!
              </p>
            </div>
            <div className="p-div">
              <p>
                Every week, our O Penn Mic sessions bring you stories that feel
                close to home - tech leaders who started exactly where you are
                now, women who turned their curiosity into careers, and builders
                who once wondered if tech was for them. It's not just about
                learning to code - it's about finding your community and writing
                your story together.
              </p>
            </div>
          </div>
          <div className="count">
            <div className="count-1">
              <div className="count-11">
                600+ <span>PROJECTS BUILT</span>
              </div>
              <div className="count-12">
                120+ <span>MONTHLY PROJECTS</span>
              </div>
            </div>
            <div className="count-2">
              12,000+ <span>MAKERS</span>
            </div>
            <div className="count-3">
              <div className="count-31">
                15+
                <span>
                  COMMUNITY <br></br> MEETUPS
                </span>
              </div>
              <div className="count-32">
                20+{' '}
                <span>
                  OPEN MIC<br></br> SESSIONS
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="five">
        <div className="five-head">
          <p>
            GLIMPSES FROM <br></br>{' '}
            <span className="pic1" style={{}}>
              TINK-HER-HACK
            </span>
            <span className="pic2" style={{}}>
              2.0
            </span>
          </p>
        </div>

        <div className="imgdiv">
          <div className="past">
            <img src={past1} alt="" className="past1" />
            <img src={past2} alt="" className="past2" />
            <img src={past3} alt="" className="past3" />
            <img src={past4} alt="" className="past5" />
            <img src={past5} alt="" className="past4" />
          </div>

          <div className="pastdown">
            <img src={past6} alt="" className="past7" />
            <img src={past7} alt="" className="past8" />
            <img src={past8} alt="" className="past9" />
            <img src={past9} alt="" className="past9" />
          </div>
        </div>
      </div>
      <div className="six">
        <div className="six-left">
          <p className="p1">STAY IN THE</p>
          <span
            style={{
              fontSize: '7vw',
              fontFamily: 'CoveredByYourGrace',
              color: '#FFD900',
              marginLeft: '4vw',
              marginTop: '-6vw',
            }}
          >
            loop.
          </span>
          <p className="p2">
            Never miss a moment of your tech journey.<br></br>
            Subscribe to our weekly newsletter where curiosity<br></br> meets
            creativity!
          </p>
          <div className="list">
            <p className="p3">WHAT YOU WILL GET</p>
            <div className="uldiv">
              <ul>
                <li>Bite-sized tech lessons every Monday </li>
                <li>Open Mic highlights and discussion points</li>
                <li>Weekly mini-challenges to test your skills</li>
              </ul>
              <ul>
                <li>TinkHerHack updates and success stories</li>
                <li>Resources curated for beginners</li>
                <li>Community spotlights and achievements</li>
              </ul>
            </div>
          </div>

          <Link to="https://forms.gle/JgfoD1fE8845ectU7">
            <button className="sixbtn">I'M IN!</button>
          </Link>
        </div>
        <div className="six-right">
          <img src={last} alt="" />
        </div>
      </div>
      <div className="seven">
        <div className="seven-1">
          <img src={logo} alt="" />
        </div>
        <div className="seven-2">
          <Link to="https://www.instagram.com/tinkerhub?igsh=cG10d2RyOXJjaG4x">
            <img src={insta} alt="" />
          </Link>
          <Link to="https://www.linkedin.com/company/tinkerhub">
            <img src={linkdin} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Joinmove;
