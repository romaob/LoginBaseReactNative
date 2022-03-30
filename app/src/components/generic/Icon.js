import React, {useState} from 'react';
import { View, Text, Image } from 'react-native';

export default function Icon({style, source}) {    
  return (
    <Image style={{
        width: "100%",
        height: "100%",        
        ...style,        
    }} source={source}/>
  );
}
