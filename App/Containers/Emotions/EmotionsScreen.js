import React from 'react'
import { Platform, Text, View, ScrollView, Button, ActivityIndicator, Image } from 'react-native'
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
    name: 'Anger',
    color: 'rgb(255,65,255)',
  },{
    name:'Rage',
    color: 'rgb(255,95,255)'
  },{
    name:'Exasperated',
    color: 'rgb(255,106,255)'
  },{
    name:'Irratable',
    color: 'rgb(250,123,255)'
  },{
    name:'Envy',
    color: 'rgb(225,128,255)'
  },{
    name:'Disgust',
    color: 'rgb(200,132,255)'
  },

  {
    name: 'Sadness',
    color: 'rgb(174,184,255)',
  },{
    name:'Suffering',
    color: 'rgb(178,184,255)'
  },{
    name:'Depressed',
    color: 'rgb(191,205,255)'
  },{
    name:'Disappointed',
    color: 'rgb(195,216,255)'
  },{
    name:'Shameful',
    color: 'rgb(200,232,255)'
  },{
    name:'Neglected',
    color: 'rgb(203,248,255)'
  },{
    name:'Despair',
    color: 'rgb(205,255,255)'
  }

  ,{
    name: 'Surprise',
    color: 'rgb(182,255,247)',
  },{
    name:'Shocked',
    color: 'rgb(182,255,255)'
  },{
    name:'Confused',
    color: 'rgb(190,255,245)'
  },{
    name:'Amazed',
    color: 'rgb(195,255,250)'
  },{
    name:'Astounded',
    color: 'rgb(188,255,221)'
  },{
    name:'Moved',
    color: 'rgb(169,255,194)'
  }

  ,{
    name: 'Joy',
    color: 'rgb(187,255,115)',
  },{
    name:'Content',
    color: 'rgb(166,255,137)'
  },{
    name:'Happy',
    color: 'rgb(166,255,115)'
  },{
    name:'Cheerful',
    color: 'rgb(186,255,115)'
  },{
    name:'Proud',
    color: 'rgb(205,255,115)'
  },{
    name:'Optimistic',
    color: 'rgb(222,255,119)'
  },{
    name: 'Hopeful',
    color: 'rgb(231,255,139)',
  },{
    name:'Elation',
    color: 'rgb(255,255,160)'
  },{
    name:'Enchanted',
    color: 'rgb(255,255,180)'
  }

  ,{
    name: 'Love',
    color: 'rgb(255,255,92)',
  },{
    name:'Affection',
    color: 'rgb(255,255,143)'
  },{
    name:'Longing',
    color: 'rgb(255,255,123)'
  },{
    name:'Passion',
    color: 'rgb(255,255,103)'
  },{
    name:'Tenderness',
    color: 'rgb(255,245,143)'
  },{
    name:'Peaceful',
    color: 'rgb(255,225,123)'
  },{
    name: 'Sensitive',
    color: 'rgb(255,205,103)',
  }

  ,{
    name: 'Fear',
    color: 'rgb(255,152,152)',
  },{
    name:'Helpless',
    color: 'rgb(255,155,156)'
  },{
    name:'Terror',
    color: 'rgb(255,123,173)'
  },{
    name:'Worried',
    color: 'rgb(255,103,183)'
  },{
    name:'Insecure',
    color: 'rgb(255,103,203)'
  },{
    name:'Anxious',
    color: 'rgb(255,103,235)'
  },{
    name:'Dread',
    color: 'rgb(255,103,255)'
  }
]

class EmotionsScreen extends React.Component {
  componentDidMount() {
    this.props.fetchUser()
  }

  renderEmotionList = () => {
    return emotions.map((emotion) => {
      return (
        <View key={emotion.name} style={{height: 50, backgroundColor:emotion.color}}>
          <Text style={Style.text}>
            {emotion.name}
          </Text>
        </View>
      )
    })
  }

  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.header}>What are you feeling?</Text>
        <ScrollView style={Style.container}>
          {this.props.userIsLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            this.renderEmotionList()
          )}
        </ScrollView>
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
