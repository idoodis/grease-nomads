'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <style jsx>{`
        @media (min-width: 768px) {
          .desktop-nav {
            display: flex !important;
          }
          .mobile-menu-btn {
            display: none !important;
          }
          .mobile-menu {
            display: none !important;
          }
        }
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(226, 232, 240, 0.5)',
        padding: '16px 0',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
          }}
        >
          <img
            src="/logo.png"
            alt="Grease Nomads - ASE Certified Mobile Mechanics"
            style={{
              height: '50px',
              width: 'auto',
              marginRight: '12px',
            }}
          />
          <span
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#1e293b',
            }}
          >
            Grease Nomads
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '32px',
          }}
          className="desktop-nav"
        >
          <Link
            href="/"
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s',
            }}
          >
            Home
          </Link>
          <Link
            href="/services"
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s',
            }}
          >
            Services
          </Link>
          <Link
            href="/about"
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s',
            }}
          >
            About
          </Link>
          <Link
            href="/contact"
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s',
            }}
          >
            Contact
          </Link>
          <Link
            href="/admin/login"
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              transition: 'color 0.3s',
              fontSize: '0.875rem',
            }}
          >
            Admin
          </Link>
          <a
            href="tel:+13122085007"
            style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'background-color 0.3s',
            }}
          >
            Call (312) 208-5007
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{
            display: 'block',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            padding: '8px',
          }}
          className="mobile-menu-btn"
        >
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            backgroundColor: 'white',
            borderTop: '1px solid #e2e8f0',
            padding: '20px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
          }}
          className="mobile-menu"
        >
          <Link
            href="/"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '8px 0',
            }}
          >
            Home
          </Link>
          <Link
            href="/services"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '8px 0',
            }}
          >
            Services
          </Link>
          <Link
            href="/about"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '8px 0',
            }}
          >
            About
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '8px 0',
            }}
          >
            Contact
          </Link>
          <Link
            href="/admin/login"
            onClick={() => setIsMenuOpen(false)}
            style={{
              color: '#64748b',
              textDecoration: 'none',
              fontWeight: '500',
              padding: '8px 0',
              fontSize: '0.875rem',
            }}
          >
            Admin
          </Link>
          <a
            href="tel:+13122085007"
            style={{
              backgroundColor: '#f97316',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              textAlign: 'center',
              marginTop: '8px',
            }}
          >
            Call (312) 208-5007
          </a>
        </div>
      )}
    </header>
    </>
  );
}
