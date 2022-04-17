import { portrait, product, corporate, event, wedding } from '../';

export const serviceList = [
  {
    category: 'Portrait',
    img: portrait,
    services: ['60 minute session', '20 digital images', 'Up to 4 outfit changes', 'Photo Editing'],
    price: 100,
  },

  {
    category: 'Corporate',
    img: corporate,
    services: ['2.5 hours of coverage', '60+ digital images', 'Facebook cover', 'image release'],
    price: 700,
  },

  {
    category: 'Wedding',
    img: wedding,
    services: [
      '6 hours of coverage',
      '120+ digital images',
      'Custom Designed Photo Album',
      'image release',
    ],
    price: 1000,
  },
  {
    category: 'Product',
    img: product,
    services: [
      '1.5 hour of coverage',
      'up to 15 products',
      '30 digital images',
      'Pro photo editing',
    ],
    price: 500,
  },
  {
    category: 'Random Events',
    img: event,
    services: ['2 hours of coverage', '40+ digital images', '1-4 person', 'Up to 3 outfit change'],
    price: 350,
  },
];
