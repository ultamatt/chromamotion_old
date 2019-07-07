import { takeLatest, all } from 'redux-saga/effects'
import { UserTypes } from 'App/Stores/User/Actions'
import { CheckInTypes } from 'App/Stores/CheckIn/Actions'
import { StartupTypes } from 'App/Stores/Startup/Actions'
import { fetchUser } from './UserSaga'
import { fetchCheckIn, postCheckIn } from './CheckInSaga'
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

    takeLatest(CheckInTypes.FETCH_CHECK_IN, fetchCheckIn),
    takeLatest(CheckInTypes.POST_CHECK_IN, postCheckIn),
  ])
}
