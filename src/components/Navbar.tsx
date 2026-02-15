import Link from 'next/link';

export default function Navbar() {
    return (
        <nav style={{
            borderBottom: '1px solid var(--border)',
            padding: '1rem 0',
            backgroundColor: 'rgba(255, 255, 255, 0.8)',
            backdropFilter: 'blur(10px)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', color: 'var(--primary)', textDecoration: 'none' }}>
                    GlowReview
                </Link>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <Link href="/reviews" className="btn btn-outline" style={{ border: 'none' }}>
                        Browse Reviews
                    </Link>
                    <Link href="/submit" className="btn btn-primary">
                        Write a Review
                    </Link>
                </div>
            </div>
        </nav>
    );
}
