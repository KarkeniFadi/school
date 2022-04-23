import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArchives, deleteArchive } from '../../redux/action/archives/archiveActions';
import Loading from '../Loading/Loading';
import { Link } from 'react-router-dom';

const Archives = ({ history }) => {
  //Fetch books
  const dispatch = useDispatch();

  useEffect(() => {
    //dispatch action
    dispatch(fetchArchives());
  }, [dispatch]);

  //GRAB THE DATA FROM OUR STORE
  const { archives, loading } = useSelector(state => {
    return state.archivesList;
  });
 

    //Delete book handler
  const handlerDeleteArchive= id => {
    dispatch(deleteArchive(id));
    history.push('/archives');
  };
  return (
    <div>
        <div className='row'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'></th>
                  <th scope='col'>Full Name</th>
                  <th scope='col'>Picture</th>
                  <th scope='col'>Role</th>
                  <th scope='col'>Delete</th>
                 <th scope='col'>Update</th>
                </tr>
              </thead>
              <tbody>
                 {loading ? (
                <Loading />
              ) : (
              <>
                            {archives && 
                                   archives.map(archive => {
                                     return (
                                      <>
                                      <tr className='table-dark' key={archive._id}>
                                         <th scope='row'>{archive.fullName}</th>
                                         <td>{archive.picture}</td>
                                         <td>{archive.role}</td>
                                         <td>
                          <i
                            onClick={() =>  handlerDeleteArchive(archive._id)}
                            className='fas fa-trash '
                            style={{ color: 'red', cursor: 'progress' }}></i>
                        </td>
                        <td>
                          <Link href={`/archive/${archive && archive._id}`}>
                            <i
                              className='far fa-edit'
                              style={{
                                color: 'yellow',
                                cursor: 'progress',
                              }}></i>
                          </Link>
                        </td>
                                      </tr>
                                   {/* End of map thr */}
                                     </>
            
                    );
                  })}
                  </>
              )}
              </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Archives;