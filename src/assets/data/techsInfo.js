import {
  SiLaravel,
  SiVuedotjs,
  SiTailwindcss,
  SiJavascript,
  SiJquery,
  SiHtml5,
  SiSass,
  SiReact,
  SiCss3
} from 'react-icons/si';

const SIZE = 50;

export const TechsInfo = {
  Laravel: {
    name: 'Laravel',
    Icon: <SiLaravel size={SIZE} />,
    link: 'https://laravel.com/',
    description: 'The PHP Framework for Web Artisans',
  },
  React: {
    name: 'Reactjs',
    Icon: <SiReact size={SIZE} />,
    link: 'https://es.reactjs.org/',
    description: 'A JavaScript library for building user interfaces',
  },
  Vuejs: {
    name: 'Vuejs',
    Icon: <SiVuedotjs size={SIZE} />,
    link: 'https://vuejs.org/',
    description: 'The Progressive JavaScript Framework',
  },
  TailwindCSS: {
    name: 'Tailwind CSS',
    Icon: <SiTailwindcss size={SIZE} />,
    link: 'https://tailwindcss.com/',
    description:
      'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
  },
  JavaScript: {
    name: 'JavaScript',
    Icon: <SiJavascript size={SIZE} />,
    link: 'https://developer.mozilla.org/es/docs/Web/JavaScript',
    description:
      'JavaScript (JS) is a lightweight, interpreted or compiled just-in-time (just-in-time) programming language with first-class functions.',
  },
  Jquery: {
    name: 'Jquery',
    Icon: <SiJquery size={SIZE} />,
    link: 'https://jquery.com/',
    description:
      'jQuery is a lightweight, "write less, do more", JavaScript library.',
  },
  Sass: {
    name: 'Sass',
    Icon: <SiSass size={SIZE} />,
    link: 'https://sass-lang.com/',
    description:
      'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
  },
  HTML: {
    name: 'HTML',
    Icon: <SiHtml5 size={SIZE} />,
    link: 'https://developer.mozilla.org/es/docs/Web/HTML',
    description:
      'HTML (HyperText Markup Language) is the most basic component of the Web. Defines the meaning and structure of web content.',
  },
  CSS3: {
    name: 'CSS3',
    Icon: <SiCss3 size={SIZE} />,
    link: 'https://developer.mozilla.org/es/docs/Web/CSS',
    description:
      'CSS (Cascading Style Sheets) is a style sheet language used for describing the presentation of a document written in a markup language like HTML.',
  },
};
