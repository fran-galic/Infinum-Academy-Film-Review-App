import { useContext, useEffect, useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { TSPContext } from './TSPContextProvider';

export const TvShowPickerStep = () => {
  const {
    rankedShows,
    currentStep,
    setRankedShows,
    setCurrentStep,
  } = useContext(TSPContext);

  let targetIndex = Math.abs(currentStep);
  let shows = [rankedShows[targetIndex * 2], rankedShows[targetIndex * 2 + 1]]; 
  let startState = 2;
  if (rankedShows[targetIndex] == rankedShows[targetIndex * 2]) startState = 0;
  else if (rankedShows[targetIndex] != rankedShows[targetIndex * 2 + 1])
    startState = 1;
  const [selected, setSelected] = useState(startState);
  function updateRankings(index: number) {
    const tempArr = [...rankedShows];
    tempArr[targetIndex] = tempArr[targetIndex * 2 + index];
    setRankedShows(tempArr);
    setSelected(index);
  }

  useEffect(() => {
    setSelected(2);
    if (!shows[0]) updateRankings(1);
    else if (!shows[1]) updateRankings(0);
    if (!shows[0] || !shows[1]) {
      if (currentStep > 0) setCurrentStep(currentStep - 1);
      else setCurrentStep(Math.ceil(currentStep / 2));
      return;
    }
  }, [currentStep]);
  const shouldSkip = !shows[0] || !shows[1];
  return (
    <>
      {!shouldSkip && (
        <Flex
          px="20px"
          justifyContent="space-around"
          width="100%"
          height="280px"
        >
          {[0, 1].map((index) => (
            <Flex
              _hover={{ cursor: 'pointer' }}
              key={index}
              direction="column"
              onClick={() => {
                updateRankings(index);
              }}
              width="40%"
              border="4px"
              borderColor={selected != index ? 'white' : 'pink'}
              borderRadius={1}
              overflow="hidden"
            >
              <Image
                alt="slika showa"
                src={shows[index].image_url}
                height="70%"
                objectFit="cover"
              />
                <Box padding={3} backgroundColor="purple" height="100%" color="white">
                  <Text
                    display="-webkit-box"
                    overflow="hidden"
                    whiteSpace="normal"
                    textOverflow="ellipsis"
                    css={{
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                    }}
                  >
                    {shows[index].title}
                  </Text>
                  <Text hideBelow="lg">{shows[index].average_rating}/5</Text>
                </Box>
            </Flex>
          ))}
        </Flex>
      )}
    </>
  );
};