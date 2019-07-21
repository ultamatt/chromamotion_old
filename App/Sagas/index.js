import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import { CheckInTypes } from 'App/Stores/CheckIn/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchUser, searchUsers, signUpUser, logInUser, logOutUser } from './UserSaga'

import {
  listCheckIns,
  fetchCheckIn,
  destroyCheckIn,
  postCheckIn,
  selectEmotion,
} from './CheckInSaga'

import { startup } from './StartupSaga'

export default function* root() {
  yield all([
    /**
     * @see https://redux-saga.js.org/docs/basics/UsingSagaHelpers.html
     */
    // Run the startup saga when the application starts
    takeLatest(StartupTypes.STARTUP, startup),
    // Call `fetchUser()` when a `FETCH_USER` action is triggered
    takeLatest(UserTypes.FETCH_USER, fetchUser),
    takeLatest(UserTypes.SEARCH_USERS, searchUsers),
    takeLatest(UserTypes.LOG_IN_USER, logInUser),
    takeLatest(UserTypes.SIGN_UP_USER, signUpUser),
    takeLatest(UserTypes.LOG_OUT_USER, logOutUser),

    takeLatest(CheckInTypes.SELECT_EMOTION, selectEmotion),
    takeLatest(CheckInTypes.LIST_CHECK_INS, listCheckIns),
    takeLatest(CheckInTypes.FETCH_CHECK_IN, fetchCheckIn),
    takeLatest(CheckInTypes.DESTROY_CHECK_IN, destroyCheckIn),
    takeLatest(CheckInTypes.POST_CHECK_IN, postCheckIn),
  ])
}
