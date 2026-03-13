import pandanKitchenImage from '../assets/pandan-kitchen-cover.jpg';
import aungMarketImage from '../assets/aung-market-cover.jpeg';
import portfolioSiteImage from '../assets/portfolio-site.svg';

export const portfolioData = {
  name: 'Myat Thu Aung',
  role: 'Junior Full-Stack Developer',
  availability: 'Open to internships and junior developer roles',
  email: 'myatthuaung@kbtc.edu.mm',
  location: 'KBTC student developer',
  githubUrl: 'https://github.com/myatthuaung3305',
  githubLabel: '@myatthuaung3305',
  heroIntro:
    'I build practical web applications with React, Flask, Laravel, PHP, and SQL.',
  heroSummary:
    'My work focuses on turning real workflows into usable products, from polished frontends to admin dashboards and data-backed features.',
  about: [
    'I am a computing student who enjoys building end-to-end products instead of isolated pages. My projects usually start with a clear user task, then grow into responsive interfaces, data models, and admin tooling.',
    'Recent work includes a restaurant ordering system, an accessories marketplace, and this portfolio site. I care about clean structure, responsive behavior, and features that solve an actual problem for the user.'
  ],
  highlights: [
    'Build full-stack student projects with React, Flask, Laravel, PHP, and SQL.',
    'Create responsive interfaces with cleaner navigation and clearer content hierarchy.',
    'Implement practical flows such as carts, checkout, CRUD dashboards, and admin panels.'
  ],
  focusAreas: [
    'Responsive frontend development',
    'Admin dashboards and CRUD flows',
    'Cart, checkout, and ordering logic',
    'Clean handoff between UI and backend'
  ],
  stats: [
    { value: '3+', label: 'Featured projects' },
    { value: '4', label: 'Core web stacks' },
    { value: '100%', label: 'Hands-on builds' }
  ],
  skillGroups: [
    {
      title: 'Frontend',
      skills: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Responsive Design']
    },
    {
      title: 'Backend',
      skills: ['Python', 'Flask', 'PHP', 'Laravel', 'REST-style flows']
    },
    {
      title: 'Database & Tools',
      skills: ['MySQL', 'SQLite', 'Git', 'GitHub', 'VS Code']
    }
  ],
  projects: [
    {
      title: 'Pandan Kitchen',
      type: 'Laravel Restaurant Ordering System',
      description:
        'A Laravel restaurant ordering system for browsing Burmese menu items, searching and filtering the menu, placing take out orders, and tracking customer order history.',
      impact:
        'The final build adds a My Orders page, admin summary cards, staged order status updates, and a clearer receipt flow for customers and staff.',
      stack: ['Laravel', 'PHP', 'SQLite', 'Blade', 'CSS'],
      image: pandanKitchenImage,
      repoUrl: 'https://github.com/myatthuaung3305/PK_Restaurant'
    },
    {
      title: 'Aung Market',
      type: 'Flask E-Commerce System',
      description:
        'A Flask accessories store with product search, category filters, sorting, product detail pages, cart and checkout flow, and customer order history.',
      impact:
        'The final build adds related items, admin summary cards, clearer customer and admin status badges, and a stronger mobile shopping flow.',
      stack: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Jinja'],
      image: aungMarketImage,
      repoUrl: 'https://github.com/myatthuaung3305/aung_market'
    },
    {
      title: 'Portfolio Site',
      type: 'Personal Brand Website',
      description:
        'A portfolio website that presents projects, skills, and contact details with a more polished visual system and responsive layout.',
      impact:
        'Built to create a stronger first impression, improve mobile navigation, and present projects with clearer content structure.',
      stack: ['React', 'JavaScript', 'CSS', 'Responsive UI'],
      image: portfolioSiteImage,
      repoUrl: 'https://github.com/myatthuaung3305/portfolio-site'
    }
  ],
  footerNote: 'Built with React and custom CSS.'
};
