'use client';

import {
  FormControl,
  FormErrorMessage,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  forwardRef,
} from '@chakra-ui/react';

interface ICustomInput extends InputProps {
  name: string;
  testId: string;
  icon: any;
  error?: string;
}

export const CustomInput = forwardRef(
  ({ placeholder, testId, icon, error, ...rest }: ICustomInput, ref) => {
    return (
      <FormControl isRequired isInvalid={!!error} maxWidth={'300px'}>
        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
          <Input
            ref={ref}
            type="text"
            placeholder={placeholder}
            required
            borderRadius={1}
            pl="10"
            color="white"
            _placeholder={{ color: 'white' }}
            borderColor={error ? 'pink' : 'white'}
            borderWidth={2} // Dodano svojstvo za deblji obrub
            _hover={{ borderColor: error ? 'pink' : 'white' }}
            _focus={{
              borderColor: error ? 'pink' : 'white',
              boxShadow: 'none',
            }}
            _invalid={{ borderColor: 'pink' }}
            {...rest}
            data-testid={testId}
            fontSize={5}
            fontWeight={'normal'}
            maxWidth={'300px'}
          />
        </InputGroup>
        {error && <FormErrorMessage color="pink">{error}</FormErrorMessage>}
      </FormControl>
    );
  }
);
