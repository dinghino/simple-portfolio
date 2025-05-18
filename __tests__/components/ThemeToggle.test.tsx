import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeToggle } from '@/components/theme-toggle';
import { ThemeProvider } from '@/components/theme-provider';

// Mock the next-themes hook
jest.mock('next-themes', () => ({
  useTheme: () => ({
    theme: 'light',
    setTheme: jest.fn(),
  }),
}));

describe('ThemeToggle component', () => {
  it('should render correctly', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toBeInTheDocument();
  });

  it('should have accessible name', () => {
    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button');
    expect(toggleButton).toHaveAccessibleName('Toggle theme');
  });

  it('should toggle theme when clicked', () => {
    const { useTheme } = require('next-themes');
    const setThemeMock = jest.fn();
    
    // Override the mock to have a controllable theme and setTheme
    useTheme.mockReturnValue({
      theme: 'light',
      setTheme: setThemeMock,
    });

    render(
      <ThemeProvider>
        <ThemeToggle />
      </ThemeProvider>
    );

    const toggleButton = screen.getByRole('button');
    fireEvent.click(toggleButton);
    
    expect(setThemeMock).toHaveBeenCalledWith('dark');
  });
});