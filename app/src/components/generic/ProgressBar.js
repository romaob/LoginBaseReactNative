import React from 'react';
import { View, Text } from 'react-native';
import colors from '../../../values/colors';

export default function ProgressBar(progress, color, style) {
  return (
    <View style={{
        height: 5,
        width: '100%',
        padding: 1,
        backgroundColor: colors.disabled,
        justifyContent: 'center',
        ...style
    }}>      
        <View style={{            
            width: `${progress ? progress : 0}%`,
            backgroundColor: color,
        }}>
        </View>
     </View>
  );
}
