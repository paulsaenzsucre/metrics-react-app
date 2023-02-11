import React from 'react';
import {
  test,
  expect,
  afterEach,
} from 'vitest';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import renderWithProviders from './testUtils';
import App from '../components/App';

// We use msw to intercept the network request during the test,
// and return the response 'John Smith' after 150ms
// when receiving a get request to the `/api/user` endpoint
const handlers = [
  rest.get('https://restcountries.com/v3.1/all', (req, res, ctx) => res(ctx.json([
    {
      cca3: 'COL',
      name: {
        common: 'Colombia',
      },
      region: 'Americas',
      flags: {
        svg: 'https://restcountries.com/data/jpn.svg',
      },
      population: 1500,
    },
    {
      cca3: 'PER',
      name: {
        common: 'Peru',
      },
      region: 'Americas',
      flags: {
        svg: 'https://flagcdn.com/co.svg',
      },
      population: 2500,
    },
  ]), ctx.delay(150))),
];

const server = setupServer(...handlers);

// Enable API mocking before tests.
beforeAll(() => server.listen());

// Reset any runtime request handlers we may add during the tests.
afterEach(() => server.resetHandlers());

// Disable API mocking after the tests are done.
afterAll(() => server.close());

test('App should render after fetching from Api', async () => {
  renderWithProviders(<BrowserRouter><App /></BrowserRouter>);
  expect(await screen.findByText('STATS BY COUNTRY')).toBeDefined();
});

export default handlers;
