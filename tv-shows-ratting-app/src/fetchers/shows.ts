import { IShow } from '@/typings/Show.type';
import { fetcher } from './fetcher';

export interface IShowsResponse {
  shows: Array<IShow>;
}

interface IShowResponse {
  show: IShow;
}

export async function getShows(
  url: string,
  { arg }: { arg?: any } = {}
): Promise<IShowsResponse> {
  return fetcher<IShowsResponse>(url, {
    method: 'GET',
  });
}

export async function getTopRatedShows(
  url: string,
  { arg }: { arg?: any } = {}
): Promise<IShowsResponse> {
  return fetcher<IShowsResponse>(url, {
    method: 'GET',
  });
}

export async function getSpecificShow(
  url: string,
  { arg }: { arg?: any } = {}
): Promise<IShowResponse> {
  return fetcher<IShowResponse>(url, {
    method: 'GET',
  });
}
