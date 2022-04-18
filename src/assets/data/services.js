import { portrait, product, corporate, event, wedding, editorial } from '../';

export const serviceList = [
  {
    id: 1,
    category: 'Portrait',
    img: portrait,
    services: ['60 minute session', '20 digital images', 'Up to 4 outfit changes', 'Photo Editing'],
    price: 100,
  },

  {
    id: 2,
    category: 'Corporate',
    img: corporate,
    services: ['2.5 hours of coverage', '60+ digital images', 'Facebook cover', 'image release'],
    price: 700,
  },

  {
    id: 3,
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
    id: 4,
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
    id: 5,
    category: 'Random Events',
    img: event,
    services: ['2 hours of coverage', '40+ digital images', '1-4 person', 'Up to 3 outfit change'],
    price: 350,
  },
  {
    id: 6,
    category: 'Editorial',
    img: editorial,
    services: ['1 hours of coverage', '30+ digital images', 'Cover Image', 'Pro photo editing'],
    price: 150,
  },
];
