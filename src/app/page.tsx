import type { Metadata } from 'next';
import HomeClient from './HomeClient';
import { successCases } from './cases';

export const metadata: Metadata = {
  title: 'Mancar Software | Soluciones digitales para empresas',
  description:
    'Diseño web, sistemas a medida y soporte continuo para empresas. Conoce nuestros servicios y casos de éxito.',
  openGraph: {
    title: 'Mancar Software | Soluciones digitales para empresas',
    description:
      'Creamos software, sitios web y soluciones de mantenimiento para impulsar negocios.',
    type: 'website',
  },
};

export default function Page() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mancar Software',
    url: 'https://mancarsoftware.com',
    email: 'contacto@mancarsoftware.com',
    makesOffer: successCases.map((c) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: c.title,
        description: c.summary,
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