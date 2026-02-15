import ReviewForm from '@/components/ReviewForm';

export default function SubmitPage() {
    return (
        <main className="container" style={{ padding: '4rem 1rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '600px' }}>
                <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>Share Your Experience</h1>
                <p style={{ color: '#64748b', fontSize: '1.1rem' }}>
                    Your honest feedback helps others find the right products for their skin.
                </p>
            </div>
            <ReviewForm />
        </main>
    );
}
