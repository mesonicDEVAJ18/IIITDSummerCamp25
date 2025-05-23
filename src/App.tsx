import React, { useState } from 'react';
import { SummerCampSite } from './sites/SummerCampSite';
import { TLFSite } from './sites/TLFSite';
import { SiteSelector } from './components/SiteSelector';

function App() {
  const [selectedSite, setSelectedSite] = useState<'summer' | 'tlf' | null>(null);

  if (!selectedSite) {
    return <SiteSelector onSelect={setSelectedSite} />;
  }

  return selectedSite === 'summer' ? <SummerCampSite /> : <TLFSite />;
}

export default App;