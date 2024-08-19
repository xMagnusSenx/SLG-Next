// app/pages/components/EmployeeCard.js

import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

export default function EmployeeCard({ photo, name, position }) {
  return (
    <Card className="py-4 shadow-lg bg-white/5 bg-opacity-1  border-gray-200 rounded-lg flex flex-col items-center text-center">
      <Image
        alt="Employee photo"
        className="object-cover rounded-full mb-4"
        src={photo}
        width={150}
        height={150}
      />
      <CardBody className="flex flex-col items-center">
        <p className="text-lg font-bold text-white">{name}</p>
        <small className="text-sm text-white">{position}</small>
      </CardBody>
    </Card>
  );
}
