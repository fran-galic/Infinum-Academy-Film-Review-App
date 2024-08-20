import { fetcher } from '@/fetchers/fetcher';
import {
  ICreateReviewData,
  IEditReviewData,
  IReviewList,
} from '@/typings/Review.type';

export async function getReviews(
  url: string,
  { arg }: { arg?: any } = {}
): Promise<IReviewList> {
  return fetcher<IReviewList>(url, {
    method: 'GET',
  });
}

export async function postReview(
  url: string,
  { arg }: { arg: ICreateReviewData }
) {
  return fetcher<IReviewList>(url, {
    method: 'POST',
    body: JSON.stringify(arg),
  });
}

export async function delteReview(url: string, { arg }: { arg?: any } = {}) {
  return fetcher<IReviewList>(url, {
    method: 'DELETE',
  });
}

export async function patchReview(
  url: string,
  { arg }: { arg: IEditReviewData }
) {
  return fetcher<IReviewList>(url, {
    method: 'PATCH',
    body: JSON.stringify(arg),
  });
}
