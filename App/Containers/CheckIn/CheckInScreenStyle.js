import { StyleSheet } from 'react-native'
import Fonts from 'App/Theme/Fonts'
import Colors from 'App/Theme/Colors'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  buttonContainer: {
    marginBottom: 25,
  },
  container: {
    ...ApplicationStyles.screen.container,
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    ...Fonts.style.normal,
    color: Colors.error,
    marginBottom: 5,
    textAlign: 'center',
  },
  instructions: {
    ...Fonts.style.normal,
    color: Colors.text,
    fontStyle: 'italic',
    marginBottom: 5,
    textAlign: 'center',
  },
  link: {
    ...Fonts.style.normal,
    color: Colors.info,
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
  result: {
    ...Fonts.style.normal,
    marginBottom: 5,
    textAlign: 'center',
  },
  signUpLoginButton: {
    ...Fonts.style.h3,
    alignItems: 'center',
  },
  text: {
    ...Fonts.style.normal,
    color: Colors.text,
    marginBottom: 5,
    textAlign: 'center',
  },
  title: {
    ...Fonts.style.h2,
    color: Colors.warning,
    marginBottom: 10,
    textAlign: 'center',
  },
})
