export type Store = {
    is_free?: boolean;
    price?: Price;
}

type Price = {
    value: number;
    initial?: number;
    discount_percentage?: number;
    is_discounted: boolean;
    currency: string;
}
