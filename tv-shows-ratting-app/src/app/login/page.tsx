import { Center } from '@chakra-ui/react';
import { LoginForm } from '@/components/features/auth/LoginForm/LoginForm';
import { AuthRedirect } from '@/components/shared/auth/AuthRedirect/AuthRedirect';

export default function LoginPage() {
  return (
    <>
      <AuthRedirect to="/all-shows" condition="isLoggedIn" />
      <Center width="100vw" height="100vh">
        <LoginForm />
      </Center>
    </>
  );
}
