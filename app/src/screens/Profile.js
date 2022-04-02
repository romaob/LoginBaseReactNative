import React, {useState} from 'react';
import { View, Image } from 'react-native';
import colors from '../../values/colors';
import values from '../../values/values';
import Button from '../components/generic/Button';
import Label from '../components/generic/Label';
import Spacer from '../components/generic/Spacer';

const data = require('../../values/test_data.json')

export default function Profile({navigation, route}) {
    const [me, setMe] = useState(data.users[3])
  return (
    <View style={{flex: 1, padding: values.padding.screen}}>        
    {me &&                     
        <View style={{flex: 1, alignItems: 'center', padding: values.padding.card}}>               
            <Image source={{uri: me.avatar}} style={{width: 150, height: 150, borderRadius: 999}} />    
            <Label text={me.name} size={values.text_size.header} color={colors.accent}/>
            <Label text={me.user} size={values.text_size.title} color={colors.primary}/>
            <View style={{width: '100%'}}>
                <View>
                    <Label text={`Distance`} size={values.text_size.subtitle}/>    
                    <Label text={`${me.distance} km`} size={values.text_size.title} color={colors.primary}/>    
                </View>
                <View>
                    <Label text={`Size`} size={values.text_size.subtitle}/>    
                    <Label text={`${me.size} km`} size={values.text_size.title} color={colors.accent}/>    
                </View>
            </View>
    
            <Spacer visible/>
            <Button text="LOGOUT" backgroundColor={colors.error} onPress={() => navigation.navigate('Signin')}/>
        </View>
    }            
    {!me &&
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Label text={'Ops, nothing found!'} size={values.text_size.title} color={colors.error} bold/>
        </View>
    }      
    </View>
  );
}
