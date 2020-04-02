import React from 'react'

// Components
import Layout from '../components/Layout'
import SEO from '../components/SEO'

// Screens
import Landing from './landing'

const LandingPage = () => (
  <Layout>
    <SEO title="Landing" />
    <Landing />
  </Layout>
)

export default LandingPage
