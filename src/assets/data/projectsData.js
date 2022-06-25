import { TechsInfo } from './techsInfo';
import kejarid from '../../utils/projectsPhotos/kejarid.png';
import kurikulum from '../../utils/projectsPhotos/kurikulum.png';
import omdb from '../../utils/projectsPhotos/omdb.png';
import animal from '../../utils/projectsPhotos/animal.png';
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
    userStories: [
      '✅ User story: I can search for cat breeds and select a breed of my choice',
      '✅ User story: I can see the most popular searched cat breeds summary on the homepage',
      '✅ User story: I can see the top 10 most searched cat breeds',
      '✅ User story: I can see the breed details including description, temperament, origin, life span,adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly',
      '✅ User story: I can see more photo of the breed',
      '✅ User story: On mobile, when I select the search option, a modal for breed search should pop up',
    ],
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
    userStories: [
      '✅ User story: I can see a list of jobs in a city by default',
      '✅ User story: I can search for jobs with a given keyword',
      '✅ User story: I can search for jobs with a city name, zip code, or other location',
      '✅ User story: I can select one option from at least 4 pre-defined options',
      '✅ User story: I can search for a full-time job only',
      '✅ User story: I can see a list of jobs with their logo, company name, location, and posted time.',
      '✅ User story: When I select a job, I can see job descriptions and how to apply like the given design.',
      '✅ User story: When I am on the job details page, I can go back to the search page',
      '✅ User story (optional): I can see a list of jobs in the closest city from my location by default',
      '✅ User story (optional): I can see jobs on different pages, 5 items on each page',
    ],
    techInfo: [Laravel, Vuejs, Jquery, JavaScript],
    preview: 'https://simapkurikulumwikrama.my.id/login',
    repo: 'https://github.com/mochamadhaikal/SIMAP-Kurikulum',
  },
  {
    id: 3,
    title: 'OMDB React',
    description:'React web app using OMDB API',
    image: omdb,
    userStories: [
      'When I select the items tab, I can see a list of items under different categories.',
      'I can add a new item with name, category, note, and image.',
      'When I add a new item, I can select one from the existing categories or add a new one if the category does not exist',
      'When I select an item, I can see its details and I can choose to add the current list or delete the item.',
      'I can add items to the current list',
      'I can increase the number of item in the list',
      'I can remove the item from the list',
      'I can save/update the list with a name (user can have only one active list at a time)',
      'I can toggle between editing state and completing state',
      'When I am at completing state, I can save my progress by selecting the item',
      'I can cancel the active list',
      'When I try to cancel a list, I can see a confirmation notification',
      'I can see my shopping history and I can see the details of it',
      'I can see some statistics: top items, top categories, and monthly comparison. (Tips: use libraries like recharts for the graph)',
      'The user can access his information thanks to Redux Persist and Local Storage',
    ],
    techInfo: [React],
    preview: '',
    repo: 'https://github.com/mochamadhaikal/omdb-with-react',
  },
  {
    id: 4,
    title: 'Animal Finder',
    description:'Learning content provider, learning management system and school management system',
    image: animal,
    userStories: [
      '✅ User story: I can search for cat breeds and select a breed of my choice',
      '✅ User story: I can see the most popular searched cat breeds summary on the homepage',
      '✅ User story: I can see the top 10 most searched cat breeds',
      '✅ User story: I can see the breed details including description, temperament, origin, life span,adaptability, affection level, child-friendly, grooming, intelligence, health issues, social needs, stranger friendly',
      '✅ User story: I can see more photo of the breed',
      '✅ User story: On mobile, when I select the search option, a modal for breed search should pop up',
    ],
    techInfo: [HTML, CSS3, JavaScript, TailwindCSS],
    preview: '',
    repo: 'https://github.com/mochamadhaikal/AnimalsFinder',
  },
];
