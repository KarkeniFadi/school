import React from 'react';
import './Home.css';
//import bookpg from '../../assets/img/book.jpg';
//import videoSource from '../../assets/books.mp4';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className='Container'>

   

      <div className='Content'>
        <div className='SubContent'>
          <h1>Archive Catolog</h1>
          <p>Manage your Archive with </p>
          <button type='button' className='btn btn-outline-dark'>
            <Link to='/register'>Get started</Link>
          </button>
     
        </div>
      </div>
    </div>
  );
};

export default Home;
