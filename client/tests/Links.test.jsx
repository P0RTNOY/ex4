// tests/Links.test.jsx

import { render, screen } from '@testing-library/react';
import Links from '../src/Links/index.jsx';

describe('Links Component', () => {
  test('renders the URL heading correctly', () => {
    const mockUrl = 'https://example.com';
    const mockLinks = ['https://example.com/page1', 'https://example.com/page2'];

    render(<Links url={mockUrl} links={mockLinks} />);

    expect(screen.getByText(mockUrl)).toBeInTheDocument();
  });

  test('renders the list of links', () => {
    const mockUrl = 'https://example.com';
    const mockLinks = ['https://example.com/page1', 'https://example.com/page2'];

    render(<Links url={mockUrl} links={mockLinks} />);

    expect(screen.getAllByRole('link')).toHaveLength(mockLinks.length);
    expect(screen.getByText(mockLinks[0])).toBeInTheDocument();
    expect(screen.getByText(mockLinks[1])).toBeInTheDocument();
  });

  test('renders a message when there are no links', () => {
    const mockUrl = 'https://example.com';
    const mockLinks = [];

    render(<Links url={mockUrl} links={mockLinks} />);

    expect(screen.getByText(/No links found/i)).toBeInTheDocument();
  });
});
