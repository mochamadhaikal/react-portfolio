import { TechsInfo } from './techsInfo';
import kejarid from '../../utils/projectsPhotos/kejarid.png';
import kurikulum from '../../utils/projectsPhotos/kurikulum.png';
import omdb from '../../utils/projectsPhotos/omdb.png';
import notFound from '../../utils/projectsPhotos/notfound.png';
const {
  React,
  Laravel,
  Vuejs,
  JavaScript,
  Jquery,
  Sass,
  TailwindCSS,
  HTML,
  CSS3,
} = TechsInfo;

export const projectsData = [
  {
    id: 1,
    title: 'Kejar.id',
    description:'Learning content provider, learning management system and school management system',
    image: kejarid,
    techInfo: [Laravel, JavaScript, Jquery, Sass],
    preview: 'https://kejar.id/login',
    repo: 'https://github.com/mochamadhaikal/',
  },
  {
    id: 2,
    title: 'SIMAP Kurikulum',
    description:
      'Built to supplement internal school curriculum department Gradebook & Reportbook management.',
    image: kurikulum,
    techInfo: [Laravel, Vuejs, Jquery, JavaScript],
    preview: 'https://simapkurikulumwikrama.my.id/login',
    repo: 'https://github.com/mochamadhaikal/SIMAP-Kurikulum',
  },
  {
    id: 3,
    title: 'OMDB React',
    description:'React web app using OMDB API',
    image: omdb,
    techInfo: [React],
    preview: '',
    repo: 'https://github.com/mochamadhaikal/omdb-with-react',
  },
  {
    id: 4,
    title: 'Animal Finder',
    description:'Animal Finder is a web application that works for animal search (still static not fixed)',
    image: notFound,
    techInfo: [HTML, CSS3, JavaScript, TailwindCSS],
    preview: '',
    repo: 'https://github.com/mochamadhaikal/AnimalsFinder',
  },
];
