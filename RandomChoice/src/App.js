import React from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import IntroductionPage from './pages/IntroductionPage';
import ChoicePage from './pages/ChoicePage';
import DomesticPage from './pages/DomesticPage';
import ForeignPage from './pages/ForeignPage';
import RestaurantPage from './pages/RestaurantPage';

const App = () => {
  return (
    <div className='App'>
      <Route path='/' exact component={IntroductionPage} />
      <Route path='/choice' component={ChoicePage} />
      <Route path='/domestic' component={DomesticPage} />
      <Route path='/foreign' component={ForeignPage} />
      <Route path='/restaurant' component={RestaurantPage} />
    </div>
  );
};

export default App;
