import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchArchives, deleteArchive } from '../../redux/action/archives/archiveActions';
import Loading from '../Loading/Loading';

const Archives = ({ history }) => {
  //Fetch books
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchArchives());
  }, [dispatch]);
  const archivesListReducer = useSelector(state => state.archiveListReducer);
  const { archives, loading } = archivesListReducer;
  // End of fetch books

  //Delete book handler
  const handlerDeleteArchive = id => {
    dispatch(deleteArchive(id));
    history.push('/archives');
  };
  return (
    <div>
      {loading && <Loading />}
      {archives !== undefined && archives.length === 0 ? (
        'No'
      ) : (
        <div className='row'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th scope='col'>Author</th>
                  <th scope='col'>Book Name</th>
                  <th scope='col'>Action</th>
                  <th scope='col'>Action</th>
                </tr>
              </thead>
              <tbody>
                {archives &&
                  archives.map(archive => {
                    return (
                      <tr className='table-dark' key={archive._id}>
                        <th scope='row'>{archive.fullName}</th>
                        <td>{archive.fullName}</td>
                        <td>
                          <i
                            onClick={() => handlerDeleteArchive(archive._id)}
                            className='fas fa-trash '
                            style={{ color: 'red', cursor: 'progress' }}></i>
                        </td>
                        <td>
                          <Link to={`/archive/${archive && archive._id}`}>
                            <i
                              className='far fa-edit'
                              style={{
                                color: 'yellow',
                                cursor: 'progress',
                              }}></i>
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Archives;