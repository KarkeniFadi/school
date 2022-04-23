import axios from 'axios';
import {
  CREATE_ARCHIVE_FAIL,
  CREATE_ARCHIVE_REQUEST,
  CREATE_ARCHIVE_SUCCESS,
  FETCH_ARCHIVE_FAIL,
  FETCH_ARCHIVE_REQUEST,
  FETCH_ARCHIVE_SUCCESS,
  DELETE_ARCHIVE_FAIL,
  DELETE_ARCHIVE_SUCCESS,
  DELETE_ARCHIVE_REQUEST,
  ARCHIVE_DETAIL_SUCCESS,
  ARCHIVE_DETAIL_FAIL,
  ARCHIVE_DETAIL_REQUEST,
  ARCHIVE_UPDATE_SUCCESS,
  ARCHIVE_UPDATE_REQUEST,
  ARCHIVE_UPDATE_FAIL,
} from '../actionTypes';

//Create archive

export const createArchive = archiveData => {
  return async dispatch => {
    try {
      dispatch({
        type: CREATE_ARCHIVE_REQUEST,
       
      });
      const config = {
        
          'Content-Type': 'application/json',
        
      };
      const { data } = await axios.post('/api/archives', 
      archiveData, config);

      dispatch({
        type: CREATE_ARCHIVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: CREATE_ARCHIVE_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch all archives

export const fetchArchives = () => {
  return async dispatch => {
    try {
      dispatch({
        type: FETCH_ARCHIVE_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get('/api/archives', config);

      dispatch({
        type: FETCH_ARCHIVE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: FETCH_ARCHIVE_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//delete a archive

export const deleteArchive = id => {
  return async dispatch => {
    try {
      dispatch({
        type: DELETE_ARCHIVE_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.delete(`/api/archives/${id}`, config);
      dispatch({
        type: DELETE_ARCHIVE_SUCCESS,
        payload: data,
      });

      dispatch({
        type: FETCH_ARCHIVE_SUCCESS,
      });
    } catch (error) {
      dispatch({
        type: DELETE_ARCHIVE_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//Fetch a signle Archive
export const fetchArchive = (id, archiveData) => {
  return async dispatch => {
    try {
      dispatch({
        type: ARCHIVE_DETAIL_REQUEST,
        loading: true,
      });
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.get(`/api/archives/${id}`, archiveData, config);

      dispatch({
        type: ARCHIVE_DETAIL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ARCHIVE_DETAIL_FAIL,
        error: error.response && error.response.data.message,
      });
    }
  };
};

//UPDATE ARCHIVE

export const updateArchive = (id, archiveData) => {
  return async dispatch => {
    try {
      dispatch({
        type: ARCHIVE_UPDATE_REQUEST,
        loading: true,
      });

      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      };
      const { data } = await axios.put(`/api/archives/${id}`, archiveData, config);
      dispatch({
        type: ARCHIVE_UPDATE_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ARCHIVE_UPDATE_FAIL,
        loading: false,
        error: error.response && error.response.data.message,
      });
    }
  };
};
