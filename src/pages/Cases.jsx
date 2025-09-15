import React from 'react';
import Roulette from '../components/Roulette.jsx';

const cases = [
  { id: 1, name: 'IS-3 Defender' },
  { id: 2, name: 'Löwe' },
  { id: 3, name: 'T-34-3' },
  { id: 4, name: 'KV-5' },
];

export default function Cases() {
  return (
    <section>
      <h1>Кейсы</h1>
      <div className="cases-grid">
        {cases.map((c) => (
          <div key={c.id} className="case-card">
            <h2>{c.name}</h2>
            <Roulette caseId={c.id} />
          </div>
        ))}
      </div>
    </section>
  );
}
