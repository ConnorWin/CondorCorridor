export class Article {
    title: string;
    content: string;
    type?: ArticleTypes;
}

export enum ArticleTypes {
    SessionRecap,
    News,
    Lore,
}