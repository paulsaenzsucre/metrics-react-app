import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import setupStore from '../redux/configureStore';

const renderWithProviders = (
  ui,
  {
    preloadedState = {},
    // Automatically create a store instance if no store was passed in
    store = setupStore(preloadedState),
    ...renderOptions
  } = {},
) => {
  setupListeners(store.dispatch);

  const Wrapper = ({ children }) => <Provider store={store}>{children}</Provider>;

  // Wrapper.propTypes = {
  //   children: PropTypes.func.isRequired,
  // };

  return { store, ...render(ui, { wrapper: Wrapper, ...renderOptions }) };
};

export default renderWithProviders;
