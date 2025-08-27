// Application constants for Andrew Distribution website

// Route constants
export const ROUTES = {
  HOME: '/',
  ABOUT: '/about',
  CONTACT: '/contact',
  TRANSPORTATION: '/transportation',
  NEWSPAPERS: '/newspapers',
  MAGAZINES: '/magazines',
  CAREERS: '/careers',
} as const;

// Contact information
export const CONTACT_INFO = {
  PHONE: '(708) 344-3200',
  EMAIL: 'info@andrewdistribution.com',
  ADDRESS: 'Chicago, IL and surrounding areas',
  HOURS: 'Monday - Friday: 6:00 AM - 6:00 PM',
} as const;

// Company statistics
export const COMPANY_STATS = {
  YEARS_IN_BUSINESS: 30,
  VEHICLE_COUNT: 225,
  STATES_SERVED: 15,
  ON_TIME_RATE: 99.5,
} as const;

// Service categories
export const SERVICES = [
  { 
    name: "Transportation & Logistics", 
    href: ROUTES.TRANSPORTATION,
    description: "Full-service transportation and logistics solutions"
  },
  { 
    name: "Newspaper Distribution", 
    href: ROUTES.NEWSPAPERS,
    description: "Specialized newspaper delivery and distribution"
  },
  { 
    name: "Magazines & Books", 
    href: ROUTES.MAGAZINES,
    description: "Magazine and book distribution services"
  },
] as const;

// Navigation menu items
export const NAVIGATION_ITEMS = [
  { name: 'Home', href: ROUTES.HOME },
  { name: 'About Us', href: ROUTES.ABOUT },
  { name: 'Services', href: '#', dropdown: SERVICES },
  { name: 'Contact', href: ROUTES.CONTACT },
  { name: 'Careers', href: ROUTES.CAREERS },
] as const;

// Site metadata
export const SITE_CONFIG = {
  NAME: 'Andrew Distribution',
  DESCRIPTION: 'Reliable distribution services across the Midwest for 30+ years. Newspapers, magazines, books, and freight logistics.',
  URL: 'https://andrew-beta.vercel.app',
  KEYWORDS: [
    'distribution',
    'logistics', 
    'newspaper distribution',
    'magazine distribution',
    'freight',
    'Midwest',
    'Chicago',
    'transportation'
  ],
} as const;

// Social media links
export const SOCIAL_LINKS = {
  // Add social media links when available
} as const;

// Business hours
export const BUSINESS_HOURS = {
  MONDAY: '6:00 AM - 6:00 PM',
  TUESDAY: '6:00 AM - 6:00 PM', 
  WEDNESDAY: '6:00 AM - 6:00 PM',
  THURSDAY: '6:00 AM - 6:00 PM',
  FRIDAY: '6:00 AM - 6:00 PM',
  SATURDAY: 'Emergency services only',
  SUNDAY: 'Emergency services only',
} as const;

// Form validation constants
export const VALIDATION = {
  EMAIL_REGEX: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_REGEX: /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/,
  MIN_MESSAGE_LENGTH: 10,
  MAX_MESSAGE_LENGTH: 1000,
} as const;
