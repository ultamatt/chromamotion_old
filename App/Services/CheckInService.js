import { AsyncStorage } from 'react-native'
import Parse from 'parse/react-native'
import { PARSE_URL, PARSE_CLIENT_KEY, PARSE_APP_ID } from 'react-native-dotenv'

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize(PARSE_APP_ID, PARSE_CLIENT_KEY)
Parse.serverURL = PARSE_URL
const CheckIn = Parse.Object.extend('CheckIn')

function fetchCheckIn(daCheckIn) {
  const checkIn = new CheckIn()
  const query = new Parse.Query(checkIn)
  return new Promise(function(resolve, reject) {
    query
      .get(daCheckIn.checkInId)
      .then((data) => {
        resolve(data.toJSON())
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

function destroyCheckIn(daCheckIn) {
  const checkIn = new CheckIn()
  const query = new Parse.Query(checkIn)
  return new Promise(function(resolve, reject) {
    query
      .get(daCheckIn.checkInId)
      .then((data) => {
        data
          .destroy()
          .then((data) => {
            resolve(daCheckIn.checkInId)
          })
          .catch((error) => {
            reject(error.message)
          })
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

function listCheckIns() {
  const checkIn = new CheckIn()
  const query = new Parse.Query(checkIn)
  return new Promise(function(resolve, reject) {
    query
      .find()
      .then((data) => {
        let getArray = []
        for (var i = 0; i < data.length; i++) {
          const query = new Parse.Query(checkIn)
          getArray.push(query.get(data[i].id))
        }

        Promise.all(getArray)
          .then((checkIns) => {
            let returnable = checkIns.map((checkIn) => {
              return checkIn.toJSON()
            })
            resolve(returnable)
          })
          .catch((error) => {
            reject(error.message)
          })
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

function postCheckIn(daCheckIn) {
  const checkIn = new CheckIn()
  return new Promise(function(resolve, reject) {
    checkIn.set({ emotions: daCheckIn.emotions })
    checkIn.save().then(
      (checkIn) => {
        // Execute any logic that should take place after the object is saved.
        daCheckIn.objectId = checkIn.id
        resolve(daCheckIn)
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
  listCheckIns,
  postCheckIn,
  destroyCheckIn,
}
