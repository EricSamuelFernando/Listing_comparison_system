import React, { useState } from 'react';
import listings from './listingsData';
import PropertyCard from './PropertyCard';
import CompareTable from './CompareTable';
import './App.css';

function App() {
  const [compareMode, setCompareMode] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [showCompare, setShowCompare] = useState(false);

  // Set the first selected as primary, others as compare
  const handleSelect = (id) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter(sid => sid !== id));
    } else if (selectedIds.length < 4) {
      setSelectedIds([...selectedIds, id]);
    }
  };

  const handleCompareClick = () => {
    setCompareMode(!compareMode);
    setSelectedIds([]);
  };

  const handleCompareNow = () => {
    setShowCompare(true);
  };

  const handleCloseCompare = () => {
    setShowCompare(false);
    setCompareMode(false);
    setSelectedIds([]);
  };

  // When compare mode, first selected is primary
  const primaryId = selectedIds[0];

  return (
    <div>
      <div className="header">
        <div className="header-left">
          <span className="logo">Snaphomz</span>
        </div>
        <div className="header-right">
          <button className="header-btn">Map</button>
          <button className="header-btn">Grid</button>
          <button className={`header-btn${compareMode ? ' selected' : ''}`} onClick={handleCompareClick}>
            Compare
          </button>
        </div>
      </div>
      <div className="listings">
        {listings.map(listing => (
          <PropertyCard
            key={listing.id}
            property={listing}
            selectable={compareMode}
            selected={selectedIds.includes(listing.id)}
            onSelect={handleSelect}
            isPrimary={primaryId === listing.id}
          />
        ))}
      </div>
      {compareMode && (
        <div style={{textAlign: 'center', marginBottom: 40}}>
          <button
            className="compare-btn"
            onClick={handleCompareNow}
            disabled={selectedIds.length < 2}
          >
            Compare Now ({selectedIds.length})
          </button>
          <div style={{fontSize: '0.97em', color: '#888', marginTop: 8}}>
            Select up to 4 properties. First selected is Primary.
          </div>
        </div>
      )}
      {showCompare && (
        <CompareTable
          listings={listings.filter(l => selectedIds.includes(l.id))}
          onClose={handleCloseCompare}
        />
      )}
    </div>
  );
}

export default App;
