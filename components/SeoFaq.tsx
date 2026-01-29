import React from "react";

export type SeoFaqItem = {
  question: string;
  answer: string;
};

export default function SeoFaq({ items }: { items: SeoFaqItem[] }) {
  return (
    <div className="space-y-5">
      {items.map((f) => (
        <div key={f.question}>
          <h3 className="text-lg font-semibold text-gray-900">{f.question}</h3>
          <p className="text-gray-700">{f.answer}</p>
        </div>
      ))}
    </div>
  );
}

