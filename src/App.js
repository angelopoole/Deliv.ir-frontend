
import React, { useEffect } from 'react';
import Routes from './Pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import Nav from './Components/Nav';
import './App.css';

function App() {

  //here we create the call to get all users/posts and set them to a redux state/store.





  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;
