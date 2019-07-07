import React from 'react'
import { Platform, Text, View, ScrollView, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import CheckInActions from 'App/Stores/CheckIn/Actions'
import { liveInEurope } from 'App/Stores/CheckIn/Selectors'
import Style from './CheckInScreenStyle'
import { Images } from 'App/Theme'
import { createStackNavigator, createAppContainer } from 'react-navigation'

/**
 * This is an example of a container component.
 *
 * This screen displays a little help message and informations about a fake checkIn.
 * Feel free to remove it.
 */
//
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\nCmd+D or shake for dev menu.',
//   android: 'Double tap R on your keyboard to reload,\nShake or press menu button for dev menu.',
// })

class CheckInScreen extends React.Component {
  constructor(props){
    super(props);
  }

  renderCheckInList = () => {
    let { checkIns } = this.props;

    if(typeof checkIns == 'undefined' || checkIns.length <= 0){
      return(
        <>
          <Text style={Style.text}>To get started, record how you are feeling.</Text>
        </>
      )
    } else {
      let checkInElements = checkIns.map((checkIn) => {
        return (
          <TouchableOpacity key={checkIn.objectId}>
            <View style={{height: 20}}>
              <Text style={Style.text}>
                {checkIn.objectId}
              </Text>
            </View>
          </TouchableOpacity>
        )
      })

      return (
        <>
          {JSON.stringify(checkIns)}
        </>
      );
    }
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.checkInIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View>
          <ScrollView>
          {this.props.checkInErrorMessage ? (
            <Text style={Style.error}>{this.props.checkInErrorMessage}</Text>
          ) : (
            this.renderCheckInList()
          )}
          </ScrollView>
          <View>
            <Button
              style={Style.link}
              title="How are you feeling?"
              onPress={() => this.props.navigation.navigate('EmotionsScreen')}
            />
            <View style={Style.buttonContainer}>
              <Button
                onPress={() => this.props.navigation.navigate('UserScreen')}
                style={Style.signUpLoginButton}
                title="Sign Up or Log In"
              />
            </View>
          </View>
          </View>
        )}
      </View>
    )
  }
}

CheckInScreen.propTypes = {
  checkIns: PropTypes.array,
  checkInIsLoading: PropTypes.bool,
  checkInErrorMessage: PropTypes.string,
  fetchCheckIn: PropTypes.func,
}

const mapStateToProps = (state) => ({
  checkIns: state.checkIns,
  checkInIsLoading: state.checkInIsLoading,
  checkInErrorMessage: state.checkInErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchCheckIn: () => dispatch(CheckInActions.fetchCheckIn()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckInScreen)
