import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArchive, updateArchive } from '../../redux/action/archives/archiveActions';

const ArchiveDetail = ({ history }) => {
  const { id } = useParams();

  //Get the book details and fill it in the form
  const archiveDetails = useSelector(state => state.archiveDetails);

  const { archive, loading } = archiveDetails;

  const [fullName, setName] = useState(archive && !loading && archive.fullName);
  const [picture, setPicture] = useState(archive && !loading && archive.picture);
  const [role, setRole] = useState(archive && archive.role);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArchive(id));
  }, [dispatch, id]);

  //dispatch action

  const formSubmitHandler = e => {
    const data = {
      fullName,
      picture,
      role,
    };
    e.preventDefault();
    dispatch(updateArchive(id, data));
    history.push('/archives');
  };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          {archive ? (
            <>
              <h1 className='text-center'>Update</h1>
              <form onSubmit={formSubmitHandler}>
                <fieldset>
                  <div className='form-group'>
                    <select
                      value={fullName}
                      onChange={e => setName(e.target.value)}
                      className='custom-select'>
                    </select>
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputEmail1'>Author </label>
                    <input
                      value={picture}
                      onChange={e => setPicture(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputEmail1'
                      aria-describedby='emailHelp'
                      
                    />
                  </div>
                  <div className='form-group'>
                    <label htmlFor='exampleInputPassword1'>title</label>
                    <input
                      value={role}
                      onChange={e => setRole(e.target.value)}
                      type='text'
                      className='form-control'
                      id='exampleInputPassword1'
                      placeholder='role'
                    />
                  </div>
                  <button type='submit' className='btn btn-dark m-auto'>
                    Create Archive
                  </button>
                </fieldset>
              </form>
            </>
          ) : (
            'No'
          )}
        </div>
      </div>
    </div>
  );
};

export default ArchiveDetail;