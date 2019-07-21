import { AsyncStorage } from 'react-native'
import Parse from 'parse/react-native'
import { PARSE_URL, PARSE_CLIENT_KEY, PARSE_APP_ID } from 'react-native-dotenv'

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize(PARSE_APP_ID, PARSE_CLIENT_KEY)
Parse.serverURL = PARSE_URL
const FriendRequest = Parse.Object.extend('FriendRequest')

function createFriendRequest(daRequest) {
  const friendRequest = new FriendRequest()
  return new Promise(function(resolve, reject) {
    Parse.User.enableUnsafeCurrentUser()
    Parse.User.currentAsync().then((user) => {
      if (user != null) {
        const query = new Parse.Query(Parse.User)
        query
          .get(daRequest.user.objectId)
          .then((toUser) => {
            const query2 = new Parse.Query(Parse.User)
            query2
              .get(user.id)
              .then((fromUser) => {
                friendRequest.set({ from: fromUser })
                friendRequest.set({ to: toUser })
                friendRequest.set({ status: 'sent' })
                friendRequest.save().then(
                  (friendRequest) => {
                    // Execute any logic that should take place after the object is saved.
                    resolve(friendRequest.toJSON())
                  },
                  (error) => {
                    // Execute any logic that should take place if the save fails.
                    // error is a Parse.Error with an error code and message.
                    reject(error.message)
                  }
                )
              })
              .catch((error) => {
                reject(error.message)
              })
          })
          .catch((error) => {
            reject(error.message)
          })
      } else {
        reject('Please Log In')
      }
    })
  })
}

function fetchFriendRequest() {
  return new Promise(function(resolve, reject) {
    Parse.User.enableUnsafeCurrentUser()
    Parse.User.currentAsync().then((user) => {
      if (user != null) {
        console.log(user.id)
        const query = new Parse.Query(FriendRequest)
        query
          .equalTo('to', user)
          .include('from')
          .find()
          .then((friendRequests) => {
            // Execute any logic that should take place after the object is saved.
            resolve(
              friendRequests.map((request) => {
                return request.toJSON()
              })
            )
          })
          .catch((error) => {
            reject(error.message)
          })
      } else {
        reject('Please Log In')
      }
    })
  })
}

export const friendService = {
  createFriendRequest,
  fetchFriendRequest,
}
