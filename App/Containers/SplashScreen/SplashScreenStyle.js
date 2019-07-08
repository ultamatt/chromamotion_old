import { StyleSheet } from 'react-native'
import Colors from 'App/Theme/Colors'
import Fonts from 'App/Theme/Fonts'
import ApplicationStyles from 'App/Theme/ApplicationStyles'

export default StyleSheet.create({
  container: {
    ...ApplicationStyles.screen.container,
    alignItems: 'center',
    backgroundColor: Colors.alternate,
    display: 'flex',
    justifyContent: 'center',
  },
  headerText: {
    ...Fonts.style.h2,
    color: Colors.primary,
    textAlign: 'center',
  },
  logo: {
    alignItems: 'center',
    flex: 0.3,
  },
  subHeaderText: {
    ...Fonts.style.normal,
    color: Colors.text,
    marginBottom: 5,
    textAlign: 'center',
  },
})
