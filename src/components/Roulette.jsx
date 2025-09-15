import React, { useEffect, useState } from 'react';
import api from '../services/api.js';

export default function Roulette({ caseId }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    async function load() {
      try {
        const data = await api.getCaseItems(caseId);
        setItems(data);
      } catch (e) {
        console.error('Failed to load case items', e);
      }
    }
    load();
  }, [caseId]);

  return (
    <div className="roulette">
      <div className="roulette-track">
        {items.map((item) => (
          <div key={item.id} className="roulette-item">
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
}
