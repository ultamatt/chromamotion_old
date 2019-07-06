/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CheckInTypes } from './Actions'

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

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [CheckInTypes.FETCH_CHECK_IN_LOADING]: fetchCheckInLoading,
  [CheckInTypes.FETCH_CHECK_IN_SUCCESS]: fetchCheckInSuccess,
  [CheckInTypes.FETCH_CHECK_IN_FAILURE]: fetchCheckInFailure,
})
