'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-title">Handcrafted Haven</div>

      <nav className={`nav ${isOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/sellers">Artisans</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>

      <button
        className="hamburger"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle navigation"
      >
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </button>
    </header>
  );
}
