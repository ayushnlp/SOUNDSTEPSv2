import React from 'react';
import Link from 'next/link';
import { Button, Container } from '@/components/ui';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-4">
      <Container size="narrow" className="text-center space-y-6">
        <p className="eyebrow-label">Page Not Found</p>
        <h1 className="heading-1">Let us guide you back</h1>
        <p className="body-regular max-w-md mx-auto">
          The page you are looking for may have moved or does not exist. Our clinical team is here to help you navigate our services.
        </p>
        <div className="pt-2">
          <Button href="/" variant="primary">
            Return to Homepage
          </Button>
        </div>
      </Container>
    </main>
  );
}

