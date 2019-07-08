import React from 'react'
import { Text, View, Image } from 'react-native'
import Style from './SplashScreenStyle'
import { Images } from 'App/Theme'

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={Style.container}>
        <Image style={Style.logo} source={Images.logo} resizeMode="contain" />
        <Text style={Style.headerText}>Chromamotion</Text>
        <Text style={Style.subHeaderText}>Feelings and Colors</Text>
      </View>
    )
  }
}
