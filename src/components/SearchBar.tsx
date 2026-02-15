'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBar() {
    const [query, setQuery] = useState('');
    const router = useRouter();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (query.trim()) {
            router.push(`/reviews?search=${encodeURIComponent(query)}`);
        } else {
            router.push('/reviews');
        }
    };

    return (
        <form onSubmit={handleSearch} style={{ display: 'flex', gap: '0.5rem', width: '100%', maxWidth: '500px' }}>
            <input
                type="text"
                placeholder="Search for products (e.g., serum, moisturizer)..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    flex: 1,
                    padding: '0.75rem 1rem',
                    borderRadius: 'var(--radius)',
                    border: '1px solid var(--border)',
                    fontSize: '1rem',
                    outline: 'none',
                    boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
                }}
            />
            <button type="submit" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem' }}>
                Search
            </button>
        </form>
    );
}
