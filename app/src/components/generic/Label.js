import React from 'react';
import { View, Text } from 'react-native';
import values from '../../../values/values';

export default function Label({style, text, color, size}) {
  return (    
    <Text
        style={{
            fontSize: size ? size : values.text_size.default,
            color: color,
            ...style,
        }}    
    >{text}</Text>    
  );
}
