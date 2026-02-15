import SearchBar from '@/components/SearchBar';
import ReviewCard from '@/components/ReviewCard';
import { reviews } from '@/lib/data';

interface PageProps {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function ReviewsPage({ searchParams }: PageProps) {
    const params = await searchParams
    const query = typeof params.search === 'string' ? params.search.toLowerCase() : '';

    const filteredReviews = query
        ? reviews.filter(
            (r) =>
                r.productName.toLowerCase().includes(query) ||
                r.content.toLowerCase().includes(query)
        )
        : reviews;

    return (
        <main className="container" style={{ padding: '4rem 1rem' }}>
            <div style={{ marginBottom: '3rem' }}>
                <h1 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '1.5rem' }}>
                    {query ? `Results for "${query}"` : 'All Reviews'}
                </h1>
                <SearchBar />
            </div>

            {filteredReviews.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                    {filteredReviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                    ))}
                </div>
            ) : (
                <div style={{ textAlign: 'center', padding: '4rem', background: 'var(--secondary)', borderRadius: 'var(--radius)' }}>
                    <h3 style={{ marginBottom: '1rem' }}>No reviews found</h3>
                    <p style={{ color: '#64748b' }}>Try searching for a different product or keyword.</p>
                </div>
            )}
        </main>
    );
}
