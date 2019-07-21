import React from 'react'
import {
  Platform,
  Text,
  View,
  ScrollView,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import CheckInActions from 'App/Stores/CheckIn/Actions'
import Style from './ViewCheckInScreenStyle'
import { Images } from 'App/Theme'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import moment from 'moment'

class ViewCheckInScreen extends React.Component {
  constructor(props) {
    super(props)
  }

  renderEmotionList = () => {
    let { checkIn } = this.props;
    console.log(checkIn);
    if(checkIn.emotions == null){
      return(
        <>
          <Text style={Style.text}>Fetching Check-In</Text>
        </>
      )
    } else {
      let emotions = checkIn.emotions;
      let emotionElements = emotions.filter((emotion) => {
        return emotion.selected ? emotion : null
      }).map((emotion) => {
        return (
          <TouchableOpacity key={emotion.name}>
            <View style={{height: 50, backgroundColor:emotion.color}} opacity={emotion.selected ? 1.0 : 0.5}>
              <Text style={Style.text}>
                {emotion.name}
              </Text>
            </View>
          </TouchableOpacity>
        )
      })
      return (
        <>
          {emotionElements}
        </>
      )
    }

  }

  render() {
    const { checkIn, checkInIsLoading, checkInErrorMessage } = this.props
    const time = moment(checkIn.createdAt || moment.now()).calendar();
    return (
      <View style={Style.container}>
        <Text style={Style.header}>Viewing Check In</Text>
        <Text style={Style.text}>{time}</Text>
        {checkInIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView>
            {checkInErrorMessage ? (
              <View>
                <Text style={Style.error}>{checkInErrorMessage}</Text>
              </View>
            ) : (
              <View>{this.renderEmotionList()}</View>
            )}
          </ScrollView>
        )}
      </View>
    )
  }
}

ViewCheckInScreen.propTypes = {
  checkIn: PropTypes.object,
  checkInIsLoading: PropTypes.bool,
  checkInErrorMessage: PropTypes.string,
  fetchCheckIn: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    checkIn: state.checkIn.checkIn,
    checkInIsLoading: state.checkIn.checkInIsLoading,
    checkInErrorMessage: state.checkIn.checkInErrorMessage,
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchCheckIn: () => dispatch(CheckInActions.fetchCheckIn()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ViewCheckInScreen)
