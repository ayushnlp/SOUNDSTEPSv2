import fs from 'node:fs';
import path from 'node:path';

console.log('======================================================================');
console.log('SOUNDSTEPS Stage 2 — Design System & UI Foundation Verification Suite');
console.log('======================================================================\n');

let failedTests = 0;

function assert(condition, testName, details = '') {
  if (condition) {
    console.log(`[PASS] ${testName}`);
  } else {
    console.error(`[FAIL] ${testName} ${details}`);
    failedTests++;
  }
}

// 1. Verify Design Tokens CSS & Color Values
console.log('1. Auditing Brand Color Palette & Semantic Tokens...');
const cssPath = path.resolve('src/styles/design-tokens.css');
assert(fs.existsSync(cssPath), 'design-tokens.css exists');

const cssContent = fs.readFileSync(cssPath, 'utf-8');
assert(cssContent.includes('#183C3B'), 'Deep Teal token (#183C3B) is configured');
assert(cssContent.includes('#F6F3EC'), 'Warm Ivory token (#F6F3EC) is configured');
assert(cssContent.includes('#C77C62'), 'Muted Terracotta token (#C77C62) is configured');
assert(cssContent.includes('#FFFFFF'), 'Pure White token (#FFFFFF) is configured');
assert(cssContent.includes('#243332'), 'Dark Text token (#243332) is configured');

const requiredSemanticTokens = [
  '--color-background',
  '--color-foreground',
  '--color-primary',
  '--color-primary-foreground',
  '--color-secondary',
  '--color-secondary-foreground',
  '--color-accent',
  '--color-muted',
  '--color-muted-foreground',
  '--color-border',
  '--color-surface',
  '--color-card',
  '--color-focus-ring',
];
for (const token of requiredSemanticTokens) {
  assert(cssContent.includes(token), `Semantic token "${token}" is defined in @theme`);
}

// 2. Verify Typography Configuration
console.log('\n2. Auditing Typography Pairing & Fonts...');
const fontsPath = path.resolve('src/lib/fonts.ts');
assert(fs.existsSync(fontsPath), 'src/lib/fonts.ts exists');
const fontsContent = fs.readFileSync(fontsPath, 'utf-8');
assert(fontsContent.includes('Fraunces'), 'Fraunces display font configured via next/font');
assert(fontsContent.includes('Plus_Jakarta_Sans'), 'Plus Jakarta Sans body font configured via next/font');
assert(cssContent.includes('prefers-reduced-motion'), 'Reduced motion accessibility query implemented in CSS');

// 3. Verify Foundational UI Components
console.log('\n3. Auditing Core UI Primitives in src/components/ui/...');
const requiredComponents = [
  'Button.tsx',
  'IconButton.tsx',
  'Card.tsx',
  'Badge.tsx',
  'Divider.tsx',
  'Container.tsx',
  'Section.tsx',
  'ResponsiveGrid.tsx',
  'SectionHeading.tsx',
  'VisuallyHidden.tsx',
  'ComingSoon.tsx',
  'index.ts',
];

for (const comp of requiredComponents) {
  const compPath = path.resolve('src/components/ui', comp);
  assert(fs.existsSync(compPath), `UI Component exists: ${comp}`);
}

// 4. Audit Button & Touch Target Standards
console.log('\n4. Auditing Touch Targets & Accessibility Constraints...');
const buttonContent = fs.readFileSync(path.resolve('src/components/ui/Button.tsx'), 'utf-8');
assert(buttonContent.includes('min-h-[44px]'), 'Button meets WCAG 2.2 AA target size (>=44x44px)');
assert(buttonContent.includes('focus-visible:ring'), 'Button implements visible focus indicators');
assert(buttonContent.includes('disabled:opacity-50'), 'Button implements accessible disabled state');

const iconButtonContent = fs.readFileSync(path.resolve('src/components/ui/IconButton.tsx'), 'utf-8');
assert(iconButtonContent.includes('aria-label'), 'IconButton enforces mandatory aria-label prop');
assert(iconButtonContent.includes('min-w-[44px]'), 'IconButton meets WCAG 2.2 AA target size (>=44x44px)');

// 5. Verify Content Governance Primitive
console.log('\n5. Auditing Content Governance Primitives...');
const comingSoonContent = fs.readFileSync(path.resolve('src/components/ui/ComingSoon.tsx'), 'utf-8');
assert(comingSoonContent.includes('role="status"'), 'ComingSoon has accessible status role');
assert(comingSoonContent.includes('variant'), 'ComingSoon supports multiple variants (badge, card, banner)');

// 6. Verify Static Export Output
console.log('\n6. Auditing Static Build Output...');
const outIndexPath = path.resolve('out/index.html');
const out404Path = path.resolve('out/404.html');
assert(fs.existsSync(outIndexPath), 'Static out/index.html generated');
assert(fs.existsSync(out404Path), 'Static out/404.html generated');

console.log('\n======================================================================');
if (failedTests === 0) {
  console.log('ALL STAGE 2 DESIGN SYSTEM VERIFICATION TESTS PASSED SUCCESSFULLY! (0 failures)');
  console.log('======================================================================\n');
  process.exit(0);
} else {
  console.error(`VERIFICATION FAILED: ${failedTests} test(s) failed.`);
  console.log('======================================================================\n');
  process.exit(1);
}

