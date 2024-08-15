import { Button, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";


interface DeleteReviewButtonProps {
   trigger: () => Promise<any>;
}

export const DeleteReviewButton = ({ trigger }: DeleteReviewButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button 
      bg="white" 
      borderRadius='3xl' 
      fontSize='xs' 
      width="70px" 
      size='sm' 
      onClick={onOpen} 
      variant={"noButton"} 
      color={"purple"} 
      sx={{ textAlign: 'left', justifyContent: 'flex-start' }}
      pl={2}>
        DELETE
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} >
        <ModalOverlay />
        <ModalContent borderRadius={2} mx={2} p={2}>
         <ModalBody>
               <Text fontSize='xl'>
               Are you sure you want to delete this comment?
               </Text>
            </ModalBody>

            <ModalFooter>
               <Button bg={"darkpurple"} color={"white"} mr={3} onClick={() => {trigger(); onClose();}} _hover={{ bg: "purple" }} letterSpacing="0.05em" width={"auto"}>
                  Yes I don&apos;t like it
               </Button>
               <Button 
               variant='ghost'
               onClick={() => {onClose()}}
               width={"auto"}
               >
               No, I changed my mind
               </Button>
            </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

