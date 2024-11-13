
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FormComponent from './FormComponent';

describe('FormComponent', () => {
  test('displays entered name on the screen', () => {
    render(<FormComponent onSubmit={() => {}} />);
    const nameInput = screen.getByPlaceholderText(/Enter your name/i);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    expect(screen.getByText('John Doe')).toBeInTheDocument();
  });

  test('displays entered email on the screen', () => {
    render(<FormComponent onSubmit={() => {}} />);
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    expect(screen.getByText('john@example.com')).toBeInTheDocument();
  });

  test('displays entered message on the screen', () => {
    render(<FormComponent onSubmit={() => {}} />);
    const messageInput = screen.getByPlaceholderText(/Enter your message/i);
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } });
    expect(screen.getByText('Hello there!')).toBeInTheDocument();
  });

  test('calls onSubmit with correct data when form is submitted', () => {
    const handleSubmit = jest.fn();
    render(<FormComponent onSubmit={handleSubmit} />);
    const nameInput = screen.getByPlaceholderText(/Enter your name/i);
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);
    const messageInput = screen.getByPlaceholderText(/Enter your message/i);
    const submitButton = screen.getByText(/submit/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(emailInput, { target: { value: 'john@example.com' } });
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } });
    fireEvent.click(submitButton);

    expect(handleSubmit).toHaveBeenCalledWith({
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Hello there!',
    });
  });

  test('does not call onSubmit when required fields are empty', () => {
    const handleSubmit = jest.fn();
    render(<FormComponent onSubmit={handleSubmit} />);
    const submitButton = screen.getByText(/submit/i);
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
  });

  test('handles invalid email format', () => {
    render(<FormComponent onSubmit={() => {}} />);
    const emailInput = screen.getByPlaceholderText(/Enter your email/i);

    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    expect(screen.getByText('invalid-email')).toBeInTheDocument();
  });
});