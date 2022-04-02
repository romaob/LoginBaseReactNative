import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../../values/colors';
import values from '../../../values/values';

export default function Spacer({style, visible}) {
  return (
    <View style={{
        width: "100%",
        height: 2,
        margin: values.margin.item,
        backgroundColor: visible ? colors.disabled : 'transparent',
        ...style,
    }}>
     </View>
  );
}
