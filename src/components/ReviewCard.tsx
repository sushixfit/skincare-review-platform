import styles from './ReviewCard.module.css';
import { Review } from '@/lib/data';
import Link from 'next/link';

export default function ReviewCard({ review }: { review: Review }) {
    return (
        <Link href={`/reviews/${review.id}`} className={styles.card} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div className={styles.header}>
                <h3 className={styles.productName}>{review.productName}</h3>
                <div className={styles.rating}>
                    {'★'.repeat(review.rating)}
                    <span style={{ color: '#e2e8f0' }}>{'★'.repeat(5 - review.rating)}</span>
                </div>
            </div>
            <p className={styles.content}>"{review.content}"</p>
            <div className={styles.footer}>
                <span className={styles.author}>{review.author}</span>
                <span>{new Date(review.date).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</span>
            </div>
        </Link>
    );
}
