export const menu = {
  open: {
    width: '100vw',
    height: '100vh',
    top: '-2.2rem',
    marginRight: '-1.2rem',
    right: 0,
    opacity: 1,
    transition: { duration: 0.6, type: 'tween', ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: '40px',
    height: '40px',
    top: '-1rem',
    right: '-4px',
    opacity: 0.9,
    marginRight: '0.1rem',
    transition: {
      duration: 0.6,
      type: 'tween',
      ease: [0.74, 0, 0.24, 1],
    },
  },
};


export const links = [
  {
    url: '#home',
    linkTo: 'Home',
  },
  {
    url: '#about',    
    linkTo: 'About',
  },
  {
    url: '#programs',  
    linkTo: 'Programs',
  },
  {
    url: '#team',   
    linkTo: 'Team',
  },
  {
    url: '#faqs',  
    linkTo: 'FAQs',
  },
];