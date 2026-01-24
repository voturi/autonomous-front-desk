type BaseSchema = Record<string, unknown>;

const siteUrl = "https://example.com";

export function softwareApplicationSchema({
  name = "Autonomous Front Desk",
  description,
  applicationCategory = "BusinessApplication",
  operatingSystem = "Web",
  url = siteUrl,
}: {
  name?: string;
  description: string;
  applicationCategory?: string;
  operatingSystem?: string;
  url?: string;
}): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    operatingSystem,
    url,
  };
}

export function productSchema({
  name = "Autonomous Front Desk",
  description,
  brand = "Autonomous Front Desk",
  url = siteUrl,
}: {
  name?: string;
  description: string;
  brand?: string;
  url?: string;
}): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    url,
  };
}

export function localBusinessSchema({
  name = "Autonomous Front Desk",
  description,
  areaServed,
  url = siteUrl,
}: {
  name?: string;
  description: string;
  areaServed: string;
  url?: string;
}): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    areaServed,
    url,
  };
}

export function faqSchema(faqs: Array<{ question: string; answer: string }>): BaseSchema {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
