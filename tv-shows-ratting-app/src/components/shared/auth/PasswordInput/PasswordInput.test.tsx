/**
 * Testovi za PasswordInput komponentu:
 * 1) Provjerava renderiranje ikone
 * 2) Provjerava placeholder tekst
 * 3) Provjerava da li je input onemogućen kad je isDisabled true
 * 4) Provjerava data-testid atribut
 * 5) Provjerava da se lozinka može prikazati i sakriti klikom na ikonu
 */

import { render, screen, fireEvent } from '@testing-library/react';
import { PasswordInput } from './PasswordInput';
import { EmailIcon, ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

describe('PasswordInput', () => {
  // Test za renderiranje ikone
  it('should render the icon', () => {
    render(
      <PasswordInput
        RegisterPart={{}}
        isDisabled={false}
        testId="password"
        placeholder="Password"
        icon={<EmailIcon />}
      />
    );
    const icon = screen.getByPlaceholderText('Password').previousSibling;
    expect(icon).toBeInTheDocument();
  });

  // Test za placeholder tekst
  it('should render with the correct placeholder', () => {
    render(
      <PasswordInput
        RegisterPart={{}}
        isDisabled={false}
        testId="password"
        placeholder="Password"
        icon={<EmailIcon />}
      />
    );
    const input = screen.getByPlaceholderText('Password');
    expect(input).toBeInTheDocument();
  });

  // Test da li je input onemogućen kad je isDisabled true
  it('should be disabled when isDisabled is true', () => {
    render(
      <PasswordInput
        RegisterPart={{}}
        isDisabled={true}
        testId="password"
        placeholder="Password"
        icon={<EmailIcon />}
      />
    );
    const input = screen.getByPlaceholderText('Password');
    expect(input).toBeDisabled();
  });

  // Test za data-testid atribut
  it('should have the correct data-testid attribute', () => {
    render(
      <PasswordInput
        RegisterPart={{}}
        isDisabled={false}
        testId="password"
        placeholder="Password"
        icon={<EmailIcon />}
      />
    );
    const input = screen.getByTestId('password');
    expect(input).toBeInTheDocument();
  });

  // Test da se lozinka može prikazati i sakriti klikom na ikonu
  it('should toggle password visibility when icon is clicked', () => {
    render(
      <PasswordInput
        RegisterPart={{}}
        isDisabled={false}
        testId="password"
        placeholder="Password"
        icon={<EmailIcon />}
      />
    );
    const input = screen.getByPlaceholderText('Password');
    const toggleButton = screen.getByRole('button', { name: /toggle view/i });

    // Početno stanje, lozinka je skrivena
    expect(input).toHaveAttribute('type', 'password');

    // Klik na ikonu za prikazivanje lozinke
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'text');

    // Klik na ikonu za skrivanje lozinke
    fireEvent.click(toggleButton);
    expect(input).toHaveAttribute('type', 'password');
  });
});
