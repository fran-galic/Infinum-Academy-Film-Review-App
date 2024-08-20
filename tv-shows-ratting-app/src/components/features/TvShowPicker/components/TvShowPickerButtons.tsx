import { Button, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import { TSPContext } from './TSPContextProvider';
import { IShow } from '@/typings/Show.type';

interface IPlannerButtons {
  onClose: () => void;
}

export const TvShowPickerButtons = ({ onClose }: IPlannerButtons) => {
  const {
    finalRanking,
    setFinalRanking,
    currentStep,
    setCurrentStep,
    rankedShows,
    tourSize,
    setTourSize,
    setRankedShows,
  } = useContext(TSPContext);

  function nextStep() {
    if (Math.abs(currentStep) === 1) {
      setFinalRanking([...finalRanking, rankedShows[1]]);
      setCurrentStep(0);
    } else if (currentStep > 0) setCurrentStep(currentStep - 1);
    else if (currentStep < 0) setCurrentStep(Math.ceil(currentStep / 2));
  }

  function findBestRoot(index: number, bestShow: IShow) {
    if (index >= tourSize) return index;
    if (rankedShows[index * 2] === bestShow)
      return findBestRoot(index * 2, bestShow);
    return findBestRoot(index * 2 + 1, bestShow);
  }

  function nextRound() {
    let rootIndex = findBestRoot(1, rankedShows[1]);
    let tempArr = rankedShows.map((show) =>
      show === rankedShows[1] ? undefined : show
    );

    setRankedShows(tempArr as IShow[]);
    setCurrentStep(Math.ceil(-rootIndex / 2));
  }

  function startNewTour() {
    setTourSize(0);
    setCurrentStep(0);
    setFinalRanking([]);
    setRankedShows([]);
  }

  const selected = rankedShows[Math.abs(currentStep)];
  const showNextButton = Boolean(currentStep && selected);

  return (
    <Flex
      flexGrow={'1'}
      columnGap={4}
      wrap={'wrap'}
      direction={'row'}
      align={'center'}
      justifyContent={'flex-end'}
      rowGap={4}
    >
      {showNextButton && <Button onClick={() => nextStep()}> Next </Button>}
      {!currentStep && (
        <>
          <Button onClick={() => nextRound()} alignSelf={'flex-start'}>
            {' '}
            Add show{' '}
          </Button>
          <Button
            onClick={() => {
              startNewTour();
              onClose();
            }}
          >
            Done
          </Button>
        </>
      )}
    </Flex>
  );
};
