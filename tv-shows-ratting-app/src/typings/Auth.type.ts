export interface IRegisterData {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface ILoginData {
  email: string;
  password: string;
}

export interface IUser {
  user: {
    id: string;
    email: string;
    image_url?: string;
  };
}
