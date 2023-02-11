import { Route, Routes } from 'react-router-dom';
import DetailsPage from '../pages/DetailsPage';
import HomePage from '../pages/HomePage';
import './App.css';
import Header from './Header';

const App = () => (
  <div className="app-cont">
    <Header />
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="/:countryId" element={<DetailsPage />} />
    </Routes>
  </div>
);

export default App;
