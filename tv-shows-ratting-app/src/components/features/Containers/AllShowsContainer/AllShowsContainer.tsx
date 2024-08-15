import { LoadingScreen } from "@/components/shared/LoadingScreen/LoadingScreen";
import { ShowsList } from "@/components/shared/shows/ShowsList/ShowsList";
import { getShows } from "@/fetchers/shows";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR from "swr";
import { useState } from "react";
import { Box, useBreakpointValue } from "@chakra-ui/react";

export interface IgetSignInMutatorParams {
   page: string;
   items: string;
}

export const AllShowsContainer = () => {
   const [currentPage, setCurrentPage] = useState(1);
   const itemsPerPage = useBreakpointValue({ base: 10, sm: 20 });

   const { data, error, isLoading } = useSWR(swrKeys.showsPageItems(currentPage, itemsPerPage as number), getShows);

   if (isLoading) {
      return <LoadingScreen />;
   }

   if (error || !data) {
      return <div>Ups something went wrong...</div>;
   }

   return (
      <ShowsList
         shows={data.shows}
         currentPage={currentPage}
         setCurrentPage={setCurrentPage}
         totalItems={ /* data.totalItems */ 100} //ova vrijendost ne psootji ali sma ja nasao da je 100 za sad
         itemsPerPage={itemsPerPage}
      />
   );
}