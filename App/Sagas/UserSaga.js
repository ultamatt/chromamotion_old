import { put, call } from 'redux-saga/effects'
import UserActions from 'App/Stores/User/Actions'
import { userService } from 'App/Services/UserService'
/**
 * A saga can contain multiple functions.
 *
 * This example saga contains only one to fetch fake user informations.
 * Feel free to remove it.
 */
export function* fetchUser() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.fetchUserLoading())

  // Fetch user informations from an API
  try {
    const user = yield call(userService.fetchUser)
    yield put(UserActions.fetchUserSuccess(user))
  } catch (error) {
    yield put(
      UserActions.fetchUserFailure(error || 'There was an error while fetching user informations.')
    )
  }
}

export function* searchUsers(daQuery) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.searchUsersLoading())

  // Fetch user informations from an API
  try {
    const users = yield call(userService.searchUsers, daQuery)
    yield put(UserActions.searchUsersSuccess(users))
  } catch (error) {
    console.error(error)
    yield put(UserActions.searchUsersFailure(error || 'There was an error while fetching users.'))
  }
}

export function* signUpUser(daUser) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.signUpUserLoading())

  // Fetch checkIn informations from an API
  try {
    const user = yield call(userService.signUpUser, daUser)
    yield put(UserActions.signUpUserSuccess(user))
  } catch (error) {
    yield put(UserActions.signUpUserFailure(error || 'There was an error while signing up.'))
  }
}

export function* logInUser(daUser) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.logInUserLoading())

  // Fetch checkIn informations from an API
  try {
    const user = yield call(userService.logInUser, daUser)
    yield put(UserActions.logInUserSuccess(user))
  } catch (error) {
    yield put(UserActions.logInUserFailure(error || 'There was an error while logging in.'))
  }
}

export function* logOutUser() {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.logOutUserLoading())

  // Fetch checkOut informations from an API
  const user = yield call(userService.logOutUser)
  if (user) {
    yield put(UserActions.logOutUserSuccess())
  } else {
    yield put(UserActions.logOutUserFailure('There was an error while logging out.'))
  }
}
