"use client"

import { SiteLogo } from "@/components/core/SiteLogo/SiteLogo";
import { Flex } from "@chakra-ui/react";
import { NavigationDrawer } from "./NavigationDrawer/NavigationDrawer";

export const MobileNavigation = () => {

   return (
      <Flex justify={"space-between"} gap={4} p={5} width={"95vw"} align={"center"} pr={2} pb={3}>
         <SiteLogo />
         <NavigationDrawer />
      </Flex>
   );

}