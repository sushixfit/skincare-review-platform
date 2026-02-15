import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import ReviewCard from '@/components/ReviewCard';
import { reviews } from '@/lib/data';

export default function Home() {
  const featuredReviews = reviews.slice(0, 3);

  return (
    <main>
      <section style={{
        background: 'linear-gradient(135deg, #fdfbf7 0%, #eef2ff 100%)',
        padding: '6rem 1rem',
        textAlign: 'center',
        borderBottom: '1px solid var(--border)'
      }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
          <h1 style={{
            fontSize: '3.5rem',
            fontWeight: '800',
            letterSpacing: '-0.03em',
            marginBottom: '0.5rem',
            lineHeight: 1.1
          }}>
            Real Skin, <span style={{ color: 'var(--primary)' }}>Real Reviews</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '600px', lineHeight: 1.6 }}>
            Discover what really works. Join the community sharing honest experiences about skincare products.
          </p>
          <div style={{ marginTop: '1rem', width: '100%', display: 'flex', justifyContent: 'center' }}>
            <SearchBar />
          </div>
        </div>
      </section>

      <section className="container" style={{ padding: '5rem 1rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2rem', fontWeight: '700' }}>Recent Reviews</h2>
          <Link href="/reviews" style={{ color: 'var(--primary)', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            View all →
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
          {featuredReviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </section>

      <section style={{ background: 'var(--secondary)', padding: '5rem 1rem', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontSize: '2rem', marginBottom: '1rem' }}>Have a product you love (or hate)?</h2>
          <p style={{ maxWidth: '600px', margin: '0 auto 2rem auto', color: '#64748b' }}>
            Help others make better decisions by sharing your experience. It takes less than 2 minutes!
          </p>
          <Link href="/submit" className="btn btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }}>
            Write a Review
          </Link>
        </div>
      </section>
    </main>
  );
}
