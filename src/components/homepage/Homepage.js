import React, { useState, useEffect } from "react";
import "./Homepage.css";
import { Link, useNavigate } from 'react-router-dom'

const Homepage = () => {
  const [userId, setuserId] = useState('guest');  
  const navigate = useNavigate()

  function login() {
    setuserId(1)
  }

  useEffect(() => {
    if (userId !== 'guest') {
      navigate(`/${userId}`)
    }
  }, [userId, navigate])

  return (
    <div className="homepage-container">
      <header className="homepage-header">  
        <h1 className="homepage-h1">Journey Like a Genius</h1>
      </header>
      <main className="homepage-main">
        <div className="background-image"></div>
        <button className="login-button" onClick={login}>Login!</button>
        <section className="homepage-section">
          <h2>We're excited to get started on your personalized travel itinerary.</h2>
          <p>We'll ask a series of questions to better understand you lifestyle, preferences, and unique needs so we can generate a perfect travel day.</p>
          <Link to={`/preferences/${userId}`}>
            <button className="preferences">Let's get started</button>
          </Link>
          <Link to={`/saved-itineraries/`}>
            <button className="saved-itineraries">View Saved Itineraries</button>
          </Link>
        </section>
      </main>
    </div>
  );
};

export default Homepage;
