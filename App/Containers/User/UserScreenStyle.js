import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export default StyleSheet.create({
  checkInButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'flex-start',
  },
  error: {
    ...Fonts.style.normal,
    color: Colors.error,
    marginBottom: 5,
    textAlign: 'center',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    margin: 20,
  },
  formSectionContainer: {
    marginBottom: 20,
  },
  formSectionInput: {
    ...Fonts.style.input,
    backgroundColor: Colors.primary,
    borderColor: Colors.alternate,
    borderRadius: 5,
    borderWidth: 1,
    height: 40,
    padding: 5,
  },
  formSectionText: {
    ...Fonts.style.prompt,
    color: Colors.primary,
    paddingBottom: 5,
  },
  headerButton: {
    ...Fonts.style.h2,
    color: Colors.primary,
    padding: 10,
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: getStatusBarHeight(),
  },
  headerTitle: {
    ...Fonts.style.h2,
    color: Colors.primary,
    paddingTop: 15,
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
    color: Colors.primary,
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
  result: {
    ...Fonts.style.normal,
    marginBottom: 5,
    textAlign: 'center',
  },
  text: {
    ...Fonts.style.normal,
    color: Colors.primary,
    marginBottom: 5,
    textAlign: 'center',
  },
  title: {
    ...Fonts.style.h2,
    color: Colors.primary,
    marginBottom: 10,
    textAlign: 'center',
  },
})
