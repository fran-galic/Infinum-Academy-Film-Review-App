import { useContext, useEffect } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import { TSPContext } from './TSPContextProvider';

export const TvShowPickerResult = () => {
  const { finalRanking } = useContext(TSPContext); 

  // Provjera sadržaja `finalRanking`
  useEffect(() => {
    console.log("Final ranking:", finalRanking);
  }, [finalRanking]);

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
      {finalRanking.length > 0 ? (
        finalRanking.map((show, index) => (
          <Flex key={index} gap={4}>
            <Text fontSize="body" fontWeight="bold" color="black">
              {index + 1}.
            </Text>
            <Flex wrap={"wrap"}>
              <Text
                ml="auto"
                fontSize="body"
                fontWeight="bold"
                color="black"
              >
                {show.title}
              </Text>
            </Flex>
          </Flex>
        ))
      ) : (
        <Text fontSize="body" fontWeight="bold" color="black">
          No shows selected.
        </Text>
      )}
    </Flex>
  );
};