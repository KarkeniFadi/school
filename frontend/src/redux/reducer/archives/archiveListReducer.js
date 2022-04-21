import {
    FETCH_ARCHIVE_FAIL,
    FETCH_ARCHIVE_REQUEST,
    FETCH_ARCHIVE_SUCCESS,
  } from '../../action/actionTypes';
  
  const archiveListReducer = (state = [], action) => {
    switch (action.type) {
      case FETCH_ARCHIVE_REQUEST:
        return {
          loading: true,
        };
      case FETCH_ARCHIVE_SUCCESS:
        return {
          archives: action.payload,
        };
  
      case FETCH_ARCHIVE_FAIL:
        return {
          loading: false,
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
 
  export default archiveListReducer ;