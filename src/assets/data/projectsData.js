import { TechsInfo } from './techsInfo'
import kejarid from '../../utils/projectsPhotos/kejarid.png'
import kurikulum from '../../utils/projectsPhotos/kurikulum.png'
import shipper from '../../utils/projectsPhotos/shipper.png'
import tonase from '../../utils/projectsPhotos/tonase.png'
const { React, Nextjs, Laravel, Vuejs, JavaScript, Jquery, Sass, TailwindCSS, Sticthes } = TechsInfo

export const projectsData = [
  {
    id: 1,
    title: 'Kejar.id',
    description: 'Learning content provider, learning management system and school management system',
    image: kejarid,
    techInfo: [Laravel, JavaScript, Jquery, Sass],
    preview: 'https://kejar.id/login',
    repo: 'https://github.com/mochamadhaikal/',
  },
  {
    id: 2,
    title: 'SIMAP Kurikulum',
    description: 'Built to supplement internal school curriculum department Gradebook & Reportbook management.',
    image: kurikulum,
    techInfo: [Laravel, Vuejs, Jquery, JavaScript],
    preview: 'https://simapkurikulumwikrama.my.id/login',
    repo: 'https://github.com/mochamadhaikal/SIMAP-Kurikulum',
  },
  {
    id: 3,
    title: 'Shipper Test',
    description:
      'Shipper is a logistics aggregator in Indonesia that provides goods delivery services to make your delivery easier',
    image: shipper,
    techInfo: [JavaScript, React, Nextjs, Sticthes],
    preview: 'https://shipper-fe-test.netlify.app/',
    repo: 'https://github.com/mochamadhaikal/shipper-fe-test',
  },
  {
    id: 4,
    title: 'Tonase Test',
    description: 'Tonase is the first logistics marketplace platform in Indonesia (API sometimes errors)',
    image: tonase,
    techInfo: [JavaScript, React, Nextjs, TailwindCSS],
    preview: 'https://tonase-test.netlify.app/',
    repo: 'https://github.com/mochamadhaikal/tonase-test',
  },
]
