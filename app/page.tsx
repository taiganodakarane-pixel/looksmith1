"use client";

import { useState } from "react";
import { QUESTIONS } from "@/lib/questions";
import type { Answers, Locale } from "@/lib/types";

export default function Home() {
  const [locale, setLocale] = useState<Locale>("ja");
  const [index, setIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [image, setImage] = useState<string | null>(null);

  const q = QUESTIONS[index];

  const tier1Done = QUESTIONS
    .filter(q => q.priority === 1)
    .every(q => answers[q.id]);

  const select = (optionId: string) => {
    setAnswers({ ...answers, [q.id]: optionId });
    if (index < QUESTIONS.length - 1) setIndex(index + 1);
  };

  const generate = async () => {
    const res = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ answers })
    });
    const data = await res.json();
    setImage(data.image);
  };

  return (
    <main style={{ maxWidth: 720, margin: "0 auto", padding: 24 }}>
      <header style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Looksmith</h1>
        <button onClick={() => setLocale(locale === "ja" ? "en" : "ja")}>
          {locale === "ja" ? "EN" : "JA"}
        </button>
      </header>

      <h2>{q.title[locale]}</h2>

      <div style={{ display: "grid", gap: 12 }}>
        {q.options.map(o => (
          <button key={o.id} onClick={() => select(o.id)}>
            {o.labels[locale]}
          </button>
        ))}
      </div>

      {tier1Done && (
        <button style={{ marginTop: 20 }} onClick={generate}>
          Generate
        </button>
      )}

      {image && (
        <img
          src={`data:image/png;base64,${image}`}
          style={{ marginTop: 20, width: "100%" }}
        />
      )}
    </main>
  );
}
