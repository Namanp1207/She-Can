import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <nav>
        <div className='logo'>She Can Foundation</div>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>
      {/* Home */}
      <section className='hero'>
        <div className='hero-text'>
          <h1>Empowering Women To <span>Lead, Grow & Succeed</span></h1>
          <p>
            She Can Foundation supports women through education,skill development, leadership opportunities, and communityinitiatives that create meaningful impact.
          </p>
          <a className='btn' href="#/form">Volunteer / Join Us</a>
        </div>
        <div className='hero-image'>
          <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900" alt="Women Empowerment" />
        </div>
      </section>
      {/* About */}
      <section className='about' id='about'>
        <h2>About Us</h2>
        <p>She Can Foundation believes every woman deserves access toopportunities, support, and the confidence to pursue her goals.Through mentoring, workshops, and social initiatives, we aimto inspire change and build stronger communities where women can thrive and lead.</p>
      </section>
      {/* FOOTER */}
      <footer>
        © 2026 She Can Foundation | Empower • Inspire • Transform
      </footer>
    </div>
  )
}

export default Home
