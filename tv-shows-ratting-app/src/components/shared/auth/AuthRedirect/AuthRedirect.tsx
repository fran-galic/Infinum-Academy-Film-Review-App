'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IAuthRedirectProps {
  to: string;
  condition: 'isLoggedIn' | 'isLoggedOut';
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
  // služi za pristup ruteru i upravljanje navigacijom unutar aplikacije
  // Pruža informacije o trenutnoj ruti i omogućuje navigaciju među različitim rutama unutar aplikacije.
  const router = useRouter();

  useEffect(() => {
    const headers = localStorage.getItem('userHeaders');

    if (!headers && condition === 'isLoggedOut') {
      router.push(to);
    }
    if (headers && condition === 'isLoggedIn') {
      router.push(to);
    }
  }, [condition, router, to]);

  return null;
};
