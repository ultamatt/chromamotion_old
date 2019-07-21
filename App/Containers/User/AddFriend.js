import React from 'react'
import {
  Platform,
  Text,
  View,
  Button,
  ActivityIndicator,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Image,
  ScrollView,
  Alert
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import FriendActions from 'App/Stores/Friend/Actions'
import Style from './AddFriendStyle'
import Colors from 'App/Theme/Colors'
import { Images } from 'App/Theme'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Parse from 'parse/react-native'

class AddFriend extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      query: '',
    }
  }

  renderUsers = () => {
    let { users } = this.props;
    if(users != null){
      return users.map((user) => {
        return (
          <TouchableOpacity key={user.username} onPress={() => { this.friendRequestPrompt(user)}}>
            <View style={{height: 50, backgroundColor:Colors.alternate}}>
              <Text style={Style.title}>
                {user.username}
              </Text>
            </View>
          </TouchableOpacity>
        )
      })
    }
  }

  friendRequestPrompt = (user) => {
    Alert.alert(
      'Add Friend?',
      'Are you sure you would like request ' + user.username + ' to be your Friend? They will be able to view your CheckIns.',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Request',
          onPress: () => this.props.createFriendRequest(user)
        },
      ],
      {cancelable: true},
    );
  }

  handleChange = (query) => {
    console.log('changed')
    clearTimeout(this.timer)
    this.setState({ query })
    this.timer = setTimeout(() => {
      this.triggerChange()
    }, 1000)
  }

  triggerChange = () => {
    console.log('triggered')
    const { query } = this.state
    this.props.searchUsers(query)
  }

  render() {
    const { users } = this.props;
    return (
      <View style={Style.container}>
        <View style={Style.headerContainer}>
          <TouchableOpacity style={Style.headerButton} onPress={() => this.props.navigation.navigate('UserScreen')}>
            <Icon style={Style.headerButton} name="arrow-circle-left" size={30} color={Colors.primary} />
          </TouchableOpacity>
          <Text style={Style.headerTitle}>Add Friend</Text>
        </View>
        <KeyboardAvoidingView style={Style.formContainer} behavior="padding" enabled>
          <View style={Style.formSectionContainer}>
            <Text style={Style.formSectionText}>Enter Username</Text>
            <TextInput
              style={Style.formSectionInput}
              placeholder="Search for User"
              autoCapitalize="none"
              onChangeText={(text) => this.handleChange(text)}
            />
          </View>
        </KeyboardAvoidingView>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <ScrollView>

            <View style={Style.container}>
            {this.renderUsers()}
            </View>
          </ScrollView>
        )}
      </View>
    )
  }
}

AddFriend.propTypes = {
  users: PropTypes.array,
  searchUsers: PropTypes.func,
  createFriendRequest: PropTypes.func,
}

const mapStateToProps = (state) => ({
  users: state.user.users,
})

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(UserActions.searchUsers(query)),
  createFriendRequest: (user) => dispatch(FriendActions.createFriendRequest(user))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFriend)
