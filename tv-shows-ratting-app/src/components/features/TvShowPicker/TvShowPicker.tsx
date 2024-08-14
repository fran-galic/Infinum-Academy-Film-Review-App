'use client';

import { Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text } from '@chakra-ui/react';
import { TvShowPickerStepper } from './components/TvShowPickerStepper';
import { TvShowPickerButtons } from './components/TvShowPickerButtons';
import { TvShowPickerProgress } from './components/TvShowPickerProgress';
import { useContext, useEffect } from 'react';
import { TSPContext } from './components/TSPContextProvider';

export const TvShowPicker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { setTourSize, setCurrentStep, setFinalRanking, setRankedShows } = useContext(TSPContext);

  const handleOpen = () => {
    setTourSize(0);
    setCurrentStep(0);
    setFinalRanking([]);
    setRankedShows([]);
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
        <ModalContent borderRadius={2} p={2} mx={3}>
          <ModalHeader>Lets see what we are watching tonight: </ModalHeader>
          <ModalBody>
            <TvShowPickerStepper />
          </ModalBody>
          <ModalFooter>
            <Flex direction="column" width="100%" gap={3}>
              <TvShowPickerButtons onClose={onClose} />
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Flex>
  );
};