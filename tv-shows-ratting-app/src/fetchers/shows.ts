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
  const result = await fetcher<IShowsResponse>(url, {
    method: 'GET',
  });

  if (result === undefined) {
    throw new Error('Failed to fetch shows');
  }

  return result;
}

export async function getTopRatedShows(
  url: string,
  { arg }: { arg?: any } = {}
): Promise<IShowsResponse> {
  const result = await fetcher<IShowsResponse>(url, {
    method: 'GET',
  });

  if (result === undefined) {
    throw new Error('Failed to fetch top-rated shows');
  }

  return result;
}

export async function getSpecificShow(
  url: string,
  { arg }: { arg?: any } = {}
): Promise<IShowResponse> {
  const result = await fetcher<IShowResponse>(url, {
    method: 'GET',
  });

  if (result === undefined) {
    throw new Error('Failed to fetch the specific show');
  }

  return result;
}