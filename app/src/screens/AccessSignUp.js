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

export default function AccessSignUp({navigation}) {
  const [email, setEmail] = useState('')
  const [emailError, setEmailError] = useState(null)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [passwordError, setPasswordError] = useState(null)
  const [error, setError] = useState(null)

  const handleSignUp = () => {    
    let emailErrorTemp = null
    let passwordErrorTemp = null

    if (!email) { emailErrorTemp = 'Email is required'
    } else if (!email.includes('@')) {emailErrorTemp = 'Email is not valid'}

    if (!password) { passwordErrorTemp = 'Password is required'}

    setEmailError(emailErrorTemp)
    setPasswordError(passwordErrorTemp)

    if(!emailErrorTemp && !passwordErrorTemp) {
      //perform login
      navigation.navigate('Home')
      //setError('Invalid e-mail or password')
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
        <Label text={"Sing Up"} size={values.text_size.header} color={colors.accent} bold={'500'}/>
        {error &&
          <Button text={error} backgroundColor={colors.error} flat style={{padding: 0}}/>
        }
        <MyTextInput label="E-mail:" value={email} onChangeText={setEmail} error={emailError}/>        
        <MyTextInput label="Name:" value={name} onChangeText={setName}/>
        <MyTextInput label="Password:" value={password} password onChangeText={setPassword} error={passwordError}/>
        <Button text="Register" onPress={handleSignUp} backgroundColor={colors.accent}/>        
        <Spacer/>
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
          <Label text="Already have an account?" size={values.text_size.default}/>
          <Button text="Sign In !" flat textSize={values.text_size.button} onPress={goToSignIn}/> 
        </View>
      </Card>
     </SafeAreaView>
  );
}
