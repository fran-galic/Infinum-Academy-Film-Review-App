'use client';

import ShowContainer from '@/components/features/Containers/ShowContainer/ShowContainer';
import { AuthRedirect } from '@/components/shared/auth/AuthRedirect/AuthRedirect';

export default function OneShowDetailsPage() {
  return (
    <>
      <AuthRedirect to="/login" condition="isLoggedOut" />
      <ShowContainer />
    </>
  );
}
