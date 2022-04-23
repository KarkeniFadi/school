import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/action/users/usersActions';



const Header = props => {


  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  


  const state= useSelector(state => state.userLogin);
  console.log(state);
  //const { userInfo } = userLogin;

  //logout handler

  const logoutHandler = () => {
    dispatch(logoutUser());
    navigate('/');
  };
  const { userInfo, loading, error } = state;
  return (
    <header>
      <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
        <Link className='navbar-brand' to='/'>
          SCHOOL
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarColor01'
          aria-controls='navbarColor01'
          aria-expanded='false'
          aria-label='Toggle navigation'>
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarColor01'>
          <ul className='navbar-nav m-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'></span>
              </Link>
            </li>
            <li className='nav-item'>
              {/* Modal  */}

              <button
                type='button'
                className='btn btn-danger'
                data-toggle='modal'
                data-target='#about'>
                About
              </button>

              <div
                className='modal fade'
                id='about'
                tabIndex='-1'
                aria-labelledby='exampleModalLabel'
                aria-hidden='true'>
                <div className='modal-dialog'>
                  <div className='modal-content'>
                    <div className='modal-header'>
                      <h5 className='modal-title' id='exampleModalLabel'>
                        App functionalities
                      </h5>
                      <button
                        type='button'
                        className='close'
                        data-dismiss='modal'
                        aria-label='Close'>
                        <span aria-hidden='true'>&times;</span>
                      </button>
                    </div>
                    <div className='modal-body'>
                      <ul className='list-group'>
                        <li className='list-group-item active'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>

                          <a href="/register" >Register User</a>
                          <hr />
                        </li>
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          <a href="/profile" >Update profile</a>
                          <hr />
                        </li>

                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          <a href="/login" >Login</a>
                          <hr />
                        </li>
                        
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                          <a href="/users" >List of Users</a>
                          <hr />
                        </li>
                        <li className='list-group-item'>
                          <i
                            className='fas fa-clipboard-list text-white mr-3'
                            style={{ fontSize: '1.5rem' }}></i>
                            <a href="/archives" >List of Archives</a>
                          
                          <hr />
                        </li>
                      
                      </ul>
                    </div>
                    <div className='modal-footer'>
                      <a
                        className='mr-5'
                        href='https://github.com'
                        target='_'>
                        developed by: Fadi
                      </a>
                      <button
                        type='button'
                        className='btn btn-danger'
                        data-dismiss='modal'>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            {!userInfo ? (    //if there is no user show it
          
          <>
                <li className='nav-item'>
                  <Link className='nav-link' to='../login'>
                    Login
                  </Link>
                </li>
               
              </>
             
            ) : (

               <>
                <li className='nav-item'>
                  <Link className='nav-link' to='/register'>
                    Register
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/archives'>
                    Archives
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link className='nav-link' to='/addarchive'>
                    Add archive
                  </Link>
                </li>

                <li className='nav-item'>
                  <Link className='nav-link' to='/users'>
                    Users
                  </Link>
                </li>
                <li className='nav-item'>
                  <Link
                    className='nav-link'
                    to='/login'
                    onClick={() => dispatch(logoutUser())}>
                    Logout
                  </Link>
                </li>
              </>
            )}

            {/* Drop dowm */}
            {userInfo ? (
              <li className='nav-item dropdown'>
                <a
                  className='nav-link dropdown-toggle btn-dark'
                  data-toggle='dropdown'
                  href='/'
                  role='button'
                  aria-haspopup='true'
                  aria-expanded='false'>
                  {userInfo.firstName}
                </a>
                <div className='dropdown-menu'>
                  <Link className='dropdown-item' to='/profile'>
                    Profile
                  </Link>
                  <Link className='dropdown-item' to='/addArchive'>
                    Add archive
                  </Link>
                  <Link className='dropdown-item' to='/archives'>
                    Archives
                  </Link>

                  <div className='dropdown-divider'></div>
                  <button onClick={logoutHandler} className='dropdown-item'>
                    Logout
                  </button>
                </div>
              </li>
            ) : (
              ''
            )}
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='text'
              placeholder='Search'
            />
            <button className='btn btn-secondary my-2 my-sm-0' type='submit'>
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default Header;

