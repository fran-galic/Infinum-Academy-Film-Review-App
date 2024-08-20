import { fetcher } from './fetcher';

export interface IUserDataResponse {
  user: IUser;
}

export interface IUser {
  id: string;
  email: string;
  image_url?: string;
}

export async function getProfileData(
  url: string,
  { arg }: { arg?: any } = {}
): Promise<IUserDataResponse> {
  return fetcher<IUserDataResponse>(url, {
    method: 'GET',
  });
}
