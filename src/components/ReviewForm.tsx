'use client';
import { useState } from 'react';
import styles from './ReviewForm.module.css';

export default function ReviewForm() {
    const [formData, setFormData] = useState({
        productName: '',
        rating: 5,
        author: '',
        content: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        console.log('Submitted:', formData);
        setTimeout(() => {
            setSubmitted(true);
        }, 500);
    };

    if (submitted) {
        return (
            <div style={{ textAlign: 'center', padding: '3rem 2rem', background: 'var(--secondary)', borderRadius: 'var(--radius)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🎉</div>
                <h3 style={{ color: 'var(--primary)', marginBottom: '1rem', fontSize: '1.5rem' }}>Review Submitted!</h3>
                <p style={{ color: '#64748b', marginBottom: '2rem' }}>Thank you for helping the community make better choices.</p>
                <button
                    onClick={() => {
                        setSubmitted(false);
                        setFormData({ productName: '', rating: 5, author: '', content: '' });
                    }}
                    className="btn btn-primary"
                >
                    Write Another Review
                </button>
            </div>
        );
    }

    return (
        <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
                <label className={styles.label} htmlFor="productName">Product Name</label>
                <input
                    id="productName"
                    className={styles.input}
                    type="text"
                    required
                    value={formData.productName}
                    onChange={e => setFormData({ ...formData, productName: e.target.value })}
                    placeholder="e.g. Cerave Hydrating Cleanser"
                />
            </div>

            <div className={styles.field}>
                <label className={styles.label}>Rating</label>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    {[1, 2, 3, 4, 5].map(star => (
                        <button
                            key={star}
                            type="button"
                            onClick={() => setFormData({ ...formData, rating: star })}
                            style={{
                                fontSize: '2rem',
                                background: 'none',
                                border: 'none',
                                cursor: 'pointer',
                                color: star <= formData.rating ? '#fbbf24' : '#e2e8f0',
                                transition: 'transform 0.1s',
                                padding: 0
                            }}
                            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
                            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            title={`${star} stars`}
                        >
                            ★
                        </button>
                    ))}
                </div>
            </div>

            <div className={styles.field}>
                <label className={styles.label} htmlFor="author">Your Name</label>
                <input
                    id="author"
                    className={styles.input}
                    type="text"
                    required
                    value={formData.author}
                    onChange={e => setFormData({ ...formData, author: e.target.value })}
                    placeholder="Jane Doe"
                />
            </div>

            <div className={styles.field}>
                <label className={styles.label} htmlFor="content">Your Review</label>
                <textarea
                    id="content"
                    className={styles.textarea}
                    required
                    value={formData.content}
                    onChange={e => setFormData({ ...formData, content: e.target.value })}
                    placeholder="Tell us what you liked or didn't like..."
                />
            </div>

            <button type="submit" className="btn btn-primary" style={{ marginTop: '1rem', padding: '1rem' }}>
                Submit Review
            </button>
        </form>
    );
}
