import React from 'react'

// Elements
import Card from './Card'

const MOCK = [1, 2, 3, 4, 5]

const CardList = () => (
  <>
    {MOCK.map((item, index) => (
      <div className="column is-one-third" style={styles.centered}>
        <Card key={index} />
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
