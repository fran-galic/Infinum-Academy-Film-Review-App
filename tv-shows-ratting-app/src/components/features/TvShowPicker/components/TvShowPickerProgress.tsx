import { Progress } from '@chakra-ui/react';
import { useContext, useMemo } from 'react';
import { TSPContext } from './TSPContextProvider';

export const TvShowPickerProgress = () => {
  const { currentStep, allShows } = useContext(TSPContext);

  const bn = useMemo(() => {
    let power = 1;
    const n = allShows.length;
    while (power < n) {
      power *= 2;
    }
    return power;
  }, [allShows.length]);

  if (!allShows) {
    return null;
  }

  const totalSteps = bn - 1;
  const progress = ((totalSteps - currentStep) / totalSteps) * 100;

  return <Progress value={progress} />;
};
