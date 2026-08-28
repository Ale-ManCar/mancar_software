import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { createPageMetadata, siteUrl } from './seo';

export const metadata: Metadata = createPageMetadata({
  title: 'Desarrollo web y sistemas para negocios',
  browserTitle: 'Mancar Software',
  description:
    'Diseño web, sistemas a medida, tiendas virtuales y soporte continuo para negocios en crecimiento. Atención directa desde Ecuador.',
  path: '/',
});

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mancar Software',
    url: siteUrl,
    email: 'mancarsoftwares@gmail.com',
    telephone: '+593986951419',
    areaServed: ['Ecuador', 'Remote projects'],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guayaquil',
      addressCountry: 'EC',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+593986951419',
      contactType: 'sales',
      areaServed: ['EC', 'Remote'],
      availableLanguage: 'Spanish',
    },
    makesOffer: [
      'Diseño web profesional',
      'Sistemas a medida',
      'Tiendas virtuales',
      'Soporte y mantenimiento',
      'Consultoría tecnológica',
    ].map((serviceName) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: serviceName,
        areaServed: 'Ecuador and remote projects',
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />
      <HomeClient />
    </>
  );
}
