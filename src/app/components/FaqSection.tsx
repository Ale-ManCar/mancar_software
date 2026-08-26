"use client";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  kicker?: string;
  title: string;
  description?: string;
  items: FaqItem[];
};

export default function FaqSection({ kicker = "Preguntas frecuentes", title, description, items }: FaqSectionProps) {
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <section className="bg-gray-50 py-16 md:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd),
        }}
      />
      <div className="container mx-auto max-w-4xl px-4">
        <div className="text-center">
          <p className="section-kicker mx-auto">{kicker}</p>
          <h2 className="section-title">{title}</h2>
          {description && <p className="section-copy">{description}</p>}
        </div>
        <div className="mt-10 space-y-4">
          {items.map((item) => (
            <details key={item.question} className="soft-card group p-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-gray-950">
                <span>{item.question}</span>
                <span className="text-2xl leading-none text-primary-700 transition group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 leading-7 text-gray-600">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
