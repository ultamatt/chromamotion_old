import React from 'react'
import { Platform, Text, View, ScrollView, Button, ActivityIndicator, TouchableOpacity,Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import CheckInActions from 'App/Stores/CheckIn/Actions'
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

  componentDidMount() {
    // Run the startup saga when the application is starting
    this.props.listCheckIns()
  }

  renderCheckInList = () => {
    let { checkIns } = this.props;
    if(checkIns.length == 0){
      return(
        <>
          <Text style={Style.text}>To get started, record how you are feeling.</Text>
        </>
      )
    } else {
      let checkInElements = checkIns.map((checkIn, index) => {
        return (
          <TouchableOpacity key={checkIn.id || index}>
            <View style={Style.checkInBar}>
              <Text style={Style.title}>{checkIn.id}</Text>
            </View>
            <Text style={Style.text}>{checkIn.id}</Text>
          </TouchableOpacity>
        )
      })

      return (
        <>
          {checkInElements}
        </>
      )
    }
  }

  render() {
    const { checkIns, checkInIsLoading, checkInErrorMessage} = this.props;
    return (
      <View style={Style.container}>
        <Text style={Style.header}>{checkIns.length} Check Ins</Text>
        {checkInIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView>
            {checkInErrorMessage ? (
              <View>
                <Text style={Style.error}>{checkInErrorMessage}</Text>
              </View>
            ) : (
              <View>
                {this.renderCheckInList()}
              </View>
            )}
          </ScrollView>

        )}
        <View style={Style.buttonContainer}>
            <Button
              style={Style.link}
              title="How are you feeling?"
              onPress={() => this.props.navigation.navigate('EmotionsScreen')}
            />
            <Button
              onPress={() => this.props.listCheckIns()}
              style={Style.signUpLoginButton}
              title="Sign Up or Log In"
            />
        </View>
      </View>
    )
  }
}

CheckInScreen.propTypes = {
  checkIns: PropTypes.array,
  checkInIsLoading: PropTypes.bool,
  checkInErrorMessage: PropTypes.string,
  fetchCheckIn: PropTypes.func,
  listCheckIns: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    checkIns: state.checkIn.checkIns,
    checkInIsLoading: state.checkIn.checkInIsLoading,
    checkInErrorMessage: state.checkIn.checkInErrorMessage,
  }
}

const mapDispatchToProps = (dispatch) => ({
  listCheckIns: () => dispatch(CheckInActions.listCheckIns()),
  fetchCheckIn: () => dispatch(CheckInActions.fetchCheckIn()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckInScreen)
