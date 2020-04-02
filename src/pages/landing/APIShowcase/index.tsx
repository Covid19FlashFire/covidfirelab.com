import React from 'react'

// Elements
import CardList from './CardList'

const APIShowcase = () => (
  <section className="section">
    <div className="container">
      <h1 className="title has-text-centered is-variable">API Showcase</h1>
      <div className="columns is-multiline is-centered">
        <CardList />
      </div>
      <div className="columns is-centered" style={{marginTop: 30}}>
        <button className="button is-link">See more</button>
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

export default APIShowcase
