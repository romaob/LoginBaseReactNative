import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import colors from '../../../values/colors';
import values from '../../../values/values';
import Label from './Label';

export default function Button({style, children, text, textSize, backgroundColor, color, flat, outlined, round, disabled, onPress}) {
  return (
    <TouchableOpacity
      style={{
        padding: values.padding.button,
        margin: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        backgroundColor: backgroundColor ? backgroundColor : colors.primary,                
        borderColor: backgroundColor ? backgroundColor : colors.primary,
        borderWidth: outlined ? 3 : 0,        
        ...(!outlined && !flat ? {
              shadowColor: '#000', 
              elevation: 4,
        } : {}),
        ...(outlined || flat ? {backgroundColor: 'transparent'} : {}),
        ...(disabled ? {opacity: 0.5} : {}),        
        ...(round ? {borderRadius: round, width: round, height: round, padding: values.padding.default,} : {}),
        ...style,
      }}
      onPress={onPress}
    >

      {children && 
        children
      }
      {text &&
        <Label 
          style={{            
            ...(flat ? {color: backgroundColor ? backgroundColor : colors.primary} : {}),
            ...(outlined ? {color: backgroundColor ? backgroundColor : colors.primary} : {}),
          }}
          color={color ? backgroundColor : colors.buttonText}
          text={text.toUpperCase()} 
          bold='500'
          size={textSize ? textSize : values.text_size.button} />
      }
    </TouchableOpacity>
  );
}
