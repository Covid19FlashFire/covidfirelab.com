import React from 'react'

// Elements
import Card from './Card'

// Constatns
import CONSTANTS from '../../../constants'

const CardList = () => (
  <>
    {CONSTANTS.blogs.DATA.map((blog, index) => (
      <div className="column is-one-third">
        <Card blog={blog} key={index} />
      </div>
    ))}
  </>
)

export default CardList
