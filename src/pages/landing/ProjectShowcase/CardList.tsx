import React from 'react'

// Elements
import Card from './Card'

// Constatns
import CONSTANTS from '../../../constants/index'

const CardList = () => (
  <>
    {CONSTANTS.projects.DATA.map((repo, index) => (
      <div key={index} className="column is-half">
        <Card repo={repo} />
      </div>
    ))}
  </>
)

export default CardList
