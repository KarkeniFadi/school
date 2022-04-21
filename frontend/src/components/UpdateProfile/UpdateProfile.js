import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateUser } from '../../redux/action/users/usersActions';

import SuccessMessage from '../DisplayMessage/SuccessMessage';

const UpdateProfile = ({ history }) => {
  //Get the user from localstorage and pass to the initial states
  const userLogin = useSelector(state => state.userLogin);
  const { userInfo } = userLogin;
  console.log(userInfo);
  const [firstName, setFirstName] = useState(userInfo ? userInfo.firstName : '');
  const [lastName, setLastName] = useState(userInfo ? userInfo.lastName : '');
  const [email, setEmail] = useState(userInfo ? userInfo.email : '');
  const [password, setPassword] = useState('');

  console.log(userLogin);
  //Get the updated user details from store and display message
  const updatedUser = useSelector(state => state.updatedUser);
  const { user, loading, success } = updatedUser;

  //dispatch
  const dispatch = useDispatch();
  //submit
  const formSubmitHandler = e => {
    e.preventDefault();
    dispatch(updateUser(firstName,lastName, email, password));
  };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {user && !loading && success && (
            <SuccessMessage msg='Updated successfully. Logout and login with your new credentials' />
          )}
          <h1 className='text-center'>Update</h1>

          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>FirstName</label>
                <input
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>LastName</label>
                <input
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-primary m-auto'>
                Update your profile
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
