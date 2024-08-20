/**
 * Testovi za RegistrationForm komponentu:
 * 1) Provjerava ima li email input
 * 2) Provjerava ima li password input
 * 3) Provjerava ima li password confirmation input
 * 4) Provjerava ima li sign up gumb
 * 5) Provjerava ima li link za prijavu
 * 6) Provjerava da spinner nije prikazan na početku
 * Ima ih još ali mislim da je za sada ovo dosta
 */

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { RegistrationForm } from './RegistrationForm';

describe('RegistrationForm', () => {
  // Test da li ima email input
  it('should render email input', () => {
    render(<RegistrationForm />);
    const emailInput = screen.getByPlaceholderText('Email');
    expect(emailInput).toBeInTheDocument();
  });

  // Test da li ima password input
  it('should render password input', () => {
    render(<RegistrationForm />);
    const passwordInput = screen.getByPlaceholderText('Password');
    expect(passwordInput).toBeInTheDocument();
  });

  // Test da li ima password confirmation input
  it('should render password confirmation input', () => {
    render(<RegistrationForm />);
    const passwordConfirmationInput =
      screen.getByPlaceholderText('Confirm password');
    expect(passwordConfirmationInput).toBeInTheDocument();
  });

  // Test da li ima sign up gumb
  it('should render sign up button', () => {
    render(<RegistrationForm />);
    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    expect(signUpButton).toBeInTheDocument();
  });

  // Test da li ima link za prijavu
  it('should render login link', () => {
    render(<RegistrationForm />);
    const loginLink = screen.getByRole('link', { name: /login/i });
    expect(loginLink).toBeInTheDocument();
  });

  // Test da spinner nije prikazan na početku
  it('should not show spinner initially', () => {
    render(<RegistrationForm />);
    const spinner = screen.queryByRole('status');
    expect(spinner).not.toBeInTheDocument();
  });
});
