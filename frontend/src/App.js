import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import Archives from './components/Archives/Archives';
import AddArchive from './components/Archives/AddArchives';
import UpdateProfile from './components/UpdateProfile/UpdateProfile';
import ArchiveDetail from './components/Archives/ArchiveDetail';
import Users from './components/Users/Users';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/register' element={<Register />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/profile' element={<Profile/>} />
        <Route exact path='/archives' element={<Archives />} />
        <Route exact path='/addArchive' element={<AddArchive />} />
        <Route exact path='/user-update' element={<UpdateProfile />} />
        <Route exact path='/archive/:id' element={<ArchiveDetail />} />
        <Route exact path='/users' element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
