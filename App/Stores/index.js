import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from 'App/Sagas'
import { reducer as FriendReducer } from './Friend/Reducers'
import { reducer as UserReducer } from './User/Reducers'
import { reducer as CheckInReducer } from './CheckIn/Reducers'

export default () => {
  const rootReducer = combineReducers({
    /**
     * Register your reducers here.
     * @see https://redux.js.org/api-reference/combinereducers
     */
    checkIn: CheckInReducer,
    user: UserReducer,
    friendRequest: FriendReducer,
  })

  return configureStore(rootReducer, rootSaga)
}
