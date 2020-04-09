
import React, { useEffect } from 'react';
import Routes from './Pages';
import { BrowserRouter as Router } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import Nav from './Components/Nav';
import './App.css';

function App() {

  //here we create the call to get all users/posts and set them to a redux state/store.
  const dispatch = useDispatch();
  // useEffect(() => {
  //   effect
  //   return () => {
  //     cleanup
  //   }
  // }, [input])

  useEffect(() => {
    console.log("app Loaded!", "token:", localStorage.token)


    if (localStorage.token) {
      fetch("http://localhost:4000/persist", {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
        .then(r => r.json())
        .then(resp => {
          if (resp.token) {
            localStorage.token = resp.token
            //here we setUser as response
            dispatch({
              type: 'SET_USER',
              payload: resp.user
            });
          }
        })
    }
  })




  return (
    <Router>
      <Nav />
      <Routes />
    </Router>
  );
}

export default App;
