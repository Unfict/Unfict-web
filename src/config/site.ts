export const siteConfig = {
  name: 'Unfict',
  legacyName: 'Zyppi',
  siteUrl: 'https://unfict.com',
  brandExpression: 'Unfict — Reality Sync'
} as const;

export type SiteConfig = typeof siteConfig;
