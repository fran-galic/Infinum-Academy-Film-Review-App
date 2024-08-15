// !!! treba jos rejsit onu jendu stavr sa navigacijama i sa local storgae da cisitti smao odgovarjauce podatke

import { Box, Button, Flex, Modal, ModalBody, ModalContent, ModalFooter, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export const LogOutButton = () => {

   //za Modal prilikom Log out-a
   const { isOpen, onOpen, onClose } = useDisclosure();
   const router = useRouter();

   return (
   <>
      <Button width="50%" onClick={onOpen} variant={"noButton"} fontSize={5} fontWeight={"bold"} letterSpacing="0.02em">
         Log out
      </Button>
            <Modal isOpen={isOpen} onClose={onClose}  >
            <ModalOverlay />
                  <ModalContent borderRadius={1} p={2} maxW={"90%"} width={"md"}>
                     <ModalBody>
                        <Text fontSize='xl'>
                        Are you sure you want to log out?
                        </Text>
                     </ModalBody>

                     <ModalFooter>
                        <Button bg={"darkpurple"} color={"white"} mr={3} onClick={onClose} _hover={{ bg: "purple" }} letterSpacing="0.05em">
                           I want to stay
                        </Button>
                        <Button 
                        variant='ghost'
                        // Trebat cu ispravit   !!!!     -> problme za bolje koristenje swr i swrMutaiton da s ene krostie u isto vrijeme
                        onClick={() => {
                           localStorage.removeItem('userHeaders');
                           localStorage.removeItem('user-id');
                           onClose()
                           router.push('/login');
                        }}
                        >
                        Yes Log me out
                        </Button>
                     </ModalFooter>
                  </ModalContent>
            </Modal>
   </>
   );

}