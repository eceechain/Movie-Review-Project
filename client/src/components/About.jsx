import React from 'react';
import '../styles/About.css';

function About() {
  return (
    <div className="about-container">
      <h2>About Movie Review Hub</h2>
      <p>Welcome to Movie Review Hub, where the magic of cinema comes alive! Our platform is dedicated to all things movies, from the latest blockbusters to hidden indie gems. We're not just another review site – we're a passionate community of cinephiles who live and breathe film.</p>
      
      <div className="section">
        <h3>Our Mission</h3>
        <p>At Movie Review Hub, our mission is simple: to provide movie lovers with the most comprehensive, insightful, and entertaining reviews available anywhere on the web. We believe that every film has a story to tell, and we're here to help you discover and appreciate those stories, whether they're big-budget Hollywood productions or low-budget indie flicks.</p>
      </div>
      
      <div className="section">
        <h3>What We Offer</h3>
        <p>Our platform offers a wide range of features to enhance your movie-watching experience:</p>
        <ul>
          <li><strong>In-depth Reviews:</strong> Our team of expert reviewers meticulously analyze each film, covering everything from plot and character development to cinematography and sound design.</li>
          <li><strong>Recommendations:</strong> Looking for your next favorite movie? We've got you covered with personalized recommendations tailored to your tastes and preferences.</li>
          <li><strong>Community Engagement:</strong> Join our vibrant community of movie enthusiasts to discuss your favorite films, share recommendations, and connect with fellow cinephiles from around the world.</li>
          <li><strong>Exclusive Content:</strong> Gain access to exclusive interviews, behind-the-scenes footage, and industry insights that you won't find anywhere else.</li>
        </ul>
      </div>
      
      <div className="section">
        <h3>Join the Movie Review Hub Community</h3>
        <p>Whether you're a casual moviegoer or a hardcore film buff, there's a place for you at Movie Review Hub. Our platform is designed to be inclusive, welcoming, and above all, fun! So grab some popcorn, sit back, and immerse yourself in the wonderful world of cinema with Movie Review Hub.</p>
      </div>
      
      <p>Remember, at Movie Review Hub, every movie is a masterpiece waiting to be discovered!</p>
    </div>
  );
}

export default About;
