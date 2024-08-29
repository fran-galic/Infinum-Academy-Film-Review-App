'use client';

import { IShow } from '@/typings/Show.type';
import { StarIcon } from '@chakra-ui/icons';
import { Card, CardBody, Heading, Image, Text, Flex } from '@chakra-ui/react';
import NextLink from 'next/link';

interface IShowCard {
  show: IShow;
}

export const ShowCard = ({
  show: { title, image_url, average_rating, id },
}: IShowCard) => {
  return (
    <Card variant={'showCard'} as={NextLink} href={`/all-shows/${id}`}>
      <Image
        src={image_url ?? 'https://fakeimg.pl/600x400?text=No+Image'}
        alt="Series profile image"
        height="80%"
        objectFit="cover"
      />
      <CardBody>
        <Flex
          gap="0.4"
          flexDirection={{ base: 'row', sm: 'column' }}
          justify={'space-between'}
          p={{ base: '2', sm: '0' }}
          align={'baseline'}
        >
          <Heading fontSize="5.5" marginBottom="1px" isTruncated maxW={'100%'}>
            {title}
          </Heading>
          <Flex fontSize="xs" gap={1} align="baseline">
            <StarIcon color="purpule" />
            <Text textAlign="center">
              {average_rating
                ? `  ${average_rating.toFixed(1)}/5`
                : 'no ratings'}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
