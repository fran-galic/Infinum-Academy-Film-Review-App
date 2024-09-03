'use client';

import React from 'react';
import {
  Box,
  Button,
  Textarea,
  Text,
  Flex,
  Spinner,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react';
import { useForm, Controller } from 'react-hook-form';
import { ICreateReviewData } from '@/typings/Review.type';
import useSWRMutation from 'swr/mutation';
import { swrKeys } from '@/fetchers/swrKeys';
import { postReview } from '@/mutation/reviews';
import { mutate } from 'swr';
import { StarRating } from '../../review/StarRating/StarRating';

interface IReviewFormProps {
  show_id: string;
}

interface IReviewFormInputs {
  grade: number;
  description: string;
}

export const ReviewForm = ({ show_id }: IReviewFormProps) => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    clearErrors,
  } = useForm<IReviewFormInputs>();

  const { trigger } = useSWRMutation(swrKeys.reviews, postReview, {
    onSuccess: () => {
      //console.log('Reviews se revaliditiraju');
      mutate(swrKeys.allReviews(show_id, 1, 100));
    },
  });

  const addShowReview = async (data: IReviewFormInputs) => {
    const newReviewData: ICreateReviewData = {
      comment: data.description,
      rating: data.grade,
      show_id: show_id,
    };

    setValue('grade', 0);
    setValue('description', '');

    await trigger(newReviewData);
    // console.log('Adding');
  };

  return (
    <Flex
      direction={'column'}
      justify={'start'}
      as="form"
      gap={{ base: 1, sm: 4 }}
      onSubmit={handleSubmit(addShowReview)}
    >
      <FormControl isInvalid={!!errors.description} flexGrow={1}>
        <Textarea
          placeholder="Add review"
          borderRadius={2}
          bg="white"
          fontSize={5}
          color="purple"
          id="text-input"
          {...register('description', { required: 'Description is required' })}
          isDisabled={isSubmitting}
          width={'100%'}
          height="auto"
          pt={7}
          _placeholder={{ color: 'purple' }}
          borderColor="purple"
          borderWidth={2}
          _hover={{ borderColor: 'purple' }}
          _focus={{ borderColor: 'purple', boxShadow: 'none' }}
          _invalid={{ borderColor: 'pink' }}
        />
        <FormErrorMessage color="pink">
          {errors.description?.message}
        </FormErrorMessage>
      </FormControl>

      <Flex
        justify={'space-between'}
        pl={{ base: 0, sm: 10 }}
        pt={2}
        align={'center'}
      >
        <FormControl isInvalid={!!errors.grade}>
          <Flex gap={4} align="baseline">
            <Text>Rating</Text>
            <Box maxWidth="105px">
              <Controller
                name="grade"
                control={control}
                defaultValue={0}
                rules={{
                  required: 'Rating is required',
                  validate: (value) => value > 0 || 'You must select a rating',
                }}
                render={({ field }) => (
                  <StarRating
                    noOfStars={field.value}
                    isStatic={isSubmitting}
                    onClick={(index) => {
                      field.onChange(index);
                      clearErrors('grade');
                    }}
                    onHover={() => {}}
                    data_testid="star-rating"
                  />
                )}
              />
            </Box>
          </Flex>
          <FormErrorMessage color="pink">
            {errors.grade?.message}
          </FormErrorMessage>
        </FormControl>

        <Button type="submit" isDisabled={isSubmitting} variant={'default'}>
          {isSubmitting ? <Spinner /> : 'Post'}
        </Button>
      </Flex>
    </Flex>
  );
};
