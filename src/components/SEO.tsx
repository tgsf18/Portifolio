import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonicalPath?: string;
  keywords?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonicalPath = '',
  keywords = 'Thiago de Souza, Desenvolvedor Frontend, React, Tailwind CSS, TypeScript, Java, Spring Boot, Ellenco',
}) => {
  useEffect(() => {
    // Update Document Title
    const formattedTitle = title.includes('Thiago de Souza')
      ? title
      : `${title} | Thiago de Souza — Portfólio Profissional`;
    document.title = formattedTitle;

    // Helper to set or create meta tag
    const updateMetaTag = (attribute: string, attrValue: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    updateMetaTag('name', 'description', description);
    updateMetaTag('name', 'keywords', keywords);
    updateMetaTag('property', 'og:title', formattedTitle);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:url', `https://thiagosouza.dev${canonicalPath}`);
    updateMetaTag('property', 'twitter:title', formattedTitle);
    updateMetaTag('property', 'twitter:description', description);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', `https://thiagosouza.dev${canonicalPath}`);
  }, [title, description, canonicalPath, keywords]);

  return null;
};
