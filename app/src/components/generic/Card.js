import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../../values/colors';
import values from '../../../values/values';

export default function Card({style, children}) {
  return (
    <View style={{
        padding: values.padding.card,
        margin: values.margin.card,
        backgroundColor: colors.background,
        borderRadius: values.margin.card,
        shadowColor: '#000',
        elevation: values.margin.card,
        ...style
    }}>
      {children}
     </View>
  );
}
