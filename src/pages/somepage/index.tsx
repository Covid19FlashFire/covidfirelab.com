import React from 'react'
import {Link} from 'gatsby'

// Components
import Layout from '../../components/Layout'
import SEO from '../../components/SEO'

const LandingPage = () => (
  <Layout>
    <SEO title="Pages 2" />
    <Link to="/" activeClassName="active">
      <h1>Back to landing</h1>
    </Link>
  </Layout>
)

export default LandingPage
