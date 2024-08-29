'use client';

import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {
  FormControl,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  FormErrorMessage,
  InputProps,
  forwardRef,
} from '@chakra-ui/react';
import { useState } from 'react';

interface IPasswordInput extends InputProps {
  name: string;
  testId: string;
  icon: any;
  error?: string;
}

export const PasswordInput = forwardRef(
  ({ placeholder, testId, icon, error, ...rest }: IPasswordInput, ref) => {
    const [isHidden, setHidden] = useState(true);

    return (
      <FormControl isRequired isInvalid={!!error} maxWidth={'300px'}>
        <InputGroup size="md">
          <InputLeftElement pointerEvents="none">{icon}</InputLeftElement>
          <Input
            ref={ref}
            type={isHidden ? 'password' : 'text'}
            placeholder={placeholder}
            required
            borderRadius={1}
            pl="10"
            color="white"
            _placeholder={{ color: 'white' }}
            borderColor={error ? 'pink' : 'white'}
            borderWidth={2}
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
          <InputRightElement fontSize="md">
            <IconButton
              color="white"
              aria-label="toggle view"
              icon={isHidden ? <ViewIcon /> : <ViewOffIcon />}
              onClick={() => {
                setHidden(!isHidden);
              }}
              backgroundColor="transparent"
              _hover={{ backgroundColor: 'transparent' }}
            />
          </InputRightElement>
        </InputGroup>
        {error && <FormErrorMessage color="pink">{error}</FormErrorMessage>}
      </FormControl>
    );
  }
);
