import React from 'react';
import Image from 'next/image';
import './LandingPage1.css';

const LandingPage = () => {
  return (
    <div className='bg-black'>
      <header className="header">
        <a href="#" className="logo">
          Romeo <span> GFX</span>
        </a>
        <div className="menu">
          <i className="fa fa-bars" aria-hidden="true"></i>
        </div>
        <nav className="navbar">
          {/* <a href="#Home">Home</a> */}
          {/* Add more navigation links here if needed */}
        </nav>
      </header>

      <section className="home" id="Home">
        <div className="content">
          <h1>
            I am <span>Romeo GFX</span>
          </h1>
          <div className="text-animation">
            <span>Animations</span>
            <span>Graphics Designing</span>
          </div>
          <p>
            I am Romeo GFX, a passionate and dedicated graphic designer from Pakistan with over three years of experience in the field. My expertise lies in creating compelling YouTube thumbnails that not only capture attention but also encourage viewers to engage with the content. Whether you are a YouTuber or a business owner, my goal is to elevate your visual presence and bring your ideas to life with creative and impactful designs.
          </p>
          <div className="icons">
            <a href="https://www.instagram.com/romeo_gfx_/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram" aria-hidden="true"></i>
            </a>
          </div>
          <div className="flex-btn">
            <a href="https://www.instagram.com/romeo_gfx_/" className="btn hire">
              Hire Me
            </a>
            <div className="contact-info">
              <p>Contact: 0315 8552233</p>
            </div>
          </div>
        </div>
        <Image
          src="/imgprofile.png"
          alt="Profile Image"
          className="img"
          width={720}
          height={720}
        />
      </section>
    </div>
  );
}

export default LandingPage;
