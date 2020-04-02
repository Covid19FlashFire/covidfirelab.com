import React from 'react'

// Elements
import Card from './Card'

// Constatns
import CONSTANTS from '../../../constants'

const CardList = () => (
  <>
    {CONSTANTS.projects.DATA.map((repo, index) => (
      <div className="column is-half" style={styles.centered}>
        <Card repo={repo} key={index} />
      </div>
    ))}
  </>
)

const styles = {
  centered: {
    justifyContent: 'center',
    alignItems: 'center',
  },
}

export default CardList
