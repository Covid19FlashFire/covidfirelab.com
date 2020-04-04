import React from 'react'

// Elements
import Card from './Card'

// Termporary hardcode
const DATA = [
  {
    type: 'JSON',
    title: 'Dataset',
    source: 'image icon url',
    description: 'Dataset Database และ API ที่พร้อมใช้งานสำหรับสถานการณ์ COVID-19 ของประเทศ',
    url: 'https://github.com/Covid19FlashFire/datasets',
  },
]

const CardList = () => (
  <>
    {DATA.map((api, index) => (
      <div key={index} className="column is-half">
        <Card {...api} />
      </div>
    ))}
  </>
)

export default CardList
