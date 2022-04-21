import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from '../reducer/users/userAuthReducer';
import userProfileReducer from '../reducer/users/userProfileReducer';
import userUpdateReducer from '../reducer/users/userUpdateReducer';
import createdArchiveReducer from '../reducer/archives/createdArchiveReducer';
import archiveListReducer from '../reducer/archives/archiveListReducer';
import archiveDetailReducer from '../reducer/archives/archiveDetailsReducer';
import usersListReducer from '../reducer/users/usersListReducer';

const middleware = [thunk];

const reducer = combineReducers({
  userLogin: userReducer,
  userProfile: userProfileReducer,
  updatedUser: userUpdateReducer,
  archiveCreated: createdArchiveReducer,
  archivesList: archiveListReducer,
  archiveDetails: archiveDetailReducer,
  usersList: usersListReducer,
});


//store
//Initial state

//This is the initial state for all the reducers. NOTE the keys of the reducers above must be the same as the one you will pass as initialstate
//The key must be the same and secondly look at the way the structure of the data in the store

//Get the user in local storage

const userAuthFromStorage = localStorage.getItem('userAuthData')
  ? JSON.parse(localStorage.getItem('userAuthData'))
  : null;

const initialState = {
  userLogin: { userInfo: userAuthFromStorage },
};

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;