import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { TSPContext } from './TSPContextProvider';
import { PickerCard } from '../PickerCard/PickerCard';
import { useContext, useEffect, useState } from 'react';

export const TvShowPickerStep = () => {
  const { rankedShows, currentStep, setRankedShows, setCurrentStep } =
    useContext(TSPContext);

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);
  const shouldSkip = !shows[0] || !shows[1];
  return (
    <>
      {!shouldSkip && (
        <Flex
          px="20px"
          justifyContent="space-between"
          width="100%"
          height="auto"
          direction={{ base: 'column', sm: 'row' }} // Promjena smjera ovisno o veličini ekrana
          align={'center'}
          rowGap={'20px'}
          columnGap={'35px'}
        >
          {[0, 1].map((index) => (
            <PickerCard
              key={index}
              index={index}
              updateRankings={updateRankings}
              selected={selected}
              show={shows[index]}
            />
          ))}
        </Flex>
      )}
    </>
  );
};
