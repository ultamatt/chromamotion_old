import React from 'react'
import { Platform, Text, View, ScrollView, TouchableOpacity, Button, Alert, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import Style from './EmotionsScreenStyle'

const emotions = [
  {
    name: 'Anger',
    color: 'rgb(255,65,255)',
    selected:false
  },{
    name:'Rage',
    color: 'rgb(255,95,255)',
    selected:false
  },{
    name:'Exasperated',
    color: 'rgb(255,106,255)',
    selected:false
  },{
    name:'Irritable',
    color: 'rgb(250,123,255)',
    selected:false
  },{
    name:'Envy',
    color: 'rgb(225,128,255)',
    selected:false
  },{
    name:'Disgust',
    color: 'rgb(200,132,255)',
    selected:false
  },

  {
    name: 'Sadness',
    color: 'rgb(174,184,255)',
    selected:false
  },{
    name:'Suffering',
    color: 'rgb(178,184,255)',
    selected:false
  },{
    name:'Depressed',
    color: 'rgb(191,205,255)',
    selected:false
  },{
    name:'Disappointed',
    color: 'rgb(195,216,255)',
    selected:false
  },{
    name:'Shameful',
    color: 'rgb(200,232,255)',
    selected:false
  },{
    name:'Neglected',
    color: 'rgb(203,248,255)',
    selected:false
  },{
    name:'Despair',
    color: 'rgb(205,255,255)',
    selected:false
  }

  ,{
    name: 'Surprise',
    color: 'rgb(182,255,247)',
    selected:false
  },{
    name:'Shocked',
    color: 'rgb(182,255,255)',
    selected:false
  },{
    name:'Confused',
    color: 'rgb(190,255,245)',
    selected:false
  },{
    name:'Amazed',
    color: 'rgb(195,255,250)',
    selected:false
  },{
    name:'Astounded',
    color: 'rgb(188,255,221)',
    selected:false
  },{
    name:'Moved',
    color: 'rgb(169,255,194)',
    selected:false
  }

  ,{
    name: 'Joy',
    color: 'rgb(187,255,115)',
    selected:false
  },{
    name:'Content',
    color: 'rgb(166,255,137)',
    selected:false
  },{
    name:'Happy',
    color: 'rgb(166,255,115)',
    selected:false
  },{
    name:'Cheerful',
    color: 'rgb(186,255,115)',
    selected:false
  },{
    name:'Proud',
    color: 'rgb(205,255,115)',
    selected:false
  },{
    name:'Optimistic',
    color: 'rgb(222,255,119)',
    selected:false
  },{
    name: 'Hopeful',
    color: 'rgb(231,255,139)',
    selected:false
  },{
    name:'Elation',
    color: 'rgb(255,255,160)',
    selected:false
  },{
    name:'Enchanted',
    color: 'rgb(255,255,180)',
    selected:false
  }

  ,{
    name: 'Love',
    color: 'rgb(255,255,92)',
    selected:false
  },{
    name:'Affection',
    color: 'rgb(255,255,143)',
    selected:false
  },{
    name:'Longing',
    color: 'rgb(255,255,123)',
    selected:false
  },{
    name:'Passion',
    color: 'rgb(255,255,103)',
    selected:false
  },{
    name:'Tenderness',
    color: 'rgb(255,245,143)',
    selected:false
  },{
    name:'Peaceful',
    color: 'rgb(255,225,123)',
    selected:false
  },{
    name: 'Sensitive',
    color: 'rgb(255,205,103)',
    selected:false
  }

  ,{
    name: 'Fear',
    color: 'rgb(255,152,152)',
    selected:false
  },{
    name:'Helpless',
    color: 'rgb(255,155,156)',
    selected:false
  },{
    name:'Terror',
    color: 'rgb(255,123,173)',
    selected:false
  },{
    name:'Worried',
    color: 'rgb(255,103,183)',
    selected:false
  },{
    name:'Insecure',
    color: 'rgb(255,103,203)',
    selected:false
  },{
    name:'Anxious',
    color: 'rgb(255,103,235)',
    selected:false
  },{
    name:'Dread',
    color: 'rgb(255,103,255)',
    selected:false
  }
]

class EmotionsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotions:emotions
    };
  }

  componentDidMount() {
    //this.props.fetchUser();
  }

  renderEmotionList = () => {
    let { emotions } = this.state;
    return emotions.map((emotion) => {
      return (
        <TouchableOpacity key={emotion.name} onPress={() => { this.onPressEmotion(emotion.name)}}>
          <View style={{height: 50, backgroundColor:emotion.color}} opacity={emotion.selected ? 1.0 : 0.5}>
            <Text style={Style.text}>
              {emotion.name}
            </Text>
          </View>
        </TouchableOpacity>
      )
    })
  }

  onPressEmotion = (emotionName) => {
    this.setState({
      emotions: emotions.map((emotion) => {
        if(emotion.name == emotionName){
          emotion.selected = !emotion.selected
        };
        return emotion;
      })
    })
  }

  render() {
    return (
      <View style={Style.container}>
        <Text style={Style.header}>How are you feeling?</Text>
        <Text style={Style.instructions}>Take a moment to sense what you are feeling.</Text>
        <ScrollView style={Style.container}>
          {this.props.userIsLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            this.renderEmotionList()
          )}
        </ScrollView>
        <View style={Style.buttonContainer}>
          <Button
            onPress={() => this.props.navigation.navigate('MainScreen') }
            style={Style.saveButton}
            title="Save Check-In"
          />
        </View>
      </View>
    )
  }
}

EmotionsScreen.propTypes = {
  checkIn: PropTypes.object,
  checkInIsLoading: PropTypes.bool,
  checkInErrorMessage: PropTypes.string,
  postCheckIn: PropTypes.func,
}

const mapStateToProps = (state) => ({
  checkIn: state.checkIn,
  checkInIsLoading: state.checkInIsLoading,
  checkInErrorMessage: state.checkInErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  postCheckIn: () => dispatch(CheckInActions.postCheckIn()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmotionsScreen)
