/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import {
  Card,
  CardBody,
  Flex,
  chakra,
  FormControl,
  Button,
  Text,
  Spinner,
  FormErrorMessage,
  useMediaQuery,
} from '@chakra-ui/react';
import { EmailIcon, LockIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import useSWRMutation from 'swr/mutation';
import { swrKeys } from '@/fetchers/swrKeys';
import { SuccessWindow } from '@/components/shared/auth/SuccessWidnow/SuccessWindow';
import { PasswordInput } from '@/components/shared/auth/PasswordInput/PasswordInput';
import { CustomInput } from '@/components/shared/auth/CustomInput/CustomInput';
import { registerAccount } from '@/mutation/auth';
import { IRegisterData } from '@/typings/Auth.type';
import { IoPerson } from 'react-icons/io5';
import { Icon } from '@chakra-ui/react';

interface IRegistrationFormInputs extends IRegisterData {} //doslovno isti interface samo se drugaicje zove

export const RegistrationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
    clearErrors,
    getValues,
  } = useForm<IRegistrationFormInputs>();
  const [registered, setRegistered] = useState(false);
  const [isLargerThanXL] = useMediaQuery('(min-width: 1280px)');

  const { trigger } = useSWRMutation(swrKeys.register, registerAccount, {
    onSuccess: () => {
      setRegistered(true);
    },
    onError: () => {
      setError('email', {
        type: 'manual',
        message: 'This account already exists',
      });
    },
  });

  const onRegister = async (data: IRegistrationFormInputs) => {
    if (data.password.length < 8) {
      setError('password', {
        type: 'manual',
        message: 'Password must be at least 8 characters',
      });
      return;
    }
    if (data.password !== data.password_confirmation) {
      setError('password_confirmation', {
        type: 'manual',
        message: 'Passwords do not match',
      });
      return;
    }
    // Clear previous errors if any
    clearErrors();
    console.log('On register:', data);
    await trigger(data);
  };

  return registered ? (
    <SuccessWindow
      link={'/all-shows'}
      description={'You have successfully registered!'}
      buttonText={'Lets Rock!'}
    />
  ) : (
    <Flex
      direction="column"
      justify={'center'}
      gap={8}
      alignItems="center"
      width={{ base: '100vw', md: '380px' }}
      height={{ base: '100vh', md: 'auto' }}
      p="10"
      borderRadius={{ base: 0, md: 2 }}
      bg="purple"
    >
      <Text fontSize="2xl" fontWeight="bold" color="white">
        TV shows APP
      </Text>
      <chakra.form
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
        gap={8}
        onSubmit={handleSubmit(onRegister)}
      >
        <CustomInput
          {...register('email', {
            required: 'Email is required',
            pattern: {
              // korstim RegEx: "jedan ili više ne-praznih znakova na pocektu niza" + @ + "jedan ili više ne-praznih znakova" & - krja niza; /i - neosjetljivo na velika i mala slova
              value: /^\S+@\S+$/i,
              message: 'Invalid email address',
            },
          })}
          isDisabled={isSubmitting}
          testId={'email'}
          placeholder={'Email'}
          icon={<Icon as={IoPerson} color={'white'} />}
          error={errors.email?.message}
        />

        <PasswordInput
          {...register('password', {
            required: 'Password is required',
            minLength: {
              value: 8,
              message: 'Password must be at least 8 characters',
            },
          })}
          isDisabled={isSubmitting}
          testId={'password'}
          placeholder={'Password'}
          icon={<LockIcon color="white" />}
          error={errors.password?.message}
        />

        <PasswordInput
          {...register('password_confirmation', {
            required: 'Password confirmation is required',
            validate: (value) =>
              value === getValues('password') || 'Passwords do not match',
          })}
          isDisabled={isSubmitting}
          testId={'password_confirmation'}
          placeholder={'Confirm password'}
          icon={<LockIcon color="white" />}
          error={errors.password_confirmation?.message}
        />

        <Button
          type="submit"
          fontSize="sm"
          variant={'default'}
          isDisabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : 'SIGN UP'}
        </Button>
      </chakra.form>
      <Text color="white" fontSize={6}>
        Already have an account?{' '}
        <Text
          as={NextLink}
          href="/login"
          fontWeight="bold"
          letterSpacing="0.02em"
        >
          Login
        </Text>
      </Text>
    </Flex>
  );
};
