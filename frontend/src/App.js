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
        <Route  path='/' element={<Home />} />
        <Route  path='/register' element={<Register />} />
        <Route  path='/login' element={<Login />} />
        <Route  path='/profile' element={<Profile/>} />
        <Route  path='/archives' element={<Archives />} />
        <Route  path='/addArchive' element={<AddArchive />} />
        <Route path='/user-update' element={<UpdateProfile />} />
        <Route path='/archive/:id' element={<ArchiveDetail />} />
        <Route  path='/users' element={<Users />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
