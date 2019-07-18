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
  logOutUser: null,
  // The operation has started and is loading
  logOutUserLoading: null,
  // User informations were successfully logOuted
  logOutUserSuccess: null,
  // An error occurred
  logOutUserFailure: ['errorMessage'],

  // Fetch user informations
  logInUser: ['username', 'password'],
  // The operation has started and is loading
  logInUserLoading: null,
  // User informations were successfully logIned
  logInUserSuccess: ['user'],
  // An error occurred
  logInUserFailure: ['errorMessage'],

  // Fetch user informations
  signUpUser: ['username', 'password'],
  // The operation has started and is loading
  signUpUserLoading: null,
  // User informations were successfully signUped
  signUpUserSuccess: ['user'],
  // An error occurred
  signUpUserFailure: ['errorMessage'],

  // Fetch user informations
  fetchUser: null,
  // The operation has started and is loading
  fetchUserLoading: null,
  // User informations were successfully fetched
  fetchUserSuccess: ['user'],
  // An error occurred
  fetchUserFailure: ['errorMessage'],
})

export const UserTypes = Types
export default Creators
