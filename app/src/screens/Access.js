import React from 'react';
import { View, Text, ImageBackground, Image, Alert, StatusBar, Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import colors from '../../values/colors';
import strings from '../../values/strings';
import values from '../../values/values';
import Button from '../components/generic/Button';
import Icon from '../components/generic/Icon';
import Label from '../components/generic/Label';

export default function Access({navigation}) {

  const singUpAction = () => {
      navigation.navigate('Signup')
  }

  const singInAction = () => {
    navigation.navigate('Signin')
  }

  const goToGitHubAction = async () => {
      await Linking.canOpenURL(strings.app_repo_github)
      Linking.openURL(strings.app_repo_github)
  }

  return (
    <SafeAreaView style={{flex: 1, display :'flex',}}>              
        <ImageBackground
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',                    
                backgroundColor: colors.background_contrast,
            }}
            //source={require('../../assets/images/access_bg.jpg')}
            source={{uri: values.test.image_background}}            
        >
        </ImageBackground>

        <View style={{
            flex: 1, 
            padding: values.padding.default,
            alignItems: 'center',
            justifyContent: 'center',
        }}>            
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Label text={strings.app_name} 
                    size={values.text_size.header} 
                    color={colors.text_contrast}
                    bold
                />
            </View>
            <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                <Label text={strings.app_description} 
                    size={values.text_size.title} 
                    color={colors.text_contrast}
                    bold='500'
                    style={{margin: values.margin.default}}
                />
            </View>
        </View>
        
        <View style={{
            flex: 1, 
            backgroundColor: colors.background,            
            padding: values.padding.default,
            justifyContent: 'center',
        }}>     
            <Label text={strings.app_welcome + " " + strings.app_name + " !"} size={values.text_size.title}/>
            <Label text={strings.app_welcome_description} size={values.text_size.subtitle} style={{alignSelf: 'center'}}/>               
            <View style={{flex: 1, width: '70%', alignSelf: 'center', padding: values.padding.default}}>                
                <Button text="Sing Up" backgroundColor={colors.accent} 
                    onPress={singUpAction}
                />
                <Button text="See on Github" 
                   backgroundColor={"#000"}
                   outlined
                   onPress={goToGitHubAction}
                >
                    <Icon source={{uri: 'https://www.seeklogo.net/wp-content/uploads/2015/09/github-mark-logo-400x400.png'}}
                        style={{width: 50}}
                    />
                </Button>
                <Label text="Already a member?" size={values.text_size.subtitle}/>
                <Button text="Sing In" 
                    onPress={singInAction}
                />
            </View>             
        </View>
        <View style={{alignItems: 'center',}}>
            <Label text="BOTTOM TEXT INFO" size={values.text_size.default} color={colors.text_contrast2} bold/>
        </View>   

    </SafeAreaView>
  );
}
