import React from 'react';
import { View, Text } from 'react-native';

export default function ErrorMessage({style, text}) {
  return (
    <View>
      <Text>{text}</Text>
     </View>
  );
}
