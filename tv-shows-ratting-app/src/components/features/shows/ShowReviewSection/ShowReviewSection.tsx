'use client';

import { Flex, Stack, Text } from "@chakra-ui/react";
import { ReviewForm } from "../ReviewForm/ReviewForm";
import { ReviewList } from "../../review/ReviewList/ReviewList";
import { swrKeys } from "@/fetchers/swrKeys";
import useSWR from "swr";
import { getReviews } from "@/mutation/reviews";
import { LoadingScreen } from "@/components/shared/LoadingScreen/LoadingScreen";

 interface IShowReviewSectionProps {
   showId: string
 }

export const ShowReviewSection = ({ showId }: IShowReviewSectionProps) => {

   const { data, error, isLoading } = useSWR(swrKeys.allReviews(showId, 1, 100) , getReviews);

   if (isLoading) {
		return <LoadingScreen />;
	}

	if (error || !data) {
		return <div>Ups something went wrong...</div>;
	}

   return (
      <Flex direction={"row"} gap={5} mt={{base: 5, md: 10}} justify={"space-between"} maxWidth={"1053px"} wrap={"wrap"}>
         <Text fontSize={{base: 3, sm: 2}}>Reviews</Text>
         <Stack spacing={8} flexGrow={1} maxWidth={"870px"}>
            <ReviewForm show_id={showId} />
            <ReviewList reviewList={data} show_id={showId}/>
         </Stack>
      </Flex>
   );
}