import React, {useState} from 'react';
import { TextInput, View, Switch} from 'react-native';
import colors from '../../../values/colors';
import values from '../../../values/values';
import Label from './Label';
import Button from './Button';
import Icon from './Icon';
import MySwitch from './MySwitch';

export default function MyTextInput({style, disabled, value, label, placeholder, password, error, onChangeText}) {
  const [showPassword, setShowPassword] = useState(false)

  return (
    <View style={{
      padding: values.padding.default,      
      ...(disabled ? {opacity: 0.5} : {}),
      ...style
    }}>
      {label && 
        <Label text={label} size={values.text_size.subtitle} color={error ? colors.error : null}/>
      }
      <TextInput value={value} onChangeText={onChangeText} secureTextEntry={password && !showPassword} editable={!disabled} placeholder={placeholder}
          style={{    
              borderRadius: values.margin.default,
              fontSize: values.text_size.title,
              padding: values.padding.button,
              color: colors.text2,
              borderColor: error ? colors.error : colors.text2,
              borderWidth: 2,
              backgroundColor: error ? 'transparent' : colors.text_contrast2,
          }}
      />
      {error && 
        <Label text={error} color={colors.error}/>
      }
      {password &&
        <MySwitch label="SHOW PASSWORD" value={showPassword} onValueChange={() => setShowPassword(!showPassword)}/>
      }
    </View>
  );
}
