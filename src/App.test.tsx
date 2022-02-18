import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('I create websites header', () => {
  render(<App />);
  const headerElement = screen.getByText(/I create websites/i);
  expect(headerElement).toBeInTheDocument();
});
