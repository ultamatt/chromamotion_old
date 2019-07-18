/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { UserTypes } from './Actions'

export const fetchUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const fetchUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userLoggedIn: user != null,
  userIsLoading: false,
  userErrorMessage: null,
})

export const fetchUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const signUpUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const signUpUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userLoggedIn: true,
  userIsLoading: false,
  userErrorMessage: null,
})

export const signUpUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const logInUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const logInUserSuccess = (state, { user }) => ({
  ...state,
  user: user,
  userLoggedIn: true,
  userIsLoading: false,
  userErrorMessage: null,
})

export const logInUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

export const logOutUserLoading = (state) => ({
  ...state,
  userIsLoading: true,
  userErrorMessage: null,
})

export const logOutUserSuccess = (state) => ({
  ...state,
  user: {},
  userLoggedIn: false,
  userIsLoading: false,
  userErrorMessage: null,
})

export const logOutUserFailure = (state, { errorMessage }) => ({
  ...state,
  user: {},
  userIsLoading: false,
  userErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [UserTypes.FETCH_USER_LOADING]: fetchUserLoading,
  [UserTypes.FETCH_USER_SUCCESS]: fetchUserSuccess,
  [UserTypes.FETCH_USER_FAILURE]: fetchUserFailure,
  [UserTypes.SIGN_UP_USER_LOADING]: signUpUserLoading,
  [UserTypes.SIGN_UP_USER_SUCCESS]: signUpUserSuccess,
  [UserTypes.SIGN_UP_USER_FAILURE]: signUpUserFailure,
  [UserTypes.LOG_IN_USER_LOADING]: logInUserLoading,
  [UserTypes.LOG_IN_USER_SUCCESS]: logInUserSuccess,
  [UserTypes.LOG_IN_USER_FAILURE]: logInUserFailure,
  [UserTypes.LOG_OUT_USER_LOADING]: logOutUserLoading,
  [UserTypes.LOG_OUT_USER_SUCCESS]: logOutUserSuccess,
  [UserTypes.LOG_OUT_USER_FAILURE]: logOutUserFailure,
})
