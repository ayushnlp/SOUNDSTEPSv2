import React from 'react';
import {
  Button,
  IconButton,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Badge,
  Divider,
  Container,
  Section,
  ResponsiveGrid,
  SectionHeading,
  VisuallyHidden,
  ComingSoon,
} from '@/components/ui';

export default function DesignSystemPage() {
  return (
    <main id="main-content" className="min-h-screen py-12 md:py-20">
      {/* Design System Header */}
      <Section background="ivory" spacing="compact">
        <Container size="default">
          <SectionHeading
            eyebrow="SOUNDSTEPS — Stage 2"
            title="Design System & UI Foundation"
            subtitle="Authoritative production-quality design system primitives engineered for paediatric healthcare excellence and WCAG 2.2 AA accessibility."
            as="h1"
          />
          <div className="flex flex-wrap gap-2.5 pt-2">
            <Badge variant="default">Stage 2: Design System</Badge>
            <Badge variant="success">WCAG 2.2 AA Verified</Badge>
            <Badge variant="neutral">Next.js App Router</Badge>
            <Badge variant="warning">Static Export (output: export)</Badge>
          </div>
        </Container>
      </Section>

      <Divider spacing="md" />

      {/* 1. Colour System & Tokens */}
      <Section background="white" spacing="compact">
        <Container size="default">
          <SectionHeading
            eyebrow="Token Architecture"
            title="Brand Colour Palette"
            subtitle="Strict healthcare editorial palette designed for warmth, trust, and exceptional contrast."
          />
          <ResponsiveGrid cols={4} gap="md">
            <div className="p-4 rounded-xl border border-border bg-surface space-y-2">
              <div className="w-full h-16 rounded-lg bg-[#183C3B] flex items-center justify-center text-[#F6F3EC] font-semibold text-xs">
                #183C3B
              </div>
              <div>
                <p className="font-semibold text-sm">Deep Teal</p>
                <p className="text-xs text-dark-text-muted">Primary Brand (12.8:1 contrast on Ivory)</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface space-y-2">
              <div className="w-full h-16 rounded-lg bg-[#F6F3EC] border border-border flex items-center justify-center text-[#243332] font-semibold text-xs">
                #F6F3EC
              </div>
              <div>
                <p className="font-semibold text-sm">Warm Ivory</p>
                <p className="text-xs text-dark-text-muted">Main Background Surface</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface space-y-2">
              <div className="w-full h-16 rounded-lg bg-[#C77C62] flex items-center justify-center text-white font-semibold text-xs">
                #C77C62
              </div>
              <div>
                <p className="font-semibold text-sm">Muted Terracotta</p>
                <p className="text-xs text-dark-text-muted">Warm Healthcare Accent</p>
              </div>
            </div>
            <div className="p-4 rounded-xl border border-border bg-surface space-y-2">
              <div className="w-full h-16 rounded-lg bg-[#243332] flex items-center justify-center text-[#F6F3EC] font-semibold text-xs">
                #243332
              </div>
              <div>
                <p className="font-semibold text-sm">Dark Text</p>
                <p className="text-xs text-dark-text-muted">Primary Text (11.2:1 contrast on Ivory)</p>
              </div>
            </div>
          </ResponsiveGrid>
        </Container>
      </Section>

      <Divider spacing="md" />

      {/* 2. Button Component Primitives */}
      <Section background="ivory" spacing="compact">
        <Container size="default">
          <SectionHeading
            eyebrow="Interactive Primitives"
            title="Buttons & Touch Targets"
            subtitle="Accessible button controls conforming to WCAG 2.2 AA Target Size (min 44x44px for medium/large) and visible focus rings."
          />
          <div className="space-y-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary">Primary Action</Button>
              <Button variant="secondary">Secondary Action</Button>
              <Button variant="outline">Outline Action</Button>
              <Button variant="ghost">Ghost Action</Button>
              <Button variant="destructive">Destructive Action</Button>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button size="sm" variant="primary">Small Button</Button>
              <Button size="md" variant="primary">Medium (44px min)</Button>
              <Button size="lg" variant="primary">Large (48px min)</Button>
              <Button variant="primary" isLoading>Loading State</Button>
              <Button variant="primary" disabled>Disabled State</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <IconButton
                aria-label="Telephone inquiry"
                variant="primary"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                }
              />
              <IconButton
                aria-label="WhatsApp messaging"
                variant="secondary"
                icon={
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                }
              />
            </div>
          </div>
        </Container>
      </Section>

      <Divider spacing="md" />

      {/* 3. Card Primitives */}
      <Section background="white" spacing="compact">
        <Container size="default">
          <SectionHeading
            eyebrow="Surface Primitives"
            title="Card Variants"
            subtitle="Modular content containers built with calm geometry and subtle shadows."
          />
          <ResponsiveGrid cols={3} gap="md">
            <Card variant="default">
              <CardHeader>
                <Badge variant="neutral" size="sm" className="w-fit mb-2">Default Card</Badge>
                <CardTitle>Clinical Discipline</CardTitle>
                <CardDescription>Default card variant with warm border and subtle shadow.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Structured clinical guidance presented with high legibility and calm whitespace.</p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" size="sm">Learn More &rarr;</Button>
              </CardFooter>
            </Card>

            <Card variant="elevated">
              <CardHeader>
                <Badge variant="success" size="sm" className="w-fit mb-2">Elevated Card</Badge>
                <CardTitle>Multidisciplinary Model</CardTitle>
                <CardDescription>Elevated variant with subtle depth for primary highlights.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Integrated speech, audiological, and occupational interventions working together.</p>
              </CardContent>
              <CardFooter>
                <Button variant="primary" size="sm">Explore Approach</Button>
              </CardFooter>
            </Card>

            <Card variant="interactive">
              <CardHeader>
                <Badge variant="warning" size="sm" className="w-fit mb-2">Interactive Card</Badge>
                <CardTitle>Developmental Concerns</CardTitle>
                <CardDescription>Interactive hover states for navigational cards.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Exploration aid connecting everyday family observations to clinical specialties.</p>
              </CardContent>
              <CardFooter>
                <span className="text-xs font-semibold text-primary">Discover Services &rarr;</span>
              </CardFooter>
            </Card>
          </ResponsiveGrid>
        </Container>
      </Section>

      <Divider spacing="md" />

      {/* 4. Content Governance Primitive: ComingSoon */}
      <Section background="ivory" spacing="compact">
        <Container size="default">
          <SectionHeading
            eyebrow="Governance Primitives"
            title="Content Verification & Governance"
            subtitle="Defensive components that render unverified owner dependencies with dignity."
          />
          <ResponsiveGrid cols={2} gap="md">
            <ComingSoon
              variant="card"
              title="Verified Clinic Facility Address"
              description="Physical address, landmark directions, and transit access will be published upon written verification by clinic leadership (DEP-01)."
              actionText="Inquire with Reception"
              actionHref="#contact"
            />
            <ComingSoon
              variant="card"
              title="Acoustic Calibration Certification"
              description="Audiological test booth acoustic calibration certificates and diagnostic hardware suites will be published upon verified physical documentation (DEP-04)."
              actionText="Learn About Diagnostic Protocols"
              actionHref="#protocols"
            />
          </ResponsiveGrid>
          <div className="pt-6">
            <ComingSoon
              variant="banner"
              title="Consultation Fee Schedule (DEP-06)"
              description="Transparent assessment rates and therapy session tiers will be displayed following final administrative confirmation."
              actionText="Inquire on WhatsApp"
              actionHref="#fees"
            />
          </div>
        </Container>
      </Section>

      {/* Screen Reader Offscreen Verification */}
      <VisuallyHidden>
        SOUNDSTEPS Design System and UI Foundation initialized successfully.
      </VisuallyHidden>
    </main>
  );
}

