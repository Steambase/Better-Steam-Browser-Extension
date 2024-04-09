export type Reviews = {
    steam?: SteamReviews;
    metacritic?: MetacriticReviews;
}

type SteamReviews = {
    total: number;
    positive: number;
    negative: number;
    calculated_score: number;
    description: string;
}

type MetacriticReviews = {
    total: number;
    score: number;
}
