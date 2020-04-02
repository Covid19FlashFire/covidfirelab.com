import React from 'react'

// Styles
import './landing.scss'

// Components
import Layout from '../../components/Layout'

// Elements
import Hero from './Hero'
import Blogs from './Blogs'
// import Intro from './Intro'
import Footer from './Footer'
// import APIShowcase from './APIShowcase'
import ProjectShowcase from './ProjectShowcase'

const LandingPage = () => (
  <Layout>
    <Hero />
    {/* <APIShowcase /> */}
    {/* <Intro /> */}
    <ProjectShowcase />
    <Blogs />
    <Footer /> 
  </Layout>
)

export default LandingPage
