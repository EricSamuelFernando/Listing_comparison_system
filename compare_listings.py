import pprint
from typing import List, Dict

# Sample data: list of property listings
sample_listings = [
    {
        'id': 1,
        'address': '123 Main St, Springfield',
        'price': 450000,
        'property_type': 'House',
        'bedrooms': 3,
        'bathrooms': 2,
        'area_sqft': 1800,
        'lot_size_sqft': 5000,
        'year_built': 1995,
        'parking': 2,
        'hoa_fees': 0,
        'property_taxes': 4800,
        'school_rating': 8,
        'walk_score': 70,
        'photos': ['main1.jpg'],
        'features': ['Fireplace', 'Backyard', 'Central AC'],
    },
    {
        'id': 2,
        'address': '456 Oak Ave, Springfield',
        'price': 470000,
        'property_type': 'House',
        'bedrooms': 4,
        'bathrooms': 2.5,
        'area_sqft': 2000,
        'lot_size_sqft': 5200,
        'year_built': 2000,
        'parking': 2,
        'hoa_fees': 0,
        'property_taxes': 5100,
        'school_rating': 9,
        'walk_score': 75,
        'photos': ['oak1.jpg'],
        'features': ['Pool', 'Backyard', 'Central AC'],
    },
    {
        'id': 3,
        'address': '789 Pine Rd, Springfield',
        'price': 430000,
        'property_type': 'Townhouse',
        'bedrooms': 3,
        'bathrooms': 2,
        'area_sqft': 1600,
        'lot_size_sqft': 2000,
        'year_built': 2010,
        'parking': 1,
        'hoa_fees': 150,
        'property_taxes': 4200,
        'school_rating': 7,
        'walk_score': 68,
        'photos': ['pine1.jpg'],
        'features': ['Balcony', 'Central AC'],
    },
]

# Parameters to compare
compare_params = [
    'address', 'price', 'property_type', 'bedrooms', 'bathrooms', 'area_sqft',
    'lot_size_sqft', 'year_built', 'parking', 'hoa_fees', 'property_taxes',
    'school_rating', 'walk_score', 'features'
]

def compare_listings(primary: Dict, others: List[Dict], params: List[str]):
    """
    Compare a primary listing with other listings and print a comparison table.
    Highlights differences by marking them with '*'.
    """
    # Prepare header
    headers = ['Parameter', 'Primary'] + [f"Other {i+1}" for i in range(len(others))]
    rows = []
    for param in params:
        primary_val = primary.get(param, '-')
        other_vals = [o.get(param, '-') for o in others]
        # For list-type fields, compare as sets
        if isinstance(primary_val, list):
            primary_val_str = ', '.join(primary_val)
            other_val_strs = [', '.join(v) if isinstance(v, list) else str(v) for v in other_vals]
            diff_flags = [primary_val_str != v for v in other_val_strs]
        else:
            primary_val_str = str(primary_val)
            other_val_strs = [str(v) for v in other_vals]
            diff_flags = [primary_val_str != v for v in other_val_strs]
        # Mark differences with '*'
        row = [param.capitalize().replace('_', ' '), primary_val_str]
        for val, diff in zip(other_val_strs, diff_flags):
            row.append(val + (' *' if diff else ''))
        rows.append(row)
    # Print table
    col_widths = [max(len(str(cell)) for cell in col) for col in zip(*([headers] + rows))]
    fmt = ' | '.join('{{:<{}}}'.format(w) for w in col_widths)
    print(fmt.format(*headers))
    print('-+-'.join('-'*w for w in col_widths))
    for row in rows:
        print(fmt.format(*row))

if __name__ == '__main__':
    # Example: compare first listing with the other two
    primary = sample_listings[0]
    others = sample_listings[1:]
    print("Comparing Primary Listing with Others:\n")
    compare_listings(primary, others, compare_params)
