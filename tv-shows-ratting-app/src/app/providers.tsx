// za charku
// app/providers.tsx
'use client';

import { rattingAppTheme } from '@/styles/theme/theme';
import { ChakraProvider } from '@chakra-ui/react';
import { SWRConfig } from 'swr';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SWRConfig>
      <ChakraProvider theme={rattingAppTheme}>{children}</ChakraProvider>
    </SWRConfig>
  );
}
