import { IShow } from '@/typings/Show.type';
import { StarIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Text,
  Image,
  Card,
  CardBody,
  Heading,
} from '@chakra-ui/react';

interface IPickerCard {
  index: number;
  updateRankings: (index: number) => void;
  selected: number;
  show: IShow;
}

export const PickerCard = ({
  index,
  updateRankings,
  selected,
  show,
}: IPickerCard) => {
  return (
    <Card
      variant={'showCard'}
      _hover={{ cursor: 'pointer' }}
      onClick={() => {
        updateRankings(index);
      }}
      border="4px"
      borderColor={selected != index ? 'white' : 'pink'}
    >
      <Image
        src={show.image_url ?? 'https://fakeimg.pl/600x400?text=No+Image'}
        alt="Series profile image"
        height="80%"
        objectFit="cover"
      />
      <CardBody color={'white'} backgroundColor={'purple'}>
        <Flex
          gap="0.4"
          flexDirection={{ base: 'row', sm: 'column' }}
          justify={'space-between'}
          p={{ base: '2', sm: '0' }}
          align={'baseline'}
        >
          <Heading
            fontSize="5.5"
            marginBottom="1px"
            isTruncated
            maxW={'100%'}
            fontWeight={'regular'}
          >
            {show.title}
          </Heading>
          <Flex fontSize="xs" gap={1} align="baseline">
            <StarIcon color="white" />
            <Text textAlign="center">
              {show.average_rating
                ? `  ${show.average_rating.toFixed(1)}/5`
                : 'no ratings'}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};
