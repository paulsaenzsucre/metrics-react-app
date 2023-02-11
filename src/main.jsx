import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import store from './redux/configureStore';
import { apiSlice } from './redux/apis/apiSlice';
import './main.css';

store.dispatch(apiSlice.endpoints.getCountries.initiate());

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
);
