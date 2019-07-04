import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import ExampleActions from 'App/Stores/Example/Actions'
import { liveInEurope } from 'App/Stores/Example/Selectors'
import Style from './EmotionsScreenStyle'
import { Images } from 'App/Theme'

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

const emotions = [
  {
    name: 'angry',
    color: 'red',
  },
  {
    name: 'jealous',
    color: 'orange',
  },
  {
    name: 'fearful',
    color: 'yellow',
  },
  {
    name: 'content',
    color: 'green',
  },
  {
    name: 'sad',
    color: 'blue',
  },
  {
    name: 'disgusted',
    color: 'indigo',
  },
  {
    name: 'contempt',
    color: 'violet',
  },
]

class EmotionsScreen extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  renderEmotionList = () => {
    return emotions.map((emotion) => {
      return (
        <View key={emotion.name} style={{height: 50, backgroundColor:emotion.color}}>
          <Text style={Style.result}>
            {emotion.name}
          </Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          this.renderEmotionList()
        )}
      </View>
    )
  }
}

EmotionsScreen.propTypes = {
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
)(EmotionsScreen)
