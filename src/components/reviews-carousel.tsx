'use client';

import { useEffect, useRef, useState } from 'react';

export interface ReviewItem {
  id: string;
  authorName: string;
  rating: number;
  body: string;
}

export default function ReviewsCarousel({ reviews }: { reviews: ReviewItem[] }) {
  const [index, setIndex] = useState(0);
  const count = reviews.length;
  const safeIndex = (i: number) => ((i % count) + count) % count;
  const pausedRef = useRef(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  // Autoplay to next review every 5 seconds
  useEffect(() => {
    if (count <= 1) return; // no need to auto-advance
    const id = setInterval(() => {
      if (!pausedRef.current) setIndex((i) => i + 1);
    }, 5000);
    return () => clearInterval(id);
  }, [count]);

  if (!count) {
    return <p style={{ color: '#9ca3af', textAlign: 'center' }}>No reviews yet.</p>;
  }

  const current = reviews[safeIndex(index)];

  const onMouseEnter = () => {
    pausedRef.current = true;
  };
  const onMouseLeave = () => {
    pausedRef.current = false;
  };

  const onTouchStart: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.touches[0];
    touchStartX.current = t.clientX;
    touchStartY.current = t.clientY;
    pausedRef.current = true;
  };
  const onTouchEnd: React.TouchEventHandler<HTMLDivElement> = (e) => {
    const t = e.changedTouches[0];
    const sx = touchStartX.current;
    const sy = touchStartY.current;
    pausedRef.current = false;
    touchStartX.current = null;
    touchStartY.current = null;
    if (sx == null || sy == null) return;
    const dx = t.clientX - sx;
    const dy = t.clientY - sy;
    // Only consider horizontal swipes with minimal vertical movement
    if (Math.abs(dx) > 40 && Math.abs(dy) < 30) {
      if (dx < 0) setIndex((i) => i + 1); // swipe left => next
      else setIndex((i) => i - 1); // swipe right => prev
    }
  };

  return (
    <div
      style={{ position: 'relative', maxWidth: 900, margin: '0 auto' }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        style={{
          backgroundColor: '#0f1115',
          padding: 32,
          borderRadius: 12,
          border: '1px solid rgba(255, 255, 255, 0.08)',
          boxShadow: '0 10px 20px rgba(0, 0, 0, 0.6)',
          minHeight: 220,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 16 }}>
          <div
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#f97316',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 12,
              color: 'white',
              fontWeight: 'bold',
            }}
          >
            {current!.authorName?.charAt(0).toUpperCase() || 'U'}
          </div>
          <div>
            <div style={{ fontSize: '1rem', fontWeight: 700, color: '#f3f4f6', margin: 0 }}>
              {current!.authorName}
            </div>
            <div style={{ color: '#f97316' }}>{'★'.repeat(current!.rating).padEnd(5, '☆')}</div>
          </div>
        </div>
        <p style={{ color: '#d1d5db', lineHeight: 1.6, fontStyle: 'italic' }}>{current!.body}</p>
      </div>

      <button
        aria-label="Previous review"
        onClick={() => setIndex((i) => i - 1)}
        style={{
          position: 'absolute',
          left: -8,
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#111827',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          padding: '8px 10px',
          cursor: 'pointer',
        }}
      >
        ‹
      </button>

      <button
        aria-label="Next review"
        onClick={() => setIndex((i) => i + 1)}
        style={{
          position: 'absolute',
          right: -8,
          top: '50%',
          transform: 'translateY(-50%)',
          background: '#111827',
          color: 'white',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: 8,
          padding: '8px 10px',
          cursor: 'pointer',
        }}
      >
        ›
      </button>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginTop: 12 }}>
        {reviews.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to review ${i + 1}`}
            onClick={() => setIndex(i)}
            style={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              background: i === safeIndex(index) ? '#f97316' : '#374151',
              border: 'none',
              cursor: 'pointer',
            }}
          />
        ))}
      </div>
    </div>
  );
}


