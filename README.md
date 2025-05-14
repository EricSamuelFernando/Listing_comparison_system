# Snaphomz Real Estate Comparison UI

This is a sample real estate property comparison UI, inspired by the Snaphomz design. It allows users to select up to 4 properties (1 primary, 3 comparables) and view a side-by-side comparison of key attributes.

## Features
- Zillow/Snaphomz-style UI
- Compare button near the Map/Grid controls
- Select up to 4 properties at a time (first is Primary)
- Comparison modal/table highlights differences
- Modern, clean React-based frontend
- Uses sample data (can be replaced with your backend data)

## Getting Started

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Start the development server:**
   ```bash
   npm start
   ```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## File Structure
- `App.js` - Main app logic and layout
- `PropertyCard.js` - Property card component
- `CompareTable.js` - Comparison modal/table component
- `listingsData.js` - Sample property data
- `App.css` - Styling

## Customization
- Replace `listingsData.js` with your own property data or connect to your backend.
- Adjust UI styles in `App.css` as needed.

## License
MIT
