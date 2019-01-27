export interface BookReference {
    id: string;
    name: string;
}

export interface Author {
    id: string;
    name: string;
    nationality: string,
    birthday: string,
    gender: string,
    link: string,
    biography: string,
    books: BookReference[];
}
