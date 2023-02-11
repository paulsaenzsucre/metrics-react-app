import {
  test,
  expect,
  afterEach,
  describe,
} from 'vitest';
import {
  cleanup,
  render,
  screen,
} from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import Header from '../components/Header';
import App from '../components/App';
import setupStore from '../redux/configureStore';

afterEach(cleanup);

const store = setupStore({});

describe('Test App component', () => {
  test('Should render App', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});

describe('Test HomePage component', () => {
  test('Should match HomePage snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });

  test('Should show big card', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByText('WORLD (WORLD)')).toBeDefined();
  });

  test('Should show card list', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <HomePage />
        </Provider>
      </BrowserRouter>,
    );
    expect(screen.getByText('STATS BY COUNTRY')).toBeDefined();
  });
});

describe('Test Header component', () => {
  test('Should match Header snapshot', () => {
    const tree = render(
      <BrowserRouter>
        <Provider store={store}>
          <Header />
        </Provider>
      </BrowserRouter>,
    );
    expect(tree).toMatchSnapshot();
  });
});
