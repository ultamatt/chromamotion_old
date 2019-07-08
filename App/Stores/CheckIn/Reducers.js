/**
 * Reducers specify how the application's state changes in response to actions sent to the store.
 *
 * @see https://redux.js.org/basics/reducers
 */

import { INITIAL_STATE } from './InitialState'
import { createReducer } from 'reduxsauce'
import { CheckInTypes } from './Actions'

export const selectEmotionSuccess = (state, { emotionName }) => {
  return {
    ...state,
    emotions: [
      ...state.emotions.map((emotion) => {
        if (emotion.name == emotionName.emotionName) {
          emotion.selected = !emotion.selected
        }
        return emotion
      }),
    ],
  }
}

export const listCheckInsLoading = (state) => ({
  ...state,
  checkInIsLoading: true,
  checkInErrorMessage: null,
})

export const listCheckInsSuccess = (state, { checkIns }) => ({
  ...state,
  checkIns: checkIns.checkIns,
  checkInIsLoading: false,
  checkInErrorMessage: null,
})

export const listCheckInsFailure = (state, { errorMessage }) => ({
  ...state,
  checkIns: [],
  checkInIsLoading: false,
  checkInErrorMessage: errorMessage,
})

export const fetchCheckInLoading = (state) => ({
  ...state,
  checkInIsLoading: true,
  checkInErrorMessage: null,
})

export const fetchCheckInSuccess = (state, { checkIn }) => ({
  ...state,
  checkIn: checkIn,
  checkInIsLoading: false,
  checkInErrorMessage: null,
})

export const fetchCheckInFailure = (state, { errorMessage }) => ({
  ...state,
  checkIn: {},
  checkInIsLoading: false,
  checkInErrorMessage: errorMessage,
})

export const destroyCheckInLoading = (state) => ({
  ...state,
  checkInIsLoading: true,
  checkInErrorMessage: null,
})

export const destroyCheckInSuccess = (state, { checkInId }) => {
  return {
    ...state,
    checkIns: [
      ...state.checkIns.filter((it) => {
        return it.objectId != checkInId
      }),
    ],
    checkInIsLoading: false,
    checkInErrorMessage: null,
  }
}

export const destroyCheckInFailure = (state, { errorMessage }) => ({
  ...state,
  checkInIsLoading: false,
  checkInErrorMessage: errorMessage,
})

export const postCheckInLoading = (state) => ({
  ...state,
  checkInIsLoading: true,
  checkInErrorMessage: null,
})

export const postCheckInSuccess = (state, { checkIn }) => {
  return {
    ...state,
    checkIn: {},
    checkIns: [...state.checkIns, checkIn],
    emotions: [
      ...state.emotions.map((emotion) => {
        emotion.selected = false
        return emotion
      }),
    ],
    checkInIsLoading: false,
    checkInErrorMessage: null,
  }
}

export const postCheckInFailure = (state, { errorMessage }) => ({
  ...state,
  checkIn: {},
  checkInIsLoading: false,
  checkInErrorMessage: errorMessage,
})

/**
 * @see https://github.com/infinitered/reduxsauce#createreducer
 */
export const reducer = createReducer(INITIAL_STATE, {
  [CheckInTypes.SELECT_EMOTION_SUCCESS]: selectEmotionSuccess,
  [CheckInTypes.LIST_CHECK_INS_LOADING]: listCheckInsLoading,
  [CheckInTypes.LIST_CHECK_INS_SUCCESS]: listCheckInsSuccess,
  [CheckInTypes.LIST_CHECK_INS_FAILURE]: listCheckInsFailure,
  [CheckInTypes.FETCH_CHECK_IN_LOADING]: fetchCheckInLoading,
  [CheckInTypes.FETCH_CHECK_IN_SUCCESS]: fetchCheckInSuccess,
  [CheckInTypes.FETCH_CHECK_IN_FAILURE]: fetchCheckInFailure,
  [CheckInTypes.DESTROY_CHECK_IN_LOADING]: destroyCheckInLoading,
  [CheckInTypes.DESTROY_CHECK_IN_SUCCESS]: destroyCheckInSuccess,
  [CheckInTypes.DESTROY_CHECK_IN_FAILURE]: destroyCheckInFailure,
  [CheckInTypes.POST_CHECK_IN_LOADING]: postCheckInLoading,
  [CheckInTypes.POST_CHECK_IN_SUCCESS]: postCheckInSuccess,
  [CheckInTypes.POST_CHECK_IN_FAILURE]: postCheckInFailure,
})
