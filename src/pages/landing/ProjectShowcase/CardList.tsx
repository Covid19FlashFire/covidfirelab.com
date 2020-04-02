import React from 'react'

// Elements
import Card from './Card'

// Termporary hardcode 
const DATA = [
  {
    source: 'image icon url',
    title: 'Dataset',
    description: 'Dataset Database และ API ที่พร้อมใช้งานสำหรับสถานการณ์ COVID-19 ของประเทศ',
    language: 'Python',
    uri: 'https://github.com/Covid19FlashFire/datasets'
  },
  {
    source: 'image icon url',
    title: 'covidfirelab.com',
    description: 'แหล่งรวบรวม API และ Project เพื่อร่วมกันแก้ไขปัญหา COVID-19',
    language: 'Javascript',
    uri: 'https://github.com/Covid19FlashFire/covidfirelab.com'
  },
]

const CardList = () => (
  <>
    {DATA.map((repo, index) => (
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
