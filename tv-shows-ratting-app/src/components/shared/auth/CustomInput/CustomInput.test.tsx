/**
 * Testovi za CustomInput komponentu:
 * 1) Provjerava renderiranje ikone
 * 2) Provjerava placeholder tekst
 * 3) Provjerava da li je input onemogućen kad je isDisabled true
 * 4) Provjerava data-testid atribut
 */

import { render, screen } from '@testing-library/react';
import { CustomInput } from './CustomInput';
import { EmailIcon } from '@chakra-ui/icons';

describe('CustomInput', () => {
  // Test za renderiranje ikone
  it('should render the icon', () => {
    render(
      <CustomInput
        RegisterPart={{}}
        isDisabled={false}
        testId="email"
        placeholder="Email"
        icon={<EmailIcon />}
        name={'Email'}
      />
    );
    const icon = screen.getByTestId('email').previousSibling;
    expect(icon).toBeInTheDocument();
  });

  // Test za placeholder tekst
  it('should render with the correct placeholder', () => {
    render(
      <CustomInput
        RegisterPart={{}}
        isDisabled={false}
        testId="email"
        placeholder="Email"
        icon={<EmailIcon />}
        name={'Email'}
      />
    );
    const input = screen.getByPlaceholderText('Email');
    expect(input).toBeInTheDocument();
  });

  // Test da li je input onemogućen kad je isDisabled true
  it('should be disabled when isDisabled is true', () => {
    render(
      <CustomInput
        RegisterPart={{}}
        isDisabled={true}
        testId="email"
        placeholder="Email"
        icon={<EmailIcon />}
        name={'Email'}
      />
    );
    const input = screen.getByPlaceholderText('Email');
    expect(input).toBeDisabled();
  });

  // Test za data-testid atribut
  it('should have the correct data-testid attribute', () => {
    render(
      <CustomInput
        RegisterPart={{}}
        isDisabled={false}
        testId="email"
        placeholder="Email"
        icon={<EmailIcon />}
        name={'Email'}
      />
    );
    const input = screen.getByTestId('email');
    expect(input).toBeInTheDocument();
  });
});
