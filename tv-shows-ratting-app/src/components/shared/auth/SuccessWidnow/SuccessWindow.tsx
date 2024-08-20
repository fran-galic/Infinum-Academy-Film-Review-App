import {
  Button,
  Card,
  CardBody,
  Center,
  Flex,
  Stack,
  Text,
} from '@chakra-ui/react';
import NextLink from 'next/link';

interface ISuccessWindow {
  link: string;
  description: string;
  buttonText: string;
}

export const SuccessWindow = ({
  link,
  description,
  buttonText,
}: ISuccessWindow) => (
  <Card maxW="md" p={5} borderRadius={1} bg={'purple'} mx={5}>
    <CardBody>
      <Stack gap={5} color={'white'}>
        <Text>{description}</Text>
        <Center>
          <Button as={NextLink} href={link} variant="default">
            {buttonText}
          </Button>
        </Center>
      </Stack>
    </CardBody>
  </Card>
);
