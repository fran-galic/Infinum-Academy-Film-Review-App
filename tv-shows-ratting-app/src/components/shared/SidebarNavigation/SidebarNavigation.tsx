'use client';

import { SiteLogo } from '@/components/core/SiteLogo/SiteLogo';
import { Flex, Text } from '@chakra-ui/react';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOutButton } from './LogOutButton/LogOutButton';
import { TvShowPicker } from '@/components/features/TvShowPicker/TvShowPicker';
import { TSPContextProvider } from '@/components/features/TvShowPicker/components/TSPContextProvider';

export const SidebarNavigation = () => {
  const pathname = usePathname();

  return (
    <Flex
      direction="column"
      height="100vh"
      width="220px"
      paddingTop={4}
      paddingBottom={3}
      pl={3}
      gap={14}
      fontSize={3}
    >
      <SiteLogo />
      <Flex direction="column" gap={3} flexGrow={1}>
        <Text
          as={NextLink}
          href="/all-shows"
          backgroundColor={pathname == '/all-shows' ? 'purple' : 'transparent'}
          padding={1}
          paddingLeft={4}
          borderRadius={2}
          width="120px"
        >
          All shows
        </Text>
        <Text
          as={NextLink}
          href="/top-rated"
          backgroundColor={pathname == '/top-rated' ? 'purple' : 'transparent'}
          padding={1}
          paddingLeft={4}
          borderRadius={2}
          width="120px"
        >
          Top rated
        </Text>
        <Text
          as={NextLink}
          href="/my-profile"
          backgroundColor={pathname == '/my-profile' ? 'purple' : 'transparent'}
          padding={1}
          paddingLeft={4}
          borderRadius={2}
          width="120px"
        >
          My profile
        </Text>
        <TSPContextProvider>
          <TvShowPicker />
        </TSPContextProvider>
      </Flex>
      <LogOutButton />
    </Flex>
  );
};
