import { defineStyleConfig } from '@chakra-ui/react';

export const Button = defineStyleConfig({
  baseStyle: {
    borderRadius: 'full',
    width: '144px',
    height: '52px',
    py: '19px',
    px: '42px',
  },

  variants: {
    default: {
      color: 'purple',
      backgroundColor: 'white',
      _loading: {
        backgroundColor: 'black',
      },
    },
    edit: {
      color: 'white',
      backgroundColor: 'transparent',
      _loading: {
        backgroundColor: 'black',
      },
      borderColor: 'white',
      width: '60px',
      height: '60px',
      padding: 0,
    },
    noButton: {
      color: 'white',
      backgroundColor: 'transparent',
      borderColor: 'none',
      width: 'auto',
      height: 'auto',
      py: 'none',
      px: 'none',
    },
    IconButton: {
      borderRadius: 'none',
      width: 'auto',
      height: 'auto',
      padding: 0,
      margin: 0,
    },
  },
});
