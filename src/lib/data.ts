export interface Review {
    id: string;
    productId: string;
    productName: string;
    rating: number; // 1-5
    author: string;
    content: string;
    date: string;
    imageUrl?: string;
}

export const reviews: Review[] = [
    {
        id: '1',
        productId: 'prod-1',
        productName: 'Hydrating Hyaluronic Serum',
        rating: 5,
        author: 'Sarah J.',
        content: 'This serum changed my life! My skin feels so plump and hydrated. I use it every morning and night.',
        date: '2023-10-15',
        imageUrl: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
        id: '2',
        productId: 'prod-2',
        productName: 'Vitamin C Glow Moisturizer',
        rating: 4,
        author: 'Mike T.',
        content: 'Good texture, smells nice, but took a while to see results. I prefer a pump bottle instead of a jar.',
        date: '2023-10-12',
        imageUrl: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
        id: '3',
        productId: 'prod-3',
        productName: 'Gentle Foaming Cleanser',
        rating: 5,
        author: 'Emily R.',
        content: 'Best cleanser for sensitive skin. Doesn\'t strip natural oils at all.',
        date: '2023-10-10',
        imageUrl: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=300&h=300'
    },
    {
        id: '4',
        productId: 'prod-4',
        productName: 'Retinol Night Cream',
        rating: 3,
        author: 'Alex D.',
        content: 'A bit too strong for me, caused some redness. Make sure to sandwich it with moisturizer.',
        date: '2023-10-05',
        imageUrl: 'https://images.unsplash.com/photo-1571781565023-40c8d4148430?auto=format&fit=crop&q=80&w=300&h=300'
    }
];
