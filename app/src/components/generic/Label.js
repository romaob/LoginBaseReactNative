import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../../values/colors';
import values from '../../../values/values';

export default function Label({style, text, color, size, bold}) {
  return (    
    <Text
        style={{
            fontSize: size ? size : values.text_size.default,
            color: color ? color : colors.text,
            fontWeight: bold ? bold !== true ? bold : 'bold' : 'normal',
            margin: values.margin.item,
            ...style,
        }}    
    >{text}</Text>    
  );
}
