import { useContext, useEffect } from 'react';
import { TSPContext } from './TSPContextProvider';
import { TvShowPickerStep } from './TvShowPickerStep';
import { TvShowPickerResult } from './TvShowPickerResult';
import { IShow } from '@/typings/Show.type';

export const TvShowPickerStepper = () => {
  const {
    currentStep,
    tourSize,
    allShows,
    setTourSize,
    setRankedShows,
    setCurrentStep,
    setFinalRanking,
  } = useContext(TSPContext);

  useEffect(() => {
    if (tourSize === 0 && allShows.length > 0) {
      let bn = 0;
      const n = allShows.length;
      for (bn = 1; bn < n; bn *= 2);
      const tempArr = [];
      for (let i = 0; i < 2 * bn; i++) tempArr.push(undefined);
      for (let i = 0; i < n; i++) tempArr[i + bn] = allShows[i];
      setTourSize(bn);
      setCurrentStep(bn - 1);
      setRankedShows(tempArr as IShow[]);
      setFinalRanking([]);
    }
  }, [allShows, setCurrentStep, setFinalRanking, setRankedShows, setTourSize, tourSize]);
  //!!! tu ako ce trbeat micat

  if (currentStep) return <TvShowPickerStep />;
  else return <TvShowPickerResult />;
};