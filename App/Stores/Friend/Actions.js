import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  // Fetch user informations
  createFriendRequest: ['user'],
  // The operation has started and is loading
  createFriendRequestLoading: null,
  // User informations were successfully searched
  createFriendRequestSuccess: null,
  // An error occurred
  createFriendRequestFailure: ['errorMessage'],

  // Fetch user informations
  fetchFriendRequest: null,
  // The operation has started and is loading
  fetchFriendRequestLoading: null,
  // User informations were successfully searched
  fetchFriendRequestSuccess: ['friendRequests'],
  // An error occurred
  fetchFriendRequestFailure: ['errorMessage'],
})

export const FriendTypes = Types
export default Creators
