import { EditReviewForm } from '@/components/features/shows/EditReviewForm/EditReviewForm';
import { swrKeys } from '@/fetchers/swrKeys';
import { patchReview } from '@/mutation/reviews';
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import useSWRMutation from 'swr/mutation';

interface EditReviewButtonProps {
  initialComment: string;
  mutate: () => Promise<any>;
  show_id: string;
  review_id: number;
}

export const EditReviewButton = ({
  initialComment,
  mutate,
  show_id,
  review_id,
}: EditReviewButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { trigger } = useSWRMutation(
    swrKeys.editReview(review_id),
    patchReview,
    {
      onSuccess: () => {
        //ukoliko si uspio postat na server novi Review, pozovi mutate koji ce revliditirat stvari u zajednickom SWR cashu i samim time ce se stranica re Renderat
        console.log('Reviews se patchao');
        mutate();
      },
    }
  );

  return (
    <>
      <Button
        bg="white"
        borderRadius="3xl"
        fontSize="xs"
        width="70px"
        size="sm"
        onClick={onOpen}
        variant={'noButton'}
        color={'purple'}
        sx={{ textAlign: 'left', justifyContent: 'flex-start' }}
        pl={2}
      >
        EDIT
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent
          borderRadius={2}
          mx={2}
          p={2}
          maxWidth={'90%'}
          width={'md'}
        >
          <ModalBody>
            <Stack spacing={4}>
              <Text fontSize="xl">Edit the current review:</Text>
              <EditReviewForm
                show_id={show_id}
                initialComment={initialComment}
                onClose={onClose}
                trigger={trigger}
                starcColor={'pink'}
              />
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
