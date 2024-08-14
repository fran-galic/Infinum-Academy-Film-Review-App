"use client"

import { SiteLogo } from "@/components/core/SiteLogo/SiteLogo";
import { Flex, Spinner, Text } from "@chakra-ui/react";


export const LoadingScreen = () => {

   return (
      <Flex 
         justify="center"
         align="center"
         direction="column"
         gap={5}
         position={"absolute"} 
         top="50%"
         left="50%"
         transform="translate(-50%, -50%)"
      >
         <Text>The page is loading</Text>
         <Spinner
         thickness='4px'
         speed='0.65s'
         emptyColor='lightpurple'
         color='white'
         size='xl'
         />
      </Flex>
   );

}