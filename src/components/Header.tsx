import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <div className="site-title">Handcrafted Haven</div>
      <nav>
        <ul className="nav-list">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/products">Products</Link></li>
          <li><Link href="/sellers">Artisians</Link></li>
          <li><Link href="/login">Login</Link></li>
        </ul>
      </nav>
    </header>
  );
}