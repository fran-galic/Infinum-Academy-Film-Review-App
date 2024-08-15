'use client';

import { Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import { TvShowPickerStepper } from './components/TvShowPickerStepper';
import { TvShowPickerButtons } from './components/TvShowPickerButtons';
import { useContext } from 'react';
import { TSPContext } from './components/TSPContextProvider';
import { IShow } from '@/typings/Show.type';

export const TvShowPicker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setTourSize, setCurrentStep, setFinalRanking, setRankedShows, allShows } = useContext(TSPContext);

  const handleOpen = () => {
    setTourSize(0);
    setCurrentStep(0);
    setFinalRanking([]);

    // Fisher-Yates algoritam za nasumično miješanje
    const shuffleArray = (array: Array<IShow>) => {
      const shuffledArray = [...array];
      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }
      return shuffledArray;
    };

    // Ograničavanje broja odabranih show-ova na maksimalno 20
    const maxShows = 20;
    const randomShows = shuffleArray(allShows).slice(0, maxShows);

    // Postavljanje nasumično odabranih show-ova u rankedShows
    setRankedShows(randomShows);
    onOpen();
  };

  return (
    <Flex justify={"start"}>
      <Button 
        onClick={handleOpen}
        fontSize={4}
        fontWeight={"bold"}
      >
        Show picker
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent borderRadius={2}  width={"auto"} maxWidth={"90vw"} pt={2}>
          <ModalHeader color={"purple"}>Let&apos;s see what we are watching tonight: </ModalHeader>
          <ModalBody>
            <TvShowPickerStepper />
          </ModalBody>
          <ModalFooter>
            <Flex direction="row" width="100%" pb={2}>
              <TvShowPickerButtons onClose={onClose} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};