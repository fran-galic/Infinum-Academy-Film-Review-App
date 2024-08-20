import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Input,
  DrawerFooter,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import React from 'react';
import { IconButton } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';
import { useRouter } from 'next/navigation';
import { TvShowPicker } from '@/components/features/TvShowPicker/TvShowPicker';
import { TSPContextProvider } from '@/components/features/TvShowPicker/components/TSPContextProvider';
import { LogOutButton } from '../../SidebarNavigation/LogOutButton/LogOutButton';

export function NavigationDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      <IconButton
        aria-label="Mobile Navigation"
        icon={<HamburgerIcon />}
        ref={btnRef}
        onClick={onOpen}
        variant={'noButton'}
        fontSize={2}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent
          bg="purple"
          color={'white'}
          height={'100%'}
          borderTopLeftRadius={2}
        >
          <Box
            position="absolute"
            top="4"
            right="4"
            borderRadius="full"
            border="3px solid white"
            padding="0"
          >
            <DrawerCloseButton position="relative" top="0.4" right="0.3" />
          </Box>

          <DrawerBody>
            <Flex
              direction="column"
              gap={3}
              flexGrow={1}
              paddingTop={20}
              fontSize={3}
            >
              <Text
                as={NextLink}
                href="/all-shows"
                backgroundColor={
                  pathname == '/all-shows' ? 'darkpurple' : 'transparent'
                }
                padding={1}
                paddingLeft={4}
                borderRadius={2}
                width="120px"
                fontWeight={'normal'}
                onClick={() => {
                  onClose();
                }}
              >
                All shows
              </Text>
              <Text
                as={NextLink}
                href="/top-rated"
                backgroundColor={
                  pathname == '/top-rated' ? 'darkpurple' : 'transparent'
                }
                padding={1}
                paddingLeft={4}
                borderRadius={2}
                width="120px"
                fontWeight={'normal'}
                onClick={() => {
                  onClose();
                }}
              >
                Top rated
              </Text>
              <Text
                as={NextLink}
                href="/my-profile"
                backgroundColor={
                  pathname == '/my-profile' ? 'purple' : 'transparent'
                }
                padding={1}
                paddingLeft={4}
                borderRadius={2}
                width="120px"
                fontWeight={'normal'}
                onClick={() => {
                  onClose();
                }}
              >
                My profile
              </Text>

              <TSPContextProvider>
                <TvShowPicker />
              </TSPContextProvider>
            </Flex>
          </DrawerBody>

          <DrawerFooter mr="65%" pb={4}>
            <LogOutButton />
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
