export interface CollectionReference {
  id: string;
}

export interface Customer {
  id: string;
  nickname: string;
  collection: CollectionReference;
  role: string;
}

