
'use client';

import { IShow } from "@/typings/Show.type";
import { Flex, Button, Text, Stack, IconButton, useMediaQuery } from "@chakra-ui/react";
import { ShowCard } from "../ShowCard/ShowCard";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

export interface IShowsList {
   shows: Array<IShow>,
   currentPage?: number,
   setCurrentPage?: (page: number | ((prevPage: number) => number)) => void,
   totalItems?: number,
   itemsPerPage?: number,
}

export const ShowsList = ({ shows, currentPage = 1, setCurrentPage = () => {}, totalItems = 0, itemsPerPage = 25 }: IShowsList) => {
   const [isLargerThanXL] = useMediaQuery("(min-width: 1280px)"); 

   const totalPages = Math.ceil(totalItems / itemsPerPage);

   const handleNextPage = () => {
      setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
   };

   const handlePrevPage = () => {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
   };

   return (
      <Stack spacing={2} direction="column" mt={{ base: 0, xl: 7 }} mb={3} px={{ base: 0, xl: 5 }} maxWidth="1000px">
         <Flex 
            direction="row"
            wrap="wrap"
            align="start"
            justify={isLargerThanXL ? "start" : "center"}
            gap={8}
            width={"100%"}
            pb={2}
         >
            {shows.map((show) => {
               return <ShowCard show={show} key={ show.id } />
            })}
         </Flex>
         {totalPages > 1 && (
            <Flex 
            justifyContent="center" 
            align="center"
            width={"100%"}
            pr={"10px"}
            >
               <IconButton
                  icon={<ChevronLeftIcon />}
                  onClick={handlePrevPage}
                  color={(currentPage === 1)? "transparent" : "white"}
                  background="transparent"
                  aria-label="Previous page"
                  fontSize={2}
                 variant={"IconButton"}
               />
               <Text fontSize="lg" color="white">
                  {currentPage} of {totalPages}
               </Text>
               <IconButton
                  icon={<ChevronRightIcon />}
                  onClick={handleNextPage}
                  background="transparent"
                  color={(currentPage === totalPages)? "transparent" : "white"}
                  aria-label="Next page"
                  fontSize={2}
                  variant={"IconButton"}
               />
            </Flex>
         )}
      </Stack>
   );
}
