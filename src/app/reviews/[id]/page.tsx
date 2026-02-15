import { reviews } from '@/lib/data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function ReviewPage({ params }: PageProps) {
    const { id } = await params;
    const review = reviews.find((r) => r.id === id);

    if (!review) {
        notFound();
    }

    return (
        <main className="container" style={{ padding: '4rem 1rem' }}>
            <Link href="/reviews" style={{ color: '#64748b', display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', width: 'fit-content' }}>
                ← Back to all reviews
            </Link>

            <article style={{ background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius)', overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <div style={{ padding: '2rem', background: 'var(--secondary)', borderBottom: '1px solid var(--border)' }}>
                    <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem', color: 'var(--primary)' }}>{review.productName}</h1>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                        <span style={{ fontSize: '1.5rem', color: '#fbbf24', letterSpacing: '2px' }} aria-label={`${review.rating} out of 5 stars`}>
                            {'★'.repeat(review.rating)}
                            <span style={{ color: '#e2e8f0' }}>{'★'.repeat(5 - review.rating)}</span>
                        </span>
                        <span style={{ color: '#64748b' }}>Reviewed by <span style={{ fontWeight: '500', color: 'var(--foreground)' }}>{review.author}</span></span>
                    </div>
                </div>

                <div style={{ padding: '3rem 2rem', fontSize: '1.15rem', lineHeight: '1.8' }}>
                    {review.imageUrl && (
                        <img
                            src={review.imageUrl}
                            alt={review.productName}
                            style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'cover', borderRadius: 'var(--radius)', marginBottom: '2rem', display: 'block' }}
                        />
                    )}
                    <p style={{ whiteSpace: 'pre-wrap' }}>{review.content}</p>
                </div>

                <div style={{ padding: '2rem', borderTop: '1px solid var(--border)', color: '#64748b', fontSize: '0.875rem', textAlign: 'right' }}>
                    Posted on {new Date(review.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                </div>
            </article>

            <div style={{ marginTop: '4rem', textAlign: 'center' }}>
                <h3 style={{ marginBottom: '1rem' }}>Tried this product?</h3>
                <Link href="/submit" className="btn btn-primary">
                    Write your own review
                </Link>
            </div>
        </main>
    );
}
