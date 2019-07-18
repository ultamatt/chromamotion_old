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
  }

  componentDidMount() {
    this.props.fetchUser()
  }

  renderUserDetailsOrLoginOrSignUp = () => {
    const { userLoggedIn } = this.props;
    if(userLoggedIn){
      return (
        <View style={Style.headerContainer}>
          <Text style={Style.headerTitle}>User Information </Text>
          <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
          <TextInput style={{ height: 40, borderColor: 'gray', borderWidth: 1 }} />
          <Button onPress={this.props.fetchUser} title="Sign In" />
        </View>
      )
    } else {
      return (
        <>
          <View style={Style.headerContainer}>
            <Text style={Style.headerTitle}>Log In or Sign up</Text>
          </View>
          <View style={Style.formContainer}>
            <View style={Style.formSectionContainer}>
              <Text style={Style.formSectionText}>Username</Text>
              <TextInput style={Style.formSectionInput} placeholder="Username" autoCapitalize="none" autoCompleteType="username"/>
            </View>
            <View style={Style.formSectionContainer}>
              <Text style={Style.formSectionText}>Password</Text>
              <TextInput style={Style.formSectionInput} placeholder="Password" autoCapitalize="none" secureTextEntry={true} autoCompleteType="password"/>
            </View>
            <View style={Style.checkInButtons}>
              <Button onPress={this.props.fetchUser} title="Sign Up" />
              <Button onPress={this.props.fetchUser} title="Log In" />
            </View>
            <View style={Style.checkInButtons}>
              <Button onPress={this.props.fetchUser} title="Forgot my password" />
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
  userLoggedIn: PropTypes.bool,
  userIsLoading: PropTypes.bool,
  userErrorMessage: PropTypes.string,
  fetchUser: PropTypes.func,
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  userLoggedIn: state.user.userLoggedIn,
  userIsLoading: state.user.userIsLoading,
  userErrorMessage: state.user.userErrorMessage,
})

const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch(UserActions.fetchUser()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserScreen)
