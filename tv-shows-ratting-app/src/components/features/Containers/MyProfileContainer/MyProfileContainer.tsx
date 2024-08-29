'use client';

import { ChangeEvent, useEffect, useState } from 'react';
import { getProfileData, IUserDataResponse } from '@/fetchers/profile';
import { LoadingScreen } from '@/components/shared/LoadingScreen/LoadingScreen';
import { swrKeys } from '@/fetchers/swrKeys';
import {
  Box,
  Flex,
  Input,
  InputGroup,
  Text,
  Image,
  Button,
  Center,
} from '@chakra-ui/react';
import useSWR from 'swr';

export const MyProfileContainer = () => {
  const { data, error, isLoading } = useSWR<IUserDataResponse>(
    swrKeys.me(),
    getProfileData
  );

  // specificiramo koje podatke nas state moze imati
  const [selectedImage, setSelectedImage] = useState<
    string | ArrayBuffer | null
  >();

  //svaki put kad se stranica reolda izbrisi sliku
  useEffect(() => {
    setSelectedImage(undefined);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //ako file ne psootji vrati se nazad
    if (!event.target.files) return;

    //uzmi prvu datoteku iz niza
    const file = event.target.files[0];

    if (file && file.type.slice(0, 5) === 'image') {
      //FileReader je objekt koji nam sluzi za citanje sadrzaja datoteke
      const reader = new FileReader();
      // zadajemo funckju kojoj kazemo sta se radi kada se datoteka procita
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      //citamo datoteku nakon cega ce se odmah izvrsitii i onLoaded funkcija
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(undefined);
    }
  };

  if (isLoading) {
    return <LoadingScreen />;
  }

  if (error || !data) {
    return <div>Ups something went wrong...</div>;
  }

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      height="100vh"
      width={'100%'}
      justifyContent={{ base: 'start', lg: 'center' }}
      pt={{ base: '20', lg: '0' }}
      backgroundColor="darkpurple"
      gap={{ base: '20px', lg: '40px' }}
    >
      <Flex flexDirection="column" alignItems="center">
        <Text fontSize={6} color="white">
          EMAIL
        </Text>
        <Text fontSize={3} color="white">
          {data.user.email}
        </Text>
      </Flex>
      {!selectedImage ? (
        <InputGroup
          position="relative"
          width={{ base: '270px', lg: '600px' }}
          height={{ base: '270px', lg: '400px' }}
          backgroundColor="purple"
          borderRadius={2}
          padding="0"
          margin="0"
          border="dashed"
          borderColor="lightpurple"
          transform="unset"
        >
          <Center
            position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            zIndex="1"
            pointerEvents="none"
          >
            <Text color={'lightpurple'} fontSize={4} fontWeight={'bold'}>
              Drop your photo here
            </Text>
          </Center>

          <Input
            type="file"
            width="100%"
            height="100%"
            opacity={0}
            onChange={handleChange}
            zIndex="2"
            position="relative"
          />
        </InputGroup>
      ) : (
        <>
          <Box
            w={{ base: '170px', lg: '260px' }}
            h={{ base: '170px', lg: '260px' }}
            borderRadius="full"
            overflow="hidden"
            position="relative"
          >
            <Image
              src={selectedImage as string}
              alt="profile picture"
              objectFit="cover"
              width="100%"
              height="100%"
              cursor="pointer"
            />
            <Input
              type="file"
              width="100%"
              height="100%"
              opacity={0}
              position="absolute"
              top="0"
              left="0"
              onChange={handleChange}
              cursor="pointer"
            />
          </Box>
          <Button size="md" width="144px">
            UPLOAD IMAGE
          </Button>
        </>
      )}
    </Flex>
  );
};
