import { render, screen } from '@testing-library/react';
import App from './App';

test('Renders app container)', () => {
  render(<App />);
  const appContainer = screen.getByTestId('app-container')
  expect(appContainer).toBeInTheDocument();
});
