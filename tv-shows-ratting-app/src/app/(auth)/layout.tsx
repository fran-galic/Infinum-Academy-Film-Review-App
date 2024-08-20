import { MobileNavigation } from '@/components/shared/MobileNavigation/MobileNavigation';
import { SidebarNavigation } from '@/components/shared/SidebarNavigation/SidebarNavigation';
import { Box, Flex, Show, Stack } from '@chakra-ui/react';

//kako bi se postavila odgovarajuca boja na neki token?
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Show below="xl">
        <Stack width={'100vw'} minHeight="100vh">
          <MobileNavigation />
          <Flex
            flex="1"
            overflowY="auto"
            sx={{
              '::-webkit-scrollbar': { display: 'none' },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
            }}
            justify={'center'}
          >
            {children}
          </Flex>
        </Stack>
      </Show>
      <Show above="xl">
        <Flex height="100vh" width={'100vw'}>
          <SidebarNavigation />
          <Box
            flex="1"
            overflowY="auto"
            sx={{
              '::-webkit-scrollbar': { display: 'none' },
              '-ms-overflow-style': 'none',
              'scrollbar-width': 'none',
            }}
          >
            {children}
          </Box>
        </Flex>
      </Show>
    </>
  );
}
