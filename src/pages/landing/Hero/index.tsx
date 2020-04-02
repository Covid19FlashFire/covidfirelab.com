import React from 'react'
import {Link} from 'gatsby'

const Hero = () => (
  <div className="landing-section">
    <div className="container">
      <h1>COVID-19 FlashFire 🔥</h1>
      <h2>
        <span>APIs</span> and <span>Projects</span> to fight the COVID-19
        crisis.
      </h2>
      <Link to="/somepage" activeClassName="active">
        <h4 style={{ color: 'orange' }}>Go to some page</h4>
      </Link>
    </div>
  </div>
)

export default Hero
