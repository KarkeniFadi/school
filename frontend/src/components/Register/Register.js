import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { registerUser } from '../../redux/action/users/usersActions';
import Loading from '../Loading/Loading';
import ErrorMessage from '../DisplayMessage/ErrorMessage';


const Register = ({ history }) => {
  const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const userLogin = useSelector(state => state.userLogin);
    const { userInfo, loading, error } = userLogin;
  
    //dispatch
    const dispatch = useDispatch();
    //submit
    const formSubmitHandler = e => {
      e.preventDefault();
      dispatch(registerUser(firstName,lastName, email, password,role));
      console.log(userInfo, loading, error);
      if (userInfo !== null && error === undefined) history.push('/');
    };



  return (
    <div className='row container-height'>
    <div className='col-lg-6 col-md-6 m-auto'>
      <div className='container'>
        {loading && <Loading />}
        {error && <ErrorMessage error={error} />}
        <h1 className='text-center'>Register</h1>

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
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>FirstName</label>
              <input
                value={role}
                onChange={e => setRole(e.target.value)}
                type='text'
                className='form-control'
                id='exampleInputEmail1'
                aria-describedby='emailHelp'
                placeholder='Enter Name'
              />
            </div>
            <button type='submit' className='btn btn-info m-auto'>
              Register
            </button>
          </fieldset>
        </form>
      </div>
    </div>
  </div>
) ;
};


export default Register;
