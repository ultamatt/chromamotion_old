import { AsyncStorage } from 'react-native'
import Parse from 'parse/react-native'
import { PARSE_URL, PARSE_CLIENT_KEY, PARSE_APP_ID } from 'react-native-dotenv'

Parse.setAsyncStorage(AsyncStorage)
Parse.initialize(PARSE_APP_ID, PARSE_CLIENT_KEY)
Parse.serverURL = PARSE_URL

function fetchUser() {
  return new Promise(function(resolve, reject) {
    Parse.User.enableUnsafeCurrentUser()
    Parse.User.currentAsync()
      .then((user) => {
        if (user != null) {
          const query = new Parse.Query(Parse.User)
          query
            .get(user.id)
            .then((data) => {
              resolve(data.toJSON())
            })
            .catch((error) => {
              reject(error.message)
            })
        } else {
          resolve({})
        }
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

function searchUsers(daQuery) {
  return new Promise(function(resolve, reject) {
    const query = new Parse.Query(Parse.User)
    query.startsWith('username', daQuery.query)
    query
      .find()
      .then((daUsers) => {
        if (daUsers != null) {
          let users = daUsers.map((user) => {
            return user.toJSON()
          })
          resolve(users)
        } else {
          resolve([])
        }
      })
      .catch((error) => {
        reject(error.message)
      })
  })
}

function logInUser(daUser) {
  let user = new Parse.User()
  user.set('username', daUser.username)
  user.set('password', daUser.password)
  return new Promise(function(resolve, reject) {
    user
      .logIn()
      .then((data) => {
        if (data != null) {
          resolve(data.toJSON())
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
          resolve(data.toJSON())
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
  searchUsers,
  logInUser,
  signUpUser,
  logOutUser,
}
