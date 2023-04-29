export interface IUser {
  _id: string;
  fullname: string;
  username: string;
  credential: {
    email: string;
    password: string;
  };
  job: string;
  image: string;
  badge: string;
  isActive: boolean;
  roles: 'user' | 'admin';
  following: Array<string>;
  followers: Array<string>;
  saved: Array<string>;
}

export interface IOtp {
  _id: string;
  otp_number: number;
  email: string;
  created_at: string;
}

export interface IPost {
  _id: string;
  user_id: string;
  title: string;
  category: string;
  description: string;
  code: string;
  image: string;
  comment?: Array<Icomment>;
  isEdited: boolean;
  likes: number;
  dislikes: number;
}

export interface Icomment {
  _id: string;
  user_id: string;
  text: string;
  likes: number;
  dislikes: number;
  reply?: Array<Icomment>;
}
