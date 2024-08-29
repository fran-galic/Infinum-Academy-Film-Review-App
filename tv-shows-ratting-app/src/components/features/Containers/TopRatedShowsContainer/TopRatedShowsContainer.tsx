import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { ShowsList } from '@/components/shared/shows/ShowsList/ShowsList';
import { swrKeys } from '@/fetchers/swrKeys';
import useSWR from 'swr';
import { getTopRatedShows } from '@/fetchers/shows';

export const TopRatedShowsContainer = () => {
  const { data, error, isLoading } = useSWR(
    swrKeys.topRatedPageItems(1, 20),
    getTopRatedShows
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error || !data) {
    return <div>Ups something went wrong...</div>;
  }

  return <ShowsList shows={data?.shows} />;
};
