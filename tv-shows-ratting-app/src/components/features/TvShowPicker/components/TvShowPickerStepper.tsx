import { useContext, useEffect } from 'react';
import { TSPContext } from './TSPContextProvider';
import { TvShowPickerStep } from './TvShowPickerStep';
import { TvShowPickerResult } from './TvShowPickerResult';
import { IShow } from '@/typings/Show.type';

export const TvShowPickerStepper = () => {
  const {
    currentStep,
    tourSize,
    rankedShows,
    setTourSize,
    setRankedShows,
    setCurrentStep,
    setFinalRanking,
  } = useContext(TSPContext);

  useEffect(() => {
    if (tourSize === 0 && rankedShows.length > 0) {
      const n = rankedShows.length;
      let bn = 1;
      while (bn < n) bn *= 2;

      const tempArr = Array(bn * 2).fill(undefined);
      for (let i = 0; i < n; i++) {
        tempArr[i + bn] = rankedShows[i];
      }

      setTourSize(bn);
      setCurrentStep(bn - 1);
      setRankedShows(tempArr as IShow[]);
      setFinalRanking([]);
    }
  }, [rankedShows, setCurrentStep, setFinalRanking, setRankedShows, setTourSize, tourSize]);

  if (currentStep) return <TvShowPickerStep />;
  else return <TvShowPickerResult />;
};