import { describe, it, expect } from 'vitest';
import { siteConfig } from '../src/config/site';
import { fsExists } from './test-utils';

describe('Bootstrap Foundation Tests', () => {
  it('should have authoritative site configuration', () => {
    expect(siteConfig.name).toBe('Unfict');
    expect(siteConfig.legacyName).toBe('Zyppi');
    expect(siteConfig.siteUrl).toBe('https://unfict.com');
  });

  it('should verify all required route shell files exist', () => {
    const requiredRoutes = [
      'src/pages/index.astro',
      'src/pages/gs1-digital-link.astro',
      'src/pages/about.astro',
      'src/pages/faq.astro',
      'src/pages/developers.astro',
      'src/pages/insights/index.astro',
      'src/pages/insights/[id].astro',
      'src/pages/early-access.astro',
      'src/pages/privacy.astro',
      'src/pages/terms.astro',
      'src/pages/404.astro'
    ];

    for (const routePath of requiredRoutes) {
      expect(fsExists(routePath), `Missing expected route file: ${routePath}`).toBe(true);
    }
  });
});
