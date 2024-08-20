'use client';

import { IShow } from '@/typings/Show.type';
import { StarIcon } from '@chakra-ui/icons';
import {
  Card,
  CardBody,
  Heading,
  Stack,
  Text,
  Image,
  Flex,
  Box,
} from '@chakra-ui/react';
import { wrap } from 'module';

export interface IShowDetailsProps {
  show: IShow;
}

export const ShowDetails = ({
  show: { title, description, image_url, average_rating },
}: IShowDetailsProps) => {
  return (
    <Card variant={'ShowDetailsCard'}>
      <Image
        src={image_url ?? 'https://fakeimg.pl/600x400?text=No+Image'}
        alt="Series profile image"
        maxHeight="439px"
        objectFit="cover"
        width="1053px"
      />
      <CardBody>
        <Flex
          gap={{ base: 2, sm: 5 }}
          justify="space-between"
          align="start"
          wrap={'wrap'}
        >
          <Box pt={2}>
            <Heading fontSize={{ base: 3, sm: 1 }}>{title}</Heading>
            <Flex align="baseline" fontSize={{ base: 6, sm: 5 }}>
              <StarIcon color="purple" mr={1} />
              <Text>
                {average_rating
                  ? `${average_rating.toFixed(1)}/5`
                  : 'no ratings'}
              </Text>
            </Flex>
          </Box>
          <Text pt="2" fontSize={{ base: 6, sm: 5 }} maxWidth="477px">
            {description}
          </Text>
        </Flex>
      </CardBody>
    </Card>
  );
};
