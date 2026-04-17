import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Transcit hero headline', () => {
  render(<App />);
  expect(
    screen.getByRole('heading', { name: /from checkout to delivery, fully connected/i }),
  ).toBeInTheDocument();
});
