import {
    ARCHIVE_DETAIL_FAIL,
  ARCHIVE_DETAIL_REQUEST,
  ARCHIVE_DETAIL_SUCCESS,
} from '../../action/actionTypes';

const archiveDetailReducer = (state = {}, action) => {
  switch (action.type) {
    case ARCHIVE_DETAIL_REQUEST:
      return {
        loading: true,
      };
    case ARCHIVE_DETAIL_SUCCESS:
      return {
        archive: action.payload,
        loading: false,
      };
    case ARCHIVE_DETAIL_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default archiveDetailReducer;