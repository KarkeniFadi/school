import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Register.css';
import { registerUser } from '../../redux/action/users/usersActions';
import Loading from '../Loading/Loading';
import ErrorMessage from '../DisplayMessage/ErrorMessage';
import { useNavigate } from 'react-router-dom';


const Register = ({ history }) => {
  const [firstName, setFirstName] = useState('');
   const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const userLogin = useSelector(state => state.userLogin);
    const { userInfo, loading, error } = userLogin;
  
 const navigate = useNavigate();


  //Redirect if user is login/authenticated

  useEffect(() => {
    if (userInfo) {
      navigate('/');
    }
  }, [userInfo,navigate]);


    //dispatch
    const dispatch = useDispatch();
    //submit
    const formSubmitHandler = e => {
      e.preventDefault();
      dispatch(registerUser(firstName, lastName, email, password,role));
      //if (userInfo !== null && error === undefined) navigate('/');
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
              <label htmlFor='first-name'>FirstName</label>
              <input
                value={firstName}
                type='text'
                className='form-control'
                id='first-name'
              aria-describedby='emailHelp'
                placeholder='Enter firstName'
                onChange={e => setFirstName(e.target.value)}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='last-name'>LastName </label>
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                type='text'
                className='form-control'
                id='last-name'
             aria-describedby='emailHelp'
                placeholder='Enter lasttName'
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
                autoComplete="true"
              />
            </div>
            <div className='form-group'>
              <label htmlFor='exampleInputEmail1'>Role</label><br></br>
              <select
                          value={role}
                          onChange={(e) => setRole(e.target.value)}
                          className='custom-select'>
                            <option defaultValue='Admin'>
                            Admin
                          </option>
                          <option value='cadre_pedagogique'>Cadre_pedagogique</option>
                         
                </select>
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
