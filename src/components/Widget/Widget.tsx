import React, { useState, useEffect } from 'react';
import './Widget.css';
import Cell from './Cell/Cell';

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

const Widget =()=> {
  const [offers, setOffers] = useState<ApiOfferWrapper[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(WIDGET_API)
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json() as Promise<ApiResponse>;
      })
      .then((data) => {
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
    <div className="widget-grid">
      {/* Header Row */}
      {['Image', 'Name', 'Price', 'Merchant', 'Link'].map((hdr) => (
        <Cell key={hdr} header>
          {hdr}
        </Cell>
      ))}

      {/* Data Rows */}
      {offers.map((item, i) => (
        <React.Fragment key={i}>
          {/* 1) Image */}
          <Cell>
            {item.image ? (
              <img
                src={item.image}
                alt={item.offer.name}
                style={{ maxWidth: 80 }}
              />
            ) : (
              '–'
            )}
          </Cell>

          {/* 2) Name */}
          <Cell>{item.offer.name}</Cell>

          {/* 3) Price */}
          <Cell>
            {item.offer.currency_iso} {item.offer.price}
          </Cell>

          {/* 4) Merchant */}
          <Cell>
            {item.merchant.logo_url ? (
              <img
                src={item.merchant.logo_url}
                alt={item.merchant.name}
                style={{ maxHeight: 50 }}
              />
            ) : (
              item.merchant.name
            )}
          </Cell>

          {/* 5) Link */}
          <Cell>
            <a href={item.offer.link} target="_blank" rel="noopener noreferrer">
              View
            </a>
          </Cell>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Widget;