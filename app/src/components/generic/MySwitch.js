import React from 'react';
import { Switch, View } from 'react-native';
import colors from '../../../values/colors';
import values from '../../../values/values';
import Label from './Label';

export default function MySwitch({style, label, value, disabled, onValueChange}) {
  return (
      <View style={{          
          padding: values.padding.default,
          flexDirection: 'row',
          alignItems: 'center',
          ...style,
      }}>
        {label && 
            <Label text={label}/>
        }
        <Switch value={value} onValueChange={onValueChange} 
            trackColor={{ false: colors.text_contrast2, true: colors.primary_light }}
            thumbColor={!disabled ? colors.primary : colors.disabled}
            ios_backgroundColor={!disabled ? colors.text_contrast2 : colors.text}
        style={{
            margin: values.margin.item,
        }}/>
      </View>
    
  );
}
