import React, {useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../values/colors';
import values from '../../values/values';
import Button from '../components/generic/Button';
import Card from '../components/generic/Card';
import Label from '../components/generic/Label';
import MyTextInput from '../components/generic/MyTextInput';
import Spacer from '../components/generic/Spacer';

export default function AccessResetPassword({navigation}) {
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState(null)
    
    const handleResetPassword = () => {
        let emailErrorTemp = null
        if (email.length === 0) {
            emailErrorTemp = 'Email is required'
        } else if (!email.includes('@')) {
            emailErrorTemp = 'Email is not valid'
        }

        setEmailError(emailErrorTemp)

        if(!emailErrorTemp) {
            //Password reseted
            navigation.navigate('Signin')
        }
    }

    const goToSignIn = () => {
        navigation.navigate('Signin')
    }

  return (
    <SafeAreaView style={{
        flex: 1,
        backgroundColor: colors.background_contrast,
        justifyContent: 'center',
      }}>      
        <Card>        
          <Label text={"Reset Password"} size={values.text_size.header} color={colors.error} bold={'500'}/>          
          <Label text={"Enter your email address and we'll send you a link to reset your password."} size={values.text_size.subtitle} color={colors.text2}/>
          <MyTextInput label="E-mail:" value={email} onChangeText={setEmail} error={emailError}/>        
          
          <Button text="Send E-mail" onPress={handleResetPassword} backgroundColor={colors.error}/>          
          <Spacer/>
          <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
            <Button text="Sign In" flat textSize={values.text_size.button} onPress={goToSignIn}/>
          </View>
        </Card>
       </SafeAreaView>
  );
}
