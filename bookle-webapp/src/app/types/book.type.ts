export interface AuthorReference {
  id: string;
  name: string;
}

export interface Book {
  id: string;
  name: string;
  authors: AuthorReference[];
  ISBN: string;
  rating: number;
  publishYear: number;
  pages: number;
  link: string;
  tags: string[];
  abstract: string;
}
