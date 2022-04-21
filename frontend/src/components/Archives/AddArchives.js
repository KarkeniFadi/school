import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createArchive } from '../../redux/action/archives/archiveActions';

 
  const AddArchive = ({ history }) => {
    const [fullName, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [role, setRole] = useState('');
  
    //Get the user id from store
  
    const userLogin = useSelector(state => state.userLogin);
  
    const { userInfo } = userLogin;
    console.log(userInfo._id);
    //dispatch action
    const dispatch = useDispatch();
  
    const formSubmitHandler = e => {
      const data = {
        fullName,
        picture,
        role,
      };
      e.preventDefault();
      dispatch(createArchive(data));
      history.push('/archives');
    };

  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <button
            type='button'
            className='btn btn-primary'
            data-toggle='modal'
            data-target='#exampleModal'>
            Click to add Archive.
          </button>

          <div
            className='modal fade'
            id='exampleModal'
            tabIndex='-1'
            aria-labelledby='exampleModalLabel'
            aria-hidden='true'>
            <div className='modal-dialog'>
              <div className='modal-content'>
                <div className='modal-header'>
                  <h5 className='modal-title' id='exampleModalLabel'>
                    Create Archive
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
                  <h1 className='text-center'>Add Archive</h1>
                  <form onSubmit={formSubmitHandler}>
                    <fieldset>
                    <div className='form-group'>
                        <label htmlFor='exampleInputPassword1'>full Name</label>
                        <input
                          value={fullName}
                          onChange={e => setName(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputPassword1'
                          placeholder='Full Name'
                        />
                      </div>
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>photo</label>
                        <input
                          value={picture}
                          onChange={e => setPicture(e.target.value)}
                          type='text'
                          className='form-control'
                          id='exampleInputEmail1'
                          aria-describedby='emailHelp'
                          placeholder='photo'
                        />
                      </div>

                      
                      <div className='form-group'>
                        <label htmlFor='exampleInputEmail1'>Role</label>
                      <select
                          value={role}
                          onChange={e => setRole(e.target.value)}
                          className='custom-select'>
                          <option value='students'>Students</option>
                          <option value='teacher'>Teacher</option>
                          <option value='administration'>Administrative</option>
                        </select>
                        </div>
                      <button type='submit' className='btn btn-warning m-auto'>
                        Create Archive
                      </button>
                    </fieldset>
                  </form>
                </div>
                <div className='modal-footer'>
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
        </div>
      </div>
    </div>
  );
};

export default AddArchive;