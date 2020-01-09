export interface Article {
    id?: string;
    title: string;
    body: string;
    created_at: Date;
    price: number;
    active?: boolean;
}
