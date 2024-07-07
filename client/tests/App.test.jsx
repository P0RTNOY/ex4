import { render, screen, fireEvent } from '@testing-library/react';
import App from '../src/App';

test('renders the App component and performs actions', async () => {
  render(<App />);
  
  // Check initial state
  expect(screen.getByText(/Insert URL:/i)).toBeInTheDocument();
  
  // Check the input field
  const input = screen.getByRole('textbox');
  expect(input).toHaveValue('https://www.google.com');

  // Check the buttons
  const runButton = screen.getByText(/run/i);
  expect(runButton).toBeInTheDocument();
  const deleteButton = screen.getByText(/delete all/i);
  expect(deleteButton).toBeInTheDocument();
  
  // Simulate user interaction
  fireEvent.change(input, { target: { value: 'https://about.google/products/' } });
  fireEvent.click(saveButton);

  // Add further assertions based on expected outcomes
  expect(await screen.findByText(/loading.../i)).toBeInTheDocument();
});
