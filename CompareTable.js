import React from 'react';
import './App.css';

const compareParams = [
  { key: 'address', label: 'Address' },
  { key: 'price', label: 'Price' },
  { key: 'property_type', label: 'Property Type' },
  { key: 'bedrooms', label: 'Bedrooms' },
  { key: 'bathrooms', label: 'Bathrooms' },
  { key: 'area_sqft', label: 'Area (sqft)' },
  { key: 'lot_size_sqft', label: 'Lot Size (sqft)' },
  { key: 'year_built', label: 'Year Built' },
  { key: 'parking', label: 'Parking' },
  { key: 'hoa_fees', label: 'HOA Fees' },
  { key: 'property_taxes', label: 'Property Taxes' },
  { key: 'school_rating', label: 'School Rating' },
  { key: 'walk_score', label: 'Walk Score' },
  { key: 'features', label: 'Features' },
];

function highlightDiff(val, base) {
  if (Array.isArray(val) && Array.isArray(base)) {
    return val.sort().join(', ') !== base.sort().join(', ');
  }
  return val !== base;
}

const CompareTable = ({ listings, onClose }) => {
  if (!listings.length) return null;
  const primary = listings[0];
  const others = listings.slice(1);
  return (
    <div className="compare-modal">
      <div className="compare-modal-content">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Compare Properties</h2>
        <table className="compare-table">
          <thead>
            <tr>
              <th>Parameter</th>
              {listings.map((l, idx) => (
                <th key={l.id}>{idx === 0 ? 'Primary' : `Compare ${idx}`}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {compareParams.map(param => (
              <tr key={param.key}>
                <td>{param.label}</td>
                {listings.map((l, idx) => {
                  let val = l[param.key];
                  if (Array.isArray(val)) val = val.join(', ');
                  const baseVal = Array.isArray(primary[param.key]) ? primary[param.key].join(', ') : primary[param.key];
                  const diff = idx > 0 && highlightDiff(l[param.key], primary[param.key]);
                  return (
                    <td key={l.id} className={diff ? 'diff-cell' : ''}>{val}</td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompareTable;
