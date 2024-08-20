'use client';

import { TopRatedShowsContainer } from '@/components/features/Containers/TopRatedShowsContainer/TopRatedShowsContainer';
import { AuthRedirect } from '@/components/shared/auth/AuthRedirect/AuthRedirect';

export default function AllShowsPage() {
  return (
    <>
      <AuthRedirect to="/login" condition="isLoggedOut" />
      <TopRatedShowsContainer />
    </>
  );
}
