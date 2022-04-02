import React, {useState, useEffect} from 'react';
import { View, Image } from 'react-native';
import colors from '../../values/colors';
import values from '../../values/values';
import Button from '../components/generic/Button';
import Label from '../components/generic/Label';
import Spacer from '../components/generic/Spacer';

export default function User({navigation, route}) {
    const [user, setUser] = useState(null)

    useEffect(() => {
        setUser(route.params?.user)
    }, [route.params?.user])

    return (
        <View style={{flex: 1, padding: values.padding.screen}}>
            {user &&                 
                <View style={{flex: 1, alignItems: 'center', padding: values.padding.card}}>               
                    <Image source={{uri: user.avatar}} style={{width: 150, height: 150, borderRadius: 999}} />    
                    <Label text={user.name} size={values.text_size.header} color={colors.accent}/>
                    <Label text={user.user} size={values.text_size.title} color={colors.primary}/>
                    <View style={{width: '100%'}}>
                        <View>
                            <Label text={`Distance`} size={values.text_size.subtitle}/>    
                            <Label text={`${user.distance} km`} size={values.text_size.title} color={colors.primary}/>    
                        </View>
                        <View>
                            <Label text={`Size`} size={values.text_size.subtitle}/>    
                            <Label text={`${user.size} km`} size={values.text_size.title} color={colors.accent}/>    
                        </View>
                    </View>
                </View>
            }            
            {!user &&
                <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Label text={'Ops, nothing found!'} size={values.text_size.title} color={colors.error} bold/>
                </View>
            }
        </View>
    );
}
