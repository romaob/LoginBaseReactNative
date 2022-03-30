import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import colors from '../../values/colors';
import values from '../../values/values';
import Button from '../components/generic/Button';
import Icon from '../components/generic/Icon';
import Label from '../components/generic/Label';

export default function Access() {
  return (
    <View style={{flex: 1, display :'flex',}}>      
        <ImageBackground
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',                    
            }}
            source={require('../../assets/images/access_bg.jpg')}
        >
        </ImageBackground>

        <View style={{flex: 2, padding: values.padding.default}}>            
            <Label text={"Title"}/>
            <Label text={"Description"}/>
        </View>
        
        <View style={{
            flex: 3, 
            backgroundColor: "#aaa",
            alignItems: 'center',
            padding: values.padding.default
        }}>        
            <View style={{width: '70%', flex: 1}}>
                <Label text={"Title"}/>
                <Label text={"Description"}/>
                
                <Button text="Entrar" />
                <Button text="Cadastro" backgroundColor={colors.accent} />                                
                
            </View>
            <View>
                <Label text="Info" />
            </View>                
        </View>

    </View>
  );
}
