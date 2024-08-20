import { fetcher } from '@/fetchers/fetcher';
import { ILoginData, IRegisterData, IUser } from '@/typings/Auth.type';

export async function registerAccount(
  url: string,
  { arg }: { arg: IRegisterData }
) {
  const data = await fetcher<IUser>(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  });
  localStorage.setItem('user-id', (data as IUser).user.id);
  return data;
}

export async function loginUser(url: string, { arg }: { arg: ILoginData }) {
  const data = await fetcher<IUser>(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  });
  localStorage.setItem('user-id', (data as IUser).user.id);
  return data;
}
