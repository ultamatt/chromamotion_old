import { AsyncStorage } from 'react-native'
import Parse from 'parse/react-native'
import { PARSE_URL, PARSE_CLIENT_KEY, PARSE_APP_ID } from 'react-native-dotenv'

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize(PARSE_APP_ID, PARSE_CLIENT_KEY)
Parse.serverURL = PARSE_URL
const CheckIn = Parse.Object.extend('CheckIn')

function fetchCheckIn() {
  const checkIn = new CheckIn()
  const query = new Parse.Query(checkIn)
  return new Promise(function(resolve, reject) {
    query
      .find()
      .then((data) => {
        resolve(data)
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

function postCheckIn({ emotions }) {
  const checkIn = new CheckIn()
  return new Promise(function(resolve, reject) {
    checkIn.set({ emotions: emotions })
    checkIn.save().then(
      (checkIn) => {
        // Execute any logic that should take place after the object is saved.
        resolve(checkIn)
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        reject(error.message)
      }
    )
  })
}

export const checkInService = {
  fetchCheckIn,
  postCheckIn,
}
