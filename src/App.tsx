import { useState } from 'react';
import { SummerCampSite } from './sites/SummerCampSite';
import { TLFSite } from './sites/TLFSite';
import Archive from './sites/archive';
import { SiteSelector } from './components/SiteSelector';

function App() {
  const [selectedSite, setSelectedSite] = useState<'summer' | 'tlf' | 'archive' | null>(null);

  if (!selectedSite) {
    return <SiteSelector onSelect={setSelectedSite} />;
  }

  if (selectedSite === 'summer') {
    return <SummerCampSite />;
  }

  if (selectedSite === 'tlf') {
    return <TLFSite />;
  }

  if (selectedSite === 'archive') {
    return <Archive />;
  }

  return null; // Fallback
}

export default App;