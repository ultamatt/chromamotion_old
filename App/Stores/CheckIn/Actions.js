import { createActions } from 'reduxsauce'

/**
 * We use reduxsauce's `createActions()` helper to easily create redux actions.
 *
 * Keys are action names and values are the list of parameters for the given action.
 *
 * Action names are turned to SNAKE_CASE into the `Types` variable. This can be used
 * to listen to actions:
 *
 * - to trigger reducers to update the state, for example in App/Stores/User/Reducers.js
 * - to trigger sagas, for example in App/Sagas/index.js
 *
 * Actions can be dispatched:
 *
 * - in React components using `dispatch(...)`, for example in App/App.js
 * - in sagas using `yield put(...)`, for example in App/Sagas/UserSaga.js
 *
 * @see https://github.com/infinitered/reduxsauce#createactions
 */
const { Types, Creators } = createActions({
  // Fetch user informations
  fetchCheckIn: ['checkInId'],
  // The operation has started and is loading
  fetchCheckInLoading: null,
  // CheckIn informations were successfully fetched
  fetchCheckInSuccess: ['checkIn'],
  // An error occurred
  fetchCheckInFailure: ['errorMessage'],

  // Fetch user informations
  destroyCheckIn: ['checkInId'],
  // The operation has started and is loading
  destroyCheckInLoading: null,
  // CheckIn informations were successfully destroyed
  destroyCheckInSuccess: ['checkInId'],
  // An error occurred
  destroyCheckInFailure: ['errorMessage'],

  // Fetch user informations
  listCheckIns: null,
  // The operation has started and is loading
  listCheckInsLoading: null,
  // CheckIn informations were successfully listed
  listCheckInsSuccess: ['checkIns'],
  // An error occurred
  listCheckInsFailure: ['errorMessage'],

  postCheckIn: ['emotions'],
  // The operation has started and is loading
  postCheckInLoading: null,
  // CheckIn informations were successfully posted
  postCheckInSuccess: ['checkIn'],
  // An error occurred
  postCheckInFailure: ['errorMessage'],
})

export const CheckInTypes = Types
export default Creators
