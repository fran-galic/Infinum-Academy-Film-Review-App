'use client';

import { MyProfileContainer } from '@/components/features/Containers/MyProfileContainer/MyProfileContainer';
import { AuthRedirect } from '@/components/shared/auth/AuthRedirect/AuthRedirect';
import { Box } from '@chakra-ui/react';

export default function MyProfilePag() {
  return (
    <>
      <AuthRedirect to="/login" condition="isLoggedOut" />
      <MyProfileContainer />
    </>
  );
}
