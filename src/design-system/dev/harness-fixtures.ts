export const HARNESS_FIXTURES = {
  notice: 'STRUCTURAL PLACEHOLDER — NOT VISUAL AUTHORITY',
  headerNav: [
    { label: 'GS1 Digital Link', href: '/gs1-digital-link' },
    { label: 'Developers', href: '/developers' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Request developer preview', href: '/early-access', isCta: true }
  ],
  faqItems: [
    {
      id: 'harness-faq-1',
      question: 'What is Unfict?',
      directAnswer: 'Unfict is a governed reality sync engine for physical and digital systems.'
    },
    {
      id: 'harness-faq-2',
      question: 'How does Unfict integrate with existing GS1 resolution?',
      directAnswer:
        'Unfict resolves GS1 Digital Link URIs alongside canonical identity frameworks without requiring core infrastructure replacement.'
    }
  ],
  heroData: {
    heading: 'Deterministic Interface Engine Foundation',
    lead: 'Governed component primitives and patterns built for stable visual design extraction.',
    primaryAction: { label: 'Explore Specification', href: '/developers' },
    secondaryAction: { label: 'Learn About Unfict', href: '/about' }
  },
  conceptSteps: [
    { title: 'Identity Capture', description: 'Standardized identity resolution across domains.' },
    {
      title: 'State Synchronization',
      description: 'Real-time structural alignment across entities.'
    },
    { title: 'Governance Receipt', description: 'Cryptographic proof of system state.' }
  ],
  integrationPoints: [
    {
      title: 'API Coexistence',
      description: 'Operates alongside current enterprise backend services.'
    },
    {
      title: 'Non-Disruptive Flow',
      description: 'Zero downtime migration and progressive enhancement.'
    }
  ],
  articleData: {
    category: 'Architecture',
    title: 'Governed Interface Layer Design Invariants',
    lead: 'How structural design owners decouple semantic logic from visual evolution.',
    publishDate: '2026-09-21',
    author: 'Unfict Engineering',
    readingTime: '4 min read'
  },
  relatedArticles: [
    {
      href: '/insights/gs1-digital-link',
      title: 'GS1 Digital Link Resolution Architecture',
      description: 'Technical guide to physical product resolution.'
    }
  ],
  finalCtaData: {
    heading: 'Ready for Reality Sync?',
    subheading: 'Request early access to the developer preview stream.',
    primaryAction: { label: 'Request Early Access', href: '/early-access' }
  }
} as const;
