/* eslint-disable react/no-unescaped-entities */
'use client';

import React, { useState } from 'react';
import { Flex, chakra, Button, Text, Spinner } from '@chakra-ui/react';
import { LockIcon } from '@chakra-ui/icons';
import NextLink from 'next/link';
import { useForm } from 'react-hook-form';
import { swrKeys } from '@/fetchers/swrKeys';
import useSWRMutation from 'swr/mutation';
import { SuccessWindow } from '@/components/shared/auth/SuccessWidnow/SuccessWindow';
import { PasswordInput } from '@/components/shared/auth/PasswordInput/PasswordInput';
import { CustomInput } from '@/components/shared/auth/CustomInput/CustomInput';
import { ILoginData } from '@/typings/Auth.type';
import { loginUser } from '@/mutation/auth';
import { IoPerson } from 'react-icons/io5';
import { Icon } from '@chakra-ui/react';

interface ILoginFormInputs extends ILoginData {} // interface je dsolovno isti kao ILoginData samo se drugacije zove zbog bolje citljivosti

export const LoginForm = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
    setError,
  } = useForm<ILoginFormInputs>();
  const { trigger } = useSWRMutation(swrKeys.signIn, loginUser);

  const onLogin = async (data: ILoginFormInputs) => {
    try {
      await trigger(data);
      console.log('Login successful!');
      setLoggedIn(true);
    } catch (error) {
      setError('email', {
        type: 'manual',
        message: 'Invalid email or password',
      });
      setError('password', {
        type: 'manual',
        message: 'Invalid email or password',
      });
    }
  };

  return loggedIn ? (
    <SuccessWindow
      link={'/all-shows'}
      description={
        'Congrats! You are logged in! Lets see what we are watching today!'
      }
      buttonText={'Lets rock!'}
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
        onSubmit={handleSubmit(onLogin)}
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
          {...register('password', { required: 'Password is required' })}
          isDisabled={isSubmitting}
          testId={'password'}
          placeholder={'Password'}
          icon={<LockIcon color="white" />}
          error={errors.password?.message}
        />

        <Button
          type="submit"
          px={7}
          borderRadius={2}
          fontSize="sm"
          color="purple"
          isDisabled={isSubmitting}
        >
          {isSubmitting ? <Spinner /> : 'LOG IN'}
        </Button>
      </chakra.form>
      <Text color="white" fontSize={6}>
        Don't have an account?{' '}
        <Text
          as={NextLink}
          href="/register"
          fontWeight="bold"
          letterSpacing="0.02em"
        >
          Register
        </Text>
      </Text>
    </Flex>
  );
};
