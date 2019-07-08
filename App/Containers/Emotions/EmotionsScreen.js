import React from 'react'
import { Platform, Text, View, ScrollView, TouchableOpacity, Button, Alert, ActivityIndicator, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import CheckInActions from 'App/Stores/CheckIn/Actions'
import Style from './EmotionsScreenStyle'

const emotions = [{"name":"Anger","color":"#d92120","selected":false},{"name":"Rage","color":"#dd3023","selected":false},{"name":"Exasperated","color":"#e14126","selected":false},{"name":"Irritable","color":"#e35229","selected":false},{"name":"Envy","color":"#e6622c","selected":false},{"name":"Disgust","color":"#e7722f","selected":false},{"name":"Sadness","color":"#e78031","selected":false},{"name":"Suffering","color":"#e68c34","selected":false},{"name":"Depressed","color":"#e49836","selected":false},{"name":"Disappointed","color":"#e1a138","selected":false},{"name":"Shameful","color":"#dca93b","selected":false},{"name":"Neglected","color":"#d7af3d","selected":false},{"name":"Despair","color":"#d0b540","selected":false},{"name":"Surprise","color":"#c9b843","selected":false},{"name":"Shocked","color":"#c1bb46","selected":false},{"name":"Confused","color":"#b8bd4a","selected":false},{"name":"Amazed","color":"#aebe4f","selected":false},{"name":"Astounded","color":"#a5be54","selected":false},{"name":"Moved","color":"#9bbe5a","selected":false},{"name":"Joy","color":"#91bd61","selected":false},{"name":"Content","color":"#88bb69","selected":false},{"name":"Happy","color":"#7fb972","selected":false},{"name":"Cheerful","color":"#76b67c","selected":false},{"name":"Proud","color":"#6eb387","selected":false},{"name":"Optimistic","color":"#66af93","selected":false},{"name":"Hopeful","color":"#5faa9f","selected":false},{"name":"Elation","color":"#59a5ab","selected":false},{"name":"Enchanted","color":"#539eb5","selected":false},{"name":"Love","color":"#4e97bd","selected":false},{"name":"Affection","color":"#4a8ec1","selected":false},{"name":"Longing","color":"#4684c2","selected":false},{"name":"Passion","color":"#4379be","selected":false},{"name":"Tenderness","color":"#416db7","selected":false},{"name":"Peaceful","color":"#3f60ae","selected":false},{"name":"Sensitive","color":"#3f53a4","selected":false},{"name":"Fear","color":"#40459a","selected":false},{"name":"Helpless","color":"#413891","selected":false},{"name":"Terror","color":"#452c89","selected":false},{"name":"Worried","color":"#4b2183","selected":false},{"name":"Insecure","color":"#541a7f","selected":false},{"name":"Anxious","color":"#62187e","selected":false},{"name":"Dread","color":"#781c81","selected":false}];

// const emotions = [
//   {
//     name: 'Anger',
//     color: '#ff41ff',
//     selected:false
//   },{
//     name:'Rage',
//     color: '#ff5fff',
//     selected:false
//   },{
//     name:'Exasperated',
//     color: 'rgb(255,105,255)',
//     selected:false
//   },{
//     name:'Irritable',
//     color: 'rgb(245,125,255)',
//     selected:false
//   },{
//     name:'Envy',
//     color: 'rgb(225,125,255)',
//     selected:false
//   },{
//     name:'Disgust',
//     color: 'rgb(205,145,255)',
//     selected:false
//   },
//
//   {
//     name: 'Sadness',
//     color: 'rgb(174,184,255)',
//     selected:false
//   },{
//     name:'Suffering',
//     color: 'rgb(178,184,255)',
//     selected:false
//   },{
//     name:'Depressed',
//     color: 'rgb(191,205,255)',
//     selected:false
//   },{
//     name:'Disappointed',
//     color: 'rgb(195,216,255)',
//     selected:false
//   },{
//     name:'Shameful',
//     color: 'rgb(200,232,255)',
//     selected:false
//   },{
//     name:'Neglected',
//     color: 'rgb(203,248,255)',
//     selected:false
//   },{
//     name:'Despair',
//     color: 'rgb(205,255,255)',
//     selected:false
//   }
//
//   ,{
//     name: 'Surprise',
//     color: 'rgb(182,255,247)',
//     selected:false
//   },{
//     name:'Shocked',
//     color: 'rgb(182,255,255)',
//     selected:false
//   },{
//     name:'Confused',
//     color: 'rgb(190,255,245)',
//     selected:false
//   },{
//     name:'Amazed',
//     color: 'rgb(195,255,250)',
//     selected:false
//   },{
//     name:'Astounded',
//     color: 'rgb(188,255,221)',
//     selected:false
//   },{
//     name:'Moved',
//     color: 'rgb(169,255,194)',
//     selected:false
//   }
//
//   ,{
//     name: 'Joy',
//     color: 'rgb(187,255,115)',
//     selected:false
//   },{
//     name:'Content',
//     color: 'rgb(166,255,137)',
//     selected:false
//   },{
//     name:'Happy',
//     color: 'rgb(166,255,115)',
//     selected:false
//   },{
//     name:'Cheerful',
//     color: 'rgb(186,255,115)',
//     selected:false
//   },{
//     name:'Proud',
//     color: 'rgb(205,255,115)',
//     selected:false
//   },{
//     name:'Optimistic',
//     color: 'rgb(222,255,119)',
//     selected:false
//   },{
//     name: 'Hopeful',
//     color: 'rgb(231,255,139)',
//     selected:false
//   },{
//     name:'Elation',
//     color: 'rgb(255,255,160)',
//     selected:false
//   },{
//     name:'Enchanted',
//     color: 'rgb(255,255,180)',
//     selected:false
//   }
//
//   ,{
//     name: 'Love',
//     color: 'rgb(255,255,92)',
//     selected:false
//   },{
//     name:'Affection',
//     color: 'rgb(255,255,143)',
//     selected:false
//   },{
//     name:'Longing',
//     color: 'rgb(255,255,123)',
//     selected:false
//   },{
//     name:'Passion',
//     color: 'rgb(255,255,103)',
//     selected:false
//   },{
//     name:'Tenderness',
//     color: 'rgb(255,245,143)',
//     selected:false
//   },{
//     name:'Peaceful',
//     color: 'rgb(255,225,123)',
//     selected:false
//   },{
//     name: 'Sensitive',
//     color: 'rgb(255,205,103)',
//     selected:false
//   }
//
//   ,{
//     name: 'Fear',
//     color: 'rgb(255,152,152)',
//     selected:false
//   },{
//     name:'Helpless',
//     color: 'rgb(255,155,156)',
//     selected:false
//   },{
//     name:'Terror',
//     color: 'rgb(255,123,173)',
//     selected:false
//   },{
//     name:'Worried',
//     color: 'rgb(255,103,183)',
//     selected:false
//   },{
//     name:'Insecure',
//     color: 'rgb(255,103,203)',
//     selected:false
//   },{
//     name:'Anxious',
//     color: 'rgb(255,103,235)',
//     selected:false
//   },{
//     name:'Dread',
//     color: 'rgb(255,103,255)',
//     selected:false
//   }
// ]

class EmotionsScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      emotions:emotions
    };
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

  onSaveEmotions = () => {
    const { postCheckIn, navigation } = this.props;
    const { emotions } = this.state;
    postCheckIn({ emotions });
    navigation.navigate('MainScreen')
  }

  render() {
    const { onSaveEmotions } = this;
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
  checkInIsLoading: PropTypes.bool,
  checkInErrorMessage: PropTypes.string,
  postCheckIn: PropTypes.func,
}

const mapStateToProps = (state) => ({
  checkInIsLoading: state.checkInIsLoading,
  checkInErrorMessage: state.checkInErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  postCheckIn: (obj) => dispatch(CheckInActions.postCheckIn(obj)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmotionsScreen)
