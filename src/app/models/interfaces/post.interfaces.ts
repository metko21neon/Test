export interface IUser {
  id?: number;
  name?: string;
  username?: string;
  email?: string;
  address?: IAddress;
  phone?: string;
  website?: string;
  company?: ICompany;
}

export interface IAddress {
  street?: string;
  suite?: string;
  city?: string;
  zipcode?: string;
  geo?: IGeo;
}

export interface IGeo {
  lat?: string;
  lng?: string;
}

export interface ICompany {
  name?: string;
  catchPhrase?: string;
  bs?: string;
}

export interface IPost {
  id?: number;
  title?: string;
  comments?: IComment[];
  author?: string;
  userId?: number;
}

export interface IComment {
  id?: number;
  postId?: number;
  name?: string;
  email?: string;
  body?: string;
}
