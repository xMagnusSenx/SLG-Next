// components/HomeSection.js
import Typewriter from 'typewriter-effect';

export default function HomeSection() {
  return (
    <section id="Home" className="text-white py-10 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-gradient">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString('Willkommen bei Ihrem Allround-Servicepartner')
                .pauseFor(1000) // Опционально, задержка перед началом нового набора текста
                .start();
            }}
            options={{
              delay: 100,    // Задержка между символами
              loop: false,  // Не зацикливать
              cursor: '',   // Уберите курсор, если не нужен
            }}
          />
        </h1>
        <p className="text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-4">
          Ihr zuverlässiger Partner für alle Dienstleistungen
        </p>
      </div>
    </section>
  );
}
