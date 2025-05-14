import React from 'react';
import './App.css';

const PropertyCard = ({ property, selectable, selected, onSelect, isPrimary }) => {
  return (
    <div className={`property-card${selected ? ' selected' : ''}`}>  
      {selectable && (
        <input
          type="checkbox"
          className="select-checkbox"
          checked={selected}
          onChange={() => onSelect(property.id)}
          disabled={!selected && isPrimary === false}
        />
      )}
      {isPrimary && selected && (
        <div className="primary-badge">Primary</div>
      )}
      <img
        className="property-img"
        src={`https://placehold.co/400x140?text=${encodeURIComponent(property.address)}`}
        alt={property.address}
      />
      <div className="property-info">
        <div className="property-address">{property.address}</div>
        <div className="property-price">${property.price.toLocaleString()}</div>
        <div>{property.bedrooms} bd | {property.bathrooms} ba | {property.area_sqft} sqft</div>
        <div style={{marginTop: 6, fontSize: '0.95em', color: '#888'}}>{property.property_type}</div>
      </div>
    </div>
  );
};

export default PropertyCard;
