import { SITE, CONTACT, SOCIAL } from '../consts';

const dayMap: Record<string, string> = {
  Monday: 'https://schema.org/Monday',
  Tuesday: 'https://schema.org/Tuesday',
  Wednesday: 'https://schema.org/Wednesday',
  Thursday: 'https://schema.org/Thursday',
  Friday: 'https://schema.org/Friday',
  Saturday: 'https://schema.org/Saturday',
  Sunday: 'https://schema.org/Sunday',
};

const sameAs = [SOCIAL.instagram, SOCIAL.facebook, SOCIAL.linkedin].filter(Boolean);

/** Schema principal do escritório — injetado em todas as páginas. */
export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LegalService', 'Attorney'],
    '@id': `${SITE.url}/#organization`,
    name: SITE.name,
    url: SITE.url,
    ...(CONTACT.email ? { email: CONTACT.email } : {}),
    ...(CONTACT.phone ? { telephone: CONTACT.phone } : {}),
    priceRange: 'Consulte',
    knowsLanguage: 'pt-BR',
    areaServed: [
      'Gravataí',
      'Cachoeirinha',
      'Alvorada',
      'Viamão',
      'Glorinha',
      'Porto Alegre',
      { '@type': 'Country', name: 'Brasil' },
    ],
    address: {
      '@type': 'PostalAddress',
      streetAddress: CONTACT.address.street,
      addressLocality: CONTACT.address.city,
      addressRegion: CONTACT.address.state,
      postalCode: CONTACT.address.postalCode,
      addressCountry: CONTACT.address.country,
    },
    ...(CONTACT.geo.latitude && CONTACT.geo.longitude
      ? {
          geo: {
            '@type': 'GeoCoordinates',
            latitude: CONTACT.geo.latitude,
            longitude: CONTACT.geo.longitude,
          },
        }
      : {}),
    openingHoursSpecification: CONTACT.hours.map((h) => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: h.days.map((d) => dayMap[d]),
      opens: h.opens,
      closes: h.closes,
    })),
    ...(sameAs.length ? { sameAs } : {}),
    ...(CONTACT.rating
      ? {
          aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: CONTACT.rating.value,
            reviewCount: CONTACT.rating.count,
          },
        }
      : {}),
    knowsAbout: [
      'Direito Previdenciário',
      'Aposentadoria',
      'Auxílio por incapacidade',
      'BPC LOAS',
      'Pensão por morte',
      'Revisão de benefício do INSS',
    ],
  };
}

export function breadcrumbSchema(trail: { name: string; url?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: trail.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      ...(item.url ? { item: new URL(item.url, SITE.url).href } : {}),
    })),
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function articleSchema(opts: {
  title: string;
  description: string;
  url: string;
  datePublished: Date;
  dateModified?: Date;
  author: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: opts.title,
    description: opts.description,
    mainEntityOfPage: new URL(opts.url, SITE.url).href,
    datePublished: opts.datePublished.toISOString(),
    dateModified: (opts.dateModified ?? opts.datePublished).toISOString(),
    author: { '@type': 'Organization', name: opts.author },
    publisher: {
      '@type': 'Organization',
      name: SITE.name,
      url: SITE.url,
    },
  };
}
