import Script from 'next/script';

interface SchemaProps {
  type: 'WebSite' | 'WebPage' | 'FAQPage' | 'HowTo' | 'SoftwareApplication';
  data?: Record<string, unknown>;
}

export default function SchemaMarkup({ type, data }: SchemaProps) {
  const baseSchema: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': type,
  };

  let schema: Record<string, unknown> = { ...baseSchema };

  switch (type) {
    case 'WebSite':
      schema = {
        ...baseSchema,
        name: 'ConvertMaster',
        url: 'https://rajeev-git-hub.github.io/unit-conversion/',
        description: 'Free online unit converter for length, weight, temperature, and more',
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://rajeev-git-hub.github.io/unit-conversion/?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
      };
      break;

    case 'SoftwareApplication':
      schema = {
        ...baseSchema,
        name: data?.name || 'ConvertMaster Unit Converter',
        applicationCategory: 'UtilitiesApplication',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.8',
          ratingCount: '1000',
        },
        ...data,
      };
      break;

    case 'FAQPage':
      schema = {
        ...baseSchema,
        mainEntity: data?.mainEntity || [],
      };
      break;

    case 'HowTo':
      schema = {
        ...baseSchema,
        ...data,
      };
      break;

    default:
      schema = { ...baseSchema, ...data };
  }

  return (
    <Script
      id={`schema-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
