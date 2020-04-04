import React from 'react'

// Elements
import Card from './Card'

// Constatns
import CONSTANTS from '../../../constants/index'

const CardList = () => (
  <>
    {CONSTANTS.blogs.DATA.map((blog, index) => (
      <div key={index} className="column is-one-third">
        <Card {...blog} />
      </div>
    ))}
  </>
)

export default CardList
