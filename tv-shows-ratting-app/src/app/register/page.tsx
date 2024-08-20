import { Center } from '@chakra-ui/react';
import { RegistrationForm } from '@/components/features/auth/RegistrationForm/RegistrationForm';
import { AuthRedirect } from '@/components/shared/auth/AuthRedirect/AuthRedirect';

export default function RegisterPage() {
  return (
    <>
      <AuthRedirect to="/all-shows" condition="isLoggedIn" />
      <Center width="100vw" height="100vh">
        <RegistrationForm />
      </Center>
    </>
  );
}
