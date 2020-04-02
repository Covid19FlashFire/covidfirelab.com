import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'

import heroImage from '../images/social-distancing.svg'

import './landing.scss'

const Hero = () => (
  <div className="landing-section">
    <div className="container">
      <h1>COVID-19 FlashFire 🔥</h1>
      <h2>
        <span>APIs</span> and <span>Projects</span> to fight the COVID-19
        crisis.
      </h2>
    </div>
  </div>
)

const Footer = () => <footer></footer>

const LandingPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />

    <Footer />
  </Layout>
)

export default LandingPage
