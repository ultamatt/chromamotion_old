import React from 'react'
import { Platform, Text, View, ScrollView, TouchableOpacity, Button, Alert, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import CheckInActions from 'App/Stores/CheckIn/Actions'
import Style from './EmotionsScreenStyle'

class EmotionsScreen extends React.Component {

  renderEmotionList = () => {
    let { emotions } = this.props;
    if(emotions != null){
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
  }

  onPressEmotion = (emotionName) => {
    this.props.selectEmotion(emotionName);
  }

  onSaveEmotions = () => {
    const { emotions, postCheckIn, navigation, user } = this.props;
    let userId = null;
    if(user.objectId != null){
      userId = user.objectId
    }
    postCheckIn(emotions, userId);
    navigation.navigate('MainScreen')
  }

  render() {
    const { onSaveEmotions } = this;
    const { user } = this.props;
    return (
      <View style={Style.container}>
        <Text style={Style.header}>How are you feeling?</Text>
        <Text style={Style.instructions}>Take a moment to sense what you are feeling.</Text>
        <ScrollView style={Style.container}>
          {this.props.checkInIsLoading ? (
            <ActivityIndicator size="large" color="#0000ff" />
          ) : (
            this.renderEmotionList()
          )}
        </ScrollView>
        <View style={Style.buttonContainer}>
          <Button
            onPress={this.onSaveEmotions}
            style={Style.saveButton}
            title="Save Check-In"
          />
        </View>
      </View>
    )
  }
}

EmotionsScreen.propTypes = {
  emotions:PropTypes.array,
  checkInIsLoading: PropTypes.bool,
  checkInErrorMessage: PropTypes.string,
  postCheckIn: PropTypes.func,
  selectEmotion: PropTypes.func,
}

const mapStateToProps = (state) => {
  return {
    user:state.user.user,
    emotions:state.checkIn.emotions,
    checkInIsLoading: state.checkIn.checkInIsLoading,
    checkInErrorMessage: state.checkIn.checkInErrorMessage,
  }
}

const mapDispatchToProps = (dispatch) => ({
  postCheckIn: (emotions, userId) => dispatch(CheckInActions.postCheckIn(emotions, userId)),
  selectEmotion: (emotionName) => dispatch(CheckInActions.selectEmotion(emotionName)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmotionsScreen)
