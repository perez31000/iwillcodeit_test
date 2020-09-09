import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import AppDataProvider from './AppDataContext';
// import UserDataProvider from './UserDataContext'
import User from './User';
import Home from './Home';
import Post from './Home';

function App() {

  return (
    <AppDataProvider>
      {/* v2 */}
      {/* <UserDataProvider> */}
      <Router>

        <Routes>

          <Route path="/" element={<Home />} />
          <Route path={`/user/:userId`} element={<User />} />
          <Route path={`/user/:userId/1`} element={<Post />} />

        </Routes>

      </Router>
      {/* </UserDataProvider> */}
    </AppDataProvider>
  )
}

export default App;