import React from 'react';
import { View, Text, ImageBackground, Image, Alert } from 'react-native';
import colors from '../../values/colors';
import strings from '../../values/strings';
import values from '../../values/values';
import Button from '../components/generic/Button';
import Icon from '../components/generic/Icon';
import Label from '../components/generic/Label';

export default function Access() {

  const singUpAction = () => {
      Alert.alert('Sing Up');
  }

  const singInAction = () => {
      Alert.alert('Sing In');
  }

  const goToGitHubAction = () => {
      Alert.alert('Go to GitHub');
  }

  return (
    <View style={{flex: 1, display :'flex',}}>      
        <ImageBackground
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',                    
                backgroundColor: colors.accent,
            }}
            //source={require('../../assets/images/access_bg.jpg')}
            source={{uri: 'http://www.dreamtemplate.com/dreamcodes/bg_images/color/c13.jpg'}}            
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
                    size={values.text_size.headder} 
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

    </View>
  );
}
