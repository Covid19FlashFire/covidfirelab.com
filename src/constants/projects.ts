interface DATA {
  source: string
  title: string
  description: string
  language: string
  url: string
}

const DATA: DATA[] = [
  {
    source: 'image icon url',
    title: 'Dataset',
    description:
      'Dataset Database และ API ที่พร้อมใช้งานสำหรับสถานการณ์ COVID-19 ของประเทศ',
    language: 'Python',
    url: 'https://github.com/Covid19FlashFire/datasets',
  },
  {
    source: 'image icon url',
    title: 'covidfirelab.com',
    description: 'แหล่งรวบรวม API และ Project เพื่อร่วมกันแก้ไขปัญหา COVID-19',
    language: 'Javascript',
    url: 'https://github.com/Covid19FlashFire/covidfirelab.com',
  },
]

export default {DATA}
