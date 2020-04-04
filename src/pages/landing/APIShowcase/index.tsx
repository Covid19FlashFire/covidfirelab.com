import React from 'react'

// Elements
import CardList from './CardList'

const APIShowcase = () => (
  <section className="section">
    <div className="container">
      <h1 className="title">API Showcase</h1>
      <div className="columns is-multiline">
        <CardList />
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/Covid19FlashFire"
        className="button is-link">
        See more
      </a>
    </div>
  </section>
)

export default APIShowcase
