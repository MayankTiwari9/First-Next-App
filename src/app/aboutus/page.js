import Link from "next/link";
import React from "react";

const AboutUs = () => {
  const details = [
    { id: 1, name: "Yash", role: "Senior Developer" },
    { id: 2, name: "Vaibhav", role: "Backend Developer" },
    { id: 3, name: "Suresh", role: "Frontend Developer" },
  ];

  return (
    <div>
      <h1>AboutUs</h1>
      {details.map((detail) => {
        return (
          <Link href={`/aboutus/${detail.id}`}>
            <ul key={detail.id}>
              <li>{detail.name}</li>
              <li>{detail.role}</li>
            </ul>
          </Link>
        );
      })}
    </div>
  );
};

export default AboutUs;
