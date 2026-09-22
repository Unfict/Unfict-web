export const HARNESS_FIXTURES = {
  notice: 'NON-ROUTE SYSTEM HARNESS — CROSS-COMPOSITION RECONSTRUCTION',
  headerNav: [
    { label: 'Primary Link Alpha', href: '/link-alpha' },
    { label: 'Primary Link Beta', href: '/link-beta' },
    { label: 'Primary Link Gamma', href: '/link-gamma' },
    { label: 'Primary Link Delta', href: '/link-delta' },
    { label: 'Call To Action', href: '/cta-target', isCta: true }
  ],
  homeHeroData: {
    eyebrow: 'Interface System Layer',
    heading: 'Primary Section Heading Example',
    lead: 'Secondary introductory lead copy demonstrating layout typography and structural line wrapping.',
    primaryAction: { label: 'Primary Action Target', href: '/action-primary' },
    secondaryAction: { label: 'Subordinate Link Target', href: '/action-secondary' }
  },
  gs1HeroData: {
    eyebrow: 'Secondary Composition Layer',
    heading: 'Alternative Section Heading Example',
    lead: 'Secondary introductory lead copy demonstrating layout typography across composition boundaries.',
    primaryAction: { label: 'Primary Action Target', href: '/action-primary' },
    secondaryAction: { label: 'Subordinate Link Target', href: '/action-secondary' }
  },
  homeConceptSteps: [
    { title: 'Step Sequence Alpha', description: 'First step description text in sequence.' },
    { title: 'Step Sequence Beta', description: 'Second step description text in sequence.' },
    { title: 'Step Sequence Gamma', description: 'Third step description text in sequence.' }
  ],
  gs1ConceptSteps: [
    { title: 'Step Sequence One', description: 'First step description text in sequence.' },
    { title: 'Step Sequence Two', description: 'Second step description text in sequence.' },
    { title: 'Step Sequence Three', description: 'Third step description text in sequence.' },
    { title: 'Step Sequence Four', description: 'Fourth step description text in sequence.' },
    { title: 'Step Sequence Five', description: 'Fifth step description text in sequence.' }
  ],
  gs1DepthPaths: [
    {
      title: 'Depth Path Alpha',
      description: 'First depth path card description text for progressive navigation.',
      href: '/path-alpha'
    },
    {
      title: 'Depth Path Beta',
      description: 'Second depth path card description text for progressive navigation.',
      href: '/path-beta'
    }
  ],
  homeFinalCta: {
    heading: 'Concluding Section Heading',
    subheading: 'Concluding section lead description text demonstrating dual action layout.',
    primaryAction: { label: 'Primary Action Target', href: '/action-primary' },
    secondaryAction: { label: 'Subordinate Link Target', href: '/action-secondary' }
  },
  gs1FinalCta: {
    heading: 'Concluding Section Heading',
    subheading: 'Concluding section lead description text demonstrating single action layout.',
    primaryAction: { label: 'Primary Action Target', href: '/action-primary' }
  },
  faqItems: [
    {
      id: 'harness-faq-1',
      question: 'Sample Question Entry Alpha?',
      directAnswer: 'Sample direct answer explanation text for question entry alpha.'
    },
    {
      id: 'harness-faq-2',
      question: 'Sample Question Entry Beta?',
      directAnswer: 'Sample direct answer explanation text for question entry beta.'
    }
  ]
} as const;
