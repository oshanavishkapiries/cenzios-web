"use client";

import Script from "next/script";

interface StructuredDataProps {
  type: "organization" | "website" | "service" | "contact";
  data?: any;
}

const StructuredData = ({ type, data }: StructuredDataProps) => {
  const getStructuredData = () => {
    switch (type) {
      case "organization":
        return {
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Cenzios Pvt Ltd",
          url: "https://cenzios.com",
          logo: "https://cenzios.com/logo-b.png",
          description:
            "Strategic Software Solutions Engineered To Fuel Your Growth",
          foundingDate: "2023",
          address: {
            "@type": "PostalAddress",
            streetAddress: "119/A, Werellahena Road",
            addressLocality: "Horana",
            addressCountry: "LK",
            postalCode: "12400",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: "+94-71-118-6028",
            contactType: "customer service",
            email: "info@cenzios.com",
          },
          sameAs: [
            "https://www.facebook.com/cenzios",
            "https://www.linkedin.com/company/cenzios",
            "https://twitter.com/cenzios",
          ],
          serviceArea: {
            "@type": "Country",
            name: "Sri Lanka",
          },
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Software Development Services",
            itemListElement: [
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Web Development",
                  description: "Expert Web Solutions For B2B And B2C Clients",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Mobile App Development",
                  description:
                    "Native Android And Cross-Platform Mobile App Development",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Custom Software Development",
                  description: "Scalable And Secure Custom Software Solutions",
                },
              },
              {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Enterprise Technology Solutions",
                  description:
                    "ERP Systems, AI Analytics, And Legacy System Modernization",
                },
              },
            ],
          },
        };

      case "website":
        return {
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Cenzios Pvt Ltd",
          url: "https://cenzios.com",
          description:
            "Strategic Software Solutions Engineered To Fuel Your Growth",
          publisher: {
            "@type": "Organization",
            name: "Cenzios Pvt Ltd",
          },
          potentialAction: {
            "@type": "SearchAction",
            target: "https://cenzios.com/search?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        };

      case "service":
        return {
          "@context": "https://schema.org",
          "@type": "Service",
          name: data?.name || "Software Development Services",
          description:
            data?.description ||
            "Comprehensive software development services including web development, mobile app development, custom software solutions, and enterprise technology services.",
          provider: {
            "@type": "Organization",
            name: "Cenzios Pvt Ltd",
          },
          areaServed: {
            "@type": "Country",
            name: "Sri Lanka",
          },
          serviceType: "Software Development",
          category: "Technology",
        };

      case "contact":
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          name: "Contact Us",
          description:
            "Contact Cenzios Pvt Ltd for software development services",
          url: "https://cenzios.com/contact",
          mainEntity: {
            "@type": "Organization",
            name: "Cenzios Pvt Ltd",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+94-71-118-6028",
              contactType: "customer service",
              email: "info@cenzios.com",
              availableLanguage: "English",
            },
          },
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();

  if (!structuredData) return null;

  return (
    <Script
      id={`structured-data-${type}`}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData),
      }}
    />
  );
};

export default StructuredData;
