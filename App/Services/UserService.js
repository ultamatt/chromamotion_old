import { AsyncStorage } from 'react-native'
import Parse from 'parse/react-native'
import { PARSE_URL, PARSE_CLIENT_KEY, PARSE_APP_ID } from 'react-native-dotenv'

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize(PARSE_APP_ID, PARSE_CLIENT_KEY)
Parse.serverURL = PARSE_URL

/**
 * This is an example of a service that connects to a 3rd party API.
 *
 * Feel free to remove this example from your application.
 */

function fetchUser() {
  return new Promise(function(resolve, reject) {
    Parse.User.enableUnsafeCurrentUser()
    Parse.User.currentAsync()
      .then((data) => {
        if (data != null) {
          resolve(data)
        } else {
          resolve({})
        }
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

function logInUser(daUser) {
  return new Promise(function(resolve, reject) {
    let user = new Parse.User()
    user
      .logIn(daUser.username, daUser.password)
      .then((data) => {
        if (data != null) {
          resolve(data)
        } else {
          resolve({})
        }
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

function signUpUser(daUser) {
  let user = new Parse.User()
  user.set('username', daUser.username)
  user.set('password', daUser.password)
  return new Promise(function(resolve, reject) {
    user
      .signUp()
      .then((data) => {
        if (data != null) {
          resolve(data)
        } else {
          resolve({})
        }
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

function logOutUser(daUser) {
  return new Promise(function(resolve, reject) {
    Parse.User.logOut()
      .then((data) => {
        if (data != null) {
          resolve(data)
        } else {
          resolve({})
        }
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

export const userService = {
  fetchUser,
  logInUser,
  signUpUser,
  logOutUser,
}
