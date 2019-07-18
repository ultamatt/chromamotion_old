import React from 'react'
import { Platform, Text, View, Button, ActivityIndicator, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import { PropTypes } from 'prop-types'
import UserActions from 'App/Stores/User/Actions'
import Style from './UserScreenStyle'
import { Images } from 'App/Theme'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import Parse from 'parse/react-native'

class UserScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username:'',
      password: ''
    }
  }

  componentDidMount() {
    //this.props.fetchUser()
  }

  renderUserDetailsOrLoginOrSignUp = () => {
    const { user, userLoggedIn, userError } = this.props;
    const { username, password } = this.state;
    if(userLoggedIn == true && Object.keys(user).length > 0){
      return (
        <>
          <View style={Style.headerContainer}>
            <Text style={Style.headerTitle}>User Information </Text>
          </View>
          <View style={Style.container}>
            <Text style={Style.title}>{user.username}</Text>
            <Text style={Style.normal}>{JSON.stringify(user)}</Text>
            <Text style={Style.normal}>{userLoggedIn}</Text>
            <View style={Style.checkInButtons}>
              <Button onPress={() => { this.props.logOutUser()}} title="Log Out" />
            </View>
          </View>
        </>
      )
    } else {
      return (
        <>
          <View style={Style.headerContainer}>
            <Text style={Style.headerTitle}>Log In or Sign up</Text>
          </View>
          <View style={Style.formContainer}>
            <View style={Style.formSectionContainer}>
              <Text style={Style.formSectionText}>{JSON.stringify(user)}</Text>
            </View>
            <View style={Style.formSectionContainer}>
              <Text style={Style.formSectionText}>Username {username}</Text>
              <TextInput style={Style.formSectionInput} placeholder="Username" autoCapitalize="none" autoCompleteType="username" onChangeText={(text) => this.setState({username: text})}/>
            </View>
            <View style={Style.formSectionContainer}>
              <Text style={Style.formSectionText}>Password {password}</Text>
              <TextInput style={Style.formSectionInput} placeholder="Password" autoCapitalize="none" secureTextEntry={true} autoCompleteType="password" onChangeText={(text) => this.setState({password: text})}/>
            </View>
            {userError != '' &&
              <Text style={Style.error}>{userError}</Text>
            }
            <View style={Style.checkInButtons}>
              <Button onPress={() => { this.props.signUpUser(username, password)}} title="Sign Up" />
              <Button onPress={() => { this.props.logInUser(username, password)}} title="Log In" />
            </View>
          </View>
        </>
      )
    }
  }

  render() {
    return (
      <View style={Style.container}>
        {this.props.userIsLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          this.renderUserDetailsOrLoginOrSignUp()
        )}
      </View>
    )
  }
}

UserScreen.propTypes = {
  user: PropTypes.object,
  userError: PropTypes.string,
  userLoggedIn: PropTypes.bool,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  signUpUser: PropTypes.func,
  logInUser: PropTypes.func,
  logOutUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  userError: state.user.userError,
  userLoggedIn: state.user.userLoggedIn,
  userIsLoading: state.user.userIsLoading,
  userErrorMessage: state.user.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  signUpUser: (username, password) => dispatch(UserActions.signUpUser(username, password)),
  logInUser: (username, password) => dispatch(UserActions.logInUser(username, password)),
  logOutUser: () => dispatch(UserActions.logOutUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen)
