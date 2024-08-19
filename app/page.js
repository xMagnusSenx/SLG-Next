// app/page.js
'use client';
import Home from "./pages/components/home";
import Leistung from "./pages/components/leistung";
import UberUns from "./pages/components/UberUns";
import ContactSection from "./pages/components/ContactSection";
import HomeSection from "./pages/components/HomeSection";

export default function HomePage() {
  return (
    
    <div>
    <section id="Home" className="text-white py-10 md:py-20">
  <div className="container mx-auto px-4 text-center">
  <HomeSection />
    <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
      Ihr zuverlässiger Partner für alle Dienstleistungen
    </p>
    <Home />
  </div>
</section>


      <section id="Leistung" className="text-black py-10 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gradient">
            Unsere Leistungen im Überblick
          </h2>
          <Leistung />
        </div>
      </section>

      <section id="Über-uns" className="text-black text-white py-10 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gradient">
          Über uns
          </h2>
          <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
            {/* Дополнительный контент */}
          </p>
          <UberUns />
        </div>
      </section>

      <section id="Kontakte" className="text-black text-white py-10 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-2xl md:text-3xl font-semibold mb-6 text-gradient">
            Kontakte
          </p>
          <ContactSection />
        </div>
      </section>
    </div>
  );
}
