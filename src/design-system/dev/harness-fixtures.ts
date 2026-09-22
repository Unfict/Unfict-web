export const HARNESS_FIXTURES = {
  notice: 'NON-ROUTE SYSTEM HARNESS — CROSS-COMPOSITION RECONSTRUCTION',
  headerNav: [
    { label: 'GS1 Digital Link', href: '/gs1-digital-link' },
    { label: 'Developers', href: '/developers' },
    { label: 'Insights', href: '/insights' },
    { label: 'About', href: '/about' },
    { label: 'Request developer preview', href: '/early-access', isCta: true }
  ],
  homeHeroData: {
    eyebrow: 'Structural Component Model',
    heading: 'Governed Interface Layer Foundation',
    lead: 'Deterministic interface components and layout patterns built for cross-composition design extraction.',
    primaryAction: { label: 'Explore Specification', href: '/developers' },
    secondaryAction: { label: 'Learn About Design System', href: '/about' }
  },
  gs1HeroData: {
    eyebrow: 'GS1 Digital Link Pillar',
    heading: 'Physical Product URI Resolution',
    lead: 'Connect standard identifiers, web URIs, and enterprise systems through persistent structural resolution.',
    primaryAction: { label: 'Explore Resolution Architecture', href: '/developers' },
    secondaryAction: { label: 'Request Integration Preview', href: '/early-access' }
  },
  homeConceptSteps: [
    {
      title: 'Identity Entry',
      description: 'Standardized identity representation across domains.'
    },
    { title: 'State Mapping', description: 'Structural alignment across system boundaries.' },
    { title: 'Governance Receipt', description: 'Record of system state transformation.' }
  ],
  gs1ConceptSteps: [
    { title: 'Scan / Request Input', description: 'Capture standard identifier or web URI input.' },
    {
      title: 'Canonical Parsing',
      description: 'Extract key identifiers and qualifiers deterministically.'
    },
    { title: 'Policy Evaluation', description: 'Evaluate authority and context rules.' },
    { title: 'Target Dispatch', description: 'Route request to verified destination payload.' },
    { title: 'Resolution Receipt', description: 'Record receipt of resolution event.' }
  ],
  gs1DepthPaths: [
    {
      title: 'Enterprise Integration',
      description:
        'Connect existing scanning and database infrastructure without re-architecting core services.',
      href: '/developers'
    },
    {
      title: 'Standards Alignment',
      description: 'Review structural alignment with published URI resolution specifications.',
      href: '/about'
    }
  ],
  homeFinalCta: {
    heading: 'Ready for Interface Integration?',
    subheading: 'Request access to the component development preview stream.',
    primaryAction: { label: 'Request Early Access', href: '/early-access' },
    secondaryAction: { label: 'Read Technical Specs', href: '/developers' }
  },
  gs1FinalCta: {
    heading: 'Deploy Standard Digital Link Resolution',
    subheading: 'Establish standard product identity resolution across supply chain touchpoints.',
    primaryAction: { label: 'Request Integration Preview', href: '/early-access' }
  },
  faqItems: [
    {
      id: 'harness-faq-1',
      question: 'What is the Interface Harness?',
      directAnswer:
        'The Interface Harness is an internal inspection surface used to verify design extraction contracts.'
    },
    {
      id: 'harness-faq-2',
      question: 'How does GS1 Digital Link resolution function?',
      directAnswer:
        'It parses standard web URIs containing GS1 key structures and routes them according to system rules.'
    }
  ]
} as const;
