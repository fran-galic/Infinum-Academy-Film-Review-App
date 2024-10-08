import { cardAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(
  cardAnatomy.keys
);

export const Card = defineMultiStyleConfig({
  variants: {
    showCard: {
      container: {
        width: { base: '90%', sm: '165px' },
        height: { base: 'auto', sm: '250px' },
        borderRadius: '2xl',
        color: 'purple',
        overflow: 'hidden',
      },
      body: {
        py: '2',
        px: '3',
      },
    },
    reviewItemCard: {
      container: {
        maxW: '100%',
        borderRadius: '2xl',
        color: 'white',
        bg: 'purple',
        fontSize: 'xs',
        p: '2',
      },
    },
    ShowDetailsCard: {
      container: {
        maxW: '1053px',
        borderRadius: '2xl',
        color: 'purple',
        overflow: 'hidden',
      },
      body: {
        pl: { base: '5', sm: '10' },
        pt: { base: '3', sm: '7' },
        pb: { base: '5', sm: '7' },
        pr: { base: '5', sm: '5' },
      },
    },
  },
});
