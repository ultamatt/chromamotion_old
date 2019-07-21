import { put, call } from 'redux-saga/effects'
import FriendActions from 'App/Stores/Friend/Actions'
import { friendService } from 'App/Services/FriendService'
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */

export function* createFriendRequest(daUser) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(FriendActions.createFriendRequestLoading())

  // Fetch user informations from an API
  try {
    const request = yield call(friendService.createFriendRequest, daUser)
    yield put(FriendActions.createFriendRequestSuccess(request))
  } catch (error) {
    console.error(error)
    yield put(
      FriendActions.createFriendRequestFailure(
        error || 'There was an error while creating a friend request.'
      )
    )
  }
}
