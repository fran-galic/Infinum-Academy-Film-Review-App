'use client';

import { AllShowsContainer } from '@/components/features/Containers/AllShowsContainer/AllShowsContainer';
import { AuthRedirect } from '@/components/shared/auth/AuthRedirect/AuthRedirect';
import { Box } from '@chakra-ui/react';

export default function AllShowsPage() {
  return (
    <>
      <AuthRedirect to="/login" condition="isLoggedOut" />
      <AllShowsContainer />
    </>
  );
}
