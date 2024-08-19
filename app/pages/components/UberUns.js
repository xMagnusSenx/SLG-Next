import React from "react";
import EmployeeCard from "./EmployeeCard";

export default function UberUns() {
  const uberUns = [
    { photo: "/HZ.jpg", name: "Иван Иванов", position: "Директор" },
    { photo: "/HZ1.jpg", name: "Артём Смирнов", position: "Менеджер" },
    { photo: "/HZ2.jpg", name: "Алексей Петров", position: "Разработчик" },
    { photo: "/HZ3.jpg", name: "Вадим Васильев", position: "Дизайнер" },
  ];

  return (
    <section className="p-4">
      {/* Сетка карточек */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {uberUns.map((employee, index) => (
          <EmployeeCard
            key={index}
            photo={employee.photo}
            name={employee.name}
            position={employee.position}
          />
        ))}
      </div>
      {/* Блок с описанием */}
<div className="text-center mt-12">
  <p className="text-lg text-white font-semibold">
    Warum wir?
  </p>
  <div className="mt-4 space-y-4 text-base md:text-lg text-white max-w-3xl mx-auto">
    <p>
      <strong>Qualität und Zuverlässigkeit:</strong> Unsere oberste Priorität ist Ihre Zufriedenheit. Wir setzen auf höchste Qualitätsstandards und arbeiten zuverlässig und termingerecht.
    </p>
    <p>
      <strong>Erfahrenes Team:</strong> Unser Team besteht aus qualifizierten Fachkräften mit jahrelanger Erfahrung in ihren jeweiligen Bereichen. Wir sind stolz darauf, Ihnen erstklassigen Service bieten zu können.
    </p>
    <p>
      <strong>Flexibilität:</strong> Wir wissen, dass jeder Kunde einzigartige Anforderungen hat. Daher bieten wir flexible Lösungen, die individuell auf Ihre Bedürfnisse zugeschnitten sind.
    </p>
  </div>
</div>

    </section>
  );
}

