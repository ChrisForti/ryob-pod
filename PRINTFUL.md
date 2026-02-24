# Printful Integration Guide

## Getting Started

### 1. Account Setup

1. Create a Printful account at [https://www.printful.com](https://www.printful.com)
2. Navigate to **Settings** → **Stores** → **Add Store**
3. Choose "Manual order platform/API" as your store type

### 2. API Access

#### Get Your API Key

1. Go to **Settings** → **Stores** → Select your store
2. Click on **API** tab
3. Generate a new API key
4. Store it securely (add to `.env` file, never commit to git)

```env
VITE_PRINTFUL_API_KEY=your_api_key_here
```

#### API Authentication

```javascript
// All API requests require this header:
Authorization: Bearer YOUR_API_KEY
```

## Core API Endpoints

### Base URL

```
https://api.printful.com
```

### Key Endpoints

#### 1. Get Product Catalog

```
GET /store/products
```

Returns all products available in your store.

#### 2. Get Product Details

```
GET /store/products/{id}
```

Get specific product with variants, pricing, and print files info.

#### 3. Get Product Variants

```
GET /store/variants/{id}
```

Get details about a specific variant (size, color).

#### 4. Create Order

```
POST /orders
```

Submit an order for fulfillment.

#### 5. Generate Mockup

```
POST /mockup-generator/create-task/{id}
```

Generate product mockups with your design.

## Integration Flow

### Step 1: Fetch Products

```javascript
const response = await fetch("https://api.printful.com/store/products", {
  headers: {
    Authorization: `Bearer ${import.meta.env.VITE_PRINTFUL_API_KEY}`,
  },
});
const data = await response.json();
```

### Step 2: Display Products

- Parse product data
- Show variants (sizes, colors)
- Display pricing

### Step 3: Design Customization

- Accept user input (text, logo upload)
- Generate design file (PNG with transparency)
- Position design on product template

### Step 4: Generate Mockup

```javascript
const mockupTask = await fetch(
  `https://api.printful.com/mockup-generator/create-task/${productId}`,
  {
    method: "POST",
    headers: {
      Authorization: `Bearer ${PRINTFUL_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      variant_ids: [variantId],
      format: "jpg",
      files: [
        {
          placement: "front",
          image_url: "https://your-design-url.com/design.png",
          position: {
            area_width: 1800,
            area_height: 2400,
            width: 1800,
            height: 1800,
            top: 300,
            left: 0,
          },
        },
      ],
    }),
  },
);
```

### Step 5: Create Order

```javascript
const order = await fetch("https://api.printful.com/orders", {
  method: "POST",
  headers: {
    Authorization: `Bearer ${PRINTFUL_API_KEY}`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    recipient: {
      name: "John Doe",
      address1: "123 Street",
      city: "Miami",
      state_code: "FL",
      country_code: "US",
      zip: "33101",
    },
    items: [
      {
        variant_id: variantId,
        quantity: 1,
        files: [
          {
            url: "https://your-design-url.com/design.png",
          },
        ],
      },
    ],
  }),
});
```

## Webhooks

Configure webhooks to receive updates:

- Order shipped
- Package shipped
- Package returned
- Order failed

Setup in: **Settings** → **Stores** → **Webhooks**

## File Requirements

### Design Files

- **Format**: PNG (with transparency) or JPG
- **Resolution**: 300 DPI minimum
- **Color Mode**: RGB
- **Max file size**: 50MB

### Print Areas (Common Products)

- **T-Shirt Front**: 4500 x 5400 px
- **Hoodie Front**: 4500 x 5400 px
- **Hat (embroidery)**: 4500 x 1800 px

## Testing

### Sandbox Mode

Printful doesn't have a dedicated sandbox, but:

1. Use test mode in your development environment
2. Create sample orders (mark as "sample" in API)
3. Cancel orders before fulfillment to avoid charges

## Cost Structure

- **Base Cost**: Product + printing cost (from Printful)
- **Shipping**: Calculated at checkout
- **Your Markup**: Set your retail price
- **Profit**: Retail price - (Base cost + Shipping)

## Rate Limits

- 120 requests per minute
- Implement request throttling in your app

## Resources

- [Printful API Docs](https://developers.printful.com/)
- [Mockup Generator Guide](https://developers.printful.com/docs/#tag/Mockup-Generator-API)
- [Product Templates](https://www.printful.com/print-files)

## Next Steps

1. ✅ Create Printful account
2. ✅ Generate API key
3. ⬜ Test product catalog fetching
4. ⬜ Build product customizer UI
5. ⬜ Implement mockup generation
6. ⬜ Set up order flow
7. ⬜ Configure webhooks
8. ⬜ Test end-to-end order
