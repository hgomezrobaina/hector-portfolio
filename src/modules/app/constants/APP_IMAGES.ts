export const APP_IMAGES = {
  ME_IMAGE: { image: '/images/me.png', alt: '3D avatar illustration of Héctor Gómez' },
  PROJECTS: {
    CHACA_NPM_IMAGE: {
      image: '/images/projects/chaca-npm.webp',
      alt: 'Chaca logo, an npm package for generating realistic fake datasets',
    },
    CHACA_WEB_IMAGE: {
      image: '/images/projects/chaca-web.webp',
      alt: 'Screenshot of the Chaca Web schema editor showing dataset relations between entities',
    },
    CRYPTO_IMAGE: {
      image: '/images/projects/crypto.webp',
      alt: 'Screenshot of the CH-Crypto landing page displaying live cryptocurrency lending rates',
    },
    DEALERNODE: {
      image: '/images/projects/dealernode.webp',
      alt: 'Screenshot of the Autodirect Dealernode dashboard showing car dealership sales and inventory metrics',
    },
    VISA4UCBA: {
      image: '/images/projects/visa4cuba.webp',
      alt: 'Screenshot of the Visa4Cuba homepage for applying to Cuba travel visas online',
    },
  },
  LOGO: { image: '/logo/portfolio_logo.png', alt: 'Héctor Gómez portfolio logo' },
  ABOUT_ME: { image: '/images/about-me.webp', alt: 'Illustration of Héctor Gómez coding at his desk' },
  SKILLS: {
    CSS: { image: '/images/skills/css.svg', alt: 'css' },
    GIT: { image: '/images/skills/git.svg', alt: 'git' },
    HTML: { image: '/images/skills/html.svg', alt: 'html' },
    JS: { image: '/images/skills/javascript.svg', alt: 'javascript' },
    MONGODB: { image: '/images/skills/mongodb.svg', alt: 'mongodb' },
    NEXT: { image: '/images/skills/next.svg', alt: 'nextjs' },
    PYTHON: { image: '/images/skills/python.svg', alt: 'python' },
    TAILWIND: { image: '/images/skills/tailwindcss.svg', alt: 'tailwind' },
    TS: { image: '/images/skills/typescript.svg', alt: 'typescript' },
    POSTGRESQL: { image: '/images/skills/postgresql.svg', alt: 'postgresql' },
    DOCKER: { image: '/images/skills/docker.svg', alt: 'docker' },
    GO: { image: '/images/skills/go.svg', alt: 'golang' },
    REACT: { image: '/images/skills/react.svg', alt: 'react' },
    GRAPHQL: { image: '/images/skills/graphql.svg', alt: 'graphql' },
    NESTJS: { image: '/images/skills/nestjs.svg', alt: 'nestjs' },
    ANGULAR: { image: '/images/skills/angular.svg', alt: 'angular' },
    VUE: { image: '/images/skills/vue.svg', alt: 'vue' },
  },
  FLAGS: {
    US: { image: '/images/flags/us.png', alt: 'english-language' },
    SPAIN: { image: '/images/flags/spain.png', alt: 'spanish-language' },
  },
  ARTICLES: {
    FORM_VALIDATION: {
      image: '/images/articles/form-validation.jpg',
      alt: 'Abstract illustration of a form field validated by domain rules',
    },
    NESTJS_REPOSITORY: {
      image: '/images/articles/nest-repository.png',
      alt: 'Abstract illustration of a domain collection backed by a database',
    },
    NESTJS_CRITERIA: {
      image: '/images/articles/criteria-nestjs.png',
      alt: 'Abstract illustration of typed criteria filters with a non-public field excluded',
    },
  },
} as const
