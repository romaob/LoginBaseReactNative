import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../../../values/colors';
import values from '../../../values/values';
import Label from './Label';

export default function Button({style, children, text, backgroundColor, color, flat, outlined, round, disabled, onPress}) {
  return (
    <TouchableOpacity
      style={{
        ...style,
        padding: values.padding.button,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: backgroundColor ? backgroundColor : colors.primary,                
        borderColor: backgroundColor ? backgroundColor : colors.primary,
        borderWidth: outlined ? 2 : 0,
        ...(outlined || flat ? {backgroundColor: 'transparent'} : {}),
        ...(disabled ? {opacity: 0.5} : {}),        
        ...(round ? {borderRadius: round, width: round, height: round} : {}),
      }}
    >
        {text &&
          <Label 
            style={{            
              ...(flat ? {color: colors.primary,} : {}),
              ...(outlined ? {color: colors.primary,} : {}),
            }}
            color={color ? backgroundColor : colors.buttonText}
            text={text} 
            size={values.text_size.button} />
        }
        {children && 
          children
        }
    </TouchableOpacity>
  );
}
