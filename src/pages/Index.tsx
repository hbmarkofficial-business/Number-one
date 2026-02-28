import { Helmet } from 'react-helmet-async';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { GallerySection } from '@/components/sections/GallerySection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { ContactSection } from '@/components/sections/ContactSection';

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Titel & Meta Description */}
        <title>Barbershop Augsburg | Number One</title>
        <meta
          name="description"
          content="Besuche unseren Premium Barbershop Number One in Augsburg für erstklassige Haarschnitte, Bartpflege und individuelle Styles. Jetzt Termin buchen!"
        />
        <meta
          name="keywords"
          content="Barbershop, Herrenfriseur, Haarschnitt, Bartpflege, Rasur, Augsburg"
        />
        <link rel="canonical" href="https://numberone-augsburg.de" />

        {/* Open Graph */}
        <meta property="og:title" content="Number One | Premium Barbershop Augsburg" />
        <meta
          property="og:description"
          content="Erstklassige Haarschnitte und Bartpflege für den modernen Gentleman in Augsburg."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://numberone-augsburg.de" />
        <meta property="og:image" content="https://numberone-augsburg.de/images/og-image.png" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Number One | Premium Barbershop Augsburg" />
        <meta
          name="twitter:description"
          content="Erleben Sie erstklassige Haarschnitte und Bartpflege für den modernen Gentleman."
        />
        <meta name="twitter:image" content="https://numberone-augsburg.de/images/og-image.png" />

        {/* Schema.org LocalBusiness */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Barbershop",
            "name": "Number One",
            "image": "https://numberone-augsburg.de/images/logo.png",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Donauwörther Str. 8",
              "addressLocality": "Augsburg",
              "postalCode": "86154",
              "addressCountry": "DE"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "48.3812",
              "longitude": "10.8875"
            },
            "url": "https://numberone-augsburg.de",
            "telephone": "+49 821 90589063",
            "openingHours": "Mo-Fr 09:00-19:30, Sa 08:30-18:00",
            "priceRange": "€€",
            "servesCuisine": "Barbershop Services",
            "sameAs": [
              "https://www.facebook.com/numberoneaugsburg",
              "https://www.instagram.com/numberoneaugsburg"
            ]
          })}
        </script>
      </Helmet>

      {/* Navigation */}
      <Navigation />

      <main>
        <HeroSection />
        <ServicesSection />
        <GallerySection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default Index;

