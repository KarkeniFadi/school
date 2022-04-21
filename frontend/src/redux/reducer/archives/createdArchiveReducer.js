import {
  CREATE_ARCHIVE_FAIL,
  CREATE_ARCHIVE_REQUEST,
  CREATE_ARCHIVE_SUCCESS,
} from '../../action/actionTypes';

const createdArchiveReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ARCHIVE_REQUEST:
      return {
        loading: true,
      };
    case CREATE_ARCHIVE_SUCCESS:
      return {
        archive: action.payload,
      };

    case CREATE_ARCHIVE_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default createdArchiveReducer ;
