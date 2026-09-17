import { describe, it, expect } from 'vitest';
import packageJson from '../package.json';

describe('Dependency Policy Tests', () => {
  it('should not contain deferred or prohibited packages in dependencies or devDependencies', () => {
    const prohibitedPatterns = [
      'react',
      'react-dom',
      '@astrojs/react',
      'tailwindcss',
      '@astrojs/cloudflare',
      'wrangler',
      '@astrojs/mdx',
      'lucide',
      'fontawesome'
    ];

    const allDeps = {
      ...(packageJson.dependencies || {}),
      ...(packageJson.devDependencies || {})
    };

    const depNames = Object.keys(allDeps);

    for (const pattern of prohibitedPatterns) {
      const found = depNames.find((dep) => dep === pattern || dep.includes(pattern));
      expect(
        found,
        `Prohibited or deferred dependency found in package.json: ${found}`
      ).toBeUndefined();
    }
  });
});
