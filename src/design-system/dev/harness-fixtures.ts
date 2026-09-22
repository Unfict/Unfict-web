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
    eyebrow: 'Reality-First Infrastructure',
    heading: 'Governed Reality Sync Engine',
    lead: 'Deterministic interface components and governance patterns built for cross-composition stability.',
    primaryAction: { label: 'Explore Specification', href: '/developers' },
    secondaryAction: { label: 'Learn About Unfict', href: '/about' }
  },
  gs1HeroData: {
    eyebrow: 'GS1 Digital Link Pillar',
    heading: 'Authoritative Physical Product Resolution',
    lead: 'Connect barcodes, web URIs, and enterprise systems through persistent, policy-governed resolution.',
    primaryAction: { label: 'Explore Resolution Arch', href: '/developers' },
    secondaryAction: { label: 'Request Integration Preview', href: '/early-access' }
  },
  homeConceptSteps: [
    { title: 'Identity Capture', description: 'Standardized identity resolution across domains.' },
    {
      title: 'State Synchronization',
      description: 'Real-time structural alignment across entities.'
    },
    { title: 'Governance Receipt', description: 'Cryptographic proof of system state.' }
  ],
  gs1ConceptSteps: [
    { title: 'Scan / Request', description: 'Capture standard GS1 barcode or web URI input.' },
    { title: 'Canonical Parse', description: 'Extract GTIN and key qualifiers deterministically.' },
    { title: 'Policy Resolution', description: 'Evaluate authority, context, and access rules.' },
    { title: 'Target Dispatch', description: 'Route to verified destination or data payload.' },
    { title: 'Governance Log', description: 'Record immutable receipt of resolution event.' }
  ],
  gs1DepthPaths: [
    {
      title: 'Enterprise Integration',
      description:
        'Connect existing WMS, ERP, and scanning infrastructure without re-architecting legacy systems.',
      href: '/developers'
    },
    {
      title: 'Standards Conformance',
      description:
        'Review structural alignment with published global standards and open URI resolution specs.',
      href: '/about'
    }
  ],
  homeFinalCta: {
    heading: 'Ready for Reality Sync?',
    subheading: 'Request early access to the developer preview stream.',
    primaryAction: { label: 'Request Early Access', href: '/early-access' },
    secondaryAction: { label: 'Read Technical Docs', href: '/developers' }
  },
  gs1FinalCta: {
    heading: 'Deploy Standard Digital Link Resolution',
    subheading: 'Establish reliable product identity resolution across your supply chain.',
    primaryAction: { label: 'Request Integration Preview', href: '/early-access' }
  },
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
  ]
} as const;
