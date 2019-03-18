export class Influencer {
    username: string;
    fullName: string;
    picture: string;
    biography: string;
    followerCount: number;
    stats: Stats;
}

export class Stats {
    followerCount: number;
    interests: string[];
    engagement: Engagement;
}

export class Engagement {
    avgCommentsRatio: number;
    avgLikesRatio: number;
}
