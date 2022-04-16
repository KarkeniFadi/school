import axios from 'axios';
import {
  CREATE_ARCHIVE_FAIL,
  CREATE_ARCHIVE_REQUEST,
  CREATE_ARCHIVE_SUCCESS,
  FETCH_ARCHIVE_FAIL,
  FETCH_ARCHIVE_REQUEST,
  FETCH_ARCHIVE_SUCCESS,
  FETCH_USERS_REQUEST,
} from '../actionTypes';

const createArchiveAction = archiveData => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_ARCHIVE_REQUEST,
      });

      const config = {
        'Content-Type': 'application/json',
      };
      const { data } = await axios.post('/api/archives', archiveData, config);

      dispatch({
        type: CREATE_ARCHIVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ARCHIVE_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch all archive action

const fetchArchivesAction = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_ARCHIVE_REQUEST,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      //make http call to our backend
      const { data } = await axios.get('/api/archives', config);
      dispatch({
        type: FETCH_ARCHIVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ARCHIVE_FAIL,
        payload: error.response && error.response.data.message,
      });
    }
  };
};

export { createArchiveAction, fetchArchivesAction };