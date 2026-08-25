import type { Metadata } from 'next';
import HomeClient from './HomeClient';

export const metadata: Metadata = {
  title: 'Mancar Software | Desarrollo web y sistemas para pymes en Ecuador',
  description:
    'Diseño web, sistemas a medida, tiendas virtuales y soporte continuo para pymes de Ecuador. Atención directa desde Guayaquil.',
  openGraph: {
    title: 'Mancar Software | Desarrollo web y sistemas para pymes en Ecuador',
    description:
      'Creamos software, sitios web y soluciones de mantenimiento para pymes que necesitan vender y operar mejor.',
    type: 'website',
  },
}; 

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mancar Software',
    url: 'https://mancarsoftware.com',
    email: 'mancarsoftwares@gmail.com',
    telephone: '+593986951419',
    areaServed: {
      '@type': 'Country',
      name: 'Ecuador',
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Guayaquil',
      addressCountry: 'EC',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+593986951419',
      contactType: 'sales',
      areaServed: 'EC',
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
        areaServed: 'Ecuador',
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
