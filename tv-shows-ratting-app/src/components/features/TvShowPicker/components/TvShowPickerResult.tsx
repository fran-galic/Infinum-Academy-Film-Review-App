import { useContext } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { TSPContext } from './TSPContextProvider';

export const TvShowPickerResult = () => {
  const { finalRanking } = useContext(TSPContext); 
  return (
      <Flex
        mt="10px"
        direction="column"
        overflow="auto"
        height="200px"
        backgroundColor="grey"
        borderRadius="1"
        gap={2}
        padding={5}
      >
        {finalRanking.map((show, index) => (
          <Flex key={index}>
            <Text fontSize="body" fontWeight="bold" color="black">
              {index + 1}.
            </Text>
            <Text
              ml="auto"
              fontSize="body"
              fontWeight="bold"
              color="black"
            >
              {show.title}
            </Text>
          </Flex>
        ))}
      </Flex>
  );
};