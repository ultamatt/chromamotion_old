/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CheckInTypes } from './Actions'

export const listCheckInsLoading = (state) => ({
  ...state,
  checkInIsLoading: true,
  checkInErrorMessage: null,
})

export const listCheckInsSuccess = (state, { checkIns }) => ({
  ...state,
  checkIns: checkIns,
  checkInIsLoading: false,
  checkInErrorMessage: null,
})

export const listCheckInsFailure = (state, { errorMessage }) => ({
  ...state,
  checkIns: [],
  checkInIsLoading: false,
  checkInErrorMessage: errorMessage,
})

export const fetchCheckInLoading = (state) => ({
  ...state,
  checkInIsLoading: true,
  checkInErrorMessage: null,
})

export const fetchCheckInSuccess = (state, { checkIn }) => ({
  ...state,
  checkIn: checkIn,
  checkInIsLoading: false,
  checkInErrorMessage: null,
})

export const fetchCheckInFailure = (state, { errorMessage }) => ({
  ...state,
  checkIn: {},
  checkInIsLoading: false,
  checkInErrorMessage: errorMessage,
})

export const postCheckInLoading = (state) => ({
  ...state,
  checkInIsLoading: true,
  checkInErrorMessage: null,
})

export const postCheckInSuccess = (state, { checkIn }) => ({
  ...state,
  checkIn: checkIn,
  checkInIsLoading: false,
  checkInErrorMessage: null,
})

export const postCheckInFailure = (state, { errorMessage }) => ({
  ...state,
  checkIn: {},
  checkInIsLoading: false,
  checkInErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [CheckInTypes.LIST_CHECK_INS_LOADING]: listCheckInsLoading,
  [CheckInTypes.LIST_CHECK_INS_SUCCESS]: listCheckInsSuccess,
  [CheckInTypes.LIST_CHECK_INS_FAILURE]: listCheckInsFailure,
  [CheckInTypes.FETCH_CHECK_IN_LOADING]: fetchCheckInLoading,
  [CheckInTypes.FETCH_CHECK_IN_SUCCESS]: fetchCheckInSuccess,
  [CheckInTypes.FETCH_CHECK_IN_FAILURE]: fetchCheckInFailure,
  [CheckInTypes.POST_CHECK_IN_LOADING]: postCheckInLoading,
  [CheckInTypes.POST_CHECK_IN_SUCCESS]: postCheckInSuccess,
  [CheckInTypes.POST_CHECK_IN_FAILURE]: postCheckInFailure,
})
