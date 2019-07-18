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
  const user = yield call(userService.fetchUser)
  if (user) {
    yield put(UserActions.fetchUserSuccess(user))
  } else {
    yield put(UserActions.fetchUserFailure('There was an error while fetching user informations.'))
  }
}

export function* signUpUser(daUser) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.signUpUserLoading())

  // Fetch checkIn informations from an API
  const user = yield call(userService.signUpUser, daUser)
  if (user) {
    yield put(UserActions.signUpUserSuccess(user))
  } else {
    yield put(UserActions.signUpUserFailure('There was an error while signing in.'))
  }
}

export function* logInUser(daUser) {
  // Dispatch a redux action using `put()`
  // @see https://redux-saga.js.org/docs/basics/DispatchingActions.html
  yield put(UserActions.logInUserLoading())

  // Fetch checkIn informations from an API
  const user = yield call(userService.logInUser, daUser)
  if (user) {
    yield put(UserActions.logInUserSuccess(user))
  } else {
    yield put(UserActions.logInUserFailure('There was an error while logging in.'))
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
