import React, { useState, useEffect } from 'react';

interface ApiOfferWrapper {
  image?: string;
  offer: {
    name: string;
    price: string;            
    currency_iso: string;
    link: string;
  };
  merchant: {
    name: string;
    logo_url?: string;
  };
}

interface ApiResponse {
  widget: {
    data: {
      offers: ApiOfferWrapper[];
    };
  };
}

const WIDGET_API =
  'https://search-api.fie.future.net.uk/widget.php?model_name=xbox_one_s&area=US&rows=10';

export default function Widget() {
  const [offers, setOffers] = useState<ApiOfferWrapper[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(WIDGET_API)
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json() as Promise<ApiResponse>;
      })
      .then(data => {
        const all = data.widget.data.offers;
        const start = Math.floor(Math.random() * (all.length - 3));
        setOffers(all.slice(start, start + 4));
      })
      .catch(() => setError('Failed to load offers'));
  }, []);

  if (error) {
    return <div style={{ color: 'red' }}>{error}</div>;
  }

  return (
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '0.5rem',
          borderTop: '2px solid #ccc',
          borderLeft: '2px solid #ccc',
        }}
      >
        {/* Header Row */}
        {['Image', 'Name', 'Price', 'Merchant', 'Link'].map(hdr => (
          <div
            key={hdr}
            style={{
              padding: '0.5rem',
              fontWeight: 'bold',
              borderRight: '2px solid #ccc',
              borderBottom: '2px solid #ccc',
              textAlign: 'center',
            }}
          >
            {hdr}
          </div>
        ))}

        {/* Data Rows */}
        {offers.map((item, i) => (
          <React.Fragment key={i}>
            {/* Image */}
            <div
              style={{
                padding: '0.5rem',
                borderRight: '2px solid #eee',
                borderBottom: '2px solid #eee',
                textAlign: 'center',
              }}
            >
              {item.image ? (
                <img src={item.image} alt={item.offer.name} style={{ maxWidth: 80 }} />
              ) : (
                '–'
              )}
            </div>

            {/* Name */}
            <div
              style={{
                padding: '0.5rem',
                borderRight: '2px solid #eee',
                borderBottom: '2px solid #eee',
              }}
            >
              {item.offer.name}
            </div>

            {/* Price */}
            <div
              style={{
                padding: '0.5rem',
                borderRight: '2px solid #eee',
                borderBottom: '2px solid #eee',
              }}
            >
              {item.offer.currency_iso}{' '}
              {item.offer.price}
            </div>

            {/* Merchant */}
            <div
              style={{
                padding: '0.5rem',
                borderRight: '2px solid #eee',
                borderBottom: '2px solid #eee',
                textAlign: 'center',
              }}
            >
              {item.merchant.logo_url ? (
                <img
                  src={item.merchant.logo_url}
                  alt={item.merchant.name}
                  style={{ maxHeight: 50 }}
                />
              ) : (
                item.merchant.name
              )}
            </div>

            {/* Link */}
            <div
              style={{
                padding: '0.5rem',
                borderRight: '2px solid #eee',
                borderBottom: '2px solid #eee',
                textAlign: 'center',
              }}
            >
              <a
                href={item.offer.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                View
              </a>
            </div>

          </React.Fragment>
        ))}
      </div>
  );
}
