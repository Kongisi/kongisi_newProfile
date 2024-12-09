import React from "react";
import "./App.css";

function KongisiProfile() {
  return (
    <div className="profile-container">
      <header className="header">
        <h1>The Film By Kongisi</h1>
        <img
          src="../profileofkongisi.jpeg"
          alt="The Film By Kongisi"
          className="profile-pic"
        />
        <h2>The Film By Kongisi</h2>
        <p>@kongisi</p>
      </header>
      <div className="buttons">
        <button className="follow-btn">+ Follow</button>
        <button className="message-btn">Message</button>
      </div>
      <p className="bio">
        Passionate filmmaker sharing insightful reviews, tutorials, and short
        films. Join me on a journey through the world of cinema as I explore
        various genres, techniques, and storytelling methods. Stay tuned for
        exciting content and more!
      </p>
      <div className="stats">
        <div>
          <h3>1.2M</h3>
          <p>Subscribers</p>
        </div>
        <div>
          <h3>50M</h3>
          <p>Views</p>
        </div>
        <div>
          <h3>150</h3>
          <p>Uploads</p>
        </div>
      </div>
      <section className="videos">
        <h2>Popular Videos</h2>
        <div className="video-grid">
          <div className="video-card">
            <iframe
              src="https://www.youtube.com/embed/5gR-eehXzOs"
              title="Video 1"
              className="video-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>Video 1</h3>
            <p>A thrilling short film</p>
          </div>
          <div className="video-card">
          <iframe
            src="https://www.youtube.com/embed/OexgbGs3ASo?si=Rd10_Dti7JYAizLd" 
              title="Video 2"
              className="video-iframe"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <h3>Video 2</h3>
            <p>An in-depth tutorial</p>
          </div>
          <div className="video-card">
            <img src="https://via.placeholder.com/300x200" alt="Video 3" />
            <h3>Video 3</h3>
            <p>A captivating review</p>
          </div>
        </div>
      </section>
      <section className="uploads">
        <h2>Latest Uploads</h2>
        <div className="upload-item">
          <img src="https://via.placeholder.com/100" alt="Latest Short Film" />
          <div>
            <h3>Latest Short Film</h3>
            <p>10:45</p>
          </div>
        </div>
        <div className="upload-item">
          <img src="https://via.placeholder.com/100" alt="New Tutorial" />
          <div>
            <h3>New Tutorial</h3>
            <p>15:30</p>
          </div>
        </div>
      </section>
      <button className="contact-btn">Contact Me</button>
      <footer className="footer">
        <div className="social-icons">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <i className="fab fa-youtube"></i>
          </a>
        </div>
        <p>© 2023 The Film By Kongisi. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default KongisiProfile;
