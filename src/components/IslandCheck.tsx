import { useEffect, useState } from 'react';

// Foundation smoke test for the React integration; replaced by the lesson workspace in C03/C05.
export default function IslandCheck() {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => setHydrated(true), []);
  return <p data-island-check>{hydrated ? 'Interactive layer ready.' : 'Interactive layer loading…'}</p>;
}
