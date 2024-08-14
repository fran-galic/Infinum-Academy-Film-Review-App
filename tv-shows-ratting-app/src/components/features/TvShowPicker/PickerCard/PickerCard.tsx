import { IShow } from "@/typings/Show.type";
import { Box, Flex, Text, Image } from "@chakra-ui/react";


interface IPickerCard {
   index: number,
   updateRankings: (index: number) => void,
   selected: number,
   show: IShow
}


export const PickerCard = ({index, updateRankings, selected, show} : IPickerCard) => {


   return (<Flex
      _hover={{ cursor: 'pointer' }}
      direction="column"
      onClick={() => {
        updateRankings(index);
      }}
      width={{ base: '100%', md: '40%' }} // Podešavanje širine ovisno o veličini ekrana
      mb={{ base: 4, md: 0 }} // Dodavanje donje margine za manje ekrane
      border="4px"
      borderColor={selected != index ? 'white' : 'pink'}
      borderRadius={1}
      overflow="hidden"
    >
      <Image
        alt="slika showa"
        src={show.image_url}
        height="70%"
        objectFit="cover"
      />
        <Box padding={3} backgroundColor="purple" height="100%" color="white">
          <Text
            display="-webkit-box"
            overflow="hidden"
            whiteSpace="normal"
            textOverflow="ellipsis"
            css={{
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {show.title}
          </Text>
          <Text hideBelow="lg">{show.average_rating}/5</Text>
        </Box>
    </Flex>);
}