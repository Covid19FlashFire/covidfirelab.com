import React from 'react'

// Elements
import CardList from './CardList'

const Blogs = () => (
  <section className="section">
    <div className="container">
    <h1 className="title">Blogs</h1>
      <div className="columns is-multiline" style={{marginTop: 30}}>
        <CardList />
      </div>
    </div>
  </section>
)

export default Blogs
