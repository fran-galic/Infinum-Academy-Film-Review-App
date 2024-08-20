'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

interface IAuthRedirectProps {
  to: string;
  condition: 'isLoggedIn' | 'isLoggedOut';
}

export const AuthRedirect = ({ to, condition }: IAuthRedirectProps) => {
  // sluzi nam za prsitup ruteru i upravljnu navigaicjama unutar apliakcije
  // pruza informaicje o trenutnoj ruti i nudi mogucnosti navigaicje izmedu ruta u aplikaicji
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
