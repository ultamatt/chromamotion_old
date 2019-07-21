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
} from 'react-native'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
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
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <KeyboardAvoidingView style={Style.formContainer} behavior="padding" enabled>
            <View style={Style.formSectionContainer}>
              <Text style={Style.headerTitle}>Add Friend</Text>
            </View>
            <View style={Style.formSectionContainer}>
              <Text style={Style.formSectionText}>Enter Username</Text>
              <TextInput
                style={Style.formSectionInput}
                placeholder="Search for User"
                autoCapitalize="none"
                onChangeText={(text) => this.handleChange(text)}
              />
            </View>
            <Text style={Style.instructions}>{JSON.stringify(users)}</Text>
          </KeyboardAvoidingView>
        )}
      </View>
    )
  }
}

AddFriend.propTypes = {
  users: PropTypes.array,
  searchUsers: PropTypes.func,
}

const mapStateToProps = (state) => ({
  users: state.user.users,
})

const mapDispatchToProps = (dispatch) => ({
  searchUsers: (query) => dispatch(UserActions.searchUsers(query)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddFriend)
