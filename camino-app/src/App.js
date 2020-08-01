import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import MainPage from './pages/MainPage';
import { Provider } from 'react-redux'
import store from './store'

function App() {
  return (
    <Provider store={store}>
    <div>
      <Navbar/>
      <MainPage/>
    </div>
    </Provider>
  );
}

export default App;
