"use client"

import { SiteLogo } from "@/components/core/SiteLogo/SiteLogo";
import { Flex, Text} from "@chakra-ui/react";
import NextLink from 'next/link';
import { usePathname} from "next/navigation";
import { LogOutButton } from "./LogOutButton/LogOutButton";


export const SidebarNavigation = () => {

   const pathname = usePathname();

   return (
      <Flex 
      direction="column" 
      height="100%" 
      width="200px" 
      paddingTop={4}
      paddingBottom={6} 
      px={1} 
      gap={14} 
      fontSize="md"
      >
         <SiteLogo />
         <Flex direction="column" gap={3} flexGrow={1} fontSize="1.2rem">
            <Text as={NextLink} href="/all-shows" textDecoration={pathname == '/all-shows' ? 'underline' : ''}>
               All shows
            </Text>
            <Text as={NextLink} href="/top-rated" textDecoration={pathname == '/top-rated' ? 'underline' : ''}>
               Top rated
            </Text>
            <Text>
               My profile
            </Text>
         </Flex>
         <LogOutButton />
      </Flex>
   );
}