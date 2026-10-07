'use strict';
window.NOIR_SEED = {
  "version": 1,
  "branches": [
    {
      "id": "1",
      "name": "Zayed Branch",
      "address": "Beverly hills-district 5",
      "pickup": true,
      "shipping": true
    },
    {
      "id": "2",
      "name": "Second Branch",
      "address": "",
      "pickup": true,
      "shipping": true
    },
    {
      "id": "3",
      "name": "Third Branch",
      "address": "",
      "pickup": true,
      "shipping": true
    },
    {
      "id": "4",
      "name": "Sahel Branch",
      "address": "",
      "pickup": true,
      "shipping": true
    }
  ],
  "products": [
    {
      "id": "p1",
      "name": "The Everyday Tote",
      "category": "Totes",
      "collection": "The everyday edit",
      "description": "A generous silhouette, a rich burgundy finish, and room for everything your day brings. An effortless companion from your first coffee to your last appointment.",
      "material": "leather finish · shoulder straps · open top",
      "price": 2850,
      "compareAt": 3400,
      "enabled": true,
      "badge": "Bestseller",
      "images": [
        "assets/burgundy-tote.jfif"
      ],
      "variants": [
        {
          "sku": "TOTE-001-BURGUNDY-L",
          "stock": {
            "1": 8,
            "2": 4,
            "3": 0,
            "4": 3
          },
          "limit": {
            "1": 6,
            "2": 3,
            "3": 0,
            "4": 2
          },
          "safety": 1
        }
      ]
    },
    {
      "id": "p2",
      "name": "The Signature Shoulder",
      "category": "Shoulder bags",
      "collection": "Modern classics",
      "description": "Quiet confidence in a beautifully structured shoulder bag. A refined shape, a statement handle, and an elegance that goes everywhere.",
      "material": "grained finish · top handle · gold-tone detailing",
      "price": 4200,
      "compareAt": 0,
      "enabled": true,
      "badge": "New arrival",
      "images": [
        "assets/noir-editorial.jfif"
      ],
      "variants": [
        {
          "sku": "SHL-002-BLACK-M",
          "stock": {
            "1": 5,
            "2": 3,
            "3": 0,
            "4": 2
          },
          "limit": {
            "1": 4,
            "2": 2,
            "3": 0,
            "4": 2
          },
          "safety": 0
        }
      ]
    },
    {
      "id": "p3",
      "name": "The Spectrum Shopper",
      "category": "Totes",
      "collection": "Color stories",
      "description": "Good days come in color. Our playful woven shopper brings a vibrant chevron pattern and a roomy silhouette to weekends, escapes, and everyday adventures.",
      "material": "woven finish · contrast handles · removable strap",
      "price": 1950,
      "compareAt": 2500,
      "enabled": true,
      "badge": "New favorite",
      "images": [
        "assets/spectrum-tote.jfif"
      ],
      "variants": [
        {
          "sku": "SPC-003-MULTI-L",
          "stock": {
            "1": 6,
            "2": 0,
            "3": 4,
            "4": 8
          },
          "limit": {
            "1": 4,
            "2": 0,
            "3": 3,
            "4": 6
          },
          "safety": 1
        }
      ]
    }
  ],
  "users": [
    {
      "id": "demo",
      "name": "Alex Morgan",
      "email": "alex@example.com",
      "phone": "01000000000",
      "addresses": []
    }
  ],
  "session": null,
  "cart": [],
  "wishlist": [],
  "orders": [],
  "settings": {
    "shippingFee": 100,
    "freeShipping": 5000,
    "holdMinutes": 15
  },
  "activity": []
};
