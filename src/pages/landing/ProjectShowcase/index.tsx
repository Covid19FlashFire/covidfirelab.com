import React from 'react'

// Elements
import CardList from './CardList'

const ProjectShowcase = () => (
  <section className="section">
    <div className="container">
      <h1 className="title has-text-centered is-variable">Project Showcase</h1>
      <div className="columns is-multiline is-centered">
        <CardList />
      </div>
      <div className="columns is-centered" style={{marginTop: 30}}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/Covid19FlashFire"
          className="button is-link"
          style={{marginLeft: 10}}>
          See more
        </a>
      </div>
    </div>
  </section>
)

const styles = {
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default ProjectShowcase
