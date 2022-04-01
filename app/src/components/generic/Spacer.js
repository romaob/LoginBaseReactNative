import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../../values/colors';
import values from '../../../values/values';

export default function Spacer({style, visible}) {
  return (
    <View style={{
        width: "100%",
        height: visible ? 2 : 0,
        margin: values.margin.item,
        backgroundColor: colors.disabled,
    }}>
     </View>
  );
}
