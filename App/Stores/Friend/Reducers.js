/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { FriendTypes } from './Actions'

export const createFriendRequestLoading = (state) => ({
  ...state,
  friendRequestIsLoading: true,
  friendRequestErrorMessage: '',
})

export const createFriendRequestSuccess = (state) => ({
  ...state,
  friendRequestIsLoading: false,
  friendRequestErrorMessage: '',
})

export const createFriendRequestFailure = (state, { errorMessage }) => ({
  ...state,
  friendRequestIsLoading: false,
  friendRequestErrorMessage: errorMessage,
})
/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [FriendTypes.CREATE_FRIEND_REQUEST_LOADING]: createFriendRequestLoading,
  [FriendTypes.CREATE_FRIEND_REQUEST_SUCCESS]: createFriendRequestSuccess,
  [FriendTypes.CREATE_FRIEND_REQUEST_FAILURE]: createFriendRequestFailure,
})
