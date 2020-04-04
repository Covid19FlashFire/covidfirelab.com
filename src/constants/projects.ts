interface DATA {
  source: string
  title: string
  description: string
  language: string
  url: string
}

const DATA: DATA[] = [
  {
    source: 'https://avatars3.githubusercontent.com/u/62948979?s=200&v=4',
    title: 'Dataset',
    description:
      'Dataset Database และ API ที่พร้อมใช้งานสำหรับสถานการณ์ COVID-19 ของประเทศ',
    language: 'Python',
    url: 'https://github.com/Covid19FlashFire/datasets',
  },
  {
    source: 'https://avatars3.githubusercontent.com/u/62948979?s=200&v=4',
    title: 'covidfirelab.com',
    description: 'แหล่งรวบรวม API และ Project เพื่อร่วมกันแก้ไขปัญหา COVID-19',
    language: 'Javascript',
    url: 'https://github.com/Covid19FlashFire/covidfirelab.com',
  },
  {
    source: 'https://avatars3.githubusercontent.com/u/62948979?s=200&v=4',
    title: 'responsive-timeline-media',
    description: 'Responsive timeline of COVID-19 events related to Thai online media',
    language: 'Javascript',
    url: 'https://github.com/Covid19FlashFire/responsive-timeline-media',
  },
  {
    source: 'https://avatars2.githubusercontent.com/u/2325299?s=400&u=861a00298df0fb68620ba4c3789fa3fbc16d1395&v=4',
    title: 'covid-express',
    description: '',
    language: 'Node.js',
    url: 'https://github.com/korrio/covid-express',
  },
]

export default {DATA}
