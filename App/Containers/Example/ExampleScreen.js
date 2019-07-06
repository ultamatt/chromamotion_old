import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, AsyncStorage, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './ExampleScreenStyle'
import { Images } from 'App/Theme'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Parse from 'parse/react-native'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake user.
 * Feel free to remove it.
 */

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
  android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
})

class ExampleScreen extends React.Component {
  constructor(props) {
    super(props)
    Parse.setAsyncStorage(AsyncStorage)
  }

  componentDidMount() {
    this.props.fetchUser()
    Parse.initialize(
      'p3aVNkesQRm31gkbUiAcNNezVhNjILOCTndQp6Qm',
      'PUoNyH2YL2ni2xDA7IlF1pVMdlmT4Ln6CVpOjkOQ'
    )
    Parse.serverURL = 'https://pg-app-kw93x9ud2qhybjr64jjtecqyw9d7cu.scalabl.cloud/1/'
    const CheckIn = Parse.Object.extend('CheckIn')
    const checkIn = new CheckIn()

    checkIn.set('emotionArray', ['anger', 'jealousy'])

    checkIn.save().then(
      (checkIn) => {
        // Execute any logic that should take place after the object is saved.
        alert('New object created with objectId: ' + checkIn.id)
      },
      (error) => {
        // Execute any logic that should take place if the save fails.
        // error is a Parse.Error with an error code and message.
        alert('Failed to create new object, with error code: ' + error.message)
      }
    )
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
            <View style={Style.logoContainer}>
              <Image style={Style.logo} source={Images.logo} resizeMode={'contain'} />
            </View>
            <Text style={Style.text}>To get started, edit App.js</Text>
            <Text style={Style.instructions}>{instructions}</Text>
            {this.props.userErrorMessage ? (
              <Text style={Style.error}>{this.props.userErrorMessage}</Text>
            ) : (
              <View>
                <Text style={Style.result}>
                  {"I'm a fake user, my name is "}
                  {this.props.user.name}
                </Text>
                <Text style={Style.result}>
                  {this.props.liveInEurope ? 'I live in Europe !' : "I don't live in Europe."}
                </Text>
              </View>
            )}
            <Button onPress={this.props.fetchUser} title="Refresh" />
            <Button
              title="How are you feeling?"
              onPress={() => this.props.navigation.navigate('EmotionsScreen')}
            />
          </View>
        )}
      </View>
    )
  }
}

ExampleScreen.propTypes = {
  user: PropTypes.object,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
  liveInEurope: PropTypes.bool,
}

const mapStateToProps = (state) => ({
  user: state.example.user,
  userIsLoading: state.example.userIsLoading,
  userErrorMessage: state.example.userErrorMessage,
  liveInEurope: liveInEurope(state),
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(ExampleActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ExampleScreen)
