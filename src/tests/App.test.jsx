import { describe, expect, test } from "vitest";
import { render, screen } from '@testing-library/react';
import App from '../components/App';

describe('Basic Test', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByText('Metrics React App')).toBeDefined();
  });
})