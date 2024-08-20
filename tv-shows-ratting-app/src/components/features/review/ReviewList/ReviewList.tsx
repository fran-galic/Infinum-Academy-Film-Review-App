'use client';

import React, { useState } from 'react';
import { IReview, IReviewList } from '@/typings/Review.type';
import { Stack, Button, Flex, Text, IconButton } from '@chakra-ui/react';
import { ReviewItem } from '../ReviewItem/ReviewItem';
import { mutate } from 'swr';
import { swrKeys } from '@/fetchers/swrKeys';
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';

interface IReviewListProps {
  reviewList: IReviewList;
  show_id: string;
}

export const ReviewList = ({ reviewList, show_id }: IReviewListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 4;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = reviewList.reviews.slice(
    indexOfFirstReview,
    indexOfLastReview
  );

  const totalPages = Math.ceil(reviewList.reviews.length / reviewsPerPage);

  const handleNextPage = () => {
    //u ovoj funkciji koristimo zapravo currentPage koji se predaje kao argument setCurrentPage() sma od sebe
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <Flex gap={5} direction="column" mb={3} width={'100%'}>
      {currentReviews.map((review, index) => {
        return (
          <ReviewItem
            key={index}
            review={review}
            //pitanje je dlai to i tkaode rmutira podatke, mislim d abi trbealo raditi
            mutate={() => {
              return mutate(swrKeys.allReviews(show_id, 1, 100));
            }}
            show_id={show_id}
          />
        );
      })}
      {totalPages > 1 && (
        <Flex justifyContent="center" align="center">
          <IconButton
            icon={<ChevronLeftIcon />}
            onClick={handlePrevPage}
            color={currentPage === 1 ? 'transparent' : 'white'}
            background="transparent"
            aria-label="Previous page"
            fontSize={2}
            variant={'IconButton'}
          />
          <Text fontSize="lg" color="white">
            {currentPage} of {totalPages}
          </Text>
          <IconButton
            icon={<ChevronRightIcon />}
            onClick={handleNextPage}
            background="transparent"
            color={currentPage === totalPages ? 'transparent' : 'white'}
            aria-label="Next page"
            fontSize={2}
            variant={'IconButton'}
          />
        </Flex>
      )}
    </Flex>
  );
};
