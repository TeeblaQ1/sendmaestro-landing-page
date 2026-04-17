export const SITE = {
  productName: 'Transcit',
  tagline: 'The infrastructure powering modern logistics.',
  metaDescription:
    'Transcit is logistics infrastructure for ecommerce and delivery operators: API-based fulfillment, real-time tracking, and connected dispatch operations.',
} as const;

export const HERO = {
  eyebrow: 'Now onboarding early teams',
  headline: 'From checkout to delivery, fully connected.',
  subheadline:
    'Transcit connects ecommerce businesses and logistics operators through APIs and operational tools for faster fulfillment and real-time visibility.',
  cta: 'Join the Waitlist',
  accessTerms: ['Free to join', 'Early access', 'Priority onboarding'],
} as const;

export const TRUST = {
  title: 'Why teams join early',
  items: [
    {
      title: 'API-first integrations',
      description: 'Connect stores and backend systems once, then automate fulfillment.',
      icon: 'api',
    },
    {
      title: 'Live shipment tracking',
      description: 'Keep teams and customers synced with real-time delivery visibility.',
      icon: 'tracking',
    },
    {
      title: 'Dispatch operations tools',
      description: 'Coordinate assignment and status updates from one operations layer.',
      icon: 'dispatch',
    },
  ],
} as const;

export const PROBLEM = {
  title: 'What breaks in logistics today',
  subtitle:
    'Fast-growing commerce teams and logistics operators still lose time to manual handoffs and disconnected workflows.',
  items: [
    'Teams still coordinate fulfillment with spreadsheets, chats, and manual status updates',
    'Ecommerce systems and logistics operations run in separate, disconnected tools',
    'Customers and operators lack shared, real-time delivery visibility',
  ],
} as const;

export const SOLUTION = {
  title: 'How Transcit solves it',
  subtitle:
    'Transcit creates one digital layer between commerce and delivery, so orders flow faster and operations stay in sync.',
  items: [
    'Turn store orders into shipments automatically with API integrations',
    'Give logistics partners practical tools for dispatch and shipment management',
    'Stream real-time tracking and status updates across all stakeholders',
  ],
} as const;

export const HOW_IT_WORKS = {
  title: 'How it works',
  steps: [
    {
      title: 'Integrate once',
      description: 'Connect your store or backend through Transcit APIs.',
    },
    {
      title: 'Automate fulfillment',
      description: 'Orders become shipments instantly, with no manual handoff.',
    },
    {
      title: 'Track every delivery',
      description: 'Operators update statuses in real time from dispatch to drop-off.',
    },
  ],
} as const;

export const AUDIENCE = {
  title: 'Built for both sides of delivery',
  groups: [
    {
      title: 'For ecommerce businesses',
      benefits: [
        'Automate fulfillment from checkout',
        'Reduce manual operations workload',
        'Provide customers with reliable delivery updates',
      ],
    },
    {
      title: 'For logistics companies',
      benefits: [
        'Receive and process jobs through APIs',
        'Manage shipments and dispatch from one workflow',
        'Scale delivery operations with higher visibility',
      ],
    },
  ],
} as const;

export const FEATURES = {
  title: 'Core platform capabilities',
  items: [
    {
      title: 'Integration APIs',
      description: 'Connect stores, ERPs, or order systems to fulfillment flows.',
    },
    {
      title: 'Shipment management',
      description: 'Create, assign, and monitor shipments in one operations layer.',
    },
    {
      title: 'Dispatch assignment',
      description: 'Coordinate dispatch ownership and reduce response time.',
    },
    {
      title: 'Live tracking',
      description: 'Give teams and customers real-time shipment status visibility.',
    },
    {
      title: 'Webhooks and notifications',
      description: 'React to milestones instantly inside your existing systems.',
    },
  ],
} as const;

export const ABOUT = {
  title: 'About',
  body:
    'Transcit is a technology-driven logistics infrastructure platform for ecommerce businesses and logistics operators. It automates fulfillment through APIs while giving partners practical tools for dispatch, shipment operations, and tracking.',
} as const;

export const WAITLIST = {
  title: 'Get early access to Transcit',
  subtitle:
    'Join the waitlist to be among the first teams we onboard. We will contact you as soon as access opens.',
  cta: 'Get Early Access',
  fields: {
    email: 'Work email',
    fullName: 'Full name',
    companyName: 'Company name',
    userType: 'How do you want to use Transcit?',
  },
  userTypes: {
    client: 'Become a client',
    partner: 'Become a partner',
  },
  tooltips: {
    client:
      'Use logistics features for your ecommerce business: automated fulfillment, tracking, and coordination with delivery partners.',
    partner:
      'Use logistics management tools and connect with ecommerce businesses that need fulfillment and delivery services.',
  },
  disclaimer:
    'By submitting this form you agree to our Terms and Privacy Policy.',
} as const;

export type WaitlistUserType = 'client' | 'partner';
