import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    flexDirection: 'column',
  },
  error: {
    ...Fonts.style.normal,
    color: 'red',
    marginBottom: 5,
    textAlign: 'center',
  },
  header: {
    ...Fonts.style.h1,
    marginBottom: 10,
    paddingTop: getStatusBarHeight(),
    textAlign: 'center',
  },
  instructions: {
    ...Fonts.style.normal,
    fontStyle: 'italic',
    marginBottom: 5,
    textAlign: 'center',
  },
  loading: {
    ...Fonts.style.normal,
    marginBottom: 5,
    textAlign: 'center',
  },
  logo: {
    height: '100%',
    width: '100%',
  },
  logoContainer: {
    height: 300,
    marginBottom: 25,
    width: '100%',
  },
  text: {
    ...Fonts.style.normal,
    textAlign: 'center',
  },
})
