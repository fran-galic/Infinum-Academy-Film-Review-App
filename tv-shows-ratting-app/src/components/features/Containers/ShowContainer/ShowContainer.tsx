'use client';

import { ShowDetails } from '@/components/features/shows/ShowDetails/ShowDetails';
import { Stack } from '@chakra-ui/react';
import { ShowReviewSection } from '@/components/features/shows/ShowReviewSection/ShowReviewSection';
import { useParams } from 'next/navigation';
import useSWR from 'swr';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';

import { swrKeys } from '@/fetchers/swrKeys';
import { getSpecificShow } from '@/fetchers/shows';

export default function ShowContainer() {
  const params = useParams();
  const id = params.id;

  const { data, error, isLoading } = useSWR(
    swrKeys.specificShow(id as string),
    getSpecificShow
  );

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error || !data) {
    return <div>Ups something went wrong...</div>;
  }

  return (
    <Stack
      spacing={{ base: 0, sm: 5 }}
      pt={{ base: 0, xl: 7 }}
      px={5}
      minHeight="100vh"
    >
      <ShowDetails show={data.show} />
      <ShowReviewSection showId={data.show.id} />
    </Stack>
  );
}
