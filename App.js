import React, { useState } from 'react';
import { ScrollView, Platform, Button, Image } from "react-native";
import FastImage from "react-native-fast-image";

const img1 = require('./bulbi.svg');
const img2 = require('./charmi.svg');

export default props => {
  const [size, setSize] = useState(100);
  const [key, setKey] = useState(1); // key used to show the scalability in FastImage
  const Enlarger = () => <Button // Used to show the scalability
  onPress={() => 
    {
    setSize(size*1.5);
    setKey(key+1); 
    }
  }
  title="Enlarge"
    />;

    if(Platform.OS === 'android'){
      return (
        <ScrollView>
          <Enlarger />
          <FastImage style={{width: size, height: size}} key={key} source={img2}/>
          <FastImage style={{width: size, height: size}} source={img1}/>
          <FastImage style={{width: size, height: size}} source={img2}/>
        </ScrollView>
      );
    }
    else if(Platform.OS === 'ios'){
        return(
          <ScrollView style={{paddingTop: 40}}>
            <Enlarger />
            <Image style={{width: size, height: size}} source={img1} />
            <Image style={{width: size, height: size}} source={img2} />
          </ScrollView>
        )
    }
}
