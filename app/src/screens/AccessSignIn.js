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

export default function AccessSignIn({navigation}) {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(null)
  const [error, setError] = useState(null)

  const handleSignIn = () => { 
    let emailErrorTemp = null
    let passwordErrorTemp = null

    if (!email) { emailErrorTemp = 'Email is required'
    } else if (!email.includes('@')) emailErrorTemp = 'Email is not valid'

    if (!password) passwordErrorTemp  ='Password is required'


    setEmailError(emailErrorTemp)
    setPasswordError(passwordErrorTemp)

    if(!emailErrorTemp && !passwordErrorTemp) {
      //perform login
      navigation.navigate('Home')
      //setError('Invalid e-mail or password')
    }
  }

  const goToSignUp = () => {
    navigation.navigate('Signup')
  }

  return (
    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.background_contrast,
      justifyContent: 'center',
    }}>      
      <Card>        
        <Label text={"Sing In"} size={values.text_size.header} color={colors.secondary} bold={'500'}/>
        {error &&
          <Button text={error} backgroundColor={colors.error} flat style={{padding: 0}}/>
        }
        <MyTextInput label="E-mail:" value={email} onChangeText={setEmail} error={emailError}/>        
        <MyTextInput label="Password:" value={password} password onChangeText={setPassword} error={passwordError}/>
        <Button text="Log In" onPress={handleSignIn}/>
        <Button text="Forgot your password?" flat textSize={values.text_size.default} backgroundColor={colors.info}/>      
        <Spacer visible />
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Label text="Don't have an account?" size={values.text_size.default}/>
          <Button text="Sign Up !" flat textSize={values.text_size.button} backgroundColor={colors.accent} onPress={goToSignUp}/> 
        </View>
      </Card>
     </SafeAreaView>
  );
}
