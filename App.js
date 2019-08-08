import React from "react";
import { ScrollView, Platform, Button, Image } from "react-native";
import FastImage from "react-native-fast-image";

const img1 = require('./bulbi.svg');
const img2 = require('./charmi.svg');

export default class App extends React.Component {
  state = {
    size: 100,
    key: 1
  }
  
  render(){
    Enlarger = () => <Button // Used to show the scalability
  onPress={() => this.setState({ size: this.state.size * 1.5 , key: this.state.key + 1})} // key used to show the scalability in FastImage
  title="Enlarge"
    />;
    if(Platform.OS === 'android'){
      return (
        <ScrollView>
          <Enlarger />
          <FastImage style={{width: this.state.size, height: this.state.size}} key={this.state.key} source={img2}/>
          <FastImage style={{width: this.state.size, height: this.state.size}} source={img1}/>
          <FastImage style={{width: this.state.size, height: this.state.size}} source={img2}/>
        </ScrollView>
      );
    }
    else if(Platform.OS === 'ios'){
        return(
          <ScrollView style={{paddingTop: 40}}>
            <Enlarger />
            <Image style={{width: this.state.size, height: this.state.size}} source={img1} />
            <Image style={{width: this.state.size, height: this.state.size}} source={img2} />
          </ScrollView>
        )
    }
  }
}
