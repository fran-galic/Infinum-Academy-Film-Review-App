import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { getShows, IShowsResponse } from '@/fetchers/shows';
import { swrKeys } from '@/fetchers/swrKeys';
import { IShow } from '@/typings/Show.type';
import { Button } from '@chakra-ui/react';
import { createContext, ReactNode, useState } from 'react';
import useSWR from 'swr';

interface ITvShowPickerContext {
  currentStep: number;
  setCurrentStep: (newStep: number) => void;
  rankedShows: Array<IShow>;
  setRankedShows: (newRankedShows: Array<IShow>) => void;
  //ovo dvoje cu jos vidit jel mi treba
  tourSize: number;
  setTourSize: (newTourSize: number) => void;
  
  finalRanking: Array<IShow>;
  setFinalRanking: (newFinalRanking: Array<IShow>) => void;
  allShows: Array<IShow>;
}

export const TSPContext = createContext<ITvShowPickerContext>(
  {} as ITvShowPickerContext
)

interface ITvShowPickerProviderProps {
  children: ReactNode;
}

export const TSPContextProvider = ({
  children,
}: ITvShowPickerProviderProps) => {
  const [rankedShows, setRankedShows] = useState<Array<IShow>>([]);
  const [finalRanking, setFinalRanking] = useState<Array<IShow>>([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [tourSize, setTourSize] = useState(0);

  const { data, error, isLoading } = useSWR<IShowsResponse>(swrKeys.showsPageItems(1, 100), getShows);

  if (isLoading) {
    //vrati gumb ali ne raid
   return <Button 
    onClick={() => {}}
    fontSize={4}
  >
    Show picker
  </Button>
}

   if (error || !data) {
   return <div>Ups something went wrong...</div>;
}

  return (
    <TSPContext.Provider
      value={{
        tourSize,
        setTourSize,
        currentStep,
        rankedShows,
        setCurrentStep,
        setRankedShows,
        finalRanking,
        setFinalRanking,
        allShows: data.shows,
      }}
    >
      {children}
    </TSPContext.Provider>
  );
};